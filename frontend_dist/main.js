(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then((m) => m.TabsPageModule),
        // pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules,
                // paramsInheritanceStrategy: 'always'
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/auth.service */ 76006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shared.service */ 44718);









let AppComponent = class AppComponent {
    constructor(store, translate, authService, router, sharedService) {
        this.store = store;
        this.translate = translate;
        this.authService = authService;
        this.router = router;
        this.sharedService = sharedService;
        // static translation initialization
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        // this.lang = 'en';
        // for automatic lang detection
        const browserLang = translate.getBrowserLang();
        this.lang = browserLang.match(/uk|ru/) ? 'uk' : 'en';
        translate.use(this.lang);
        // set to store static translation language
        // this.store.dispatch(new LoadLang());
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
                // console.log('NavigationStart', event);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                // console.log('NavigationEnd', event);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationError) {
                // Hide loading indicator
                // Present error to user
                // console.log('NavigationError', event.error);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store.module */ 58388);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 82003);
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http-interceptor.service */ 47229);
/* harmony import */ var _config_jwt_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/jwt.config */ 99185);
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/error-handler.service */ 68634);








// Translator




// AoT requires an exported function for factories
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}


let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient],
                },
            }),
            _store_store_module__WEBPACK_IMPORTED_MODULE_2__.AppStoreModule,
        ],
        providers: [
            { provide: _config_jwt_config__WEBPACK_IMPORTED_MODULE_5__.JWT_DECODE, useFactory: _config_jwt_config__WEBPACK_IMPORTED_MODULE_5__.JwtDecodeFactory, deps: [] },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.HttpInterceptorService,
                multi: true,
            },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ErrorHandler, useExisting: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__.ErrorHandlerService },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 99185:
/*!**************************************!*\
  !*** ./src/app/config/jwt.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtDecodeFactory": () => (/* binding */ JwtDecodeFactory),
/* harmony export */   "JWT_DECODE": () => (/* binding */ JWT_DECODE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 95657);


const JwtDecodeFactory = () => {
    return jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"];
};
const JWT_DECODE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('JWT_DECODE');


/***/ }),

/***/ 47837:
/*!************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let AnalyticsService = class AnalyticsService {
    constructor(http) {
        this.http = http;
    }
    getRating(gameType) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                // eslint-disable-next-line  @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            }),
            // params: {
            //   query,
            // },
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host + 'api/analytics/get-rating/' + gameType, httpOptions);
        // .pipe(catchError((err) => throwError(err)));
    }
    getRatingByWins(gameType) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                // eslint-disable-next-line  @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            }),
            // params: {
            //   gameType,
            // },
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host + 'api/analytics/get-wins/' + gameType, httpOptions);
        // .pipe(catchError((err) => throwError(err)));
    }
    getRatingByWinsToGames(gameType) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                // eslint-disable-next-line  @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            }),
            // params: {
            //   gameType,
            // },
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host + 'api/analytics/get-wins-to-games/' + gameType, httpOptions);
        // .pipe(catchError((err) => throwError(err)));
    }
};
AnalyticsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AnalyticsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AnalyticsService);



/***/ }),

/***/ 76006:
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 70018);
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/reducers/auth.reducer */ 24433);








let AuthService = class AuthService {
    constructor(http, store, router) {
        this.http = http;
        this.store = store;
        this.router = router;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host;
        this.url$ = this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.selectRedirectionUrl);
        this.url$.subscribe((url) => {
            if (url) {
                this.router.navigateByUrl(url);
                this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.redirection)({ redirectionUrl: null }));
            }
        });
    }
    // testProtected(): Observable<string> {
    //   // return this.http.post('/api/auth/signin', { body: user });
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       // Authorization: 'token',
    //     }),
    //   };
    //   return this.http.get<string>(
    //     this.host + '/api/auth/protected',
    //     httpOptions,
    //   );
    // }
    signin(user) {
        // return this.http.post('/api/auth/signin', { body: user });
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post(this.host + '/api/auth/signin', user, httpOptions);
    }
    signup(user) {
        // return this.http.post('/api/auth/signin', { body: user });
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post(this.host + '/api/auth/signup', user, httpOptions);
    }
    // sync validator
    matchPassword(abstractControl) {
        const password = abstractControl.get('password').value;
        const passwordConfirm = abstractControl.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            abstractControl.get('passwordConfirm').setErrors(null);
            return null;
        }
        else {
            /**
             * set error to 'passwordConfirm' element
             */
            abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
            /**
             * and don't set error (null) to formGroup
             */
            return null;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 49750:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorLogService": () => (/* binding */ ErrorLogService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);





let ErrorLogService = class ErrorLogService {
    constructor(http) {
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host;
    }
    // addAll -> getWithQuery (GET /api/heroes/?name=bombasto)
    getWithQuery(query) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        Object.entries(query).forEach(([key, value]) => {
            params = params.append(key, value);
        });
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                // eslint-disable-next-line  @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            }),
            params,
        };
        return this.http.get(this.host + '/api/logger/get-with-query', httpOptions);
    }
    // null -> add (POST /api/hero/)
    logErrorToDB(error) {
        // return of(error);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                // eslint-disable-next-line  @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            }),
        };
        return this.http
            .post(this.host + '/api/logger/log-error-to-db', error, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((x) => console.log('error log result', x)));
    }
    getOwnersWithQuery(query) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        Object.entries(query).forEach(([key, value]) => {
            params = params.append(key, value);
        });
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                // eslint-disable-next-line  @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            }),
            params,
        };
        return this.http.get(this.host + '/api/logger/get-owners-with-query', httpOptions);
    }
};
ErrorLogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ErrorLogService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], ErrorLogService);



/***/ }),

/***/ 18339:
/*!*************************************************************************!*\
  !*** ./src/app/modules/games/game/game-result/game-result.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameResultComponent": () => (/* binding */ GameResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_game_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./game-result.component.html */ 35007);
/* harmony import */ var _game_result_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-result.component.scss */ 65986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/player.reducer */ 43051);







let GameResultComponent = class GameResultComponent {
    constructor(modalController, store) {
        this.modalController = modalController;
        this.store = store;
    }
    ngOnInit() {
        this.players$ = this.store.select(src_app_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAllPlayers);
        this.players$.subscribe((players) => {
            this.resultWithNames = this.data.results.map((result) => {
                const player = players.find((pl) => pl._id === result._id);
                return Object.assign(Object.assign({}, result), { name: player === null || player === void 0 ? void 0 : player.name, color: player === null || player === void 0 ? void 0 : player.color });
            });
            this.resultWithNames.sort((a, b) => (a.score - b.score) * this.data.order);
        });
    }
    confirm() {
        return this.modalController.dismiss(null, 'confirm');
    }
};
GameResultComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
GameResultComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
GameResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-game-result',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_game_result_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_game_result_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GameResultComponent);



/***/ }),

/***/ 68634:
/*!***************************************************!*\
  !*** ./src/app/services/error-handler.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerService": () => (/* binding */ ErrorHandlerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _modules_auth_error_log_error_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/auth/error-log/error-log.service */ 49750);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ 6588);




// catch all unhandled errors
let ErrorHandlerService = class ErrorHandlerService {
    constructor(injector) {
        this.injector = injector;
    }
    get toastService() {
        return this.injector.get(_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService);
    }
    get sharedService() {
        return this.injector.get(_modules_auth_error_log_error_log_service__WEBPACK_IMPORTED_MODULE_0__.ErrorLogService);
    }
    handleError(error) {
        console.log('global error handler ', error);
        this.logError({ errorType: 'unknownError', error }).subscribe();
    }
    logError({ error, errorType }) {
        console.log('global error loger ', error);
        const message = this.deepErrorChecker(error);
        this.toastService.presentErrorToast(errorType, message.join('</br>'));
        return this.sharedService.logErrorToDB({
            message: message.join('\n'),
            errorType,
            error,
        });
    }
    deepErrorChecker(error) {
        const mes = [error.message];
        if (error.hasOwnProperty('error')) {
            mes.push(...this.deepErrorChecker(error.error));
        }
        return mes;
    }
};
ErrorHandlerService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector,] }] }
];
ErrorHandlerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], ErrorHandlerService);



/***/ }),

/***/ 47229:
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpInterceptorService": () => (/* binding */ HttpInterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/auth/auth.service */ 76006);
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/auth.actions */ 70018);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ 44718);










let HttpInterceptorService = class HttpInterceptorService {
    constructor(store, http, authService, sharedService) {
        this.store = store;
        this.http = http;
        this.authService = authService;
        this.sharedService = sharedService;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host;
        this.refreshInProgress = false;
    }
    intercept(req, next) {
        return this.sharedService.getToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((token) => {
            if (token) {
                req = req.clone({
                    headers: req.headers.set('Authorization', token),
                });
            }
            return next.handle(req);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            if (error.status === 401) {
                // get protected resource fail
                // bad token or new guest user without token
                // try to get valid guest token
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                        'Content-Type': 'application/json',
                    }),
                };
                return this.http
                    .post(this.host + '/api/auth/signup', null, httpOptions)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((getTokenError) => {
                    // error get valid guest token
                    // forward error
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(getTokenError);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((token) => {
                    // successeful get valid guest token
                    // save new token to store
                    this.store.dispatch((0,_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.signinSuccess)({ token }));
                    req = req.clone({
                        headers: req.headers.set('Authorization', token),
                    });
                    // second try to get protected resource
                    return next.handle(req);
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        }));
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService }
];
HttpInterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root',
    })
], HttpInterceptorService);



/***/ }),

/***/ 39853:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



/** Report ngrx-data success/error actions as toast messages **/
let ModalService = class ModalService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    presentModal(component, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component,
                componentProps: data,
            });
            modal.present();
            return modal.onWillDismiss();
        });
    }
};
ModalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController }
];
ModalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], ModalService);



/***/ }),

/***/ 44718:
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4126);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducers/player.reducer */ 43051);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/round.reducer */ 88761);
/* harmony import */ var _store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/round-member.reducer */ 27539);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/app.reducer */ 55305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/app.actions */ 58717);
/* harmony import */ var _config_jwt_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/jwt.config */ 99185);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal.service */ 39853);
/* harmony import */ var _modules_games_game_game_result_game_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/games/game/game-result/game-result.component */ 18339);

















