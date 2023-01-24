import { Inject, Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IGamer, IUser, NamedScore, Round, RoundCfg, RoundMember, UID } from '../interfaces';
import { Store } from '@ngrx/store';
import { selectAllPlayers } from '../store/reducers/player.reducer';
import { v4 as uuidv4 } from 'uuid';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { selectAllRounds } from '../store/reducers/round.reducer';
import {
  selectAllRoundMembers,
  selectByIdRoundMember,
} from '../store/reducers/round-member.reducer';
import * as fromAppActions from '../store/actions/app.actions';
import { selectRedirectionUrl } from '../store/reducers/app.reducer';
import { Router } from '@angular/router';
import { redirection } from '../store/actions/app.actions';
import * as fromRoundMembersActions from '../store/actions/round-member.actions';
import { JwtDecodeOptions } from 'jwt-decode';
import { JWT_DECODE, JwtDecode } from '../config/jwt.config';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  players: IGamer[] = [];
  players$: Observable<IGamer[]>;

  rounds: Round[] = [];
  rounds$: Observable<Round[]>;

  roundMembers: RoundMember[] = [];
  roundMembers$: Observable<RoundMember[]>;

  host = environment.host;
  url$: Observable<string>;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    @Inject(JWT_DECODE) private jwtDecode: JwtDecode,
  ) {
    this.url$ = this.store.select(selectRedirectionUrl);
    this.url$.subscribe((url) => {
      if (url) {
        this.router.navigateByUrl(url);
        this.store.dispatch(redirection({ redirectionUrl: null }));
      }
    });

    this.players$ = this.store.select(selectAllPlayers);
    this.players$.subscribe((players) => {
      this.players = players;
    });

    this.rounds$ = this.store.select(selectAllRounds);
    this.rounds$.subscribe((rounds) => {
      this.rounds = rounds;
    });

    this.roundMembers$ = this.store.select(selectAllRoundMembers);
    this.roundMembers$.subscribe((roundMembers) => {
      this.roundMembers = roundMembers;
    });
  }

  setToStorage(key: string, value: any): Observable<void> {
    return from(Storage.set({ key, value }));
  }

  setToken(token: string): Observable<void> {
    return this.setToStorage('token', token);
  }

  getFromStorage(key: string): Observable<string | null> {
    return from(Storage.get({ key })).pipe(map((getResult) => getResult.value));
  }

  getToken(): Observable<string | null> {
    return this.getFromStorage('token');
  }

  getTokenAndDecode(): Observable<IUser> {
    return this.getToken().pipe(
      map((token) => {
        return this.jwtDecode<IUser>(token);
      }),
    );
  }

  removeFromStorage(key: string): Observable<void> {
    return from(Storage.remove({ key }));
  }

  removeToken(): Observable<void> {
    return this.removeFromStorage('token');
  }

  getRating(): Observable<IGamer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .get<IGamer[]>(environment.host + 'api/analytics/get-rating/', httpOptions)
      .pipe(catchError((err) => throwError(err)));
  }

  getRatingByWins(): Observable<IGamer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .get<IGamer[]>(environment.host + 'api/analytics/get-wins/', httpOptions)
      .pipe(catchError((err) => throwError(err)));
  }

  getRatingByWinsToGames(): Observable<IGamer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .get<IGamer[]>(environment.host + 'api/analytics/get-wins-to-games/', httpOptions)
      .pipe(catchError((err) => throwError(err)));
  }

  getPlayerTotalScores(player: string): number {
    let sum = 0;
    this.roundMembers.forEach((roundMember) => {
      if (roundMember.player === player) {
        sum += roundMember.scoresLine.reduce((prev, cur) => prev + cur, 0);
      }
    });
    return sum;
  }

  calcQtyOfArrItems(item: string | number, playerId: string, roundId: string): number {
    let count = 0;

    this.getMemberByPlayerId(playerId, roundId).scoresLine.forEach((arrItem) => {
      if (arrItem === item) {
        count++;
      }
    });
    return count;
  }

  calcScores(playerId: UID, roundId: string): number {
    return this.getMemberByPlayerId(playerId, roundId).scoresLine.reduce(
      (prev, cur) => prev + cur,
      0,
    );
  }

  getPlayerColor(playerId: UID): string {
    return this.players.find((player) => player._id === playerId).color;
  }

  getPlayerName(playerId: UID): string {
    return this.players.find((player) => player._id === playerId).name;
  }

  getRoundById(roundId: string): Round {
    return this.rounds.find((round) => round._id === roundId);
  }

  getMemberByPlayerId(playerId: UID, roundId: string): RoundMember {
    const round = this.getRoundById(roundId);
    return this.roundMembers.find(
      (roundMember) =>
        roundMember.player === playerId && round?.roundMembers.includes(roundMember._id),
    );
  }
  getRoundMemberById$(roundMemberId: UID): Observable<RoundMember> {
    return this.store.select(selectByIdRoundMember(roundMemberId));
  }

  logErrorToDB(message: string): Observable<string> {
    console.log('logErrorToDB', message);
    // return of(error);
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<string>(
      this.host + '/api/logger/log-error-to-db',
      { message },
      httpOptions,
    );
  }
}
