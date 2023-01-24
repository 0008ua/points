"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_analytics_train_train_module_ts"],{

/***/ 5390:
/*!*****************************************************************!*\
  !*** ./src/app/modules/analytics/train/train-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainPageRoutingModule": () => (/* binding */ TrainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _train_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train.page */ 7117);




const routes = [
    {
        path: '',
        component: _train_page__WEBPACK_IMPORTED_MODULE_0__.TrainPage,
    }
];
let TrainPageRoutingModule = class TrainPageRoutingModule {
};
TrainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainPageRoutingModule);



/***/ }),

/***/ 4677:
/*!*********************************************************!*\
  !*** ./src/app/modules/analytics/train/train.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainPageModule": () => (/* binding */ TrainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _train_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train-routing.module */ 5390);
/* harmony import */ var _train_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train.page */ 7117);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let TrainPageModule = class TrainPageModule {
};
TrainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _train_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        declarations: [_train_page__WEBPACK_IMPORTED_MODULE_1__.TrainPage]
    })
], TrainPageModule);



/***/ }),

/***/ 7117:
/*!*******************************************************!*\
  !*** ./src/app/modules/analytics/train/train.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainPage": () => (/* binding */ TrainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_train_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./train.page.html */ 7872);
/* harmony import */ var _train_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train.page.scss */ 6745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/data */ 7544);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/analytics.actions */ 4368);
/* harmony import */ var src_app_store_game_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/game-data.service */ 3093);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 9973);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 3957);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 8260);











let TrainPage = class TrainPage {
    constructor(store, gameService, gamerService, entityActionFactory) {
        this.store = store;
        this.gameService = gameService;
        this.gamerService = gamerService;
        this.entityActionFactory = entityActionFactory;
        this.stats = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.games.train.stats;
        this.stat = this.stats[0];
        this.math = Math;
        this.array = Array;
    }
    ionViewWillEnter() {
        console.log('view');
        this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stats[0]._id]({ gameType: 'train' }));
    }
    ngOnInit() {
        this.games$ = this.gameService.entities$;
        this.games$
            .subscribe(() => this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stat._id]({ gameType: 'train' })));
        this.gamers$ = this.gamerService.entities$;
        this.gamers$.subscribe((x) => console.log('gamers', x));
        console.log('[this.stats[0]._id', this.stats[0]._id);
        // this.store.dispatch(fromAnalyticsActions[this.stats[0]._id]({ gameType: 'train' }));
        this.analytics$ = this.store.select(src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_5__.selectRating);
        // this.analytics$.pipe(
        //   withLatestFrom(this.gamers$),
        //   map((x) => {
        //     this.store.dispatch(fromAnalyticsActions.addMany({analytics: x[1]}))
        //     console.log('an0', x)
        //   })
        // )
        //   .subscribe((x) => console.log('an', x))
        this.loading$ = this.store.select(src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_5__.selectLoading);
    }
    onMenuClickHandler(e) {
        this.stat = e.target.value;
        this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stat._id]({ gameType: 'train' }));
    }
};
TrainPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store },
    { type: src_app_store_game_data_service__WEBPACK_IMPORTED_MODULE_3__.GameService },
    { type: src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_4__.GamerService },
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_8__.EntityActionFactory }
];
TrainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-train',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_train_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_train_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainPage);



/***/ }),

/***/ 7872:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics/train/train.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-title>Train analytics</ion-title> -->\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button menu=\"analytics-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-segment [value]=\"stats[0]\" (ionChange)=\"onMenuClickHandler($event)\">\r\n      <ion-segment-button *ngFor=\"let stat of stats; let idx = index\" [value]=\"stat\">\r\n        <ion-icon [name]=\"stat.icon\"></ion-icon>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\">Ticket to ride</ion-card-title>\r\n            <ion-card-subtitle class=\"ion-text-center\">{{'modules.analytics.' + stat.name | translate}}\r\n            </ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list *ngIf=\"(loading$ | async) === true\">\r\n              <ion-item lines=\"none\" *ngFor=\"let x of array(5).fill('')\">\r\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 60%\">\r\n                </ion-skeleton-text>\r\n                <ion-skeleton-text slot=\"end\" animated>\r\n                </ion-skeleton-text>\r\n              </ion-item>\r\n\r\n            </ion-list>\r\n\r\n            <ion-list *ngIf=\"(loading$ | async) === false\">\r\n              <ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\r\n                <div slot=\"start\" [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\">{{idx+1}}</div>\r\n                <ion-label>\r\n                  {{player.name}}\r\n                </ion-label>\r\n                <ion-text *ngIf=\"stat._id === 'getRatingByWins'\" slot=\"end\" color=\"primary\">\r\n                  {{player.rating.wins}}\r\n                </ion-text>\r\n                <ion-text *ngIf=\"stat._id === 'getRatingByWinsToGames'\" slot=\"end\" color=\"primary\">\r\n\r\n                  {{player.rating.wins}} / {{player.rating.gamesCount}}\r\n                  <ion-text class=\"bold\">( {{player.rating.wins ? math.floor(player.rating.winsToGames * 100) : 0}}% )\r\n                  </ion-text>\r\n\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <!-- <ion-row class=\"ion-justify-content-around\">\r\n              <ion-button fill=\"outline\" size=\"small\" [disabled]=\"(rounds$ | async).length === 0\"\r\n                (click)=\"onFinishGameHandler()\">\r\n                {{'elements.button.finishGame' | translate}}\r\n              </ion-button>\r\n              <ion-button fill=\"outline\" size=\"small\" [disabled]=\"(rounds$ | async).length === 0\"\r\n                (click)=\"onCancelGameHandler()\">\r\n                {{'elements.button.cancelGame' | translate}}\r\n              </ion-button> -->\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 6745:
/*!*********************************************************!*\
  !*** ./src/app/modules/analytics/train/train.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_analytics_train_train_module_ts.js.map