let SharedService = class SharedService {
    constructor(store, http, router, modalService, jwtDecode) {
        this.store = store;
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.jwtDecode = jwtDecode;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.players = [];
        this.rounds = [];
        this.roundMembers = [];
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.host;
        this.url$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__.selectRedirectionUrl);
        this.url$.subscribe((url) => {
            if (url) {
                this.router.navigateByUrl(url);
                this.store.dispatch((0,_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.redirection)({ redirectionUrl: null }));
            }
        });
        this.players$ = this.store.select(_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_1__.selectAllPlayers);
        this.players$.subscribe((players) => {
            this.players = players;
        });
        this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__.selectGameType);
        this.gameType$.subscribe((gameType) => {
            this.gameType = gameType;
        });
        this.rounds$ = this.store.select(_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_3__.selectAllRounds);
        this.rounds$.subscribe((rounds) => {
            this.rounds = rounds;
        });
        this.roundMembers$ = this.store.select(_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_4__.selectAllRoundMembers);
        this.roundMembers$.subscribe((roundMembers) => {
            this.roundMembers = roundMembers;
        });
    }
    setToStorage(key, value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key, value }));
    }
    setToken(token) {
        return this.setToStorage('token', token);
    }
    getFromStorage(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((getResult) => getResult.value));
    }
    getToken() {
        return this.getFromStorage('token');
    }
    getTokenAndDecode() {
        return this.getToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((token) => {
            return this.jwtDecode(token);
        }));
    }
    removeFromStorage(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(_capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key }));
    }
    removeToken() {
        return this.removeFromStorage('token');
    }
    getPlayerTotalScores(player) {
        let sum = 0;
        this.roundMembers.forEach((roundMember) => {
            if (roundMember.player === player) {
                sum += roundMember.scoresLine.reduce((prev, cur) => prev + cur, 0);
            }
        });
        return sum;
    }
    createClientRoundsWithTotal() {
        return this.rounds.map((round) => {
            const players = round.roundMembers.map((memberId) => {
                const member = this.roundMembers.find((roundMember) => roundMember._id === memberId);
                return {
                    _id: member.player,
                    score: member.scoresLine.reduce((prev, cur) => prev + cur, 0),
                };
            });
            return { _id: round._id, players };
        });
    }
    createResultRoundWithTotal() {
        if (this.gameType !== 'rummy') {
            return {
                _id: 'result',
                players: this.players
                    .map((player) => ({
                    _id: player._id,
                    score: this.getPlayerTotalScores(player._id),
                }))
                    .sort((a, b) => (a.score - b.score) * this.environment.games[this.gameType].resultsOrder),
            };
        }
        let acc = 0;
        return {
            _id: 'result',
            players: this.players
                .map((player) => {
                const score = this.getPlayerTotalScores(player._id);
                acc += score;
                return {
                    _id: player._id,
                    score,
                };
            })
                .sort((a, b) => (a.score - b.score) * this.environment.games[this.gameType].resultsOrder)
                .map((player) => (Object.assign(Object.assign({}, player), { score: player.score || acc * -1 }))),
        };
    }
    createResultOfGame() {
        return {
            type: this.gameType,
            rounds: [...this.createClientRoundsWithTotal(), this.createResultRoundWithTotal()],
        };
    }
    presentModalFinishGame(game) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const order = this.environment.games[game.type].resultsOrder;
            const results = game.rounds.find((round) => round._id === 'result').players;
            const data = {
                results,
                order,
            };
            return this.modalService.presentModal(_modules_games_game_game_result_game_result_component__WEBPACK_IMPORTED_MODULE_9__.GameResultComponent, { data });
        });
    }
    calcQtyOfArrItems(item, playerId, roundId) {
        let count = 0;
        this.getMemberByPlayerId(playerId, roundId).scoresLine.forEach((arrItem) => {
            if (arrItem === item) {
                count++;
            }
        });
        return count;
    }
    calcScores(playerId, roundId) {
        return this.getMemberByPlayerId(playerId, roundId).scoresLine.reduce((prev, cur) => prev + cur, 0);
    }
    getPlayerColor(playerId) {
        return this.players.find((player) => player._id === playerId).color;
    }
    getPlayerName(playerId) {
        return this.players.find((player) => player._id === playerId).name;
    }
    getRoundById(roundId) {
        return this.rounds.find((round) => round._id === roundId);
    }
    getMemberByPlayerId(playerId, roundId) {
        const round = this.getRoundById(roundId);
        return this.roundMembers.find((roundMember) => roundMember.player === playerId && (round === null || round === void 0 ? void 0 : round.roundMembers.includes(roundMember._id)));
    }
    getRoundMemberById$(roundMemberId) {
        return this.store.select((0,_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_4__.selectByIdRoundMember)(roundMemberId));
    }
};
SharedService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Inject, args: [_config_jwt_config__WEBPACK_IMPORTED_MODULE_7__.JWT_DECODE,] }] }
];
SharedService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Injectable)({
        providedIn: 'root',
    })
], SharedService);



/***/ }),

/***/ 6588:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);




/** Report ngrx-data success/error actions as toast messages **/
let ToastService = class ToastService {
    constructor(store, toastController) {
        this.store = store;
        this.toastController = toastController;
    }
    presentErrorToast(header = 'Error occurred', message = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header,
                message,
                icon: 'bug-outline',
                position: 'top',
                duration: 5000,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => { },
                    },
                ],
            });
            yield toast.present();
            const _a = yield toast.onDidDismiss(), { role } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["role"]);
            // if (action) {
            //   this.store.dispatch(action({ error: null }));
            // }
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], ToastService);



/***/ }),

/***/ 4368:
/*!****************************************************!*\
  !*** ./src/app/store/actions/analytics.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsActionTypes": () => (/* binding */ AnalyticsActionTypes),
/* harmony export */   "getRatingByWins": () => (/* binding */ getRatingByWins),
/* harmony export */   "getRatingByWinsToGames": () => (/* binding */ getRatingByWinsToGames),
/* harmony export */   "getRating": () => (/* binding */ getRating),
/* harmony export */   "getRatingSuccess": () => (/* binding */ getRatingSuccess),
/* harmony export */   "addMany": () => (/* binding */ addMany),
/* harmony export */   "addError": () => (/* binding */ addError),
/* harmony export */   "removeError": () => (/* binding */ removeError),
/* harmony export */   "loading": () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

var AnalyticsActionTypes;
(function (AnalyticsActionTypes) {
    AnalyticsActionTypes["getRatingByWinsType"] = "analytics/ratingByWins";
    AnalyticsActionTypes["getRatingByWinsToGamesType"] = "analytics/ratingByWinsToGames";
    AnalyticsActionTypes["getRatingType"] = "analytics/rating";
    AnalyticsActionTypes["getRatingSuccessType"] = "analytics/getRatingSuccess";
    AnalyticsActionTypes["addManyType"] = "analytics/addMany";
    AnalyticsActionTypes["addErrorType"] = "analytics/addError";
    AnalyticsActionTypes["removeErrorType"] = "analytics/removeError";
    AnalyticsActionTypes["loadingType"] = "analytics/loading";
})(AnalyticsActionTypes || (AnalyticsActionTypes = {}));
const getRatingByWins = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.getRatingByWinsType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getRatingByWinsToGames = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.getRatingByWinsToGamesType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getRating = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.getRatingType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getRatingSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.getRatingSuccessType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addMany = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.addManyType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.addErrorType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.removeErrorType);
const loading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AnalyticsActionTypes.loadingType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const all = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.union)({
    addError,
    removeError,
    getRatingByWins,
    getRatingByWinsToGames,
    getRating,
    getRatingSuccess,
    loading,
});


/***/ }),

/***/ 58717:
/*!**********************************************!*\
  !*** ./src/app/store/actions/app.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppActionTypes": () => (/* binding */ AppActionTypes),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "clearGame": () => (/* binding */ clearGame),
/* harmony export */   "loadGame": () => (/* binding */ loadGame),
/* harmony export */   "gameType": () => (/* binding */ gameType),
/* harmony export */   "gameTypeAndClearGame": () => (/* binding */ gameTypeAndClearGame),
/* harmony export */   "finishGame": () => (/* binding */ finishGame),
/* harmony export */   "openNextRound": () => (/* binding */ openNextRound),
/* harmony export */   "createRounds": () => (/* binding */ createRounds),
/* harmony export */   "redirection": () => (/* binding */ redirection),
/* harmony export */   "addError": () => (/* binding */ addError),
/* harmony export */   "removeError": () => (/* binding */ removeError),
/* harmony export */   "nop": () => (/* binding */ nop)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

var AppActionTypes;
(function (AppActionTypes) {
    AppActionTypes["loadingType"] = "app/loading";
    AppActionTypes["clearGameType"] = "app/clearGame";
    AppActionTypes["loadGameType"] = "app/loadGame";
    AppActionTypes["gameTypeType"] = "app/gameType";
    AppActionTypes["gameTypeAndClearGameType"] = "app/gameTypeAndClearGame";
    AppActionTypes["finishGameType"] = "app/finish game";
    AppActionTypes["openNextRoundType"] = "app/open next round";
    AppActionTypes["createRoundsType"] = "app/create rounds";
    AppActionTypes["redirectionType"] = "app/redirection";
    AppActionTypes["nopType"] = "app/nopType";
    AppActionTypes["addErrorType"] = "app/addError";
    AppActionTypes["removeErrorType"] = "app/removeError";
})(AppActionTypes || (AppActionTypes = {}));
const loading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.loadingType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearGame = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.clearGameType);
const loadGame = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.loadGameType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const gameType = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.gameTypeType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const gameTypeAndClearGame = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.gameTypeAndClearGameType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const finishGame = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.finishGameType);
const openNextRound = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.openNextRoundType);
const createRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.createRoundsType);
const redirection = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.redirectionType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.addErrorType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.removeErrorType);
const nop = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AppActionTypes.nopType);
const all = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.union)({
    loading,
    clearGame,
    loadGame,
    createRounds,
    openNextRound,
    finishGame,
    gameType,
    gameTypeAndClearGame,
    redirection,
    addError,
    removeError,
    nop,
});


