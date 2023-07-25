import { ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
// Translator
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpInterceptorService } from './services/http-interceptor.service';

// AoT requires an exported function for factories
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { JwtDecodeFactory, JWT_DECODE } from './config/jwt.config';
import { ErrorHandlerService } from './services/error-handler.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        AppStoreModule,
        // StoreModule.forRoot({}, {}),
        // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        // EffectsModule.forRoot([]),
        // StoreRouterConnectingModule.forRoot(),
    ],
    providers: [
        { provide: JWT_DECODE, useFactory: JwtDecodeFactory, deps: [] },
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true,
        },
        { provide: ErrorHandler, useExisting: ErrorHandlerService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
