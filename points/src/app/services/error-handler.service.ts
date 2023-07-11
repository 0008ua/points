import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { DataServiceError } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IErrorData, ErrorTypes } from '../interfaces';
import { ErrorLogService } from '../modules/auth/error-log/error-log.service';
import { SharedService } from './shared.service';
import { ToastService } from './toast.service';

// catch all unhandled errors
@Injectable({ providedIn: 'root' })
export class ErrorHandlerService implements ErrorHandler {
  constructor(@Inject(Injector) private injector: Injector) {}

  private get toastService() {
    return this.injector.get(ToastService);
  }

  private get sharedService() {
    return this.injector.get(ErrorLogService);
  }

  handleError(error: any): void {
    console.log('global error handler ', error);
    this.logError({ errorType: 'unknownError', error }).subscribe();
  }

  logError({ error, errorType }: IErrorData): Observable<string> {
    console.log('global error loger ', error);

    const message = this.deepErrorChecker(error);
    this.toastService.presentErrorToast(errorType, message.join('</br>'));
    return this.sharedService.logErrorToDB({
      message: message.join('\n'),
      errorType,
      error,
    });
  }

  private deepErrorChecker(error: any): string[] {
    const mes = [error.message];
    if (error.hasOwnProperty('error')) {
      mes.push(...this.deepErrorChecker(error.error));
    }
    return mes;
  }
}