/***/ }),

/***/ 70018:
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthActionTypes": () => (/* binding */ AuthActionTypes),
/* harmony export */   "storeToken": () => (/* binding */ storeToken),
/* harmony export */   "storeUserFromToken": () => (/* binding */ storeUserFromToken),
/* harmony export */   "storeUserFromTokenSuccess": () => (/* binding */ storeUserFromTokenSuccess),
/* harmony export */   "signin": () => (/* binding */ signin),
/* harmony export */   "signinSuccess": () => (/* binding */ signinSuccess),
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "redirection": () => (/* binding */ redirection),
/* harmony export */   "addError": () => (/* binding */ addError),
/* harmony export */   "removeError": () => (/* binding */ removeError),
/* harmony export */   "loading": () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["storeTokenType"] = "auth/storeToken";
    AuthActionTypes["storeTokenSuccessType"] = "auth/storeTokenSuccess";
    AuthActionTypes["storeUserFromTokenType"] = "auth/storeUserFromToken";
    AuthActionTypes["storeUserFromTokenSuccessType"] = "auth/storeUserFromTokenSuccess";
    AuthActionTypes["signinType"] = "auth/signin";
    AuthActionTypes["signinSuccessType"] = "auth/signinSuccess";
    AuthActionTypes["signupType"] = "auth/signup";
    AuthActionTypes["logoutType"] = "auth/logout";
    AuthActionTypes["redirectionType"] = "auth/redirection";
    AuthActionTypes["addErrorType"] = "auth/addError";
    AuthActionTypes["removeErrorType"] = "auth/removeError";
    AuthActionTypes["loadingType"] = "auth/loading";
})(AuthActionTypes || (AuthActionTypes = {}));
const storeToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.storeTokenType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const storeUserFromToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.storeUserFromTokenType);
const storeUserFromTokenSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.storeUserFromTokenSuccessType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const signin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.signinType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const signinSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.signinSuccessType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const signup = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.signupType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.logoutType);
const redirection = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.redirectionType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.addErrorType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.removeErrorType);
const loading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(AuthActionTypes.loadingType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const all = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.union)({
    storeToken,
    storeUserFromToken,
    storeUserFromTokenSuccess,
    signin,
    signup,
    addError,
    removeError,
    loading,
    redirection,
    logout,
});


/***/ }),

/***/ 67619:
/*!****************************************************!*\
  !*** ./src/app/store/actions/error-log.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadErrorLogs": () => (/* binding */ loadErrorLogs),
/* harmony export */   "addErrorLog": () => (/* binding */ addErrorLog),
/* harmony export */   "upsertErrorLog": () => (/* binding */ upsertErrorLog),
/* harmony export */   "addErrorLogs": () => (/* binding */ addErrorLogs),
/* harmony export */   "upsertErrorLogs": () => (/* binding */ upsertErrorLogs),
/* harmony export */   "updateErrorLog": () => (/* binding */ updateErrorLog),
/* harmony export */   "updateErrorLogs": () => (/* binding */ updateErrorLogs),
/* harmony export */   "deleteErrorLog": () => (/* binding */ deleteErrorLog),
/* harmony export */   "deleteErrorLogs": () => (/* binding */ deleteErrorLogs),
/* harmony export */   "clearErrorLogs": () => (/* binding */ clearErrorLogs),
/* harmony export */   "getWithQuery": () => (/* binding */ getWithQuery)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const loadErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Load ErrorLogs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addErrorLog = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Add ErrorLog', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertErrorLog = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Upsert ErrorLog', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Add ErrorLogs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Upsert ErrorLogs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateErrorLog = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Update ErrorLog', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Update ErrorLogs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteErrorLog = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Delete ErrorLog', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Delete ErrorLogs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API] Clear ErrorLogs');
// data
const getWithQuery = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ErrorLog/API/data] getWithQuery ErrorLogs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 76381:
/*!****************************************************!*\
  !*** ./src/app/store/actions/hydration.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "hydrateSuccess": () => (/* binding */ hydrateSuccess),
/* harmony export */   "hydrateFailure": () => (/* binding */ hydrateFailure)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const hydrate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Hydration] Hydrate');
const hydrateSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Hydration] Hydrate Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const hydrateFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Hydration] Hydrate Failure');


/***/ }),

/***/ 93640:
/*!********************************************************!*\
  !*** ./src/app/store/actions/persist-store.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPersistStores": () => (/* binding */ loadPersistStores),
/* harmony export */   "addPersistStore": () => (/* binding */ addPersistStore),
/* harmony export */   "upsertPersistStore": () => (/* binding */ upsertPersistStore),
/* harmony export */   "addPersistStores": () => (/* binding */ addPersistStores),
/* harmony export */   "upsertPersistStores": () => (/* binding */ upsertPersistStores),
/* harmony export */   "updatePersistStore": () => (/* binding */ updatePersistStore),
/* harmony export */   "updatePersistStores": () => (/* binding */ updatePersistStores),
/* harmony export */   "deletePersistStore": () => (/* binding */ deletePersistStore),
/* harmony export */   "deletePersistStores": () => (/* binding */ deletePersistStores),
/* harmony export */   "clearPersistStores": () => (/* binding */ clearPersistStores)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const loadPersistStores = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Load PersistStores', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addPersistStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Add PersistStore', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertPersistStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Upsert PersistStore', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addPersistStores = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Add PersistStores', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertPersistStores = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Upsert PersistStores', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePersistStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Update PersistStore', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePersistStores = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Update PersistStores', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePersistStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Delete PersistStore', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePersistStores = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Delete PersistStores', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearPersistStores = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PersistStore/API] Clear PersistStores');


/***/ }),

/***/ 75803:
/*!*************************************************!*\
  !*** ./src/app/store/actions/player.actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPlayers": () => (/* binding */ loadPlayers),
/* harmony export */   "addPlayer": () => (/* binding */ addPlayer),
/* harmony export */   "upsertPlayer": () => (/* binding */ upsertPlayer),
/* harmony export */   "addPlayers": () => (/* binding */ addPlayers),
/* harmony export */   "upsertPlayers": () => (/* binding */ upsertPlayers),
/* harmony export */   "updatePlayer": () => (/* binding */ updatePlayer),
/* harmony export */   "updatePlayers": () => (/* binding */ updatePlayers),
/* harmony export */   "deletePlayer": () => (/* binding */ deletePlayer),
/* harmony export */   "deletePlayers": () => (/* binding */ deletePlayers),
/* harmony export */   "clearPlayers": () => (/* binding */ clearPlayers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const loadPlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Load Players', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addPlayer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Add Player', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertPlayer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Upsert Player', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addPlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Add Players', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertPlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Upsert Players', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePlayer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Update Player', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Update Players', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePlayer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Delete Player', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Delete Players', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearPlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Player/API] Clear Players');
const all = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.union)({
    loadPlayers,
    addPlayer,
    upsertPlayer,
    addPlayers,
    upsertPlayers,
    updatePlayer,
    updatePlayers,
    deletePlayer,
    deletePlayers,
    clearPlayers,
});


/***/ }),

/***/ 8775:
/*!*******************************************************!*\
  !*** ./src/app/store/actions/round-member.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRoundMembers": () => (/* binding */ loadRoundMembers),
/* harmony export */   "addRoundMember": () => (/* binding */ addRoundMember),
/* harmony export */   "upsertRoundMember": () => (/* binding */ upsertRoundMember),
/* harmony export */   "addRoundMembers": () => (/* binding */ addRoundMembers),
/* harmony export */   "upsertRoundMembers": () => (/* binding */ upsertRoundMembers),
/* harmony export */   "updateRoundMember": () => (/* binding */ updateRoundMember),
/* harmony export */   "updateRoundMembers": () => (/* binding */ updateRoundMembers),
/* harmony export */   "deleteRoundMember": () => (/* binding */ deleteRoundMember),
/* harmony export */   "deleteRoundMembers": () => (/* binding */ deleteRoundMembers),
/* harmony export */   "clearRoundMembers": () => (/* binding */ clearRoundMembers),
/* harmony export */   "updateRoundMembersSuccess": () => (/* binding */ updateRoundMembersSuccess),
/* harmony export */   "addRoundMembersSuccess": () => (/* binding */ addRoundMembersSuccess),
/* harmony export */   "all": () => (/* binding */ all)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const loadRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Load RoundMembers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addRoundMember = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Add RoundMember', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertRoundMember = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Upsert RoundMember', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Add RoundMembers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Upsert RoundMembers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateRoundMember = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Update RoundMember', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Update RoundMembers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteRoundMember = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Delete RoundMember', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Delete RoundMembers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Clear RoundMembers');
// custom
const updateRoundMembersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Update RoundMembers Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addRoundMembersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[RoundMember/API] Add RoundMembers Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const all = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.union)({
    loadRoundMembers,
    addRoundMember,
    upsertRoundMember,
    addRoundMembers,
    upsertRoundMembers,
    updateRoundMember,
    updateRoundMembers,
    deleteRoundMember,
    deleteRoundMembers,
    clearRoundMembers,
    updateRoundMembersSuccess,
    addRoundMembersSuccess,
});


/***/ }),

/***/ 23783:
/*!************************************************!*\
  !*** ./src/app/store/actions/round.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadRounds": () => (/* binding */ loadRounds),
/* harmony export */   "addRound": () => (/* binding */ addRound),
/* harmony export */   "upsertRound": () => (/* binding */ upsertRound),
/* harmony export */   "addRounds": () => (/* binding */ addRounds),
/* harmony export */   "upsertRounds": () => (/* binding */ upsertRounds),
/* harmony export */   "updateRound": () => (/* binding */ updateRound),
/* harmony export */   "updateRounds": () => (/* binding */ updateRounds),
/* harmony export */   "deleteRound": () => (/* binding */ deleteRound),
/* harmony export */   "deleteRounds": () => (/* binding */ deleteRounds),
/* harmony export */   "clearRounds": () => (/* binding */ clearRounds)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const loadRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Load Rounds', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addRound = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Add Round', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertRound = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Upsert Round', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Add Rounds', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const upsertRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Upsert Rounds', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateRound = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Update Round', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Update Rounds', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteRound = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Delete Round', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Delete Rounds', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Round/API] Clear Rounds');
const all = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.union)({
    loadRounds,
    addRound,
    upsertRound,
    addRounds,
    upsertRounds,
    updateRound,
    updateRounds,
    deleteRound,
    deleteRounds,
    clearRounds,
});


