(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_games_games_module_ts"],{

/***/ 7786:
/*!*******************************************************!*\
  !*** ./src/app/modules/games/games-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesPageRoutingModule: () => (/* binding */ GamesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.page */ 6140);




const routes = [
// {
//   path: '',
//   component: GamesPage,
//   children: [
//     {
//       path: ':id',
//       loadChildren: () => import('./game/game.module').then((m) => m.GamePageModule),
//     },
//     // {
//     //   path: 'train',
//     //   loadChildren: () => import('./train/train.module').then(m => m.TrainPageModule)
//     // },
//     // {
//     //   path: 'uno',
//     //   loadChildren: () => import('./uno/uno.module').then(m => m.UnoPageModule)
//     // },
//     // {
//     //   path: 'cards',
//     //   loadChildren: () => import('./cards/cards.module').then(m => m.CardsPageModule)
//     // },
//     // {
//     //   path: '',
//     //   redirectTo: 'uno',
//     //   pathMatch: 'full',
//     // },
//     {
//       path: '**',
//       redirectTo: 'list',
//     },
//   ],
// },
{
  path: '',
  component: _games_page__WEBPACK_IMPORTED_MODULE_0__.GamesPage,
  children: [{
    path: 'list',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_games_games-list_games-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./games-list/games-list.module */ 1264)).then(m => m.GamesListPageModule)
  }, {
    path: ':id',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_games_game_game_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./game/game.module */ 1124)).then(m => m.GamePageModule)
  }, {
    path: '**',
    redirectTo: 'list'
  }]
}];
let GamesPageRoutingModule = class GamesPageRoutingModule {};
GamesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], GamesPageRoutingModule);


/***/ }),

/***/ 7182:
/*!***********************************************!*\
  !*** ./src/app/modules/games/games.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesPageModule: () => (/* binding */ GamesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-routing.module */ 7786);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page */ 6140);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 1916);








let GamesPageModule = class GamesPageModule {};
GamesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
    extend: true
  })],
  declarations: [_games_page__WEBPACK_IMPORTED_MODULE_1__.GamesPage]
})], GamesPageModule);


/***/ }),

/***/ 6140:
/*!*********************************************!*\
  !*** ./src/app/modules/games/games.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesPage: () => (/* binding */ GamesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _games_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.page.html?ngResource */ 2060);
/* harmony import */ var _games_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page.scss?ngResource */ 2788);
/* harmony import */ var _games_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_games_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ 2356);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 9580);
var _class;









let GamesPage = (_class = class GamesPage {
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
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}], _class);
GamesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-games',
  template: _games_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_games_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GamesPage);


/***/ }),

/***/ 2788:
/*!**********************************************************!*\
  !*** ./src/app/modules/games/games.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2060:
/*!**********************************************************!*\
  !*** ./src/app/modules/games/games.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu menuId=\"games-menu\" side=\"end\" contentId=\"games-content\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-title>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\">\r\n          {{(user$ | async).name }}\r\n        </h2>\r\n        <h2 *ngIf=\"(userRole$ | async) === 'guest'\">Guest</h2>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-menu-toggle auto-hide=\"false\" menu=\"games-menu\">\r\n        <ion-item\r\n          routerLink=\"/games/train\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"train-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.train.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          routerLink=\"/games/rummy\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"journal-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.rummy.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          routerLink=\"/games/uno\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"invert-mode-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.uno.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          routerLink=\"/games/thousand\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"layers-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'games.thousand.name' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item-divider></ion-item-divider>\r\n        <ion-item button (click)=\"switchLanguage()\">\r\n          <ion-icon name=\"earth-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'language' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          *ngIf=\"(userRole$ | async) === 'member' || (userRole$ | async) === 'admin'\"\r\n          button\r\n          (click)=\"onLogout()\"\r\n        >\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.logout' | translate}}</ion-label>\r\n        </ion-item>\r\n        <ion-item\r\n          *ngIf=\"(userRole$ | async) === 'guest'\"\r\n          routerLink=\"/auth/signin\"\r\n          routerLinkActive=\"active-link\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\"\r\n        >\r\n          <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{'modules.user.signin' | translate}}</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"games-content\"></ion-router-outlet>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_games_games_module_ts.js.map