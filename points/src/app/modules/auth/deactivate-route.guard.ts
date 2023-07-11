import { Component, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CanDeactivateComponent, GameActionConfirmModalData } from 'src/app/interfaces';
import { ModalService } from 'src/app/services/modal.service';
import { ActionConfirmComponent } from '../common/action-confirm/action-confirm.component';
import { GamePage } from '../games/game/game.page';
import * as fromAppActions from 'src/app/store/actions/app.actions';

@Injectable({
  providedIn: 'root',
})
export class DeactivateRouteGuard implements CanDeactivate<CanDeactivateComponent> {
  constructor(private modalService: ModalService, private store: Store) {}
  canDeactivate(
    component: CanDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!component.canDeactivate()) {
      const data: GameActionConfirmModalData = {
        title: 'elements.button.leaveGame',
        text: 'common.leaveGameQuestion',
        cancelBtnText: 'elements.button.returnToGame',
        confirmBtnText: 'elements.button.leaveGame',
      };
      return this.modalService.presentModal(ActionConfirmComponent, { data }).then(({ role }) => {
        if (role === 'confirm') {
          this.store.dispatch(fromAppActions.clearGame());
          return true;
        }
        return false;
      });
    } else {
      return Promise.resolve(true);
    }
  }
}
