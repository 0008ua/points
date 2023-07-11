import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  ErrorLogQueryDto,
  ErrorLoggerDocumentDto,
  ErrorLogCreateDto,
  OwnerDataDto,
  OwnerQueryDto,
} from 'src/app/dtos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ErrorLogService {
  host = environment.host;
  constructor(private http: HttpClient) {}

  // addAll -> getWithQuery (GET /api/heroes/?name=bombasto)
  getWithQuery(query: ErrorLogQueryDto): Observable<ErrorLoggerDocumentDto[]> {
    let params = new HttpParams();
    Object.entries(query).forEach(([key, value]) => {
      params = params.append(key, value);
    });
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
      params,
    };
    return this.http.get<ErrorLoggerDocumentDto[]>(
      this.host + '/api/logger/get-with-query',
      httpOptions,
    );
  }

  // null -> add (POST /api/hero/)
  logErrorToDB(error: ErrorLogCreateDto): Observable<string> {
    // return of(error);
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<string>(this.host + '/api/logger/log-error-to-db', error, httpOptions)
      .pipe(tap((x) => console.log('error log result', x)));
  }

  getOwnersWithQuery(query: OwnerQueryDto): Observable<OwnerDataDto> {
    let params = new HttpParams();
    Object.entries(query).forEach(([key, value]) => {
      params = params.append(key, value);
    });
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line  @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
      params,
    };
    return this.http.get<OwnerDataDto>(
      this.host + '/api/logger/get-owners-with-query',
      httpOptions,
    );
  }
}
