"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 93014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 95159:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 50153:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramService": () => (/* binding */ TelegramService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 19973);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);







let TelegramService = class TelegramService {
    constructor(http, gamerService, store) {
        this.http = http;
        this.gamerService = gamerService;
        this.store = store;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host;
    }
    unsubscibeFromBot(gamerId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http
            .patch(this.host + '/api/tg/unsubscribe/' + gamerId, null, httpOptions)
            .pipe(
        // catchError((error) => {
        //   this.store.dispatch(fromAuthActions.error({ error: error.error.message }));
        //   return throwError(error);
        // }),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.gamerService.load()));
    }
    sendMessages(messages) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post(this.host + '/api/tg/messages', messages, httpOptions);
    }
    sendMessagesThousandRoundDto(messages) {
        console.log('messages');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post(this.host + '/api/tg/messages/thousand-round', messages, httpOptions);
    }
};
TelegramService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_0__.GamerService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
TelegramService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], TelegramService);



/***/ }),

/***/ 50658:
/*!***************************************************************************!*\
  !*** ./src/app/modules/common/action-confirm/action-confirm.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionConfirmComponent": () => (/* binding */ ActionConfirmComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_action_confirm_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./action-confirm.component.html */ 50107);
/* harmony import */ var _action_confirm_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-confirm.component.scss */ 54958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let ActionConfirmComponent = class ActionConfirmComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    cancel() {
        this.modalController.dismiss(null, 'cancel');
    }
    confirm() {
        this.modalController.dismiss(null, 'confirm');
    }
};
ActionConfirmComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ActionConfirmComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ActionConfirmComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-action-confirm',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_action_confirm_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_action_confirm_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActionConfirmComponent);



/***/ }),

/***/ 31129:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/common/select-with-search/select-with-search.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWithSearchComponent": () => (/* binding */ SelectWithSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_with_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-with-search.component.html */ 7389);
/* harmony import */ var _select_with_search_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-with-search.component.scss */ 31101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let SelectWithSearchComponent = class SelectWithSearchComponent {
    constructor() {
        this.items = [];
        this.title = 'Select Items';
        this.selectionCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.searchQuery = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.ionInfinite = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.searchQuery.emit('');
    }
    cancel() {
        this.selectionCancel.emit();
    }
    confirm(item) {
        this.selectionChange.emit(item);
    }
    onSearchbarInput(event) {
        const query = event.target.value;
        const normalizedQuery = query.toLowerCase();
        this.searchQuery.emit(normalizedQuery);
    }
    onIonInfinite(event) {
        this.ionInfinite.emit();
        event.target.complete();
    }
};
SelectWithSearchComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    selectionCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    searchQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    ionInfinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SelectWithSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-select-with-search',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_with_search_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_with_search_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectWithSearchComponent);



/***/ }),

/***/ 43938:
/*!*************************************************!*\
  !*** ./src/app/modules/common/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-confirm/action-confirm.component */ 50658);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _select_with_search_select_with_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-with-search/select-with-search.component */ 31129);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ActionConfirmComponent, _select_with_search_select_with_search_component__WEBPACK_IMPORTED_MODULE_1__.SelectWithSearchComponent],
        exports: [_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ActionConfirmComponent, _select_with_search_select_with_search_component__WEBPACK_IMPORTED_MODULE_1__.SelectWithSearchComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild({
                extend: true,
            }),
        ],
    })
], SharedModule);



/***/ }),

/***/ 83161:
/*!***********************************************!*\
  !*** ./src/app/pipes/error-extractor.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorExtractorPipe": () => (/* binding */ ErrorExtractorPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let ErrorExtractorPipe = class ErrorExtractorPipe {
    transform(value, ...args) {
        const keys = [];
        if (typeof value === 'object') {
            for (const key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) {
                    keys.push(key);
                }
            }
        }
        return keys;
    }
};
ErrorExtractorPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'errorExtractor',
    })
], ErrorExtractorPipe);



/***/ }),

/***/ 91173:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _error_extractor_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-extractor.pipe */ 83161);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_error_extractor_pipe__WEBPACK_IMPORTED_MODULE_0__.ErrorExtractorPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_error_extractor_pipe__WEBPACK_IMPORTED_MODULE_0__.ErrorExtractorPipe],
    })
], PipesModule);



/***/ }),

/***/ 50107:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/common/action-confirm/action-confirm.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ data?.title | translate }}?</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">{{\n        'elements.button.close' | translate\n      }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"finish-game-modal\">\n    <div class=\"finish-game-modal__text\">\n      <p class=\"ion-padding-horizontal\">\n        {{ data?.text | translate }}\n      </p>\n    </div>\n    <div class=\"finish-game-modal__buttons\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-button (click)=\"cancel()\" expand=\"block\">{{\n              data?.cancelBtnText | translate\n            }}</ion-button>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-button (click)=\"confirm()\" fill=\"outline\" expand=\"block\">{{\n              data?.confirmBtnText | translate\n            }}</ion-button></ion-col\n          >\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 7389:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/common/select-with-search/select-with-search.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"ion-page\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"cancel()\">Cancel</ion-button>\n      </ion-buttons>\n      <ion-title>{{ title }}</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar (ionInput)=\"onSearchbarInput($event)\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ion-padding\">\n    <ion-item>\n      <ion-label>\n        {{items.length + ' of ' + totalItems + ' items'}}\n      </ion-label>\n    </ion-item>\n    <ion-list id=\"modal-list\">\n      <ion-item\n        *ngFor=\"let item of items; let i = index\"\n        button=\"true\"\n        detail=\"true\"\n        (click)=\"confirm(item)\"\n      >\n        <ion-label>{{ i + '. ' + item.name }}</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-content>\n</div>\n");

/***/ }),

/***/ 54958:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/common/action-confirm/action-confirm.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 31101:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/common/select-with-search/select-with-search.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Qtd2l0aC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=common.js.map