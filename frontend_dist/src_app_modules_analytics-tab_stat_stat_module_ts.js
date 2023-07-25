(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_analytics-tab_stat_stat_module_ts"],{

/***/ 2927:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RummyPage: () => (/* binding */ RummyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _rummy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rummy.page.html?ngResource */ 6020);
/* harmony import */ var _rummy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rummy.page.scss?ngResource */ 5593);
/* harmony import */ var _rummy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rummy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 4042);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 7157);
var _class;
var RummyPage_1;






let RummyPage = RummyPage_1 = (_class = class RummyPage extends _stat_directive__WEBPACK_IMPORTED_MODULE_3__.StatBaseDirective {
  constructor() {
    super();
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
RummyPage = RummyPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-rummy',
  template: _rummy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__.STAT_COMPONENT,
    useExisting: RummyPage_1
  }],
  styles: [(_rummy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RummyPage);


/***/ }),

/***/ 4042:
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-interfaces.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STAT_COMPONENT: () => (/* binding */ STAT_COMPONENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const STAT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('statComponent');

/***/ }),

/***/ 2846:
/*!*******************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatRoutingModule: () => (/* binding */ StatRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 8262);




const routes = [{
  path: '',
  component: _stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent
}];
let StatRoutingModule = class StatRoutingModule {};
StatRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], StatRoutingModule);


/***/ }),

/***/ 5679:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatWrapperComponent: () => (/* binding */ StatWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _stat_wrapper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat-wrapper.component.html?ngResource */ 425);
/* harmony import */ var _stat_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-wrapper.component.scss?ngResource */ 1472);
/* harmony import */ var _stat_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stat_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 6068);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat-interfaces */ 4042);
var _class;







let StatWrapperComponent = (_class = class StatWrapperComponent {
  constructor(store) {
    this.store = store;
    this.array = Array;
  }
  ngOnInit() {
    this.loading$ = this.store.select(src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store
}], _class.propDecorators = {
  gameType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  stat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  statComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ContentChild,
    args: [_stat_interfaces__WEBPACK_IMPORTED_MODULE_3__.STAT_COMPONENT, {
      static: true
    }]
  }]
}, _class);
StatWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-stat-wrapper',
  template: _stat_wrapper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_stat_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StatWrapperComponent);


/***/ }),

/***/ 8262:
/*!**************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatComponent: () => (/* binding */ StatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _stat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component.html?ngResource */ 8506);
/* harmony import */ var _stat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat.component.scss?ngResource */ 2088);
/* harmony import */ var _stat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/analytics.actions */ 4404);
/* harmony import */ var src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/analytics.reducer */ 6068);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;









let StatComponent = (_class = class StatComponent {
  constructor(store, route) {
    this.store = store;
    this.route = route;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameType = params.id;
      this.stats = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.games[this.gameType].stats;
      if (!this.stat) {
        this.stat = this.stats[0];
      }
      console.log('gameType', this.gameType);
      this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stat._id]({
        gameType: this.gameType
      }));
    });
    this.analytics$ = this.store.select(src_app_store_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_3__.selectRating);
  }
  onMenuClickHandler(e) {
    this.stat = e.target.value;
    this.store.dispatch(src_app_store_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_2__[this.stat._id]({
      gameType: this.gameType
    }));
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}], _class);
StatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-stat',
  template: _stat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_stat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], StatComponent);


/***/ }),

/***/ 7157:
/*!**************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatBaseDirective: () => (/* binding */ StatBaseDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


let StatBaseDirective = (_class = class StatBaseDirective {
  constructor() {
    this.math = Math;
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class.propDecorators = {
  gameType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  analytics$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  stat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
}, _class);
StatBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appStat]'
})], StatBaseDirective);


/***/ }),

/***/ 381:
/*!***********************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatModule: () => (/* binding */ StatModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 8262);
/* harmony import */ var _stat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-routing.module */ 2846);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _rummy_rummy_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rummy/rummy.page */ 2927);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _train_train_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train/train.page */ 3686);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _stat_wrapper_stat_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-wrapper/stat-wrapper.component */ 5679);
/* harmony import */ var _thousand_thousand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thousand/thousand.component */ 4332);












let StatModule = class StatModule {};
StatModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent, _stat_wrapper_stat_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.StatWrapperComponent, _rummy_rummy_page__WEBPACK_IMPORTED_MODULE_2__.RummyPage, _train_train_page__WEBPACK_IMPORTED_MODULE_3__.TrainPage, _thousand_thousand_component__WEBPACK_IMPORTED_MODULE_5__.ThousandComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _stat_routing_module__WEBPACK_IMPORTED_MODULE_1__.StatRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
    extend: true
  })]
  // exports: [StatWrapperComponent, RummyPage, TrainPage],
})], StatModule);


/***/ }),

/***/ 4332:
/*!***************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/thousand/thousand.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThousandComponent: () => (/* binding */ ThousandComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _thousand_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thousand.component.html?ngResource */ 5305);
/* harmony import */ var _thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thousand.component.scss?ngResource */ 6773);
/* harmony import */ var _thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 4042);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 7157);
var _class;
var ThousandComponent_1;






let ThousandComponent = ThousandComponent_1 = (_class = class ThousandComponent extends _stat_directive__WEBPACK_IMPORTED_MODULE_3__.StatBaseDirective {
  constructor() {
    super();
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
ThousandComponent = ThousandComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-thousand',
  template: _thousand_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__.STAT_COMPONENT,
    useExisting: ThousandComponent_1
  }],
  styles: [(_thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ThousandComponent);


/***/ }),