/***/ }),

/***/ 25871:
/*!****************************************************!*\
  !*** ./src/app/store/effects/analytics.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsEffects": () => (/* binding */ AnalyticsEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 87509);
/* harmony import */ var _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/analytics.actions */ 4368);
/* harmony import */ var _gamer_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gamer-data.service */ 19973);
/* harmony import */ var src_app_modules_analytics_tab_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/analytics-tab/analytics.service */ 47837);
/* harmony import */ var src_app_services_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error-handler.service */ 68634);









let AnalyticsEffects = class AnalyticsEffects {
    constructor(actions$, errorHandlerService, analyticsService, gamerService) {
        this.actions$ = actions$;
        this.errorHandlerService = errorHandlerService;
        this.analyticsService = analyticsService;
        this.gamerService = gamerService;
        this.setLoading = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingByWins, _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingByWinsToGames, _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRating), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((_) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.loading({ loading: true })));
        });
        this.cancelLoading = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingSuccess, _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError), 
            // filter(
            //   (action) =>
            //     // ignore error cancelling (null) actions
            //     action.type !== fromAnalyticsActions.AnalyticsActionTypes.errorType ||
            //     (action.type === fromAnalyticsActions.AnalyticsActionTypes.errorType && !!action.error),
            // ),
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((_) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.loading({ loading: false })));
        });
        this.errorHadler = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({ error }) => this.errorHandlerService.logError({
                error,
                errorType: 'analytics/error',
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((_) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.removeError()));
        });
        this.getRatingByWins = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingByWins), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({ gameType }) => this.analyticsService.getRatingByWins(gameType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((result) => this.addLoosers((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(result))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((analytics) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingSuccess({ analytics })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))))));
        });
        this.getRatingByWinsToGames = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingByWinsToGames), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({ gameType }) => this.analyticsService.getRatingByWinsToGames(gameType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((analytics) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingSuccess({ analytics })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))))));
        });
        this.getRating = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRating), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({ gameType }) => {
                return this.analyticsService.getRating(gameType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((analytics) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingSuccess({ analytics })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
            }));
        });
    }
    // append gamers which hasn't wins yet
    addLoosers(stream) {
        return stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.gamerService.entities$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([analytics, gamers]) => {
            const losers = gamers
                .filter((gamer) => !analytics.some((winner) => winner._id === gamer._id))
                .map(({ _id, name, color, telegramCheckCode, telegramSubscriptionName }) => ({
                _id,
                name,
                color,
                telegramCheckCode,
                telegramSubscriptionName,
                rating: { wins: 0 },
            }));
            const fullList = analytics.concat(losers);
            return fullList;
        }));
    }
};
AnalyticsEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: src_app_services_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.ErrorHandlerService },
    { type: src_app_modules_analytics_tab_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService },
    { type: _gamer_data_service__WEBPACK_IMPORTED_MODULE_1__.GamerService }
];
AnalyticsEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], AnalyticsEffects);



/***/ }),

/***/ 6541:
/*!**********************************************!*\
  !*** ./src/app/store/effects/app.effects.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppEffects": () => (/* binding */ AppEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/analytics.actions */ 4368);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ 70018);
/* harmony import */ var _actions_round_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/round.actions */ 23783);
/* harmony import */ var _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/round-member.actions */ 8775);
/* harmony import */ var _reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/round-member.reducer */ 27539);
/* harmony import */ var _reducers_round_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/round.reducer */ 88761);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/app.actions */ 58717);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/router-store */ 86100);
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/app.reducer */ 55305);
/* harmony import */ var _reducers_player_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/player.reducer */ 43051);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! uuid */ 89232);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var _game_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../game-data.service */ 23093);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var src_app_services_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/error-handler.service */ 68634);
/* harmony import */ var _gamer_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gamer-data.service */ 19973);























let AppEffects = class AppEffects {
    constructor(actions$, store, sharedService, gameService, gamerService, errorHandlerService, entityActionFactory) {
        this.actions$ = actions$;
        this.store = store;
        this.sharedService = sharedService;
        this.gameService = gameService;
        this.gamerService = gamerService;
        this.errorHandlerService = errorHandlerService;
        this.entityActionFactory = entityActionFactory;
        this.setLoading = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.loading, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((action) => _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.loading({ loading: action.loading })));
        });
        this.cancelLoading = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_2__.clearRounds, _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.addError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((_) => _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.loading({ loading: false })));
        });
        // entityOpErrorHadler = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofEntityOp(),
        //     tap((x) => console.log('action ', x)),
        //     filter((ea: EntityAction) => ea.payload.entityOp.endsWith(OP_ERROR)),
        //     tap((x) => console.log('x', x)),
        //     map(({ payload }) =>
        //       fromAppActions.addError({
        //         error: payload.data.error,
        //         errorType: ErrorTypesEnum.ngrxDataError,
        //       }),
        //     ),
        //   );
        // });
        this.errorHadler = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.addError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(({ error, errorType }) => this.errorHandlerService.logError({
                error,
                errorType: errorType || 'app/error',
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((_) => _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.removeError()));
        });
        this.finishGame = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.finishGame), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(() => {
                const game = this.sharedService.createResultOfGame();
                console.log('game', game);
                // save to db
                return this.gameService.add(game).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)((_) => this.sharedService.presentModalFinishGame(game)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.clearGame()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.addError({ error, errorType: 'ngrxDataError' }))));
            }));
        });
        this.getGamers = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__.storeUserFromTokenSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(() => this.gamerService.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.nop()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.addError({ error, errorType: 'ngrxDataError' }))))));
        });
        this.gameType = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__.routerNavigatedAction), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.concatLatestFrom)(() => this.store.select(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__.selectGameType)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([{ payload }, gameType]) => {
                const { urlAfterRedirects } = payload.event;
                const payloadGameType = urlAfterRedirects.split('/');
                if (payloadGameType[1] === 'games' || payloadGameType[1] === 'analytics') {
                    if (!gameType) {
                        // initial state, get gameType from url
                        return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.gameType({
                            gameType: payloadGameType[2],
                        });
                    }
                    if (payloadGameType[2] !== gameType) {
                        // fire action only if game was changed
                        // change game type and clear previous game
                        return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.gameTypeAndClearGame({
                            gameType: payloadGameType[2],
                        });
                    }
                }
                return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.nop();
            }));
        });
        this.clearGame = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.gameTypeAndClearGame), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.clearGame()));
        });
        this.clearRounds = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.clearGame), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((_) => _actions_round_actions__WEBPACK_IMPORTED_MODULE_2__.clearRounds()));
        });
        this.clearRoundMembers = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.clearGame), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((_) => _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_3__.clearRoundMembers()));
        });
        this.addRounds = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.loadGame), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(({ rounds }) => _actions_round_actions__WEBPACK_IMPORTED_MODULE_2__.addRounds({ rounds })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
        this.addRoundMembers = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.loadGame), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(({ roundMembers }) => _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_3__.addRoundMembers({ roundMembers })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
        this.checkOpenNextRound = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_3__.updateRoundMembersSuccess), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.concatLatestFrom)(() => this.store.select(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__.selectGameType)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(([action, gameType]) => false), // gameType === 'thousand'),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.concatLatestFrom)(() => this.store.select(_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_4__.selectAllRoundMembers)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([action, roundMembers]) => {
                const qtyOfPlayedSubrounds = roundMembers[roundMembers.length - 1].namedScoresLine.length;
                const qtyOfPlayers = new Set(roundMembers.map((roundMember) => roundMember.player)).size;
                if (qtyOfPlayedSubrounds >= qtyOfPlayers) {
                    // TODO  === or error
                    return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.openNextRound();
                }
                return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.nop();
            }));
        });
        this.openNextRound = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.openNextRound), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.concatLatestFrom)(() => [
                this.store.select(_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllRounds),
                this.store.select(_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_8__.selectAllPlayers),
                this.store.select(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__.selectGameType),
            ]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([action, rounds, players, gameType]) => {
                const nextRound = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.games[gameType].rounds[1];
                const members = players.map((player) => ({
                    _id: (0,uuid__WEBPACK_IMPORTED_MODULE_21__["default"])(),
                    player: player._id,
                    scoresLine: nextRound.initialScoresLine,
                    namedScoresLine: nextRound.initialNamedScoresLine,
                }));
                const newRoundMembers = [...members];
                const newRounds = [
                    {
                        _id: nextRound._id + (rounds.length + 1),
                        roundMembers: members.map((member) => member._id),
                        clientGame: rounds[0].clientGame,
                        icon: nextRound.icon,
                        name: nextRound._id,
                        namePostfix: rounds.length + 1 + '',
                    },
                ];
                return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.loadGame({
                    roundMembers: newRoundMembers,
                    rounds: newRounds,
                });
            }));
        });
        this.createRounds = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.createRounds), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.concatLatestFrom)(() => [
                this.store.select(_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_8__.selectAllPlayers),
                this.store.select(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__.selectGameType),
            ]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([action, players, gameType]) => {
                const clientGame = {
                    _id: (0,uuid__WEBPACK_IMPORTED_MODULE_21__["default"])(),
                    type: gameType,
                };
                const roundsCfg = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.games[gameType].rounds;
                let roundMembers = [];
                const rounds = roundsCfg
                    .filter((roundCfg) => roundCfg._id !== 'start')
                    .map((roundCfg) => {
                    const members = players.map((player) => ({
                        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_21__["default"])(),
                        player: player._id,
                        scoresLine: roundCfg.initialScoresLine,
                        namedScoresLine: roundCfg.initialNamedScoresLine,
                    }));
                    roundMembers = [...roundMembers, ...members];
                    return {
                        _id: roundCfg._id + roundCfg.namePostfix,
                        roundMembers: members.map((member) => member._id),
                        clientGame,
                        icon: roundCfg.icon,
                        name: roundCfg._id,
                        namePostfix: roundCfg.namePostfix,
                    };
                });
                return _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.loadGame({ roundMembers, rounds });
            }));
        });
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment;
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_22__.Store },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__.SharedService },
    { type: _game_data_service__WEBPACK_IMPORTED_MODULE_11__.GameService },
    { type: _gamer_data_service__WEBPACK_IMPORTED_MODULE_13__.GamerService },
    { type: src_app_services_error_handler_service__WEBPACK_IMPORTED_MODULE_12__.ErrorHandlerService },
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_23__.EntityActionFactory }
];
AppEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Injectable)()
], AppEffects);



