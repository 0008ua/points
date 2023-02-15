"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_telegram_telegram_module_ts"],{

/***/ 3063:
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramRoutingModule": () => (/* binding */ TelegramRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _telegram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component */ 2793);




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

/***/ 2793:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramComponent": () => (/* binding */ TelegramComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_telegram_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./telegram.component.html */ 4538);
/* harmony import */ var _telegram_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telegram.component.scss */ 1723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 9973);
/* harmony import */ var _telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telegram.service */ 153);







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

/***/ 4232:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramModule": () => (/* binding */ TelegramModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _telegram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram.component */ 2793);
/* harmony import */ var _telegram_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telegram-routing.module */ 3063);







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

/***/ 4538:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/telegram/telegram.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'modules.profile.telegramSetup' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"profile-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col\n        size-lg=\"6\"\n        size-md=\"8\"\n        size-sm=\"10\"\n        offset-lg=\"3\"\n        offset-md=\"2\"\n        offset-sm=\"1\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">{{\n              'modules.profile.telegramSetupTitle' | translate\n            }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-text-center\">{{\n              'modules.profile.telegramSetupDescription' | translate\n            }}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"choose-players\">\n            <ion-list class=\"choose-players__list\">\n              <ion-item\n                *ngFor=\"let gamer of gamers$ | async; let index = index\"\n                lines=\"none\"\n              >\n                <!-- <ion-item lines=\"none\"> -->\n                <div class=\"players-list\">\n                  <div class=\"players-list__color\">\n                    <div\n                      class=\"select-color\"\n                      [ngStyle]=\"{ 'background-color': gamer?.color }\"\n                    ></div>\n                  </div>\n                  <div class=\"players-list__name\">\n                    <ion-item lines=\"full\">\n                      <ion-label slot=\"start\">{{ gamer.name }} </ion-label>\n                      <ion-label slot=\"end\">\n                        <ion-button *ngIf=\"gamer.telegramSubscriptionName\" (click)=\"unsubscibeFromBot(gamer._id)\">Unsubscribe</ion-button>\n                        <ion-text color=\"primary\">{{\n                          gamer.telegramSubscriptionName\n                        }}</ion-text>\n                        {{ gamer.telegramCheckCode }}</ion-label\n                      >\n                      <!-- <ion-note slot=\"end\" color=\"danger\">\n                          <ion-icon name=\"trash-outline\"></ion-icon>\n                          <ion-icon name=\"caret-back-outline\"></ion-icon>\n                        </ion-note> -->\n                    </ion-item>\n                  </div>\n                </div>\n              </ion-item>\n\n              <!-- </ion-item> -->\n            </ion-list>\n\n            <!-- <ion-row class=\"choose-players__btn-block\">\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"secondary\"\n                  (click)=\"addPlayerHandler()\"\n                  [disabled]=\"\n                    players.length >= environment.games[gameType]?.maxPlayersQty\n                  \"\n                >\n                  {{ 'elements.button.add' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"success\"\n                  (click)=\"showCreateGamerPopup($event)\"\n                >\n                  {{ 'elements.button.create' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  fill=\"outline\"\n                  size=\"small\"\n                  color=\"danger\"\n                  (click)=\"removeAllPlayersHandler()\"\n                >\n                  {{ 'elements.button.removeAll' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"choose-players__btn-block\">\n              <ion-col>\n                <ion-button\n                  expand=\"block\"\n                  (click)=\"startGameHandler()\"\n                  [disabled]=\"\n                    players.length < 2 ||\n                    players.length > environment.games[gameType]?.maxPlayersQty\n                  \"\n                >\n                  {{ 'elements.button.startGame' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row> -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 1723:
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/telegram/telegram.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_telegram_telegram_module_ts.js.map