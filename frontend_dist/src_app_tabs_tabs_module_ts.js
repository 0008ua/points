(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 6045:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 3840);




const routes = [{
  path: '',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'analytics',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_analytics-tab_analytics-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/analytics-tab/analytics-tab.module */ 4247)).then(m => m.AnalyticsTabPageModule)
    // canLoad: [NoAuthGuard],
    // canActivate: [NoAuthGuard],
  }, {
    path: 'games',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_games_games_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/games/games.module */ 7182)).then(m => m.GamesPageModule)
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
  }, {
    path: 'auth',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/auth/auth.module */ 9371)).then(m => m.AuthModule)
    // canLoad: [NoAuthGuard],
    // canActivate: [NoAuthGuard],
  },
  // {
  //   path: '',
  //   redirectTo: 'games',
  //   // pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: 'games'
    // pathMatch: 'full'
  }]
}, {
  path: '**',
  redirectTo: ''
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 5040:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 6045);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 3840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 1916);








let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
    extend: true
  })],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 3840:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 2146);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/app.reducer */ 8123);
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/auth.reducer */ 9580);
var _class;







let TabsPage = (_class = class TabsPage {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.user$ = this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUser);
    this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
    this.userRole$ = this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUserRole);
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store
}], _class);
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsPage);


/***/ }),

/***/ 2146:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\r\n  <div class=\"progress-wrapper\">\r\n    <ion-progress-bar *ngIf=\"loading$ | async\" type=\"indeterminate\"></ion-progress-bar>\r\n\r\n  </div>\r\n  <ion-tab-bar slot=\"start\">\r\n    <ion-tab-button tab=\"games\">\r\n      <ion-icon name=\"game-controller\"></ion-icon>\r\n      <ion-label>{{'modules.games.name' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"analytics\">\r\n      <ion-icon name=\"analytics-outline\"></ion-icon>\r\n      <ion-label>{{'modules.analytics.name' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"auth\">\r\n      <ion-icon name=\"settings-outline\"></ion-icon>\r\n      <ion-label>{{'modules.settings.name' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map