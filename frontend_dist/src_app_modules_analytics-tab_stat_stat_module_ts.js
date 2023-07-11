"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_analytics-tab_stat_stat_module_ts"],{

/***/ 73115:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RummyPage": () => (/* binding */ RummyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rummy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rummy.page.html */ 16421);
/* harmony import */ var _rummy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rummy.page.scss */ 47666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 48327);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 24011);
var RummyPage_1;






let RummyPage = RummyPage_1 = class RummyPage extends _stat_directive__WEBPACK_IMPORTED_MODULE_3__.StatBaseDirective {
    constructor() {
        super();
    }
    ngOnInit() { }
};
RummyPage.ctorParameters = () => [];
RummyPage = RummyPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rummy',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rummy_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__.STAT_COMPONENT,
                useExisting: RummyPage_1,
            },
        ],
        styles: [_rummy_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RummyPage);



/***/ }),

/***/ 48327:
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-interfaces.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STAT_COMPONENT": () => (/* binding */ STAT_COMPONENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

const STAT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('statComponent');


/***/ }),

/***/ 55174:
/*!*******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatRoutingModule": () => (/* binding */ StatRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 58401);




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

/***/ 53005:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatWrapperComponent": () => (/* binding */ StatWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stat_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./stat-wrapper.component.html */ 12489);
/* harmony import */ var _stat_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-wrapper.component.scss */ 84184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 33957);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat-interfaces */ 48327);







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

/***/ 58401:
/*!**************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatComponent": () => (/* binding */ StatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_stat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./stat.component.html */ 94576);
/* harmony import */ var _stat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat.component.scss */ 7320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/analytics.actions */ 4368);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 33957);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);









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
            console.log('gameType', this.gameType);
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

/***/ 24011:
/*!**************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatBaseDirective": () => (/* binding */ StatBaseDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


let StatBaseDirective = class StatBaseDirective {
    constructor() {
        this.math = Math;
    }
    ngOnInit() { }
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

/***/ 36657:
/*!***********************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatModule": () => (/* binding */ StatModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 58401);
/* harmony import */ var _stat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-routing.module */ 55174);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _rummy_rummy_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rummy/rummy.page */ 73115);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _train_train_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train/train.page */ 18469);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _stat_wrapper_stat_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-wrapper/stat-wrapper.component */ 53005);
/* harmony import */ var _thousand_thousand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thousand/thousand.component */ 87348);












let StatModule = class StatModule {
};
StatModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent, _stat_wrapper_stat_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.StatWrapperComponent, _rummy_rummy_page__WEBPACK_IMPORTED_MODULE_2__.RummyPage, _train_train_page__WEBPACK_IMPORTED_MODULE_3__.TrainPage, _thousand_thousand_component__WEBPACK_IMPORTED_MODULE_5__.ThousandComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _stat_routing_module__WEBPACK_IMPORTED_MODULE_1__.StatRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        // exports: [StatWrapperComponent, RummyPage, TrainPage],
    })
], StatModule);



/***/ }),

/***/ 87348:
/*!***************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/thousand/thousand.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThousandComponent": () => (/* binding */ ThousandComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_thousand_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./thousand.component.html */ 7632);
/* harmony import */ var _thousand_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thousand.component.scss */ 45264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 48327);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 24011);
var ThousandComponent_1;






let ThousandComponent = ThousandComponent_1 = class ThousandComponent extends _stat_directive__WEBPACK_IMPORTED_MODULE_3__.StatBaseDirective {
    constructor() {
        super();
    }
    ngOnInit() { }
};
ThousandComponent.ctorParameters = () => [];
ThousandComponent = ThousandComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-thousand',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_thousand_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__.STAT_COMPONENT,
                useExisting: ThousandComponent_1,
            },
        ],
        styles: [_thousand_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThousandComponent);



/***/ }),

/***/ 18469:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainPage": () => (/* binding */ TrainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_train_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./train.page.html */ 53433);
/* harmony import */ var _train_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train.page.scss */ 30038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 48327);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 24011);
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

/***/ 16421:
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

/***/ 12489:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\">{{ 'games.' + gameType + '.name' | translate }}</ion-card-title>\n    <ion-card-subtitle class=\"ion-text-center\"\n      >{{ ('modules.analytics.' + stat?.name) | translate }}\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-list *ngIf=\"(loading$ | async) === true\">\n      <ion-item lines=\"none\" *ngFor=\"let x of array(5).fill('')\">\n        <ion-skeleton-text slot=\"start\" animated style=\"width: 60%\"> </ion-skeleton-text>\n        <ion-skeleton-text slot=\"end\" animated> </ion-skeleton-text>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"(loading$ | async) === false\">\n       <ng-content></ng-content>\n     </ion-list>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ 94576:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/stat.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"analytics-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-segment *ngIf=\"stats?.length\" [value]=\"stats[0]\" (ionChange)=\"onMenuClickHandler($event)\">\n      <ion-segment-button *ngFor=\"let stat of stats; let idx = index\" [value]=\"stat\">\n        <ion-icon [name]=\"stat.icon\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\">\n        <app-stat-wrapper *ngIf=\"gameType === 'train'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-train [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-train>\n        </app-stat-wrapper>\n        <app-stat-wrapper *ngIf=\"gameType === 'rummy'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-rummy [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-rummy>\n        </app-stat-wrapper>\n        <app-stat-wrapper *ngIf=\"gameType === 'thousand'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-thousand [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-thousand>\n        </app-stat-wrapper>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 7632:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/stat/thousand/thousand.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\n  <div\n    slot=\"start\"\n    [ngStyle]=\"{\n                  'border-right': '6px solid ' + player.color,\n                  'padding-right': '10px'\n                }\"\n  >\n    {{idx+1}}\n  </div>\n  <ion-label> {{player.name}} </ion-label>\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWins'\" slot=\"end\" color=\"primary\">\n    {{player.rating.wins}}\n  </ion-text>\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWinsToGames'\" slot=\"end\" color=\"primary\">\n    {{player.rating.wins}} / {{player.rating.gamesCount}}\n    <ion-text class=\"bold\"\n      >( {{player.rating.wins ? math.floor(player.rating.winsToGames * 100) : 0}}% )\n    </ion-text>\n  </ion-text>\n</ion-item>");

/***/ }),

/***/ 53433:
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

/***/ 47666:
/*!******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydW1teS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 84184:
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

/***/ 45264:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/thousand/thousand.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aG91c2FuZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 30038:
/*!******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_analytics-tab_stat_stat_module_ts.js.map