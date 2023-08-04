import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  EnvironmentInjector,
  Injectable,
  Injector,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
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
export class ErrorLogService implements OnInit {
  host = environment.host;

  // injector = inject(EnvironmentInjector);
  // ownersWithQueryS: WritableSignal<OwnerDataDto>;

  constructor(private injector: Injector, private http: HttpClient) {}

  ngOnInit() {
    // this.ownersWithQueryS = computed(() => this.getOwnersWithQueryS);
  }

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

  getOwnersWithQuery$(query: OwnerQueryDto): Observable<OwnerDataDto> {
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
