import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  HttpUrlGenerator,
} from '@ngrx/data';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IGame } from '../interfaces';

@Injectable()
export class GameDataService extends DefaultDataService<IGame> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('game', http, httpUrlGenerator);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GameService extends EntityCollectionServiceBase<IGame> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('game', serviceElementsFactory);
  }

  // add(entity: IGame): Observable<IGame> {
  //   console.log('game data service - add', entity);
  //   return super.add(entity);
  //   // .pipe(
  //   //       catchError((error) => {
  //   //         console.log('game data service - add error', error);
  //   // return of(null)
  //   //         return throwError(error);
  //   //       }),
  //   // );
  // }
}