/***/ }),

/***/ 28368:
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 70018);
/* harmony import */ var _actions_round_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/round.actions */ 23783);
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/player.actions */ 75803);
/* harmony import */ var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/auth/auth.service */ 76006);
/* harmony import */ var _gamer_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gamer-data.service */ 19973);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/app.actions */ 58717);
/* harmony import */ var src_app_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/error-handler.service */ 68634);














let AuthEffects = class AuthEffects {
    constructor(actions$, errorHandlerService, authService, sharedService, entityActionFactory, gamerService) {
        this.actions$ = actions$;
        this.errorHandlerService = errorHandlerService;
        this.authService = authService;
        this.sharedService = sharedService;
        this.entityActionFactory = entityActionFactory;
        this.gamerService = gamerService;
        this.setLoading = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signin, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signup, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((_) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loading({ loading: true })));
        });
        this.cancelLoading = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromTokenSuccess, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError), 
            // filter(
            //   (action) =>
            //     // ignore error cancelling (null) actions
            //     action.type !== fromAuthActions.AuthActionTypes.errorType ||
            //     (action.type === fromAuthActions.AuthActionTypes.errorType && !!action.error),
            // ),
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((_) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loading({ loading: false })));
        });
        this.errorHadler = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({ error }) => this.errorHandlerService.logError({
                error,
                errorType: 'auth/error',
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((_) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.removeError()));
        });
        // signin, signup, logout -> clearRounds
        // signup, logout -> clearPlayers
        // signin, signup, logout -> storeToken -> storeUserFromToken -> storeUserFromTokenSuccess
        this.signin = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signin), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((action) => action.user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)((user) => this.authService.signin(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((token) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeToken({ token })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))))));
        });
        this.signup = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signup, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((action = null) => {
                if ('user' in action) {
                    return action.user;
                }
                return null;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)((user) => this.authService.signup(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((token) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeToken({ token })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))))));
        });
        this.clearRounds = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signup, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signin, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_round_actions__WEBPACK_IMPORTED_MODULE_1__.clearRounds()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
        this.clearPlayers = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signup, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_player_actions__WEBPACK_IMPORTED_MODULE_2__.clearPlayers()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
        this.storeToken = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((action) => action.token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)((token) => this.sharedService.setToken(token)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromToken()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
        this.storeUserFromToken = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.sharedService.getTokenAndDecode().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((user) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromTokenSuccess({ user })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signup({}));
            }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
        this.redirectAfterSignin = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromTokenSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((payload) => {
                var _a, _b;
                if (((_a = payload.user) === null || _a === void 0 ? void 0 : _a.role) === 'member' || ((_b = payload.user) === null || _b === void 0 ? void 0 : _b.role) === 'admin') {
                    return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.redirection({ redirectionUrl: '/' });
                }
                return (0,_actions_app_actions__WEBPACK_IMPORTED_MODULE_6__.nop)();
            }));
        });
        this.removeAllRecentPlayers = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signinSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((action) => action.token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((token) => _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeToken({ token })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError({ error }))));
        });
    }
    ngrxOnInitEffects() {
        return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromToken();
    }
};
AuthEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.Actions },
    { type: src_app_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__.ErrorHandlerService },
    { type: _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService },
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_13__.EntityActionFactory },
    { type: _gamer_data_service__WEBPACK_IMPORTED_MODULE_4__.GamerService }
];
AuthEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)()
], AuthEffects);



/***/ }),

/***/ 95188:
/*!****************************************************!*\
  !*** ./src/app/store/effects/error-log.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorLogEffects": () => (/* binding */ ErrorLogEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_app_modules_auth_error_log_error_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/auth/error-log/error-log.service */ 49750);
/* harmony import */ var _actions_error_log_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/error-log.actions */ 67619);






let ErrorLogEffects = class ErrorLogEffects {
    constructor(actions$, errorLogService) {
        this.actions$ = actions$;
        this.errorLogService = errorLogService;
        this.getWithQuery = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_1__.getWithQuery), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(({ query }) => this.errorLogService.getWithQuery(query)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((errorLogs) => _actions_error_log_actions__WEBPACK_IMPORTED_MODULE_1__.loadErrorLogs({ errorLogs })));
        });
    }
};
ErrorLogEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions },
    { type: src_app_modules_auth_error_log_error_log_service__WEBPACK_IMPORTED_MODULE_0__.ErrorLogService }
];
ErrorLogEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ErrorLogEffects);



/***/ }),

/***/ 52204:
/*!****************************************************!*\
  !*** ./src/app/store/effects/hydration.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HydrationEffects": () => (/* binding */ HydrationEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers */ 88965);
/* harmony import */ var _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/hydration.actions */ 76381);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/app.actions */ 58717);










let HydrationEffects = class HydrationEffects {
    constructor(action$, store, sharedService, router) {
        this.action$ = action$;
        this.store = store;
        this.sharedService = sharedService;
        this.router = router;
        this.hydrate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.sharedService.getFromStorage('appState')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((storageValue) => {
                if (storageValue) {
                    const state = JSON.parse(storageValue);
                    return _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrateSuccess({ state });
                }
                return _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrateFailure();
            }));
        });
        this.navigate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrateSuccess), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.concatLatestFrom)(() => this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_0__.selectUrlRouter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([action, url]) => {
                return (0,_actions_app_actions__WEBPACK_IMPORTED_MODULE_3__.redirection)({ redirectionUrl: url });
            }));
        });
        this.serialize$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => {
            return this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrateSuccess, _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrateFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.store), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((store) => {
                return this.sharedService.setToStorage('appState', JSON.stringify({
                    players: store.players,
                    rounds: store.rounds,
                    roundMembers: store.roundMembers,
                    persistStore: store.persistStore,
                    router: store.router,
                }));
            }));
        }, { dispatch: false });
    }
    ngrxOnInitEffects() {
        return _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_1__.hydrate();
    }
};
HydrationEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
HydrationEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], HydrationEffects);



/***/ }),

/***/ 3404:
/*!********************************************************!*\
  !*** ./src/app/store/effects/persist-store.effects.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersistStoreEffects": () => (/* binding */ PersistStoreEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _reducers_player_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/player.reducer */ 43051);
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/app.reducer */ 55305);
/* harmony import */ var _reducers_persist_store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/persist-store.reducer */ 68507);
/* harmony import */ var _actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/persist-store.actions */ 93640);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/app.actions */ 58717);
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/player.actions */ 75803);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);












let PersistStoreEffects = class PersistStoreEffects {
    constructor(actions$, store, sharedService) {
        this.actions$ = actions$;
        this.store = store;
        this.sharedService = sharedService;
        this.upsertPersistStore$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.addPlayer, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.addPlayers, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.clearPlayers, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.deletePlayer, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.deletePlayers, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.loadPlayers, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.updatePlayer, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.updatePlayer, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.updatePlayers, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.upsertPlayer, _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.upsertPlayers), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.concatLatestFrom)(() => [
                this.store.select(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__.selectGameType),
                this.store.select(_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_0__.selectAllPlayers),
            ]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([_, gameType, players]) => {
                if (!gameType) {
                    return _actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.nop();
                }
                return _actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_3__.upsertPersistStore({
                    persistStore: { _id: gameType, players },
                });
            }));
        });
        this.getFromPersistStore = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.clearGame), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.concatLatestFrom)(() => this.store.select(_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__.selectGameType)), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.concatLatestFrom)(([action, gameType]) => this.store.select(_reducers_persist_store_reducer__WEBPACK_IMPORTED_MODULE_2__.selectByIdPersistStore(gameType))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([action, persistStore]) => {
                if (persistStore && persistStore.players) {
                    return _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.loadPlayers({ players: persistStore.players });
                }
                else {
                    return _actions_player_actions__WEBPACK_IMPORTED_MODULE_5__.clearPlayers();
                }
            }));
        });
    }
};
PersistStoreEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService }
];
PersistStoreEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], PersistStoreEffects);



/***/ }),

/***/ 30517:
/*!*************************************************!*\
  !*** ./src/app/store/effects/player.effects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerEffects": () => (/* binding */ PlayerEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);




let PlayerEffects = class PlayerEffects {
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
    }
};
PlayerEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store }
];
PlayerEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], PlayerEffects);



/***/ }),

/***/ 28775:
/*!*******************************************************!*\
  !*** ./src/app/store/effects/round-member.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundMemberEffects": () => (/* binding */ RoundMemberEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/round-member.actions */ 8775);
/* harmony import */ var _reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/round-member.reducer */ 27539);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);







let RoundMemberEffects = class RoundMemberEffects {
    // loadGame = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAppActions.loadGame),
    //         map(({roundMembers}) => fromRoundMemberActions.loadRoundMembers({roundMembers})),
    //     );
    // });
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        this.updateRoundMembersSuccess = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.updateRoundMembers), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.concatLatestFrom)(() => this.store.select(_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__.selectAllRoundMembers)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([action, roundMembers]) => _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.updateRoundMembersSuccess({ roundMembers })));
        });
        this.addRoundMembersSuccess = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.addRoundMembers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ roundMembers }) => _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.addRoundMembersSuccess({ roundMembers })));
        });
    }
};
RoundMemberEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
RoundMemberEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], RoundMemberEffects);



/***/ }),

/***/ 66847:
/*!************************************************!*\
  !*** ./src/app/store/effects/round.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundEffects": () => (/* binding */ RoundEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);




let RoundEffects = class RoundEffects {
    // clearGame = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAppActions.clearGame),
    //         map((_) => fromRoundActions.clearRounds()),
    //     );
    // });
    // loadGame = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(fromAppActions.loadGame),
    //         map(({ rounds }) => fromRoundActions.loadRounds({ rounds })),
    //     );
    // });
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
    }
};
RoundEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store }
];
RoundEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], RoundEffects);



