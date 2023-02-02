"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_analytics-tab_analytics-tab_module_ts"],{

/***/ 7097:
/*!***********************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsTabPageRoutingModule": () => (/* binding */ AnalyticsTabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _analytics_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-tab.page */ 1370);




const routes = [
    {
        path: '',
        component: _analytics_tab_page__WEBPACK_IMPORTED_MODULE_0__.AnalyticsTabPage,
        children: [
            {
                path: ':id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_analytics-tab_stat_stat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stat/stat.module */ 6657)).then((m) => m.StatModule),
            },
            {
                path: '**',
                redirectTo: 'rummy',
            },
        ],
    },
];
let AnalyticsTabPageRoutingModule = class AnalyticsTabPageRoutingModule {
};
AnalyticsTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnalyticsTabPageRoutingModule);



/***/ }),

/***/ 3928:
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsTabPageModule": () => (/* binding */ AnalyticsTabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _analytics_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-tab-routing.module */ 7097);
/* harmony import */ var _analytics_tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-tab.page */ 1370);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let AnalyticsTabPageModule = class AnalyticsTabPageModule {
};
AnalyticsTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _analytics_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyticsTabPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        declarations: [_analytics_tab_page__WEBPACK_IMPORTED_MODULE_1__.AnalyticsTabPage],
    })
], AnalyticsTabPageModule);



/***/ }),

/***/ 1370:
/*!*************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsTabPage": () => (/* binding */ AnalyticsTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_analytics_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./analytics-tab.page.html */ 2672);
/* harmony import */ var _analytics_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-tab.page.scss */ 3316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 18);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 4433);









let AnalyticsTabPage = class AnalyticsTabPage {
    constructor(store, translate, menuController) {
        this.store = store;
        this.translate = translate;
        this.menuController = menuController;
    }
    ngOnInit() {
        this.userRole$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUserRole);
        this.user$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUser);
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'analytics-menu');
    }
    onLogout() {
        this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.logout)());
    }
    switchLanguage() {
        this.lang = this.lang === 'en' ? 'uk' : 'en';
        this.translate.use(this.lang);
    }
};
AnalyticsTabPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
AnalyticsTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-analytics-tab',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_analytics_tab_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_analytics_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AnalyticsTabPage);



/***/ }),

/***/ 2672:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/analytics-tab/analytics-tab.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu menuId=\"analytics-menu\" side=\"end\" contentId=\"analytics-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'member'\">{{(user$ | async).name }}</h2>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'guest'\">Guest</h2>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-menu-toggle auto-hide=\"false\" menu=\"analytics-menu\">\r\n        <ion-item\r\n          routerLink=\"/analytics/train\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"train-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.train.title' | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item\r\n          routerLink=\"/analytics/rummy\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"journal-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.rummy.title' | translate}}</ion-label>\r\n\r\n        </ion-item>\r\n                <ion-item\r\n          routerLink=\"/analytics/thousand\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"journal-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.thousand.title' | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider></ion-item-divider>\r\n        <ion-item button (click)=\"switchLanguage()\">\r\n          <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'language' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'member'\" button (click)=\"onLogout()\">\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.logout' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          *ngIf=\"(userRole$ | async) === 'guest'\"\r\n          routerLink=\"/auth/signin\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.signin' | translate}}</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"analytics-content\"></ion-router-outlet>\r\n");

/***/ }),

/***/ 3316:
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MtdGFiLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_analytics-tab_analytics-tab_module_ts.js.map