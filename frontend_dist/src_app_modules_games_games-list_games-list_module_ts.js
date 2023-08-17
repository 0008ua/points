(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_games_games-list_games-list_module_ts"],{

/***/ 3264:
/*!***********************************************************************!*\
  !*** ./src/app/modules/games/games-list/games-list-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesListPageRoutingModule: () => (/* binding */ GamesListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _games_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-list.page */ 9857);




const routes = [{
  path: '',
  component: _games_list_page__WEBPACK_IMPORTED_MODULE_0__.GamesListPage
}];
let GamesListPageRoutingModule = class GamesListPageRoutingModule {};
GamesListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], GamesListPageRoutingModule);


/***/ }),

/***/ 1264:
/*!***************************************************************!*\
  !*** ./src/app/modules/games/games-list/games-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesListPageModule: () => (/* binding */ GamesListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _games_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-list-routing.module */ 3264);
/* harmony import */ var _games_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games-list.page */ 9857);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 1916);








let GamesListPageModule = class GamesListPageModule {};
GamesListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _games_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
    extend: true
  })],
  declarations: [_games_list_page__WEBPACK_IMPORTED_MODULE_1__.GamesListPage]
})], GamesListPageModule);


/***/ }),

/***/ 9857:
/*!*************************************************************!*\
  !*** ./src/app/modules/games/games-list/games-list.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesListPage: () => (/* binding */ GamesListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _games_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-list.page.html?ngResource */ 9393);
/* harmony import */ var _games_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games-list.page.scss?ngResource */ 1656);
/* harmony import */ var _games_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_games_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _analytics_tab_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../analytics-tab/analytics.service */ 7552);
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces */ 3038);
var _class;






let GamesListPage = (_class = class GamesListPage {
  constructor() {
    this.gameTypes = src_app_interfaces__WEBPACK_IMPORTED_MODULE_3__.gameTypes;
    this.analyticsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_analytics_tab_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService);
  }
  ngOnInit() {
    this.analyticsService.getPlayedGamesCount().subscribe(playedGamesCountArr => {
      this.playedGamesCount = playedGamesCountArr.reduce((obj, cur) => ({
        ...obj,
        [cur.gameType]: cur.count
      }), {});
    });
  }
}, _class.ctorParameters = () => [], _class);
GamesListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-games-list',
  template: _games_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_games_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GamesListPage);


/***/ }),

/***/ 1656:
/*!**************************************************************************!*\
  !*** ./src/app/modules/games/games-list/games-list.page.scss?ngResource ***!
  \**************************************************************************/
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

/***/ 9393:
/*!**************************************************************************!*\
  !*** ./src/app/modules/games/games-list/games-list.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title size=\"large\">{{'modules.games.name' | translate}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"games-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col\n        size-lg=\"4\"\n        size-md=\"6\"\n        size-sm=\"8\"\n        size-xs=\"10\"\n        offset-lg=\"4\"\n        offset-md=\"3\"\n        offset-sm=\"2\"\n        offset-xs=\"1\"\n      >\n        <ion-card *ngFor=\"let game of gameTypes; let i = index\">\n          <img [alt]=\"'Game ' + game\" [src]=\"'https://picsum.photos/id/' + (i + 20 )+ '/1024/512'\" />\n          <ion-card-header>\n            <ion-card-title>{{'games.' + game + '.name' | translate}}</ion-card-title>\n            <ion-card-subtitle>\n              {{'modules.analytics.played' | translate}}\n              <ion-text color=\"tertiary\">\n                {{playedGamesCount && playedGamesCount[game]}}\n              </ion-text>\n              {{'modules.analytics.times' | translate}}\n            </ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            {{'games.' + game + '.description' | translate}}\n          </ion-card-content>\n          <ion-button\n            expand=\"full\"\n            fill=\"clear\"\n            color=\"primary\"\n            [routerLink]=\"'/games/' + game\"\n            routerLinkActive=\"active-link\"\n            [routerLinkActiveOptions]=\"{exact: true}\"\n            >{{'elements.button.startGame' | translate}}</ion-button\n          >\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_games_games-list_games-list_module_ts.js.map