/***/ }),

/***/ 23143:
/*!******************************************!*\
  !*** ./src/app/store/entity-metadata.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entityMetadata": () => (/* binding */ entityMetadata),
/* harmony export */   "entityConfig": () => (/* binding */ entityConfig)
/* harmony export */ });
const entityMetadata = {
    gamer: {
        selectId: (gamer) => gamer._id,
        entityDispatcherOptions: {
            optimisticAdd: false,
            optimisticUpdate: false,
            optimisticDelete: false,
        },
    },
    game: {
        selectId: (game) => game._id,
        entityDispatcherOptions: {
            optimisticAdd: false,
            optimisticUpdate: false,
            optimisticDelete: false,
        },
    },
};
const pluralNames = {
    gamer: 'gamers',
    game: 'games',
};
const entityConfig = {
    entityMetadata,
    pluralNames,
};


/***/ }),

/***/ 23093:
/*!********************************************!*\
  !*** ./src/app/store/game-data.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameDataService": () => (/* binding */ GameDataService),
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 97544);




let GameDataService = class GameDataService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.DefaultDataService {
    constructor(http, httpUrlGenerator) {
        super('game', http, httpUrlGenerator);
    }
};
GameDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.HttpUrlGenerator }
];
GameDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], GameDataService);

let GameService = class GameService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('game', serviceElementsFactory);
    }
};
GameService.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory }
];
GameService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], GameService);



/***/ }),

/***/ 19973:
/*!*********************************************!*\
  !*** ./src/app/store/gamer-data.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamerDataService": () => (/* binding */ GamerDataService),
/* harmony export */   "GamerService": () => (/* binding */ GamerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 97544);




let GamerDataService = class GamerDataService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.DefaultDataService {
    constructor(http, httpUrlGenerator) {
        super('gamer', http, httpUrlGenerator);
    }
};
GamerDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.HttpUrlGenerator }
];
GamerDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], GamerDataService);

let GamerService = class GamerService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('gamer', serviceElementsFactory);
    }
};
GamerService.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory }
];
GamerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], GamerService);



/***/ }),

/***/ 33957:
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/analytics.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "analyticsFeatureKey": () => (/* binding */ analyticsFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectRating": () => (/* binding */ selectRating),
/* harmony export */   "selectLoading": () => (/* binding */ selectLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/analytics.actions */ 4368);



const analyticsFeatureKey = 'analytics';
const initialState = {
    analytics: [],
    error: null,
    loading: false,
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.getRatingSuccess, (state, { analytics }) => (Object.assign(Object.assign({}, state), { analytics, error: null }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addMany, (state, { analytics }) => (Object.assign(Object.assign({}, state), { analytics: [...state.analytics, ...analytics], error: null }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.addError, (state, { error }) => (Object.assign(Object.assign({}, state), { error }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.removeError, (state, _) => (Object.assign(Object.assign({}, state), { error: null }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_0__.loading, (state, { loading }) => (Object.assign(Object.assign({}, state), { loading }))));
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(analyticsFeatureKey);
const selectRating = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.analytics);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.loading);


/***/ }),

/***/ 55305:
/*!***********************************************!*\
  !*** ./src/app/store/reducers/app.reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appFeatureKey": () => (/* binding */ appFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectLoading": () => (/* binding */ selectLoading),
/* harmony export */   "selectGameType": () => (/* binding */ selectGameType),
/* harmony export */   "selectRedirectionUrl": () => (/* binding */ selectRedirectionUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/app.actions */ 58717);



const appFeatureKey = 'app';
const initialState = {
    loading: false,
    gameType: null,
    redirectionUrl: null,
    error: null,
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.loading, (state, { loading }) => (Object.assign(Object.assign({}, state), { loading }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.finishGame, (state, _) => (Object.assign(Object.assign({}, state), { loading: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.gameType, (state, { gameType }) => (Object.assign(Object.assign({}, state), { gameType }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.gameTypeAndClearGame, (state, { gameType }) => (Object.assign(Object.assign({}, state), { gameType }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.redirection, (state, { redirectionUrl }) => (Object.assign(Object.assign({}, state), { redirectionUrl }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.addError, (state, { error, errorType }) => (Object.assign(Object.assign({}, state), { error,
    errorType }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__.removeError, (state, _) => (Object.assign(Object.assign({}, state), { error: null, errorType: null }))));
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(appFeatureKey);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.loading);
const selectGameType = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.gameType);
const selectRedirectionUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.redirectionUrl);


/***/ }),

/***/ 24433:
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFeatureKey": () => (/* binding */ authFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "selectUserRole": () => (/* binding */ selectUserRole),
/* harmony export */   "selectRedirectionUrl": () => (/* binding */ selectRedirectionUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 70018);



const authFeatureKey = 'auth';
const initialState = {
    user: null,
    error: null,
    redirectionUrl: null,
    loading: false,
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.storeUserFromTokenSuccess, (state, { user }) => (Object.assign(Object.assign({}, state), { user, error: null }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.addError, (state, { error }) => (Object.assign(Object.assign({}, state), { error }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.removeError, (state, _) => (Object.assign(Object.assign({}, state), { error: null }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loading, (state, { loading }) => (Object.assign(Object.assign({}, state), { loading }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.redirection, (state, { redirectionUrl }) => (Object.assign(Object.assign({}, state), { redirectionUrl }))));
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(authFeatureKey);
const selectUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.user);
const selectUserRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => { var _a; return (_a = state.user) === null || _a === void 0 ? void 0 : _a.role; });
const selectRedirectionUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectFeature, (state) => state.redirectionUrl);


/***/ }),

/***/ 49441:
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/error-log.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorLogsFeatureKey": () => (/* binding */ errorLogsFeatureKey),
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectAllErrorLogs": () => (/* binding */ selectAllErrorLogs),
/* harmony export */   "selectEntitiesAllErrorLogs": () => (/* binding */ selectEntitiesAllErrorLogs),
/* harmony export */   "selectByIdRoundMember": () => (/* binding */ selectByIdRoundMember)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 82607);
/* harmony import */ var _actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/error-log.actions */ 67619);



const errorLogsFeatureKey = 'errorLogs';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: (errorLog) => errorLog._id,
});
const initialState = adapter.getInitialState({
// additional entity state properties
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.addErrorLog, (state, action) => adapter.addOne(action.errorLog, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.upsertErrorLog, (state, action) => adapter.upsertOne(action.errorLog, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.addErrorLogs, (state, action) => adapter.addMany(action.errorLogs, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.upsertErrorLogs, (state, action) => adapter.upsertMany(action.errorLogs, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.updateErrorLog, (state, action) => adapter.updateOne(action.errorLog, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.updateErrorLogs, (state, action) => adapter.updateMany(action.errorLogs, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.deleteErrorLog, (state, action) => adapter.removeOne(action.id, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.deleteErrorLogs, (state, action) => adapter.removeMany(action.ids, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.loadErrorLogs, (state, action) => adapter.setAll(action.errorLogs, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_0__.clearErrorLogs, (state) => adapter.removeAll(state)));
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(errorLogsFeatureKey);
const selectAllErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectAll);
const selectEntitiesAllErrorLogs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectEntities);
const selectByIdRoundMember = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectEntitiesAllErrorLogs, (entities) => entities[id]);


/***/ }),

/***/ 34616:
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/hydration.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydrationMetaReducer": () => (/* binding */ hydrationMetaReducer)
/* harmony export */ });
/* harmony import */ var _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/hydration.actions */ 76381);

const isHydrateSuccess = (action) => {
    return action.type === _actions_hydration_actions__WEBPACK_IMPORTED_MODULE_0__.hydrateSuccess.type;
};
const hydrationMetaReducer = (reducer) => {
    return (state, action) => {
        if (isHydrateSuccess(action)) {
            return Object.assign(Object.assign({}, state), action.state);
        }
        else {
            return reducer(state, action);
        }
    };
};


/***/ }),

/***/ 88965:
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "selectCurrentRoute": () => (/* binding */ selectCurrentRoute),
/* harmony export */   "selectFragment": () => (/* binding */ selectFragment),
/* harmony export */   "selectQueryParams": () => (/* binding */ selectQueryParams),
/* harmony export */   "selectQueryParam": () => (/* binding */ selectQueryParam),
/* harmony export */   "selectRouteParams": () => (/* binding */ selectRouteParams),
/* harmony export */   "selectRouteParam": () => (/* binding */ selectRouteParam),
/* harmony export */   "selectRouteData": () => (/* binding */ selectRouteData),
/* harmony export */   "selectUrl": () => (/* binding */ selectUrl),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectUrlRouter": () => (/* binding */ selectUrlRouter)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ 24433);
/* harmony import */ var _round_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.reducer */ 88761);
/* harmony import */ var _round_member_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./round-member.reducer */ 27539);
/* harmony import */ var _hydration_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hydration.reducer */ 34616);
/* harmony import */ var _player_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player.reducer */ 43051);
/* harmony import */ var _analytics_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.reducer */ 33957);
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.reducer */ 55305);
/* harmony import */ var _persist_store_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./persist-store.reducer */ 68507);
/* harmony import */ var _error_log_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-log.reducer */ 49441);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/router-store */ 86100);













const reducers = {
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
    rounds: _round_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
    roundMembers: _round_member_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
    players: _player_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,
    analytics: _analytics_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer,
    app: _app_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer,
    [_error_log_reducer__WEBPACK_IMPORTED_MODULE_9__.errorLogsFeatureKey]: _error_log_reducer__WEBPACK_IMPORTED_MODULE_9__.reducer,
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__.routerReducer,
    persistStore: _persist_store_reducer__WEBPACK_IMPORTED_MODULE_8__.reducer,
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
    ? [_hydration_reducer__WEBPACK_IMPORTED_MODULE_4__.hydrationMetaReducer]
    : [_hydration_reducer__WEBPACK_IMPORTED_MODULE_4__.hydrationMetaReducer];
const { selectCurrentRoute, // select the current route
selectFragment, // select the current route fragment
selectQueryParams, // select the current route query params
selectQueryParam, // factory function to select a query param
selectRouteParams, // select the current route params
selectRouteParam, // factory function to select a route param
selectRouteData, // select the current route data
selectUrl, // select the current url
 } = (0,_ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__.getSelectors)();
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.createFeatureSelector)('router');
const selectUrlRouter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.createSelector)((state) => state, (value) => value.router.state.url);
// export const selectUrlRouter = createSelector((state: State) => state.ngrxRouter, selectUrl);
// export const selectUrlRouter = createSelector(selectFeature, selectUrl);
// export const selectFragmentRouter = createSelector(selectFeature, selectFragment);


