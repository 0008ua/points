"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 85257:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 43278);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'analytics',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_analytics-tab_analytics-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/analytics-tab/analytics-tab.module */ 93928)).then((m) => m.AnalyticsTabPageModule),
                // canLoad: [NoAuthGuard],
                // canActivate: [NoAuthGuard],
            },
            {
                path: 'games',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_games_games_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/games/games.module */ 87391)).then((m) => m.GamesPageModule),
                // canLoad: [AuthGuard],
                // canActivate: [AuthGuard],
            },
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/auth/auth.module */ 61142)).then((m) => m.AuthModule),
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
                redirectTo: 'games',
                // pathMatch: 'full'
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 9483:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 85257);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 43278);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    })
], TabsPageModule);



/***/ }),

/***/ 43278:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 8711);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 25066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/app.reducer */ 55305);
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/auth.reducer */ 24433);







let TabsPage = class TabsPage {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.user$ = this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUser);
        this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
        this.userRole$ = this.store.select(_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUserRole);
    }
};
TabsPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tabs',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 8711:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n  <div class=\"progress-wrapper\">\r\n    <ion-progress-bar *ngIf=\"loading$ | async\" type=\"indeterminate\"></ion-progress-bar>\r\n\r\n  </div>\r\n  <ion-tab-bar slot=\"start\">\r\n    <ion-tab-button tab=\"games\">\r\n      <ion-icon name=\"game-controller\"></ion-icon>\r\n      <ion-label>{{'modules.games.name' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"analytics\">\r\n      <ion-icon name=\"analytics-outline\"></ion-icon>\r\n      <ion-label>{{'modules.analytics.name' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"auth\">\r\n      <ion-icon name=\"settings-outline\"></ion-icon>\r\n      <ion-label>{{'modules.settings.name' | translate}}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>");

/***/ }),

/***/ 25066:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map