import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Store } from '@ngrx/store';
import { GameActionConfirmModalData } from 'src/app/interfaces';
import * as fromAppActions from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-game-action-confirm',
  templateUrl: './game-action-confirm.component.html',
  styleUrls: ['./game-action-confirm.component.scss'],
})
export class GameActionConfirmComponent implements OnInit {
  @Input() data: GameActionConfirmModalData;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalController.dismiss(null, 'confirm');
  }
}