/***/ }),

/***/ 68507:
/*!*********************************************************!*\
  !*** ./src/app/store/reducers/persist-store.reducer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistStoresFeatureKey": () => (/* binding */ persistStoresFeatureKey),
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectAllPersistStore": () => (/* binding */ selectAllPersistStore),
/* harmony export */   "selectEntitiesRounds": () => (/* binding */ selectEntitiesRounds),
/* harmony export */   "selectByIdPersistStore": () => (/* binding */ selectByIdPersistStore)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 82607);
/* harmony import */ var _actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/persist-store.actions */ 93640);



const persistStoresFeatureKey = 'persistStore';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: (storage) => storage._id,
});
const initialState = adapter.getInitialState({
// additional entity state properties
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.addPersistStore, (state, action) => adapter.addOne(action.persistStore, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.upsertPersistStore, (state, action) => adapter.upsertOne(action.persistStore, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.addPersistStores, (state, action) => adapter.addMany(action.persistStores, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.upsertPersistStores, (state, action) => adapter.upsertMany(action.persistStores, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.updatePersistStore, (state, action) => adapter.updateOne(action.persistStore, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.updatePersistStores, (state, action) => adapter.updateMany(action.persistStores, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.deletePersistStore, (state, action) => adapter.removeOne(action.id, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.deletePersistStores, (state, action) => adapter.removeMany(action.ids, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadPersistStores, (state, action) => adapter.setAll(action.persistStores, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_persist_store_actions__WEBPACK_IMPORTED_MODULE_0__.clearPersistStores, (state) => adapter.removeAll(state)));
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(persistStoresFeatureKey);
const selectAllPersistStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectAll);
const selectEntitiesRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectEntities);
const selectByIdPersistStore = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectEntitiesRounds, (entities) => entities[id]);


/***/ }),

/***/ 43051:
/*!**************************************************!*\
  !*** ./src/app/store/reducers/player.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playersFeatureKey": () => (/* binding */ playersFeatureKey),
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectAllPlayers": () => (/* binding */ selectAllPlayers),
/* harmony export */   "selectEntitiesPlayers": () => (/* binding */ selectEntitiesPlayers),
/* harmony export */   "selectByIdPlayer": () => (/* binding */ selectByIdPlayer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 82607);
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/player.actions */ 75803);



const playersFeatureKey = 'players';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: (player) => player._id,
});
const initialState = adapter.getInitialState({
// additional entity state properties
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.addPlayer, (state, action) => adapter.addOne(action.player, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.upsertPlayer, (state, action) => adapter.upsertOne(action.player, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.addPlayers, (state, action) => adapter.addMany(action.players, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.upsertPlayers, (state, action) => adapter.upsertMany(action.players, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.updatePlayer, (state, action) => adapter.updateOne(action.player, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.updatePlayers, (state, action) => adapter.updateMany(action.players, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.deletePlayer, (state, action) => adapter.removeOne(action.id, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.deletePlayers, (state, action) => adapter.removeMany(action.ids, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.loadPlayers, (state, action) => adapter.setAll(action.players, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_player_actions__WEBPACK_IMPORTED_MODULE_0__.clearPlayers, (state) => adapter.removeAll(state)));
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(playersFeatureKey);
const selectAllPlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectAll);
const selectEntitiesPlayers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectEntities);
const selectByIdPlayer = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectEntitiesPlayers, (entities) => entities[id]);


/***/ }),

/***/ 27539:
/*!********************************************************!*\
  !*** ./src/app/store/reducers/round-member.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "roundMembersFeatureKey": () => (/* binding */ roundMembersFeatureKey),
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectAllRoundMembers": () => (/* binding */ selectAllRoundMembers),
/* harmony export */   "selectEntitiesRoundMembers": () => (/* binding */ selectEntitiesRoundMembers),
/* harmony export */   "selectByIdRoundMember": () => (/* binding */ selectByIdRoundMember)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 82607);
/* harmony import */ var _actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/round-member.actions */ 8775);



const roundMembersFeatureKey = 'roundMembers';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: (roundMember) => roundMember._id,
});
const initialState = adapter.getInitialState({
// additional entity state properties
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.addRoundMember, (state, action) => adapter.addOne(action.roundMember, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.upsertRoundMember, (state, action) => adapter.upsertOne(action.roundMember, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.addRoundMembers, (state, action) => adapter.addMany(action.roundMembers, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.upsertRoundMembers, (state, action) => adapter.upsertMany(action.roundMembers, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.updateRoundMember, (state, action) => adapter.updateOne(action.roundMember, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.updateRoundMembers, (state, action) => adapter.updateMany(action.roundMembers, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.deleteRoundMember, (state, action) => adapter.removeOne(action.id, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.deleteRoundMembers, (state, action) => adapter.removeMany(action.ids, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.loadRoundMembers, (state, action) => adapter.setAll(action.roundMembers, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_0__.clearRoundMembers, (state) => adapter.removeAll(state)));
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(roundMembersFeatureKey);
const selectAllRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectAll);
const selectEntitiesRoundMembers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectEntities);
const selectByIdRoundMember = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectEntitiesRoundMembers, (entities) => entities[id]);


/***/ }),

/***/ 88761:
/*!*************************************************!*\
  !*** ./src/app/store/reducers/round.reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "roundsFeatureKey": () => (/* binding */ roundsFeatureKey),
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "selectAllRounds": () => (/* binding */ selectAllRounds),
/* harmony export */   "selectEntitiesRounds": () => (/* binding */ selectEntitiesRounds),
/* harmony export */   "selectByIdRound": () => (/* binding */ selectByIdRound)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 82607);
/* harmony import */ var _actions_round_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/round.actions */ 23783);



const roundsFeatureKey = 'rounds';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: (round) => round._id,
});
const initialState = adapter.getInitialState({
// additional entity state properties
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.addRound, (state, action) => adapter.addOne(action.round, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.upsertRound, (state, action) => adapter.upsertOne(action.round, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.addRounds, (state, action) => adapter.addMany(action.rounds, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.upsertRounds, (state, action) => adapter.upsertMany(action.rounds, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.updateRound, (state, action) => adapter.updateOne(action.round, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.updateRounds, (state, action) => adapter.updateMany(action.rounds, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.deleteRound, (state, action) => adapter.removeOne(action.id, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.deleteRounds, (state, action) => adapter.removeMany(action.ids, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.loadRounds, (state, action) => adapter.setAll(action.rounds, state)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_round_actions__WEBPACK_IMPORTED_MODULE_0__.clearRounds, (state) => adapter.removeAll(state)));
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
const selectFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(roundsFeatureKey);
const selectAllRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectAll);
const selectEntitiesRounds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectFeature, selectEntities);
const selectByIdRound = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectEntitiesRounds, (entities) => entities[id]);


/***/ }),

/***/ 58388:
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDataServiceConfig": () => (/* binding */ defaultDataServiceConfig),
/* harmony export */   "AppStoreModule": () => (/* binding */ AppStoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/data */ 97544);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store-devtools */ 85960);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ 88965);
/* harmony import */ var _game_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-data.service */ 23093);
/* harmony import */ var _gamer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamer-data.service */ 19973);
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-metadata */ 23143);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _effects_auth_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/auth.effects */ 28368);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _effects_hydration_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/hydration.effects */ 52204);
/* harmony import */ var _effects_analytics_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/analytics.effects */ 25871);
/* harmony import */ var _effects_app_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/app.effects */ 6541);
/* harmony import */ var _effects_round_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/round.effects */ 66847);
/* harmony import */ var _effects_round_member_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/round-member.effects */ 28775);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/router-store */ 86100);
/* harmony import */ var _effects_persist_store_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/persist-store.effects */ 3404);
/* harmony import */ var _effects_player_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/player.effects */ 30517);
/* harmony import */ var _effects_error_log_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/error-log.effects */ 95188);















// import { StoreAppService } from './store-app.service';







