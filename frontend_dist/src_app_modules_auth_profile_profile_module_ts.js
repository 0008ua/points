"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_profile_profile_module_ts"],{

/***/ 2237:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/profile/profile-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 932);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
        children: [
            {
                path: 'telegram',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_telegram_telegram_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../telegram/telegram.module */ 4232)).then((m) => m.TelegramModule),
            },
            {
                path: '**',
                redirectTo: 'telegram',
            },
        ],
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 1157:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/profile/profile.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 2237);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 932);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage],
    })
], ProfilePageModule);



/***/ }),

/***/ 932:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/profile/profile.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 1363);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 9113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 18);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 4433);









let ProfilePage = class ProfilePage {
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
        this.menuController.enable(true, 'profile-menu');
    }
    onLogout() {
        this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.logout)());
    }
    switchLanguage() {
        this.lang = this.lang === 'en' ? 'uk' : 'en';
        this.translate.use(this.lang);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 1363:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/profile/profile.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu menuId=\"profile-menu\" side=\"end\" contentId=\"profile-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'member'\">{{(user$ | async).name }}</h2>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'guest'\">Guest</h2>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-menu-toggle auto-hide=\"false\" menu=\"profile-menu\">\r\n        <ion-item\r\n          routerLink=\"/auth/profile/telegram\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"send-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.profile.telegramSetup' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item-divider></ion-item-divider>\r\n\r\n        <ion-item button (click)=\"switchLanguage()\">\r\n          <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'language' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'member'\" button (click)=\"onLogout()\">\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.logout' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          *ngIf=\"(userRole$ | async) === 'guest'\"\r\n          routerLink=\"/auth/signin\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.signin' | translate}}</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"profile-content\"></ion-router-outlet>\r\n\r\n\r\n\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>profile</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-item (click)=\"onLogout()\" button lines=\"none\">\r\n            <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{'logout' | translate}}</ion-label>\r\n          </ion-item>\r\n        </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n</ion-content> -->\r\n");

/***/ }),

/***/ 9113:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/profile/profile.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_profile_profile_module_ts.js.map