(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_signin_signin_module_ts"],{

/***/ 5862:
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/signin/signin-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninPageRoutingModule: () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 5591);




const routes = [{
  path: '',
  component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
}];
let SigninPageRoutingModule = class SigninPageRoutingModule {};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SigninPageRoutingModule);


/***/ }),

/***/ 2870:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninPageModule: () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 5862);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 5591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 2898);









let SigninPageModule = class SigninPageModule {};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
    extend: true
  })],
  declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
})], SigninPageModule);


/***/ }),

/***/ 5591:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninPage: () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _signin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page.html?ngResource */ 8277);
/* harmony import */ var _signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss?ngResource */ 6592);
/* harmony import */ var _signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 2356);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 3476);
var _class;










let SigninPage = (_class = class SigninPage {
  constructor(authService, router, store, translate) {
    this.authService = authService;
    this.router = router;
    this.store = store;
    this.translate = translate;
    this.inputType = 'password';
  }
  ngOnInit() {
    this.lang = this.translate.currentLang;
    this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', {
        updateOn: 'change',
        validators: [
        // Validators.pattern('^[a-zA-Z0-9_-]+$'),
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2),
        // Validators.maxLength(60),
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', {
        updateOn: 'change',
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
      })
    });
  }
  switchInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
  onSignin() {
    const user = {
      name: this.signinForm.get('name').value,
      password: this.signinForm.get('password').value
    };
    this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.signin)({
      user
    }));
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
    } else {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
  }
}, _class.ctorParameters = () => [{
  type: _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}], _class.propDecorators = {
  signinFormDirective: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['signinFormDirective', {
      static: false
    }]
  }]
}, _class);
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-signin',
  template: _signin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SigninPage);


/***/ }),

/***/ 6592:
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.page.scss?ngResource ***!
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

/***/ 8277:
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/signin/signin.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Scores</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"switchLanguage()\" button lines=\"none\">\r\n        <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{'language' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"signinForm\" #signinFormDirective=\"ngForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          size-lg=\"6\"\r\n          size-md=\"8\"\r\n          size-sm=\"10\"\r\n          offset-lg=\"3\"\r\n          offset-md=\"2\"\r\n          offset-sm=\"1\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <!-- <div>\r\n                <img class=\"logo_signin\" src=\"/assets/banner.svg\">\r\n              </div> -->\r\n              <ion-card-title class=\"ion-text-center\"\r\n                >{{'modules.user.signin' | translate}}</ion-card-title\r\n              >\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <a button color=\"primary\" routerLink=\"/auth/signup\"\r\n                  >{{'modules.user.orSignup' | translate}}</a\r\n                >\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    name=\"person-outline\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <!-- <ion-label position=\"floating\">{{'modules.user.name' | translate}}</ion-label> -->\r\n                  <ion-input\r\n                    type=\"text\"\r\n                    autocomplete\r\n                    autocorrect\r\n                    formControlName=\"name\"\r\n                    label=\"{{'modules.user.name' | translate}}\"\r\n                    labelPlacement=\"floating\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <ng-container\r\n                  *ngIf=\"signinForm.get('name').dirty && signinForm.get('name').errors\"\r\n                >\r\n                  <ion-text\r\n                    *ngFor=\"let error of signinForm.get('name').errors | errorExtractor\"\r\n                    class=\"input-error\"\r\n                    color=\"danger\"\r\n                  >\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n                <ion-item lines=\"none\">\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    name=\"lock-closed-outline\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <!-- <ion-label position=\"floating\"\r\n                    >{{'modules.user.password' | translate}}</ion-label\r\n                  > -->\r\n                  <ion-input\r\n                    [type]=\"inputType\"\r\n                    autocomplete\r\n                    autocorrect\r\n                    formControlName=\"password\"\r\n                    label=\"{{'modules.user.password' | translate}}\"\r\n                    labelPlacement=\"floating\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    class=\"ion-align-self-center\"\r\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\"\r\n                    slot=\"end\"\r\n                    (click)=\"switchInputType()\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ng-container\r\n                  *ngIf=\"signinForm.get('password').dirty && signinForm.get('password').errors\"\r\n                >\r\n                  <ion-text\r\n                    *ngFor=\"let error of signinForm.get('password').errors | errorExtractor\"\r\n                    class=\"input-error\"\r\n                    color=\"danger\"\r\n                  >\r\n                    {{'errors.' + error | translate}}\r\n                  </ion-text>\r\n                </ng-container>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button\r\n                expand=\"block\"\r\n                [disabled]=\"signinForm.status === 'INVALID'\"\r\n                (click)=\"onSignin()\"\r\n              >\r\n                {{'modules.user.signin' | translate}}\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_signin_signin_module_ts.js.map