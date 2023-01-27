"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_signup_signup_module_ts"],{

/***/ 2206:
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/signup/signup-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 1381);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage,
    },
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 1690:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 2206);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 1381);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 1173);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 466);









let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                extend: true,
            }),
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage],
    })
], SignupPageModule);



/***/ }),

/***/ 1381:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.page.html */ 5415);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 1759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6928);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 18);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 6006);












let SignupPage = class SignupPage {
    constructor(authService, router, translate, store) {
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.store = store;
        this.inputType = 'password';
        this.formSubmitSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.lang = this.translate.currentLang;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_\\-]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ],
                // asyncValidators: [
                //   this.userService.checkLoginUnique(),
                // ],
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_\\-]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ],
            }),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_\\-]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ],
            }),
            // email: new FormControl(
            //   '',
            //   {
            //     updateOn: 'change',
            //     validators: [
            //       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            //       Validators.required,
            //     ],
            //     // asyncValidators: [
            //     //   this.userService.checkEmailUnique(),
            //     // ],
            //   }),
        }, this.authService.matchPassword);
        // prevent form submit before async validator completes
        this.formSubmitSubject$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.signupForm.markAsDirty()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.signupForm.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(this.signupForm.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((status) => status !== 'PENDING'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((status) => status === 'VALID'))
            .subscribe((validationSuccessful) => this.onSignup());
    }
    switchInputType() {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    }
    onSignup() {
        const user = {
            name: this.signupForm.get('name').value,
            password: this.signupForm.get('password').value,
        };
        this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.signup)({ user }));
        this.resetForm();
    }
    resetForm() {
        if (this.signupFormDirective) {
            this.signupFormDirective.resetForm();
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
SignupPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store }
];
SignupPage.propDecorators = {
    signupFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['signupFormDirective', { static: false },] }]
};
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-signup',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 5415:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/signup/signup.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Scores</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"switchLanguage()\" button lines=\"none\">\r\n        <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{'language' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"signupForm\" *ngIf=\"signupForm\" #signupFormDirective=\"ngForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <div>\r\n                <img class=\"logo_signin\" src=\"/assets/banner.svg\">\r\n              </div>\r\n              <ion-card-title class=\"ion-text-center\">{{'modules.user.signup' | translate}}</ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <a button color=\"primary\" routerLink=\"tabs/signin\">{{'modules.user.orSignin' | translate}}</a>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-icon class=\"ion-align-self-center\" name=\"person-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-label position=\"floating\">{{'modules.user.name' | translate}}</ion-label>\r\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"name\"></ion-input>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"signupForm.get('name').dirty && signupForm.get('name').errors\">\r\n                  <ion-text *ngFor=\"let error of signupForm.get('name').errors | errorExtractor\" class=\"input-error\"\r\n                    color=\"danger\">\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n\r\n                <!-- <ion-item>\r\n                  <ion-icon class=\"ion-align-self-center\" name=\"mail-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-label position=\"floating\">{{'modules.user.email' | translate}}</ion-label>\r\n                  <ion-input type=\"email\" autocomplete autocorrect formControlName=\"email\"></ion-input>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"signupForm.get('email').dirty && signupForm.get('email').errors\">\r\n                  <ion-text *ngFor=\"let error of signupForm.get('email').errors | errorExtractor\" class=\"input-error\"\r\n                    color=\"danger\">\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container> -->\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-icon class=\"ion-align-self-center\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-label position=\"floating\">{{'modules.user.password' | translate}}</ion-label>\r\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"password\"></ion-input>\r\n                  <ion-icon class=\"ion-align-self-center\"\r\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\" slot=\"end\"\r\n                    (click)=switchInputType()></ion-icon>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"signupForm.get('password').dirty && signupForm.get('password').errors\">\r\n                  <ion-text *ngFor=\"let error of signupForm.get('password').errors | errorExtractor\" class=\"input-error\"\r\n                    color=\"danger\">\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-icon class=\"ion-align-self-center\" name=\"reorder-two-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-label position=\"floating\">{{'modules.user.confirmPassword' | translate}}</ion-label>\r\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"passwordConfirm\"></ion-input>\r\n                  <ion-icon\r\n                    *ngIf=\"signupForm.get('passwordConfirm').dirty && signupForm.get('passwordConfirm').status === 'VALID'\"\r\n                    class=\"ion-align-self-center\" [name]=\"'checkmark-done-outline'\" color=\"success\" slot=\"end\">\r\n                  </ion-icon>\r\n                </ion-item>\r\n                <ng-container\r\n                  *ngIf=\"signupForm.get('passwordConfirm').dirty && signupForm.get('passwordConfirm').errors\">\r\n                  <ion-text *ngFor=\"let error of signupForm.get('passwordConfirm').errors | errorExtractor\"\r\n                    class=\"input-error\" color=\"danger\">\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" [disabled]=\"signupForm.status === 'INVALID' || signupForm.status === 'PENDING'\"\r\n                (click)=\"formSubmitSubject$.next()\">\r\n                {{'modules.user.signup' | translate}}\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ 1759:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_signup_signup_module_ts.js.map