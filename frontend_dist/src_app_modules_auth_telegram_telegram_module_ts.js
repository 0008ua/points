(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_telegram_telegram_module_ts"],{

/***/ 3964:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TelegramRoutingModule: () => (/* binding */ TelegramRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _telegram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component */ 4872);




const routes = [{
  path: '',
  component: _telegram_component__WEBPACK_IMPORTED_MODULE_0__.TelegramComponent
}, {
  path: '**',
  redirectTo: ''
}];
let TelegramRoutingModule = class TelegramRoutingModule {};
TelegramRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TelegramRoutingModule);


/***/ }),

/***/ 4872:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TelegramComponent: () => (/* binding */ TelegramComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _telegram_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component.html?ngResource */ 9686);
/* harmony import */ var _telegram_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telegram.component.scss?ngResource */ 8137);
/* harmony import */ var _telegram_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telegram_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 7313);
/* harmony import */ var _telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telegram.service */ 8686);
var _class;







let TelegramComponent = (_class = class TelegramComponent {
  constructor(store, gamerService, telegramService) {
    this.store = store;
    this.gamerService = gamerService;
    this.telegramService = telegramService;
  }
  ngOnInit() {
    this.gamers$ = this.gamerService.entities$;
  }
  unsubscibeFromBot(gamerId) {
    this.telegramService.unsubscibeFromBot(gamerId).subscribe(result => {
      console.log('unsubscibeFromBot result', result);
    }, error => {
      console.log('unsubscibeFromBot error', error);
    });
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store
}, {
  type: src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__.GamerService
}, {
  type: _telegram_service__WEBPACK_IMPORTED_MODULE_3__.TelegramService
}], _class);
TelegramComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-telegram',
  template: _telegram_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_telegram_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TelegramComponent);


/***/ }),

/***/ 8015:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TelegramModule: () => (/* binding */ TelegramModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _telegram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component */ 4872);
/* harmony import */ var _telegram_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telegram-routing.module */ 3964);







let TelegramModule = class TelegramModule {};
TelegramModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_telegram_component__WEBPACK_IMPORTED_MODULE_0__.TelegramComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _telegram_routing_module__WEBPACK_IMPORTED_MODULE_1__.TelegramRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild({
    extend: true
  })]
})], TelegramModule);


/***/ }),

/***/ 8137:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.scss?ngResource ***!
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

/***/ 9686:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'modules.profile.telegramSetup' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"profile-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col\n        size-lg=\"6\"\n        size-md=\"8\"\n        size-sm=\"10\"\n        offset-lg=\"3\"\n        offset-md=\"2\"\n        offset-sm=\"1\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">{{\n              'modules.profile.telegramSetupTitle' | translate\n            }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-text-center\">{{\n              'modules.profile.telegramSetupDescription' | translate\n            }}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"choose-players\">\n            <ion-list class=\"choose-players__list\">\n              <ion-item\n                *ngFor=\"let gamer of gamers$ | async; let index = index\"\n                lines=\"none\"\n              >\n                <!-- <ion-item lines=\"none\"> -->\n                <div class=\"players-list\">\n                  <div class=\"players-list__color\">\n                    <div\n                      class=\"select-color\"\n                      [ngStyle]=\"{ 'background-color': gamer?.color }\"\n                    ></div>\n                  </div>\n                  <div class=\"players-list__info\">\n                    <ion-item lines=\"full\">\n                      <ion-label class=\"players-list-info\">\n                        <ion-text\n                          class=\"players-list-info__item players-list-info__item_name\"\n                          color=\"primary\"\n                          >{{ gamer.name }}</ion-text\n                        >\n                        <ion-button\n                        size=\"small\"\n                          *ngIf=\"gamer.telegramSubscriptionName\"\n                          class=\"players-list-info__item players-list-info__item_btn\"\n                          (click)=\"unsubscibeFromBot(gamer._id)\"\n                          >{{'elements.button.unsubscribe' | translate}}\n                          {{ gamer.telegramSubscriptionName }}</ion-button\n                        >\n                        <ion-text\n                          class=\"players-list-info__item players-list-info__item_code\"\n                          color=\"primary\"\n                          >{{ gamer.telegramCheckCode }}</ion-text\n                        >\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </div>\n              </ion-item>\n\n              <!-- </ion-item> -->\n            </ion-list>\n\n            <!-- <ion-row class=\"choose-players__btn-block\">\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"secondary\"\n                  (click)=\"addPlayerHandler()\"\n                  [disabled]=\"\n                    players.length >= environment.games[gameType]?.maxPlayersQty\n                  \"\n                >\n                  {{ 'elements.button.add' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"success\"\n                  (click)=\"showCreateGamerPopup($event)\"\n                >\n                  {{ 'elements.button.create' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"danger\"\n                  (click)=\"removeAllPlayersHandler()\"\n                >\n                  {{ 'elements.button.removeAll' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"choose-players__btn-block\">\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  (click)=\"startGameHandler()\"\n                  [disabled]=\"\n                    players.length < 2 ||\n                    players.length > environment.games[gameType]?.maxPlayersQty\n                  \"\n                >\n                  {{ 'elements.button.startGame' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row> -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_telegram_telegram_module_ts.js.map