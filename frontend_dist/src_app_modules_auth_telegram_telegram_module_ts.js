"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_telegram_telegram_module_ts"],{

/***/ 43063:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramRoutingModule": () => (/* binding */ TelegramRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _telegram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component */ 92793);




const routes = [
    {
        path: '',
        component: _telegram_component__WEBPACK_IMPORTED_MODULE_0__.TelegramComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let TelegramRoutingModule = class TelegramRoutingModule {
};
TelegramRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TelegramRoutingModule);



/***/ }),

/***/ 92793:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramComponent": () => (/* binding */ TelegramComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_telegram_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./telegram.component.html */ 84538);
/* harmony import */ var _telegram_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telegram.component.scss */ 41723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 19973);
/* harmony import */ var _telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telegram.service */ 50153);







let TelegramComponent = class TelegramComponent {
    constructor(store, gamerService, telegramService) {
        this.store = store;
        this.gamerService = gamerService;
        this.telegramService = telegramService;
    }
    ngOnInit() {
        this.gamers$ = this.gamerService.entities$;
    }
    unsubscibeFromBot(gamerId) {
        this.telegramService.unsubscibeFromBot(gamerId).subscribe((result) => {
            console.log('unsubscibeFromBot result', result);
        }, (error) => {
            console.log('unsubscibeFromBot error', error);
        });
    }
};
TelegramComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__.GamerService },
    { type: _telegram_service__WEBPACK_IMPORTED_MODULE_3__.TelegramService }
];
TelegramComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-telegram',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_telegram_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_telegram_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TelegramComponent);



/***/ }),

/***/ 64232:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramModule": () => (/* binding */ TelegramModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _telegram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component */ 92793);
/* harmony import */ var _telegram_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telegram-routing.module */ 43063);







let TelegramModule = class TelegramModule {
};
TelegramModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_telegram_component__WEBPACK_IMPORTED_MODULE_0__.TelegramComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _telegram_routing_module__WEBPACK_IMPORTED_MODULE_1__.TelegramRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild({
                extend: true,
            }),
        ],
    })
], TelegramModule);



/***/ }),

/***/ 84538:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/telegram/telegram.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'modules.profile.telegramSetup' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"profile-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col\n        size-lg=\"6\"\n        size-md=\"8\"\n        size-sm=\"10\"\n        offset-lg=\"3\"\n        offset-md=\"2\"\n        offset-sm=\"1\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">{{\n              'modules.profile.telegramSetupTitle' | translate\n            }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-text-center\">{{\n              'modules.profile.telegramSetupDescription' | translate\n            }}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"choose-players\">\n            <ion-list class=\"choose-players__list\">\n              <ion-item\n                *ngFor=\"let gamer of gamers$ | async; let index = index\"\n                lines=\"none\"\n              >\n                <!-- <ion-item lines=\"none\"> -->\n                <div class=\"players-list\">\n                  <div class=\"players-list__color\">\n                    <div\n                      class=\"select-color\"\n                      [ngStyle]=\"{ 'background-color': gamer?.color }\"\n                    ></div>\n                  </div>\n                  <div class=\"players-list__info\">\n                    <ion-item lines=\"full\">\n                      <ion-label class=\"players-list-info\">\n                        <ion-text\n                          class=\"players-list-info__item players-list-info__item_name\"\n                          color=\"primary\"\n                          >{{ gamer.name }}</ion-text\n                        >\n                        <ion-button\n                        size=\"small\"\n                          *ngIf=\"gamer.telegramSubscriptionName\"\n                          class=\"players-list-info__item players-list-info__item_btn\"\n                          (click)=\"unsubscibeFromBot(gamer._id)\"\n                          >{{'elements.button.unsubscribe' | translate}}\n                          {{ gamer.telegramSubscriptionName }}</ion-button\n                        >\n                        <ion-text\n                          class=\"players-list-info__item players-list-info__item_code\"\n                          color=\"primary\"\n                          >{{ gamer.telegramCheckCode }}</ion-text\n                        >\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </div>\n              </ion-item>\n\n              <!-- </ion-item> -->\n            </ion-list>\n\n            <!-- <ion-row class=\"choose-players__btn-block\">\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"secondary\"\n                  (click)=\"addPlayerHandler()\"\n                  [disabled]=\"\n                    players.length >= environment.games[gameType]?.maxPlayersQty\n                  \"\n                >\n                  {{ 'elements.button.add' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"success\"\n                  (click)=\"showCreateGamerPopup($event)\"\n                >\n                  {{ 'elements.button.create' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"danger\"\n                  (click)=\"removeAllPlayersHandler()\"\n                >\n                  {{ 'elements.button.removeAll' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"choose-players__btn-block\">\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  (click)=\"startGameHandler()\"\n                  [disabled]=\"\n                    players.length < 2 ||\n                    players.length > environment.games[gameType]?.maxPlayersQty\n                  \"\n                >\n                  {{ 'elements.button.startGame' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row> -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 41723:
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_telegram_telegram_module_ts.js.map