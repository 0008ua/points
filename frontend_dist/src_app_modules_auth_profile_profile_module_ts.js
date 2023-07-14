"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_profile_profile_module_ts"],{

/***/ 77972:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth-admin.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthAdminGuard": () => (/* binding */ AuthAdminGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 76006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 24433);








let AuthAdminGuard = class AuthAdminGuard {
    constructor(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.userRole$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.selectUserRole);
        // this.userRole$ = this.store.select(selectUserRole);
        this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.selectUserRole).subscribe((_) => _);
    }
    // Prevents fetching lazy loading modules
    canLoad(route, segments) {
        return this.userRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((role) => {
            if (role !== 'admin') {
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
    // If lazy loadnig module already fetched and user logged out
    // this guard prevents to activate module
    canActivate(route, state) {
        return this.userRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((role) => {
            if (role !== 'admin') {
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((e) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e);
        }));
    }
};
AuthAdminGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store }
];
AuthAdminGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], AuthAdminGuard);



/***/ }),

/***/ 82237:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/profile/profile-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-admin.guard */ 77972);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 20932);





const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage,
        children: [
            {
                path: 'telegram',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_telegram_telegram_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../telegram/telegram.module */ 64232)).then((m) => m.TelegramModule),
            },
            {
                path: 'error-log',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_error-log_error-log_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../error-log/error-log.module */ 72984)).then((m) => m.ErrorLogModule),
                canLoad: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
                canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAdminGuard],
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
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 91157:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/profile/profile.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 82237);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 20932);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








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

/***/ 20932:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/profile/profile.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 31363);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 29113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 70018);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 24433);









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

/***/ 31363:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/profile/profile.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu menuId=\"profile-menu\" side=\"end\" contentId=\"profile-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\">{{(user$ | async).name }}</h2>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'guest'\">Guest</h2>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-menu-toggle auto-hide=\"false\" menu=\"profile-menu\">\r\n        <ion-item\r\n          routerLink=\"/auth/profile/telegram\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"send-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.profile.telegramSetup' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'admin'\"\r\n          routerLink=\"/auth/profile/error-log\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"bug-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.profile.errorLog' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item-divider></ion-item-divider>\r\n\r\n        <ion-item button (click)=\"switchLanguage()\">\r\n          <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'language' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\" button (click)=\"onLogout()\">\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.logout' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          *ngIf=\"(userRole$ | async) === 'guest'\"\r\n          routerLink=\"/auth/signin\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.signin' | translate}}</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"profile-content\"></ion-router-outlet>\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>profile</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-item (click)=\"onLogout()\" button lines=\"none\">\r\n            <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{'logout' | translate}}</ion-label>\r\n          </ion-item>\r\n        </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n</ion-content> -->\r\n");

/***/ }),

/***/ 29113:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/profile/profile.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_profile_profile_module_ts.js.map