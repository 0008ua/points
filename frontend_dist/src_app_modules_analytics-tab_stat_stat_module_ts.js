"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_analytics-tab_stat_stat_module_ts"],{

/***/ 3115:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RummyPage": () => (/* binding */ RummyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rummy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rummy.page.html */ 6421);
/* harmony import */ var _rummy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rummy.page.scss */ 7666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat.directive */ 4011);





let RummyPage = class RummyPage extends _stat_directive__WEBPACK_IMPORTED_MODULE_2__.StatBaseDirective {
    constructor() {
        super();
    }
    ngOnInit() { }
};
RummyPage.ctorParameters = () => [];
RummyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-rummy',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rummy_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rummy_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RummyPage);



/***/ }),

/***/ 8327:
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-interfaces.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STAT_COMPONENT": () => (/* binding */ STAT_COMPONENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

const STAT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('statComponent');


/***/ }),

/***/ 5174:
/*!*******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatRoutingModule": () => (/* binding */ StatRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 8401);




const routes = [
    {
        path: '',
        component: _stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent,
    },
];
let StatRoutingModule = class StatRoutingModule {
};
StatRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatRoutingModule);



/***/ }),

/***/ 3005:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatWrapperComponent": () => (/* binding */ StatWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stat_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./stat-wrapper.component.html */ 2489);
/* harmony import */ var _stat_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-wrapper.component.scss */ 4184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 3957);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat-interfaces */ 8327);







let StatWrapperComponent = class StatWrapperComponent {
    constructor(store) {
        this.store = store;
        this.array = Array;
    }
    ngOnInit() {
        this.loading$ = this.store.select(src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
    }
};
StatWrapperComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
StatWrapperComponent.propDecorators = {
    gameType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    stat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    statComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ContentChild, args: [_stat_interfaces__WEBPACK_IMPORTED_MODULE_3__.STAT_COMPONENT, { static: true },] }]
};
StatWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-stat-wrapper',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stat_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stat_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatWrapperComponent);



/***/ }),

/***/ 8401:
/*!**************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatComponent": () => (/* binding */ StatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./stat.component.html */ 4576);
/* harmony import */ var _stat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat.component.scss */ 7320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/analytics.actions */ 4368);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 3957);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);









let StatComponent = class StatComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.gameType = params.id;
            this.stats = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.games[this.gameType].stats;
            if (!this.stat) {
                this.stat = this.stats[0];
            }
            this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stat._id]({ gameType: this.gameType }));
        });
        this.analytics$ = this.store.select(src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_3__.selectRating);
    }
    onMenuClickHandler(e) {
        this.stat = e.target.value;
        this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stat._id]({ gameType: this.gameType }));
    }
};
StatComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
StatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stat',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stat_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stat_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatComponent);



/***/ }),

/***/ 4011:
/*!**************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatBaseDirective": () => (/* binding */ StatBaseDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


let StatBaseDirective = class StatBaseDirective {
    // array = Array;
    // store: Store;
    // gameService: GameService;
    // gamerService: GamerService;
    constructor() {
        // players: IGamer[];
        // games$: Observable<IGame[]>;
        // gamers$: Observable<IGamer[]>;
        // analytics$: Observable<IGamer[]>;
        // loading$: Observable<boolean>;
        this.math = Math;
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
};
StatBaseDirective.ctorParameters = () => [];
StatBaseDirective.propDecorators = {
    gameType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    analytics$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
StatBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appStat]',
    })
], StatBaseDirective);



/***/ }),

/***/ 6657:
/*!***********************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatModule": () => (/* binding */ StatModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 8401);
/* harmony import */ var _stat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-routing.module */ 5174);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _rummy_rummy_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rummy/rummy.page */ 3115);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _train_train_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train/train.page */ 8469);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _stat_wrapper_stat_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-wrapper/stat-wrapper.component */ 3005);











