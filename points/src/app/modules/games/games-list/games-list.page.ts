import { Component, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnalyticsService } from '../../analytics-tab/analytics.service';
import { GameType, gameTypes } from 'src/app/interfaces';
import { PlayedGamesCountDto } from 'src/app/dtos';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {
  gameTypes = gameTypes;
  analyticsService = inject(AnalyticsService);
  playedGamesCount: any;
  rand: number = 0;
  environment = environment;

  constructor() {}

  ngOnInit() {
    this.analyticsService.getPlayedGamesCount().subscribe((playedGamesCountArr) => {
      this.playedGamesCount = playedGamesCountArr.reduce(
        (obj, cur) => ({ ...obj, [cur.gameType]: cur.count }),
        {},
      );
    });

    this.rand = this.generateRandomNumber();
  }

  generateRandomNumber() {
    return Math.round(Math.random()*100)
  }
}