/***/ 3686:
/*!****************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrainPage: () => (/* binding */ TrainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _train_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./train.page.html?ngResource */ 4931);
/* harmony import */ var _train_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./train.page.scss?ngResource */ 7128);
/* harmony import */ var _train_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_train_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stat-interfaces */ 4042);
/* harmony import */ var _stat_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stat.directive */ 7157);
var _class;
var TrainPage_1;






let TrainPage = TrainPage_1 = (_class = class TrainPage extends _stat_directive__WEBPACK_IMPORTED_MODULE_3__.StatBaseDirective {
  constructor() {
    super();
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
TrainPage = TrainPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-train',
  template: _train_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _stat_interfaces__WEBPACK_IMPORTED_MODULE_2__.STAT_COMPONENT,
    useExisting: TrainPage_1
  }],
  styles: [(_train_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TrainPage);


/***/ }),

/***/ 5593:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1472:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2088:
/*!***************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.component.scss?ngResource ***!
  \***************************************************************************/
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

/***/ 6773:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/thousand/thousand.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7128:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6020:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/rummy/rummy.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\r\n  <div\r\n    slot=\"start\"\r\n    [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\"\r\n  >\r\n    {{idx+1}}\r\n  </div>\r\n  <ion-label> {{player.name}} </ion-label>\r\n\r\n  <ion-text slot=\"end\" color=\"primary\">\r\n    <ion-text class=\"bold\" [color]=\"player.rating.scores < 0 ? 'danger' : 'success'\">\r\n      {{player.rating.scores}}</ion-text\r\n    >\r\n    / {{player.rating.totalGames}} / {{player.rating.wins}}\r\n  </ion-text>\r\n</ion-item>";

/***/ }),

/***/ 425:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat-wrapper/stat-wrapper.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\">{{ 'games.' + gameType + '.name' | translate }}</ion-card-title>\n    <ion-card-subtitle class=\"ion-text-center\"\n      >{{ ('modules.analytics.' + stat?.name) | translate }}\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-list *ngIf=\"(loading$ | async) === true\">\n      <ion-item lines=\"none\" *ngFor=\"let x of array(5).fill('')\">\n        <ion-skeleton-text slot=\"start\" animated style=\"width: 60%\"> </ion-skeleton-text>\n        <ion-skeleton-text slot=\"end\" animated> </ion-skeleton-text>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"(loading$ | async) === false\">\n       <ng-content></ng-content>\n     </ion-list>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 8506:
/*!***************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/stat.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"analytics-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-segment *ngIf=\"stats?.length\" [value]=\"stats[0]\" (ionChange)=\"onMenuClickHandler($event)\">\n      <ion-segment-button *ngFor=\"let stat of stats; let idx = index\" [value]=\"stat\">\n        <ion-icon [name]=\"stat.icon\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col size-lg=\"6\" size-md=\"8\" size-sm=\"10\" offset-lg=\"3\" offset-md=\"2\" offset-sm=\"1\">\n        <app-stat-wrapper *ngIf=\"gameType === 'train'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-train [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-train>\n        </app-stat-wrapper>\n        <app-stat-wrapper *ngIf=\"gameType === 'rummy'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-rummy [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-rummy>\n        </app-stat-wrapper>\n        <app-stat-wrapper *ngIf=\"gameType === 'thousand'\" [gameType]=\"gameType\" [stat]=\"stat\">\n          <app-thousand [gameType]=\"gameType\" [analytics$]=\"analytics$\" [stat]=\"stat\"></app-thousand>\n        </app-stat-wrapper>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 5305:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/thousand/thousand.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\n  <div\n    slot=\"start\"\n    [ngStyle]=\"{\n                  'border-right': '6px solid ' + player.color,\n                  'padding-right': '10px'\n                }\"\n  >\n    {{idx+1}}\n  </div>\n  <ion-label> {{player.name}} </ion-label>\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWins'\" slot=\"end\" color=\"primary\">\n    {{player.rating.wins}}\n  </ion-text>\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWinsToGames'\" slot=\"end\" color=\"primary\">\n    {{player.rating.wins}} / {{player.rating.gamesCount}}\n    <ion-text class=\"bold\"\n      >( {{player.rating.wins ? math.floor(player.rating.winsToGames * 100) : 0}}% )\n    </ion-text>\n  </ion-text>\n</ion-item>";

/***/ }),

/***/ 4931:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/analytics-tab/stat/train/train.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item *ngFor=\"let player of (analytics$ | async); let idx = index\">\r\n  <div\r\n    slot=\"start\"\r\n    [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\"\r\n  >\r\n    {{idx+1}}\r\n  </div>\r\n  <ion-label> {{player.name}} </ion-label>\r\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWins'\" slot=\"end\" color=\"primary\">\r\n    {{player.rating.wins}}\r\n  </ion-text>\r\n  <ion-text *ngIf=\"stat?._id === 'getRatingByWinsToGames'\" slot=\"end\" color=\"primary\">\r\n    {{player.rating.wins}} / {{player.rating.gamesCount}}\r\n    <ion-text class=\"bold\"\r\n      >( {{player.rating.wins ? math.floor(player.rating.winsToGames * 100) : 0}}% )\r\n    </ion-text>\r\n  </ion-text>\r\n</ion-item>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_analytics-tab_stat_stat_module_ts.js.map