let StatModule = class StatModule {
};
StatModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent, _stat_wrapper_stat_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.StatWrapperComponent, _rummy_rummy_page__WEBPACK_IMPORTED_MODULE_2__.RummyPage, _train_train_page__WEBPACK_IMPORTED_MODULE_3__.TrainPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _stat_routing_module__WEBPACK_IMPORTED_MODULE_1__.StatRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        // exports: [StatWrapperComponent, RummyPage, TrainPage],
    })
], StatModule);



/***/ }),

/***/ 8469:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainPage": () => (/* binding */ TrainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_train_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./train.page.html */ 3433);
/* harmony import */ var _train_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train.page.scss */ 38);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 8327);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 4011);
var TrainPage_1;






let TrainPage = TrainPage_1 = class TrainPage extends _stat_directive__WEBPACK_IMPORTED_MODULE_3__.StatBaseDirective {
    constructor() {
        super();
    }
    ngOnInit() { }
};
TrainPage.ctorParameters = () => [];
TrainPage = TrainPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-train',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_train_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__.STAT_COMPONENT,
                useExisting: TrainPage_1,
            },
        ],
        styles: [_train_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainPage);



/***/ }),

/***/ 6421:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/rummy/rummy.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\r\n  <div\r\n    slot=\"start\"\r\n    [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\"\r\n  >\r\n    {{idx+1}}\r\n  </div>\r\n  <ion-label> {{player.name}} </ion-label>\r\n\r\n  <ion-text slot=\"end\" color=\"primary\">\r\n    <ion-text class=\"bold\" [color]=\"player.rating.scores < 0 ? 'danger' : 'success'\">\r\n      {{player.rating.scores}}</ion-text\r\n    >\r\n    / {{player.rating.totalGames}} / {{player.rating.wins}}\r\n  </ion-text>\r\n</ion-item>");

/***/ }),

/***/ 2489:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\">{{ 'games.' + gameType + '.title' | translate }}</ion-card-title>\n    <ion-card-subtitle class=\"ion-text-center\"\n      >{{ ('modules.analytics.' + stat?.name) | translate }}\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-list *ngIf=\"(loading$ | async) === true\">\n      <ion-item lines=\"none\" *ngFor=\"let x of array(5).fill('')\">\n        <ion-skeleton-text slot=\"start\" animated style=\"width: 60%\"> </ion-skeleton-text>\n        <ion-skeleton-text slot=\"end\" animated> </ion-skeleton-text>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"(loading$ | async) === false\">\n       <ng-content></ng-content>\n     </ion-list>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ 4576:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/stat.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"analytics-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-segment *ngIf=\"stats?.length\" [value]=\"stats[0]\" (ionChange)=\"onMenuClickHandler($event)\">\n      <ion-segment-button *ngFor=\"let stat of stats; let idx = index\" [value]=\"stat\">\n        <ion-icon [name]=\"stat.icon\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\">\n        <app-stat-wrapper *ngIf=\"gameType === 'train'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-train [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-train>\n        </app-stat-wrapper>\n        <app-stat-wrapper *ngIf=\"gameType === 'rummy'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-rummy [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-rummy>\n        </app-stat-wrapper>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 3433:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/train/train.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\r\n  <div\r\n    slot=\"start\"\r\n    [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\"\r\n  >\r\n    {{idx+1}}\r\n  </div>\r\n  <ion-label> {{player.name}} </ion-label>\r\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWins'\" slot=\"end\" color=\"primary\">\r\n    {{player.rating.wins}}\r\n  </ion-text>\r\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWinsToGames'\" slot=\"end\" color=\"primary\">\r\n    {{player.rating.wins}} / {{player.rating.gamesCount}}\r\n    <ion-text class=\"bold\"\r\n      >( {{player.rating.wins ? math.floor(player.rating.winsToGames * 100) : 0}}% )\r\n    </ion-text>\r\n  </ion-text>\r\n</ion-item>\r\n");

/***/ }),

/***/ 7666:
/*!******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydW1teS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4184:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7320:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 38:
/*!******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_analytics-tab_stat_stat_module_ts.js.map