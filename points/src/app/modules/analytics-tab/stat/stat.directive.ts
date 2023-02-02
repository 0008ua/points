import { Directive, Injector, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGamer, IGame, GameType } from 'src/app/interfaces';
import { GameService } from 'src/app/store/game-data.service';
import { GamerService } from 'src/app/store/gamer-data.service';
import { Stat, StatBase } from './stat-interfaces';
import * as fromAnalyticsActions from 'src/app/store/actions/analytics.actions';
import { selectLoading, selectRating } from 'src/app/store/reducers/analytics.reducer';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appStat]',
})
export class StatBaseDirective implements StatBase, OnInit {
  @Input() gameType: GameType;
  @Input() analytics$: Observable<IGamer[]>;
  // stats: Stat[];
  @Input() stat: Stat;
  // players: IGamer[];
  // games$: Observable<IGame[]>;
  // gamers$: Observable<IGamer[]>;
  // analytics$: Observable<IGamer[]>;
  // loading$: Observable<boolean>;
  math: Math = Math;
  // array = Array;
  // store: Store;
  // gameService: GameService;
  // gamerService: GamerService;

  constructor() {
    // this.store = injector.get(Store);
    // this.gameService = injector.get(GameService);
    // this.gamerService = injector.get(GamerService);
  }

  ngOnInit() {
    // this.games$ = this.gameService.entities$;
    // this.games$.subscribe(() =>
    //   this.store.dispatch(fromAnalyticsActions[this.stat._id]({ gameType: 'rummy' })),
    // );
    // this.gamers$ = this.gamerService.entities$;
    // this.gamers$.subscribe((_) => _);
    // this.analytics$ = this.store.select(selectRating);
    // this.loading$ = this.store.select(selectLoading);
  }

  // onMenuClickHandler(e: any) {
  //   this.stat = e.target.value;
  //   this.store.dispatch(fromAnalyticsActions[this.stat._id]({ gameType: 'train' }));
  // }
}
