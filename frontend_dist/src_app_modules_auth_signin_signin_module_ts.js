"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_signin_signin_module_ts"],{

/***/ 2941:
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/signin/signin-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 3745);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage,
    },
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 8474:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 2941);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 3745);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 1173);









let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage],
    })
], SigninPageModule);



/***/ }),

/***/ 3745:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signin.page.html */ 6556);
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss */ 9173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 18);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 6006);










let SigninPage = class SigninPage {
    constructor(authService, router, store, translate) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.translate = translate;
        this.inputType = 'password';
    }
    ngOnInit() {
        this.lang = this.translate.currentLang;
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                updateOn: 'change',
                validators: [
                    // Validators.pattern('^[a-zA-Z0-9_-]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2),
                    // Validators.maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                ],
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            }),
        });
    }
    switchInputType() {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    }
    onSignin() {
        const user = {
            name: this.signinForm.get('name').value,
            password: this.signinForm.get('password').value,
        };
        this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.signin)({ user }));
        this.resetForm();
    }
    resetForm() {
        if (this.signinFormDirective) {
            this.signinFormDirective.resetForm();
        }
    }
    switchLanguage() {
        if (this.lang === 'en') {
            this.lang = 'uk';
        }
        else {
            this.lang = 'en';
        }
        this.translate.use(this.lang);
    }
};
SigninPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
SigninPage.propDecorators = {
    signinFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['signinFormDirective', { static: false },] }]
};
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signin',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SigninPage);



/***/ }),

/***/ 6556:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/signin/signin.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Scores</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"switchLanguage()\" button lines=\"none\">\r\n        <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{'language' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"signinForm\" #signinFormDirective=\"ngForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n\r\n        <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\">\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <!-- <div>\r\n                <img class=\"logo_signin\" src=\"/assets/banner.svg\">\r\n              </div> -->\r\n              <ion-card-title class=\"ion-text-center\">{{'modules.user.signin' | translate}}</ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <a button color=\"primary\" routerLink=\"/auth/signup\">{{'modules.user.orSignup' | translate}}</a>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-icon class=\"ion-align-self-center\" name=\"person-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-label position=\"floating\">{{'modules.user.name' | translate}}</ion-label>\r\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"name\"></ion-input>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"signinForm.get('name').dirty && signinForm.get('name').errors\">\r\n                  <ion-text *ngFor=\"let error of signinForm.get('name').errors | errorExtractor\" class=\"input-error\"\r\n                    color=\"danger\">\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n                <ion-item lines=\"none\">\r\n                  <ion-icon class=\"ion-align-self-center\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-label position=\"floating\">{{'modules.user.password' | translate}}</ion-label>\r\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"password\"></ion-input>\r\n                  <ion-icon class=\"ion-align-self-center\"\r\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\" slot=\"end\"\r\n                    (click)=switchInputType()></ion-icon>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"signinForm.get('password').dirty && signinForm.get('password').errors\">\r\n                  <ion-text *ngFor=\"let error of signinForm.get('password').errors | errorExtractor\" class=\"input-error\"\r\n                    color=\"danger\">\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n              </ion-list>\r\n            </ion-card-content>\r\n\r\n          </ion-card>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"signinForm.status === 'INVALID'\" (click)=\"onSignin()\">\r\n                {{'modules.user.signin' | translate}}\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ 9173:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_signin_signin_module_ts.js.map