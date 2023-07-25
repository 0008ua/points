(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_signup_signup_module_ts"],{

/***/ 7928:
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/signup/signup-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageRoutingModule: () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 3216);




const routes = [{
  path: '',
  component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
}];
let SignupPageRoutingModule = class SignupPageRoutingModule {};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SignupPageRoutingModule);


/***/ }),

/***/ 3671:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageModule: () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 7928);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 3216);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 2898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 1916);









let SignupPageModule = class SignupPageModule {};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
    extend: true
  }), _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
  declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
})], SignupPageModule);


/***/ }),

/***/ 3216:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPage: () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 4491);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2573);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 2356);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 3476);
var _class;












let SignupPage = (_class = class SignupPage {
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
    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', {
        updateOn: 'change',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_\\-]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        // asyncValidators: [
        //   this.userService.checkLoginUnique(),
        // ],
      }),

      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', {
        updateOn: 'change',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_\\-]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', {
        updateOn: 'change',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_\\-]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      })
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
    this.formSubmitSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.signupForm.markAsDirty()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.signupForm.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(this.signupForm.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(status => status !== 'PENDING'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(status => status === 'VALID')).subscribe(validationSuccessful => this.onSignup());
  }
  switchInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
  onSignup() {
    const user = {
      name: this.signupForm.get('name').value,
      password: this.signupForm.get('password').value
    };
    this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.signup)({
      user
    }));
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
    } else {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
  }
}, _class.ctorParameters = () => [{
  type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
}, {
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store
}], _class.propDecorators = {
  signupFormDirective: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ['signupFormDirective', {
      static: false
    }]
  }]
}, _class);
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SignupPage);


/***/ }),

/***/ 2573:
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4491:
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/signup/signup.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Scores</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"switchLanguage()\" button lines=\"none\">\r\n        <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{'language' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"signupForm\" *ngIf=\"signupForm\" #signupFormDirective=\"ngForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          size-lg=\"6\"\r\n          size-md=\"8\"\r\n          size-sm=\"10\"\r\n          offset-lg=\"3\"\r\n          offset-md=\"2\"\r\n          offset-sm=\"1\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <div>\r\n                <img class=\"logo_signin\" src=\"/assets/banner.svg\" />\r\n              </div>\r\n              <ion-card-title class=\"ion-text-center\"\r\n                >{{'modules.user.signup' | translate}}</ion-card-title\r\n              >\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <a button color=\"primary\" routerLink=\"tabs/signin\"\r\n                  >{{'modules.user.orSignin' | translate}}</a\r\n                >\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    name=\"person-outline\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <!-- <ion-label position=\"floating\">{{'modules.user.name' | translate}}</ion-label> -->\r\n                  <ion-input\r\n                    type=\"text\"\r\n                    autocomplete\r\n                    autocorrect\r\n                    formControlName=\"name\"\r\n                    label=\"{{'modules.user.name' | translate}}\"\r\n                    labelPlacement=\"floating\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <ng-container\r\n                  *ngIf=\"signupForm.get('name').dirty && signupForm.get('name').errors\"\r\n                >\r\n                  <ion-text\r\n                    *ngFor=\"let error of signupForm.get('name').errors | errorExtractor\"\r\n                    class=\"input-error\"\r\n                    color=\"danger\"\r\n                  >\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    name=\"lock-closed-outline\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <!-- <ion-label position=\"floating\"\r\n                    >{{'modules.user.password' | translate}}</ion-label\r\n                  > -->\r\n                  <ion-input\r\n                    [type]=\"inputType\"\r\n                    autocomplete\r\n                    autocorrect\r\n                    formControlName=\"password\"\r\n                    label=\"{{'modules.user.password' | translate}}\"\r\n                    labelPlacement=\"floating\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\"\r\n                    slot=\"end\"\r\n                    (click)=\"switchInputType()\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ng-container\r\n                  *ngIf=\"signupForm.get('password').dirty && signupForm.get('password').errors\"\r\n                >\r\n                  <ion-text\r\n                    *ngFor=\"let error of signupForm.get('password').errors | errorExtractor\"\r\n                    class=\"input-error\"\r\n                    color=\"danger\"\r\n                  >\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    name=\"reorder-two-outline\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <!-- <ion-label position=\"floating\"\r\n                    >{{'modules.user.confirmPassword' | translate}}</ion-label\r\n                  > -->\r\n                  <ion-input\r\n                    [type]=\"inputType\"\r\n                    autocomplete\r\n                    autocorrect\r\n                    formControlName=\"passwordConfirm\"\r\n                    label=\"{{'modules.user.confirmPassword' | translate}}\"\r\n                    labelPlacement=\"floating\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    *ngIf=\"signupForm.get('passwordConfirm').dirty && signupForm.get('passwordConfirm').status === 'VALID'\"\r\n                    class=\"ion-align-self-center\"\r\n                    [name]=\"'checkmark-done-outline'\"\r\n                    color=\"success\"\r\n                    slot=\"end\"\r\n                  >\r\n                  </ion-icon>\r\n                </ion-item>\r\n                <ng-container\r\n                  *ngIf=\"signupForm.get('passwordConfirm').dirty && signupForm.get('passwordConfirm').errors\"\r\n                >\r\n                  <ion-text\r\n                    *ngFor=\"let error of signupForm.get('passwordConfirm').errors | errorExtractor\"\r\n                    class=\"input-error\"\r\n                    color=\"danger\"\r\n                  >\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                expand=\"block\"\r\n                [disabled]=\"signupForm.status === 'INVALID' || signupForm.status === 'PENDING'\"\r\n                (click)=\"formSubmitSubject$.next()\"\r\n              >\r\n                {{'modules.user.signup' | translate}}\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_signup_signup_module_ts.js.map