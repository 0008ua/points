"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_games_games_module_ts"],{

/***/ 24180:
/*!*******************************************************!*\
  !*** ./src/app/modules/games/games-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPageRoutingModule": () => (/* binding */ GamesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.page */ 94554);




const routes = [
    {
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_0__.GamesPage,
        children: [
            {
                path: ':id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_games_game_game_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./game/game.module */ 60770)).then((m) => m.GamePageModule),
            },
            // {
            //   path: 'train',
            //   loadChildren: () => import('./train/train.module').then(m => m.TrainPageModule)
            // },
            // {
            //   path: 'uno',
            //   loadChildren: () => import('./uno/uno.module').then(m => m.UnoPageModule)
            // },
            // {
            //   path: 'cards',
            //   loadChildren: () => import('./cards/cards.module').then(m => m.CardsPageModule)
            // },
            // {
            //   path: '',
            //   redirectTo: 'uno',
            //   pathMatch: 'full',
            // },
            {
                path: '**',
                redirectTo: 'rummy',
            },
        ],
    },
];
let GamesPageRoutingModule = class GamesPageRoutingModule {
};
GamesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamesPageRoutingModule);



/***/ }),

/***/ 87391:
/*!***********************************************!*\
  !*** ./src/app/modules/games/games.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPageModule": () => (/* binding */ GamesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-routing.module */ 24180);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page */ 94554);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let GamesPageModule = class GamesPageModule {
};
GamesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_1__.GamesPage],
    })
], GamesPageModule);



/***/ }),

/***/ 94554:
/*!*********************************************!*\
  !*** ./src/app/modules/games/games.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPage": () => (/* binding */ GamesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_games_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./games.page.html */ 96922);
/* harmony import */ var _games_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page.scss */ 5181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 70018);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 24433);









let GamesPage = class GamesPage {
    constructor(store, translate, menuController) {
        this.store = store;
        this.translate = translate;
        this.menuController = menuController;
    }
    ngOnInit() {
        this.userRole$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUserRole);
        this.user$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.selectUser);
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'games-menu');
    }
    onLogout() {
        this.store.dispatch((0,src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.logout)());
    }
    switchLanguage() {
        this.lang = this.lang === 'en' ? 'uk' : 'en';
        this.translate.use(this.lang);
    }
};
GamesPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
GamesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-games',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_games_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_games_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GamesPage);



/***/ }),

/***/ 96922:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/games.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu menuId=\"games-menu\" side=\"end\" contentId=\"games-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\">{{(user$ | async).name }}</h2>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'guest'\">Guest</h2>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-menu-toggle auto-hide=\"false\" menu=\"games-menu\">\r\n        <ion-item routerLink=\"/games/train\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <ion-icon name=\"train-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.train.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item routerLink=\"/games/rummy\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <ion-icon name=\"journal-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.rummy.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item routerLink=\"/games/uno\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <ion-icon name=\"invert-mode-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.uno.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item routerLink=\"/games/thousand\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <ion-icon name=\"layers-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.thousand.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item-divider></ion-item-divider>\r\n        <ion-item button (click)=\"switchLanguage()\">\r\n          <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'language' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\" button (click)=\"onLogout()\">\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.logout' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(userRole$ | async) === 'guest'\" routerLink=\"/auth/signin\" routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.signin' | translate}}</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"games-content\"></ion-router-outlet>");

/***/ }),

/***/ 5181:
/*!***********************************************!*\
  !*** ./src/app/modules/games/games.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_games_games_module_ts.js.map