const defaultDataServiceConfig = {
    root: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.host + 'api/store/',
    timeout: 5000,
    entityHttpResourceUrls: {
        game: {
            entityResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.host + 'api/store/game/',
            collectionResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.host + 'api/store/games/',
        },
        gamer: {
            entityResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.host + 'api/store/gamer/',
            collectionResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.host + 'api/store/gamers/',
        },
    },
};
let AppStoreModule = class AppStoreModule {
    constructor(entityDataService, gameDataService, gamerDataService) {
        entityDataService.registerService('Game', gameDataService);
        entityDataService.registerService('Gamer', gamerDataService);
    }
};
AppStoreModule.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_14__.EntityDataService },
    { type: _game_data_service__WEBPACK_IMPORTED_MODULE_1__.GameDataService },
    { type: _gamer_data_service__WEBPACK_IMPORTED_MODULE_2__.GamerDataService }
];
AppStoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_0__.reducers, {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_0__.metaReducers,
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forRoot([
                _effects_auth_effects__WEBPACK_IMPORTED_MODULE_5__.AuthEffects,
                _effects_hydration_effects__WEBPACK_IMPORTED_MODULE_6__.HydrationEffects,
                _effects_analytics_effects__WEBPACK_IMPORTED_MODULE_7__.AnalyticsEffects,
                _effects_app_effects__WEBPACK_IMPORTED_MODULE_8__.AppEffects,
                _effects_round_effects__WEBPACK_IMPORTED_MODULE_9__.RoundEffects,
                _effects_round_member_effects__WEBPACK_IMPORTED_MODULE_10__.RoundMemberEffects,
                _effects_persist_store_effects__WEBPACK_IMPORTED_MODULE_11__.PersistStoreEffects,
                _effects_player_effects__WEBPACK_IMPORTED_MODULE_12__.PlayerEffects,
                _effects_error_log_effects__WEBPACK_IMPORTED_MODULE_13__.ErrorLogEffects,
            ]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_21__.StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
            // Connects RouterModule with StoreModule
            _ngrx_data__WEBPACK_IMPORTED_MODULE_14__.EntityDataModule.forRoot({ entityMetadata: _entity_metadata__WEBPACK_IMPORTED_MODULE_3__.entityMetadata }),
        ],
        providers: [
            _game_data_service__WEBPACK_IMPORTED_MODULE_1__.GameDataService,
            _gamer_data_service__WEBPACK_IMPORTED_MODULE_2__.GamerDataService,
            { provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_14__.DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
        ],
    })
], AppStoreModule);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    appVersion: (__webpack_require__(/*! ../../package.json */ 4147).version) + '-dev',
    host: '',
    // host: 'https://10.0.2.2:8084/',
    production: false,
    games: {
        rummy: {
            name: 'Rummy',
            resultsOrder: 1,
            showToolbarMenu: false,
            maxPlayersQty: 4,
            minPlayersQty: 2,
            playersColors: ['black'],
            namedScores: [
                { name: '1', value: -1, picture: './assets/games/uno/1.svg' },
                { name: '2', value: -2, picture: './assets/games/uno/2.svg' },
                { name: '3', value: -3, picture: './assets/games/uno/3.svg' },
                { name: '4', value: -4, picture: './assets/games/uno/4.svg' },
                { name: '5', value: -5, picture: './assets/games/uno/5.svg' },
                { name: '6', value: -6, picture: './assets/games/uno/6.svg' },
                { name: '7', value: -7, picture: './assets/games/uno/7.svg' },
                { name: '8', value: -8, picture: './assets/games/uno/8.svg' },
                { name: '9', value: -9, picture: './assets/games/uno/9.svg' },
                { name: '10', value: -10, picture: './assets/games/uno/9.svg' },
                { name: '11', value: -11, picture: './assets/games/uno/9.svg' },
                { name: '12', value: -12, picture: './assets/games/uno/9.svg' },
                { name: '13', value: -13, picture: './assets/games/uno/9.svg' },
                {
                    name: 'Joker',
                    value: -30,
                    picture: './assets/games/uno/reverse.svg',
                },
            ],
            rounds: [
                {
                    _id: 'start',
                    icon: 'log-out-outline',
                    namePostfix: '',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'round',
                    icon: 'copy-outline',
                    namePostfix: '',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
            ],
            stats: [
                {
                    _id: 'getRating',
                    icon: 'trophy-outline',
                    name: 'rating',
                },
            ],
        },
        uno: {
            name: 'Uno',
            resultsOrder: 1,
            showToolbarMenu: false,
            maxPlayersQty: 10,
            minPlayersQty: 2,
            playersColors: ['black'],
            namedScores: [
                { name: '0', value: 0, picture: './assets/games/uno/0.svg' },
                { name: '1', value: 1, picture: './assets/games/uno/1.svg' },
                { name: '2', value: 2, picture: './assets/games/uno/2.svg' },
                { name: '3', value: 3, picture: './assets/games/uno/3.svg' },
                { name: '4', value: 4, picture: './assets/games/uno/4.svg' },
                { name: '5', value: 5, picture: './assets/games/uno/5.svg' },
                { name: '6', value: 6, picture: './assets/games/uno/6.svg' },
                { name: '7', value: 7, picture: './assets/games/uno/7.svg' },
                { name: '8', value: 8, picture: './assets/games/uno/8.svg' },
                { name: '9', value: 9, picture: './assets/games/uno/9.svg' },
                {
                    name: 'reverse',
                    value: 20,
                    picture: './assets/games/uno/reverse.svg',
                },
                { name: 'skip', value: 20, picture: './assets/games/uno/skip.svg' },
                { name: 'plus2', value: 20, picture: './assets/games/uno/plus2.svg' },
                { name: 'plus4', value: 50, picture: './assets/games/uno/plus4.svg' },
                { name: 'color', value: 50, picture: './assets/games/uno/color.svg' },
            ],
            rounds: [
                {
                    _id: 'start',
                    icon: 'log-out-outline',
                    namePostfix: '',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'round',
                    icon: 'copy-outline',
                    namePostfix: '1',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
            ],
            stats: [],
        },
        thousand: {
            name: 'Thousand - 1000',
            resultsOrder: -1,
            showToolbarMenu: false,
            maxPlayersQty: 4,
            minPlayersQty: 2,
            playersColors: ['black'],
            rounds: [
                {
                    _id: 'start',
                    namePostfix: '',
                    icon: 'log-out-outline',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'round',
                    namePostfix: '',
                    icon: 'trail-sign-outline',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
            ],
            stats: [
                {
                    _id: 'getRatingByWins',
                    icon: 'trophy-outline',
                    name: 'byWins',
                },
                {
                    _id: 'getRatingByWinsToGames',
                    icon: 'podium-outline',
                    name: 'byWinsToGames',
                },
            ],
        },
        train: {
            name: 'Ticket to ride',
            resultsOrder: -1,
            showToolbarMenu: true,
            maxPlayersQty: 5,
            minPlayersQty: 2,
            playersColors: ['red', 'green', 'blue', 'black', 'yellow'],
            routesScores: [
                { name: '5', value: 5 },
                { name: '6', value: 6 },
                { name: '7', value: 7 },
                { name: '8', value: 8 },
                { name: '9', value: 9 },
                { name: '10', value: 10 },
                { name: '11', value: 11 },
                { name: '12', value: 12 },
                { name: '13', value: 13 },
                { name: '20', value: 20 },
                { name: '21', value: 21 },
            ],
            longestRouteScore: 10,
            carsScores: [
                { name: 1, value: 1 },
                { name: 2, value: 2 },
                { name: 3, value: 4 },
                { name: 4, value: 7 },
                { name: 6, value: 15 },
                { name: 8, value: 21 },
            ],
            stats: [
                {
                    _id: 'getRatingByWins',
                    icon: 'trophy-outline',
                    name: 'byWins',
                },
                {
                    _id: 'getRatingByWinsToGames',
                    icon: 'podium-outline',
                    name: 'byWinsToGames',
                },
            ],
            rounds: [
                {
                    _id: 'start',
                    icon: 'log-out-outline',
                    namePostfix: '',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'routes',
                    icon: 'trail-sign-outline',
                    namePostfix: '',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'length',
                    icon: 'code-working-outline',
                    namePostfix: '',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'stations',
                    namePostfix: '',
                    icon: 'prism-outline',
                    initialScoresLine: [4, 4, 4],
                    initialNamedScoresLine: [],
                },
                {
                    _id: 'cars',
                    namePostfix: '',
                    icon: 'train-outline',
                    initialScoresLine: [],
                    initialNamedScoresLine: [],
                },
            ],
        },
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 35007:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/game/game-result/game-result.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">{{'modules.games.results' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col>\n      <!-- <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\"> -->\n        <ion-card>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-buttons slot=\"end\">\n                <ion-button (click)=\"confirm()\">Ok</ion-button>\n              </ion-buttons>\n            </ion-item>\n            <ion-list>\n              <ion-item *ngFor=\"let result of resultWithNames; let idx = index\">\n                <div\n                  slot=\"start\"\n                  [ngStyle]=\"{\n                    'border-right': '6px solid ' + result.color,\n                    'padding-right': '10px'\n                  }\"\n                >\n                  {{ idx + 1 }}\n                </div>\n                <ion-label>\n                  {{ result.name }}\n                </ion-label>\n                <ion-text slot=\"end\" color=\"primary\">\n                  {{ result.score }}\n                </ion-text>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 65986:
/*!***************************************************************************!*\
  !*** ./src/app/modules/games/game/game-result/game-result.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLXJlc3VsdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"points","version":"0.0.4","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","format":"prettier --write \\"src/**/*.ts\\" \\"test/**/*.ts\\""},"private":true,"dependencies":{"@angular/common":"~13.0.0","@angular/core":"~13.0.0","@angular/forms":"~13.0.0","@angular/platform-browser":"~13.0.0","@angular/platform-browser-dynamic":"~13.0.0","@angular/router":"~13.0.0","@angular/service-worker":"~13.0.0","@capacitor/app":"1.0.7","@capacitor/core":"3.3.4","@capacitor/haptics":"1.1.3","@capacitor/keyboard":"1.2.0","@capacitor/status-bar":"1.0.6","@capacitor/storage":"^1.2.3","@ionic/angular":"^6.0.0","@ngrx/data":"^13.0.2","@ngrx/effects":"^13.0.2","@ngrx/entity":"^13.0.2","@ngrx/router-store":"^13.0.2","@ngrx/store":"^13.0.2","@ngrx/store-devtools":"^13.0.2","@ngx-translate/core":"^14.0.0","@ngx-translate/http-loader":"^7.0.0","eslint-plugin-ngrx":"^2.0.0","jwt-decode":"^3.1.2","normalizr":"^3.6.1","rxjs":"~6.6.0","tslib":"^2.2.0","uuid":"^8.3.2","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"~13.0.1","@angular-eslint/builder":"~13.0.1","@angular-eslint/eslint-plugin":"~13.0.1","@angular-eslint/eslint-plugin-template":"~13.0.1","@angular-eslint/template-parser":"~13.0.1","@angular/cli":"~13.0.1","@angular/compiler":"~13.0.0","@angular/compiler-cli":"~13.0.0","@angular/language-service":"~13.0.0","@capacitor/cli":"3.3.4","@ionic/angular-toolkit":"^5.0.0","@ngrx/schematics":"^13.0.2","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/node":"^12.20.41","@typescript-eslint/eslint-plugin":"5.3.0","@typescript-eslint/parser":"5.3.0","eslint":"^7.6.0","eslint-plugin-import":"2.22.1","eslint-plugin-jsdoc":"30.7.6","eslint-plugin-prefer-arrow":"1.2.2","jasmine-core":"~3.8.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.2","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","protractor":"~7.0.0","ts-node":"~8.3.0","typescript":"~4.4.4"},"description":"An Ionic project"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map