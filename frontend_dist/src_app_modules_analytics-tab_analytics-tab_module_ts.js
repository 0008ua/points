(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_analytics-tab_analytics-tab_module_ts"],{

/***/ 2225:
/*!***********************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsTabPageRoutingModule: () => (/* binding */ AnalyticsTabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _analytics_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-tab.page */ 5160);




const routes = [{
  path: '',
  component: _analytics_tab_page__WEBPACK_IMPORTED_MODULE_0__.AnalyticsTabPage,
  children: [{
    path: ':id',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_analytics-tab_stat_stat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stat/stat.module */ 381)).then(m => m.StatModule)
  }, {
    path: '**',
    redirectTo: 'rummy'
  }]
}];
let AnalyticsTabPageRoutingModule = class AnalyticsTabPageRoutingModule {};
AnalyticsTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AnalyticsTabPageRoutingModule);


/***/ }),

/***/ 4247:
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsTabPageModule: () => (/* binding */ AnalyticsTabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _analytics_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-tab-routing.module */ 2225);
/* harmony import */ var _analytics_tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-tab.page */ 5160);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 1916);








let AnalyticsTabPageModule = class AnalyticsTabPageModule {};
AnalyticsTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _analytics_tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyticsTabPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
    extend: true
  })],
  declarations: [_analytics_tab_page__WEBPACK_IMPORTED_MODULE_1__.AnalyticsTabPage]
})], AnalyticsTabPageModule);


/***/ }),

/***/ 5160:
/*!*************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsTabPage: () => (/* binding */ AnalyticsTabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _analytics_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-tab.page.html?ngResource */ 7322);
/* harmony import */ var _analytics_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-tab.page.scss?ngResource */ 3108);
/* harmony import */ var _analytics_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_analytics_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 2356);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 9580);
var _class;









let AnalyticsTabPage = (_class = class AnalyticsTabPage {
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
    console.log(this.menuController);
  }
  onLogout() {
    this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.logout)());
  }
  switchLanguage() {
    this.lang = this.lang === 'en' ? 'uk' : 'en';
    this.translate.use(this.lang);
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}], _class);
AnalyticsTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-analytics-tab',
  template: _analytics_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_analytics_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnalyticsTabPage);


/***/ }),

/***/ 3108:
/*!**************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7322:
/*!**************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/analytics-tab.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu menuId=\"analytics-menu\" side=\"end\" contentId=\"analytics-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\">{{(user$ | async).name }}</h2>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'guest'\">Guest</h2>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-menu-toggle auto-hide=\"false\" menu=\"analytics-menu\">\r\n        <ion-item\r\n          routerLink=\"/analytics/train\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"train-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.train.name' | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item\r\n          routerLink=\"/analytics/rummy\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"journal-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.rummy.name' | translate}}</ion-label>\r\n\r\n        </ion-item>\r\n                <ion-item\r\n          routerLink=\"/analytics/thousand\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"journal-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.thousand.name' | translate}}</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider></ion-item-divider>\r\n        <ion-item button (click)=\"switchLanguage()\">\r\n          <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'language' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\" button (click)=\"onLogout()\">\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.logout' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          *ngIf=\"(userRole$ | async) === 'guest'\"\r\n          routerLink=\"/auth/signin\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.signin' | translate}}</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"analytics-content\"></ion-router-outlet>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_analytics-tab_analytics-tab_module_ts.js.map