(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_games_game_game_module_ts"],{

/***/ 729:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/deactivate-route.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeactivateRouteGuard: () => (/* binding */ DeactivateRouteGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var _common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/action-confirm/action-confirm.component */ 4348);
/* harmony import */ var src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/app.actions */ 7183);
var _class;






let DeactivateRouteGuard = (_class = class DeactivateRouteGuard {
  constructor(modalService, store) {
    this.modalService = modalService;
    this.store = store;
  }
  canDeactivate(component, currentRoute, currentState, nextState) {
    if (!component.canDeactivate()) {
      const data = {
        title: 'elements.button.leaveGame',
        text: 'common.leaveGameQuestion',
        cancelBtnText: 'elements.button.returnToGame',
        confirmBtnText: 'elements.button.leaveGame'
      };
      return this.modalService.presentModal(_common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ActionConfirmComponent, {
        data
      }).then(({
        role
      }) => {
        if (role === 'confirm') {
          this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__.clearGame());
          return true;
        }
        return false;
      });
    } else {
      return Promise.resolve(true);
    }
  }
}, _class.ctorParameters = () => [{
  type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService
}, {
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store
}], _class);
DeactivateRouteGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], DeactivateRouteGuard);


/***/ }),

/***/ 4374:
/*!***********************************************************!*\
  !*** ./src/app/modules/games/game/game-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePageRoutingModule: () => (/* binding */ GamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _auth_deactivate_route_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/deactivate-route.guard */ 729);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 3539);





const routes = [{
  path: '',
  component: _game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage,
  canDeactivate: [_auth_deactivate_route_guard__WEBPACK_IMPORTED_MODULE_0__.DeactivateRouteGuard]
}];
let GamePageRoutingModule = class GamePageRoutingModule {};
GamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], GamePageRoutingModule);


/***/ }),

/***/ 1124:
/*!***************************************************!*\
  !*** ./src/app/modules/games/game/game.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePageModule: () => (/* binding */ GamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 4374);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 3539);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _round_round_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../round/round.module */ 9333);
/* harmony import */ var _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gamers/gamers.module */ 4742);
/* harmony import */ var _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-result/game-result.component */ 4350);
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shared.module */ 446);












let GamePageModule = class GamePageModule {};
GamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
    extend: true
  }), _round_round_module__WEBPACK_IMPORTED_MODULE_2__.RoundModule, _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_3__.GamersModule, _common_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule],
  declarations: [_game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage, _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_4__.GameResultComponent]
})], GamePageModule);


/***/ }),

/***/ 3539:
/*!*************************************************!*\
  !*** ./src/app/modules/games/game/game.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePage: () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page.html?ngResource */ 4539);
/* harmony import */ var _game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.page.scss?ngResource */ 7277);
/* harmony import */ var _game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/app.reducer */ 8123);
/* harmony import */ var _store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/round.reducer */ 7948);
/* harmony import */ var _store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/reducers/player.reducer */ 3366);
/* harmony import */ var _store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/reducers/round-member.reducer */ 8508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/actions/app.actions */ 7183);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/action-confirm/action-confirm.component */ 4348);

var _class;


















let GamePage = (_class = class GamePage {
  constructor(store, sharedService, route, modalService) {
    this.store = store;
    this.sharedService = sharedService;
    this.route = route;
    this.modalService = modalService;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment;
    this.showToolbarMenu = false;
    this.activeRoundId$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
    this.activePlayerId$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
  }
  ngOnInit() {
    this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
    this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectGameType);
    this.rounds$ = this.store.select(_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllRounds);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.gameType$, this.rounds$]).subscribe(([gameType, rounds]) => {
      var _environment$games$ga, _environment$games$ga2;
      console.log(gameType);
      if (!gameType) {
        return;
      }
      this.gameType = gameType;
      this.showToolbarMenu = (_environment$games$ga = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.games[gameType]) === null || _environment$games$ga === void 0 ? void 0 : _environment$games$ga.showToolbarMenu;
      this.roundsCfg = (_environment$games$ga2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.games[gameType]) === null || _environment$games$ga2 === void 0 ? void 0 : _environment$games$ga2.rounds;
      if (gameType === 'uno') {
        this.nextRound = this.roundsCfg[1];
      }
      this.rounds = rounds;
      if (!this.roundsCfg) {
        return;
      }
      if (rounds.length) {
        // game started and active menu 'start'
        if (this.gameType === 'uno') {
          this.activeRoundId$.next(this.roundsCfg[1]._id + (rounds.length === 1 ? this.roundsCfg[1].namePostfix : rounds.length));
        } else {
          this.activeRoundId$.next(this.roundsCfg[1]._id);
        }
      } else {
        // game not started and active menu !'start'
        this.activeRoundId$.next(this.roundsCfg[0]._id);
      }
    });
    this.roundMembers$ = this.store.select(_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_7__.selectAllRoundMembers);
    this.players$ = this.store.select(_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_6__.selectAllPlayers);
    this.players$.subscribe(players => {
      if (players.length) {
        this.activePlayerId$.next(players[0]._id);
      }
    });
    this.players$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(players => {
      this.players = players;
      return this.roundMembers$;
    })).subscribe(roundMembers => {
      this.roundMembers = roundMembers;
      this.playersWithTotal = this.players.map(player => {
        return {
          ...player,
          totalScore: this.getPlayerTotalScores(player._id)
        };
      }).sort((a, b) => b.totalScore - a.totalScore);
    });
    this.activePlayerId$.subscribe(activePlayerId => this.activePlayerId = activePlayerId);
    this.route.params.subscribe(params => {
      // this.gameType = params.id;
    });
  }
  canDeactivate() {
    return this.rounds.length === 0;
  }
  finishGameDisabled(playersWithTotal) {
    let countZeros = 0;
    playersWithTotal.forEach(player => {
      if (this.getPlayerTotalScores(player._id) === 0) {
        countZeros++;
      }
    });
    return countZeros !== 1;
  }
  getPlayerTotalScores(player) {
    return this.sharedService.getPlayerTotalScores(player);
  }
  onMenuClickHandler(e) {
    this.activeRoundId$.next(e.target.value);
  }
  onFinishGameHandler() {
    var _this = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        title: 'elements.button.finishGame',
        text: 'common.finishGameQuestion',
        cancelBtnText: 'elements.button.returnToGame',
        confirmBtnText: 'elements.button.finishGame'
      };
      const {
        role
      } = yield _this.modalService.presentModal(_common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_11__.ActionConfirmComponent, {
        data
      });
      if (role === 'confirm') {
        _this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_9__.finishGame());
      }
    })();
  }
  onCancelGameHandler() {
    var _this2 = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        title: 'elements.button.cancelGame',
        text: 'common.cancelGameQuestion',
        cancelBtnText: 'elements.button.returnToGame',
        confirmBtnText: 'elements.button.cancelGame'
      };
      const {
        role
      } = yield _this2.modalService.presentModal(_common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_11__.ActionConfirmComponent, {
        data
      });
      if (role === 'confirm') {
        _this2.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_9__.clearGame());
      }
    })();
  }
  openNextRound() {
    this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_9__.openNextRound());
    // this.sharedService.addRounds(this.nextRound);
  }

  selectPlayer(playerId) {
    if (this.gameType === 'thousand') {
      return;
    }
    this.activePlayerId$.next(playerId);
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store
}, {
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__.SharedService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
}, {
  type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_10__.ModalService
}], _class.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonModal]
  }]
}, _class);
GamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-game',
  template: _game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GamePage);


/***/ }),

/***/ 1885:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/games/gamers/choose-players/choose-players.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChoosePlayersComponent: () => (/* binding */ ChoosePlayersComponent)
/* harmony export */ });
/* harmony import */ var C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _choose_players_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-players.component.html?ngResource */ 2685);
/* harmony import */ var _choose_players_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-players.component.scss?ngResource */ 1947);
/* harmony import */ var _choose_players_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_choose_players_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 7313);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-color/select-color.component */ 9826);
/* harmony import */ var _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-gamer/create-gamer.component */ 8238);
/* harmony import */ var _store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/reducers/player.reducer */ 3366);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/reducers/app.reducer */ 8123);
/* harmony import */ var _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/actions/player.actions */ 1231);
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../store/actions/app.actions */ 7183);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ 553);

var _class;
















let ChoosePlayersComponent = (_class = class ChoosePlayersComponent {
  constructor(store, translate, gamerService, popoverController, alertController, sharedService) {
    this.store = store;
    this.translate = translate;
    this.gamerService = gamerService;
    this.popoverController = popoverController;
    this.alertController = alertController;
    this.sharedService = sharedService;
    // @Input() gameType: string;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment;
    this.gamers = [];
    this.filtredGamers = [];
    // showSelectColor: number | null;
    this.players = [];
  }
  ngOnInit() {
    this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__.selectGameType);
    this.gameType$.subscribe(gameType => {
      var _environment$games$ga, _environment$games$ga2;
      this.gameType = gameType;
      this.playersColors = (_environment$games$ga = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.games[gameType]) === null || _environment$games$ga === void 0 ? void 0 : _environment$games$ga.playersColors;
      this.filtredColors = (_environment$games$ga2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.games[gameType]) === null || _environment$games$ga2 === void 0 ? void 0 : _environment$games$ga2.playersColors;
    });
    this.players$ = this.store.select(_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_6__.selectAllPlayers);
    this.players$.subscribe(players => {
      this.players = players;
      this.filter();
    });
    this.gamers$ = this.gamerService.entities$;
    this.gamers$.subscribe(gamers => {
      this.gamers = gamers;
      this.filter();
    });
  }
  startGameHandler() {
    this.store.dispatch(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_9__.createRounds());
    // this.sharedService.createRounds(this.gameType);
  }

  presentPopover(event, component, data) {
    var _this = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component,
        cssClass: 'select-color-popover',
        // event,
        componentProps: data,
        translucent: true
      });
      yield popover.present();
      return yield popover.onDidDismiss();
    })();
  }
  showSelectColorPopup(event, index) {
    var _this2 = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data
      } = yield _this2.presentPopover(event, _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_4__.SelectColorComponent, {
        colors: _this2.filtredColors
      });
      if (data) {
        const {
          color
        } = data;
        _this2.chooseColorHandler(color, index);
      }
    })();
  }
  showCreateGamerPopup(event) {
    var _this3 = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data
      } = yield _this3.presentPopover(event, _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_5__.CreateGamerComponent, null);
      if (data) {
        const {
          gamer
        } = data;
        _this3.createGamerHandler(gamer);
      }
    })();
  }
  filter() {
    var _this$playersColors;
    this.filtredGamers = this.gamers.filter(gamer => {
      for (const player of this.players) {
        if (player._id === gamer._id) {
          return false;
        }
      }
      return true;
    });
    const filtredColors = (_this$playersColors = this.playersColors) === null || _this$playersColors === void 0 ? void 0 : _this$playersColors.filter((color, idx) => {
      for (const player of this.players) {
        if (player.color === color) {
          return false;
        }
      }
      return true;
    });
    this.filtredColors = filtredColors !== null && filtredColors !== void 0 && filtredColors.length ? filtredColors : this.filtredColors;
  }
  choosePlayerHandler(e, index) {
    const players = this.players.map((player, idx) => {
      if (idx === index) {
        const preferredColor = this.filtredGamers[0].color;
        if (this.filtredColors.includes(preferredColor)) {
          return e.target.value;
        } else {
          return {
            ...e.target.value,
            color: this.filtredColors[0]
          };
        }
      }
      return player;
    });
    this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__.loadPlayers({
      players
    }));
  }
  chooseColorHandler(color, index) {
    this.players = this.players.map((player, idx) => {
      if (idx === index) {
        return {
          ...player,
          color
        };
      }
      return player;
    });
    this.filter();
  }
  removePlayerHandler(_id) {
    this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__.deletePlayer({
      id: _id
    }));
  }
  removeAllPlayersHandler() {
    this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__.clearPlayers());
  }
  addPlayerHandler(firstEl = true) {
    if (!this.filtredGamers.length) {
      return;
    }
    let candidate = this.filtredGamers[0];
    if (!firstEl) {
      candidate = this.filtredGamers[this.filtredGamers.length - 1];
    }
    const preferredColor = candidate.color;
    if (this.filtredColors.includes(preferredColor)) {
      this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__.addPlayer({
        player: {
          ...candidate
        }
      }));
    } else {
      this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__.addPlayer({
        player: {
          ...candidate,
          color: this.filtredColors[0]
        }
      }));
    }
    // this.filter();
  }

  createGamerHandler(gamer) {
    this.gamerService.add(gamer).subscribe(result => {
      // console.log(result);
    });
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
}, {
  type: src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_3__.GamerService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
}, {
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__.SharedService
}], _class);
ChoosePlayersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-choose-players',
  template: _choose_players_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_choose_players_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ChoosePlayersComponent);


/***/ }),

/***/ 8238:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/games/gamers/create-gamer/create-gamer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateGamerComponent: () => (/* binding */ CreateGamerComponent)
/* harmony export */ });
/* harmony import */ var C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _create_gamer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-gamer.component.html?ngResource */ 4541);
/* harmony import */ var _create_gamer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-gamer.component.scss?ngResource */ 5382);
/* harmony import */ var _create_gamer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_create_gamer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-color/select-color.component */ 9826);

var _class;







let CreateGamerComponent = (_class = class CreateGamerComponent {
  constructor(popoverController) {
    this.popoverController = popoverController;
    this.playersColors = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.games.train.playersColors;
    this.color = this.playersColors[0];
  }
  ngOnInit() {}
  presentPopover(event, component, data) {
    var _this = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component,
        cssClass: 'select-color-popover',
        // event,
        componentProps: data,
        translucent: true
      });
      yield popover.present();
      return yield popover.onDidDismiss();
    })();
  }
  showSelectColorPopup(event) {
    var _this2 = this;
    return (0,C_it_points_points_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        data
      } = yield _this2.presentPopover(event, _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_4__.SelectColorComponent, {
        colors: _this2.playersColors
      });
      if (data) {
        const {
          color
        } = data;
        _this2.color = color;
      }
    })();
  }
  dismiss(data) {
    this.popoverController.dismiss(data);
  }
  onCreate() {
    this.dismiss({
      gamer: {
        color: this.color,
        name: this.name
      }
    });
  }
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
}], _class);
CreateGamerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-create-gamer',
  template: _create_gamer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_create_gamer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CreateGamerComponent);


/***/ }),

/***/ 4742:
/*!*******************************************************!*\
  !*** ./src/app/modules/games/gamers/gamers.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamersModule: () => (/* binding */ GamersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _choose_players_choose_players_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-players/choose-players.component */ 1885);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-color/select-color.component */ 9826);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-gamer/create-gamer.component */ 8238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);









let GamersModule = class GamersModule {};
GamersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_choose_players_choose_players_component__WEBPACK_IMPORTED_MODULE_0__.ChoosePlayersComponent, _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_1__.SelectColorComponent, _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_2__.CreateGamerComponent],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
    extend: true
  })],
  exports: [_choose_players_choose_players_component__WEBPACK_IMPORTED_MODULE_0__.ChoosePlayersComponent]
})], GamersModule);


/***/ }),

/***/ 9826:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/games/gamers/select-color/select-color.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectColorComponent: () => (/* binding */ SelectColorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _select_color_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-color.component.html?ngResource */ 656);
/* harmony import */ var _select_color_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-color.component.scss?ngResource */ 2369);
/* harmony import */ var _select_color_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_color_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4210);
var _class;





let SelectColorComponent = (_class = class SelectColorComponent {
  constructor(popoverController) {
    this.popoverController = popoverController;
  }
  ngOnInit() {}
  dismiss(data) {
    this.popoverController.dismiss(data);
  }
  onSelect(color) {
    this.dismiss({
      color
    });
  }
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController
}], _class.propDecorators = {
  colors: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
}, _class);
SelectColorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-select-color',
  template: _select_color_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_select_color_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SelectColorComponent);


/***/ }),

/***/ 7105:
/*!************************************************!*\
  !*** ./src/app/modules/games/games.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesService: () => (/* binding */ GamesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers/round-member.reducer */ 8508);
/* harmony import */ var _store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/round-member.actions */ 9215);
/* harmony import */ var _auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/telegram/telegram.service */ 8686);
var _class;








let GamesService = (_class = class GamesService {
  constructor(store, sharedService, telegramService) {
    this.store = store;
    this.sharedService = sharedService;
    this.telegramService = telegramService;
  }
  storeRoundScores(scores) {
    const updates = [];
    for (const key in scores) {
      // TODO: Object.keys
      if (scores.hasOwnProperty(key)) {
        this.store.select((0,src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__.selectByIdRoundMember)(key)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(roundMember => {
          const namedScore = {
            name: scores[key].name,
            value: scores[key].value
          };
          updates.push({
            id: roundMember._id,
            changes: {
              ...roundMember,
              namedScoresLine: [...roundMember.namedScoresLine, namedScore],
              scoresLine: [...roundMember.scoresLine, namedScore.value]
            }
          });
        });
      }
    }
    this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMembers({
      roundMembers: updates
    }));
  }
  addToNamedScoresLine(namedScore, playerId, roundId) {
    const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
    const changes = {
      ...roundMember,
      namedScoresLine: [...roundMember.namedScoresLine, namedScore],
      scoresLine: [...roundMember.scoresLine, namedScore.value]
    };
    this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
      roundMember: {
        id: roundMember._id,
        changes
      }
    }));
    // this.addToScoresLine(namedScore.value, playerId, roundId);
  }

  addToScoresLine(score, playerId, roundId) {
    const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
    const changes = {
      ...roundMember,
      scoresLine: [...roundMember.scoresLine, score]
    };
    this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
      roundMember: {
        id: roundMember._id,
        changes
      }
    }));
  }
  removeFromNamedScoresLine(namedScore, playerId, roundId) {
    const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
    const namedScoresLine = [...roundMember.namedScoresLine];
    const index = namedScoresLine.findIndex(ns => ns.name === namedScore.name);
    if (index !== -1) {
      namedScoresLine.splice(index, 1);
      const changes = {
        ...roundMember,
        namedScoresLine
      };
      this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
        roundMember: {
          id: roundMember._id,
          changes
        }
      }));
      this.removeFromScoresLine(namedScore.value, playerId, roundId);
    }
  }
  removeFromScoresLine(score, playerId, roundId) {
    const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
    const scoresLine = [...roundMember.scoresLine];
    const index = scoresLine.indexOf(score);
    scoresLine.splice(index, 1);
    const changes = {
      ...roundMember,
      scoresLine
    };
    this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
      roundMember: {
        id: roundMember._id,
        changes
      }
    }));
  }
  setScoresLine(scoresLine, playerId, roundId) {
    const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
    const changes = {
      ...roundMember,
      scoresLine
    };
    this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
      roundMember: {
        id: roundMember._id,
        changes
      }
    }));
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store
}, {
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService
}, {
  type: _auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__.TelegramService
}], _class);
GamesService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], GamesService);


/***/ }),

/***/ 1976:
/*!*********************************************************!*\
  !*** ./src/app/modules/games/round/round-interfaces.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUND_COMPONENT: () => (/* binding */ ROUND_COMPONENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const ROUND_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('roundComponent');

/***/ }),

/***/ 8042:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/round-t-wrapper/round-t-wrapper.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundTWrapperComponent: () => (/* binding */ RoundTWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_t_wrapper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-t-wrapper.component.html?ngResource */ 5567);
/* harmony import */ var _round_t_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-t-wrapper.component.scss?ngResource */ 8602);
/* harmony import */ var _round_t_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_t_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../round-interfaces */ 1976);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/reducers/app.reducer */ 8123);
/* harmony import */ var src_app_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers/player.reducer */ 3366);
var _class;









let RoundTWrapperComponent = (_class = class RoundTWrapperComponent {
  constructor(sharedService, store) {
    this.sharedService = sharedService;
    this.store = store;
  }
  ngOnInit() {
    this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
    this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectGameType);
    this.players$ = this.store.select(src_app_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllPlayers);
    this.gameType$.subscribe(gameType => this.gameType = gameType);
  }
  getRoundById() {
    return this.sharedService.getRoundById(this.roundId);
  }
  calcScores() {
    var _this$getMemberByPlay;
    return (_this$getMemberByPlay = this.getMemberByPlayerId()) === null || _this$getMemberByPlay === void 0 ? void 0 : _this$getMemberByPlay.scoresLine.reduce((prev, cur) => prev + cur, 0);
  }
  getPlayerColor() {
    return this.sharedService.getPlayerColor(this.playerId);
  }
  getPlayerName() {
    return this.sharedService.getPlayerName(this.playerId);
  }
  getMemberByPlayerId() {
    return this.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  }
}, _class.ctorParameters = () => [{
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService
}, {
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store
}], _class.propDecorators = {
  roundComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChild,
    args: [_round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT, {
      static: true
    }]
  }],
  playerId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  roundId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
}, _class);
RoundTWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-round-t-wrapper',
  template: _round_t_wrapper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_round_t_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundTWrapperComponent);


/***/ }),

/***/ 8787:
/*!******************************************************************************!*\
  !*** ./src/app/modules/games/round/round-wrapper/round-wrapper.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundWrapperComponent: () => (/* binding */ RoundWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_wrapper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-wrapper.component.html?ngResource */ 4308);
/* harmony import */ var _round_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-wrapper.component.scss?ngResource */ 282);
/* harmony import */ var _round_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../round-interfaces */ 1976);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/reducers/app.reducer */ 8123);
var _class;








let RoundWrapperComponent = (_class = class RoundWrapperComponent {
  constructor(sharedService, store) {
    this.sharedService = sharedService;
    this.store = store;
  }
  ngOnInit() {
    this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
    this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectGameType);
    this.gameType$.subscribe(gameType => this.gameType = gameType);
  }
  getRoundById() {
    return this.sharedService.getRoundById(this.roundId);
  }
  calcScores() {
    var _this$getMemberByPlay;
    return (_this$getMemberByPlay = this.getMemberByPlayerId()) === null || _this$getMemberByPlay === void 0 ? void 0 : _this$getMemberByPlay.scoresLine.reduce((prev, cur) => prev + cur, 0);
  }
  getPlayerColor() {
    return this.sharedService.getPlayerColor(this.playerId);
  }
  getPlayerName() {
    return this.sharedService.getPlayerName(this.playerId);
  }
  getMemberByPlayerId() {
    return this.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  }
}, _class.ctorParameters = () => [{
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService
}, {
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store
}], _class.propDecorators = {
  roundComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [_round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT, {
      static: true
    }]
  }],
  playerId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  roundId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
}, _class);
RoundWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-round-wrapper',
  template: _round_wrapper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_round_wrapper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundWrapperComponent);


/***/ }),

/***/ 7791:
/*!********************************************************!*\
  !*** ./src/app/modules/games/round/round.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundComponent: () => (/* binding */ RoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round.component.html?ngResource */ 1897);
/* harmony import */ var _round_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round.component.scss?ngResource */ 9067);
/* harmony import */ var _round_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/round.reducer */ 7948);
var _class;






let RoundComponent = (_class = class RoundComponent {
  // gameType$: Observable<GameType>;
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.rounds$ = this.store.select(src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAllRounds);
    // this.gameType$ = this.store.select(selectGameType);
  }
}, _class.ctorParameters = () => [{
  type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store
}], _class.propDecorators = {
  activeRoundId$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  activePlayerId$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  gameType$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  players$: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
}, _class);
RoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-round',
  template: _round_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_round_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundComponent);


/***/ }),

/***/ 4051:
/*!********************************************************!*\
  !*** ./src/app/modules/games/round/round.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundBaseDirective: () => (/* binding */ RoundBaseDirective),
/* harmony export */   RoundScoresLineDirective: () => (/* binding */ RoundScoresLineDirective),
/* harmony export */   RoundTBaseDirective: () => (/* binding */ RoundTBaseDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers/round-member.reducer */ 8508);
/* harmony import */ var src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/round.reducer */ 7948);
/* harmony import */ var _auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/telegram/telegram.service */ 8686);
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../games.service */ 7105);
var _class, _class2, _class3;









let RoundBaseDirective = (_class = class RoundBaseDirective {
  constructor(injector) {
    this.sharedService = injector.get(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService);
    this.gamesService = injector.get(_games_service__WEBPACK_IMPORTED_MODULE_4__.GamesService);
    this.telegramService = injector.get(_auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__.TelegramService);
    this.actions$ = injector.get(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions);
  }
  getMemberByPlayerId() {
    return this.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  }
  addToScoresLine(score) {
    this.gamesService.addToScoresLine(score, this.playerId, this.roundId);
  }
  removeFromScoresLine(score) {
    this.gamesService.removeFromScoresLine(score, this.playerId, this.roundId);
  }
  setScoresLine(scoresLine, playerId, roundId) {
    this.gamesService.setScoresLine(scoresLine, playerId, roundId);
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
}], _class.propDecorators = {
  playerId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  roundId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
}, _class);
RoundBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive)({
  selector: '[appRound]'
})], RoundBaseDirective);

let RoundScoresLineDirective = (_class2 = class RoundScoresLineDirective extends RoundBaseDirective {
  constructor(injector) {
    super(injector);
  }
  addToNamedScoresLine(namedScore, playerId) {
    this.gamesService.addToNamedScoresLine(namedScore, playerId || this.playerId, this.roundId);
  }
  removeFromNamedScoresLine(namedScore) {
    this.gamesService.removeFromNamedScoresLine(namedScore, this.playerId, this.roundId);
  }
}, _class2.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
}], _class2);
RoundScoresLineDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive)({
  selector: '[appRoundScoresLine]'
})], RoundScoresLineDirective);

let RoundTBaseDirective = (_class3 = class RoundTBaseDirective extends RoundScoresLineDirective {
  // roundMembers: RoundMember[];
  constructor(injector) {
    super(injector);
    this.store = injector.get(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store);
    this.rounds$ = this.store.select(src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAllRounds);
    this.roundMembers$ = this.store.select(src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__.selectAllRoundMembers);
    // this.roundMembers$.subscribe((roundMembers) => this.roundMembers = roundMembers)
  }
}, _class3.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
}], _class3);
RoundTBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive)({
  selector: '[appRoundT]'
})], RoundTBaseDirective);


/***/ }),

/***/ 9333:
/*!*****************************************************!*\
  !*** ./src/app/modules/games/round/round.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundModule: () => (/* binding */ RoundModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _round_wrapper_round_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-wrapper/round-wrapper.component */ 8787);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _round_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round.component */ 7791);
/* harmony import */ var _train_round_routes_round_routes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./train/round-routes/round-routes.component */ 8263);
/* harmony import */ var _train_round_length_round_length_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train/round-length/round-length.component */ 3983);
/* harmony import */ var _train_round_stations_round_stations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./train/round-stations/round-stations.component */ 500);
/* harmony import */ var _train_round_cars_round_cars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./train/round-cars/round-cars.component */ 4812);
/* harmony import */ var _uno_round_uno_round_uno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uno/round-uno/round-uno.component */ 6009);
/* harmony import */ var _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gamers/gamers.module */ 4742);
/* harmony import */ var _round_t_wrapper_round_t_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./round-t-wrapper/round-t-wrapper.component */ 8042);
/* harmony import */ var _thousand_round_thousand_round_thousand_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thousand/round-thousand/round-thousand.component */ 9519);
/* harmony import */ var _rummy_round_rummy_round_rummy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rummy/round-rummy/round-rummy.component */ 5214);

















let RoundModule = class RoundModule {};
RoundModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_round_wrapper_round_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.RoundWrapperComponent, _round_t_wrapper_round_t_wrapper_component__WEBPACK_IMPORTED_MODULE_8__.RoundTWrapperComponent, _round_component__WEBPACK_IMPORTED_MODULE_1__.RoundComponent, _train_round_routes_round_routes_component__WEBPACK_IMPORTED_MODULE_2__.RoundRoutesComponent, _train_round_length_round_length_component__WEBPACK_IMPORTED_MODULE_3__.RoundLengthComponent, _train_round_stations_round_stations_component__WEBPACK_IMPORTED_MODULE_4__.RoundStationsComponent, _train_round_cars_round_cars_component__WEBPACK_IMPORTED_MODULE_5__.RoundCarsComponent, _uno_round_uno_round_uno_component__WEBPACK_IMPORTED_MODULE_6__.RoundUnoComponent, _thousand_round_thousand_round_thousand_component__WEBPACK_IMPORTED_MODULE_9__.RoundThousandComponent, _rummy_round_rummy_round_rummy_component__WEBPACK_IMPORTED_MODULE_10__.RoundRummyComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forChild({
    extend: true
  }), _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_7__.GamersModule],
  exports: [_round_component__WEBPACK_IMPORTED_MODULE_1__.RoundComponent]
})], RoundModule);


/***/ }),

/***/ 5214:
/*!********************************************************************************!*\
  !*** ./src/app/modules/games/round/rummy/round-rummy/round-rummy.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundRummyComponent: () => (/* binding */ RoundRummyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_rummy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-rummy.component.html?ngResource */ 3665);
/* harmony import */ var _round_rummy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-rummy.component.scss?ngResource */ 8844);
/* harmony import */ var _round_rummy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_rummy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 4051);
var _class;
var RoundRummyComponent_1;







let RoundRummyComponent = RoundRummyComponent_1 = (_class = class RoundRummyComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundScoresLineDirective {
  constructor(injector) {
    super(injector);
    this.namedScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.rummy.namedScores;
    this.namedScoreLine = [];
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector
}], _class);
RoundRummyComponent = RoundRummyComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-round-rummy',
  template: _round_rummy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
    useExisting: RoundRummyComponent_1
  }],
  styles: [(_round_rummy_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundRummyComponent);


/***/ }),

/***/ 9519:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/games/round/thousand/round-thousand/round-thousand.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundThousandComponent: () => (/* binding */ RoundThousandComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_thousand_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-thousand.component.html?ngResource */ 5000);
/* harmony import */ var _round_thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-thousand.component.scss?ngResource */ 5618);
/* harmony import */ var _round_thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round.directive */ 4051);
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/actions/app.actions */ 7183);
var _class;
var RoundThousandComponent_1;








let RoundThousandComponent = RoundThousandComponent_1 = (_class = class RoundThousandComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_3__.RoundTBaseDirective {
  constructor(injector) {
    super(injector);
    this.scores = {};
    this.initialScores = {};
    this.isFinished = false;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.sub = this.roundMembers$.subscribe(roundMembers => {
      this.qtyOfPlayers = roundMembers.length;
      this.roundMembers = roundMembers;
      if (this.checkOnFinishGame() && !this.isFinished) {
        // game finished
        this.isFinished = true;
        return this.store.dispatch(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.finishGame());
      } else if (roundMembers.length && roundMembers[0].namedScoresLine.length && roundMembers[0].namedScoresLine.length % roundMembers.length === 0) {
        // game started and at least one round finished
        const messages = this.addTotals(roundMembers).map(roundMember => {
          const {
            name,
            value,
            total
          } = roundMember.namedScoresLine[roundMember.namedScoresLine.length - 1];
          return {
            playerId: roundMember.player,
            data: {
              lastScores: {
                name,
                value,
                total
              }
            },
            gameType: 'thousand'
          };
        });
        this.telegramService.sendMessagesThousandRoundDto(messages).subscribe(_ => _);
      }
      if (this.roundMembers.length) {
        this.resetScores();
      }
    });
    // cancel prev game
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.clearGame)).subscribe(_ => this.scores = {});
  }
  addTotals(roundMembers) {
    return roundMembers.map(roundMember => {
      let acc = 0;
      return {
        ...roundMember,
        namedScoresLine: roundMember.namedScoresLine.map(namedScore => {
          acc = namedScore.value + acc;
          return {
            ...namedScore,
            total: acc
          };
        })
      };
    });
  }
  changeScoresState(roundMemberId, option) {
    if (this.scores[roundMemberId].barrel > 0) {
      return;
    }
    const currentState = this.scores[roundMemberId];
    this.roundScoresOption = option;
    if (currentState.disabled.includes(option)) {
      return;
    }
    if (currentState.name === option) {
      this.scores = JSON.parse(JSON.stringify(this.initialScores));
      return;
    }
    this.scores[roundMemberId].name = option;
    this.scores[roundMemberId].value = option === 'r' ? 0 : -100;
    Object.keys(this.scores).filter(key => key !== roundMemberId).forEach(key => {
      this.scores[key] = {
        ...this.initialScores[key],
        value: option === 'r' ? 60 : 0
      };
    });
  }
  resetScores() {
    const activeRoundMemberPosition = this.roundMembers.length ? (this.roundMembers[0].namedScoresLine.length + this.qtyOfPlayers) % this.qtyOfPlayers : 0;
    this.roundMembers.forEach((roundMember, i) => {
      if (i === activeRoundMemberPosition) {
        this.activeRoundMemberId = roundMember._id;
      }
      this.scores[roundMember._id] = {
        name: 'score',
        value: null,
        disabled: [],
        doubleZero: false,
        barrel: 0
      };
      if (roundMember.namedScoresLine.length > 1) {
        const isDoubleZero = roundMember.namedScoresLine[roundMember.namedScoresLine.length - 1].value === 0 && roundMember.namedScoresLine[roundMember.namedScoresLine.length - 2].value === 0;
        if (isDoubleZero) {
          this.scores[roundMember._id].doubleZero = true;
        }
      }
      let acc = 0;
      roundMember.namedScoresLine.map(namedScore => {
        acc = namedScore.value + acc;
        if (acc >= 900 && acc < 1000) {
          this.scores[roundMember._id].barrel += 1;
        } else {
          this.scores[roundMember._id].barrel = 0;
        }
      });
      const isAlreadyR = roundMember.namedScoresLine.find(score => score.name === 'r');
      if (isAlreadyR) {
        this.scores[roundMember._id].disabled.push('r');
      }
      const isAlreadyS = roundMember.namedScoresLine.find(score => score.name === 's');
      if (isAlreadyS) {
        this.scores[roundMember._id].disabled.push('s');
      }
    });
    this.initialScores = JSON.parse(JSON.stringify(this.scores));
  }
  checkOnTrippleZero() {
    Object.keys(this.scores).forEach(key => {
      if (this.scores[key].barrel > 0) {
        return;
      }
      if (this.scores[key].doubleZero && this.scores[key].value === 0) {
        this.scores[key].value = -100;
      }
    });
  }
  checkOnBarrelTimes() {
    Object.keys(this.scores).forEach(key => {
      if (this.scores[key].barrel >= this.qtyOfPlayers || this.scores[key].barrel >= 3) {
        let acc = 0;
        this.roundMembers.find(roundMember => roundMember._id === key).namedScoresLine.map(namedScore => {
          acc = namedScore.value + acc;
        });
        if (acc + this.scores[key].value < 1000) {
          this.scores[key].value = this.customRoundNumber(acc) - 100 - acc;
        }
      }
    });
  }
  checkOnFinishGame() {
    let isFinishGame = false;
    Object.keys(this.scores).forEach(key => {
      let acc = 0;
      this.roundMembers.find(roundMember => roundMember._id === key).namedScoresLine.map(namedScore => {
        acc = namedScore.value + acc;
      });
      if (acc >= 1000) {
        isFinishGame = true;
      }
    });
    return isFinishGame;
  }
  checkGetOnBarrelOrWin() {
    Object.keys(this.scores).forEach(key => {
      let acc = 0;
      this.roundMembers.find(roundMember => roundMember._id === key).namedScoresLine.map(namedScore => {
        acc = namedScore.value + acc;
      });
      acc = acc + this.scores[key].value;
      if (acc > 900 && acc < 1000 && !this.scores[key].barrel) {
        this.scores[key].value = this.scores[key].value - (acc - 900);
      }
      if (acc >= 1000) {
        this.scores[key].value = this.scores[key].value - (acc - 1000);
      }
    });
  }
  checkOnValueIsNumber() {
    Object.keys(this.scores).forEach(key => {
      if (typeof this.scores[key].value !== 'number') {
        this.scores[key].value = 0;
      }
    });
  }
  checkOnRoundedValue() {
    Object.keys(this.scores).forEach(key => {
      if (!this.scores[key].barrel) {
        this.scores[key].value = this.customRoundNumber(this.scores[key].value);
      }
    });
  }
  storeRoundScores() {
    this.checkOnValueIsNumber();
    this.checkOnTrippleZero();
    this.checkOnBarrelTimes();
    this.checkGetOnBarrelOrWin();
    this.checkOnRoundedValue();
    this.gamesService.storeRoundScores(this.scores);
  }
  customRoundNumber(n) {
    const int = Math.floor(n);
    return int % 10 <= 5 ? Math.floor(int / 10) * 10 : Math.ceil(int / 10) * 10;
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector
}], _class);
RoundThousandComponent = RoundThousandComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-round-thousand',
  template: _round_thousand_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_2__.ROUND_COMPONENT,
    useExisting: RoundThousandComponent_1
  }],
  styles: [(_round_thousand_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundThousandComponent);


/***/ }),

/***/ 4812:
/*!******************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-cars/round-cars.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundCarsComponent: () => (/* binding */ RoundCarsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_cars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-cars.component.html?ngResource */ 2747);
/* harmony import */ var _round_cars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-cars.component.scss?ngResource */ 9603);
/* harmony import */ var _round_cars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_cars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 4051);
var _class;
var RoundCarsComponent_1;







let RoundCarsComponent = RoundCarsComponent_1 = (_class = class RoundCarsComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundScoresLineDirective {
  constructor(injector) {
    super(injector);
    // @Input() playerId: UID;
    // @Input() roundId: string;
    this.carsScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.carsScores;
  }
  ngOnInit() {}
  calcQtyOfArrItems(item) {
    return this.sharedService.calcQtyOfArrItems(item, this.playerId, this.roundId);
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector
}], _class);
RoundCarsComponent = RoundCarsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-round-cars',
  template: _round_cars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
    useExisting: RoundCarsComponent_1
  }],
  styles: [(_round_cars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundCarsComponent);


/***/ }),

/***/ 3983:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-length/round-length.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundLengthComponent: () => (/* binding */ RoundLengthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_length_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-length.component.html?ngResource */ 4685);
/* harmony import */ var _round_length_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-length.component.scss?ngResource */ 1259);
/* harmony import */ var _round_length_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_length_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 4051);
var _class;
var RoundLengthComponent_1;







let RoundLengthComponent = RoundLengthComponent_1 = (_class = class RoundLengthComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundBaseDirective {
  constructor(injector) {
    super(injector);
    // @Input() playerId: UID;
    // @Input() roundId: string;
    this.longestRouteScoreEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.longestRouteScore;
  }
  ngOnInit() {}
  // getMemberByPlayerId(): RoundMember {
  //   return super.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
  // }
  onMarkLongestHandler(e) {
    const checked = e.target.checked;
    if (checked) {
      this.setScoresLine([this.longestRouteScoreEnv], this.playerId, this.roundId);
    } else {
      this.setScoresLine([], this.playerId, this.roundId);
    }
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector
}], _class);
RoundLengthComponent = RoundLengthComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-round-length',
  template: _round_length_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
    useExisting: RoundLengthComponent_1
  }],
  styles: [(_round_length_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundLengthComponent);


/***/ }),

/***/ 8263:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-routes/round-routes.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundRoutesComponent: () => (/* binding */ RoundRoutesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_routes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-routes.component.html?ngResource */ 1244);
/* harmony import */ var _round_routes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-routes.component.scss?ngResource */ 5899);
/* harmony import */ var _round_routes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_routes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round.directive */ 4051);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
var _class;
var RoundRoutesComponent_1;







let RoundRoutesComponent = RoundRoutesComponent_1 = (_class = class RoundRoutesComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_3__.RoundScoresLineDirective {
  constructor(injector) {
    super(injector);
    // @Input() playerId: UID;
    // @Input() roundId: string;
    this.routesScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.routesScores;
    this.inverse = 1;
    this.numberFn = Number;
  }
  ngOnInit() {}
  inverseScore() {
    this.inverse = this.inverse * -1;
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector
}], _class);
RoundRoutesComponent = RoundRoutesComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-round-routes',
  template: _round_routes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_4__.ROUND_COMPONENT,
    useExisting: RoundRoutesComponent_1
  }],
  styles: [(_round_routes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundRoutesComponent);


/***/ }),

/***/ 500:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-stations/round-stations.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundStationsComponent: () => (/* binding */ RoundStationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_stations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-stations.component.html?ngResource */ 2604);
/* harmony import */ var _round_stations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-stations.component.scss?ngResource */ 4135);
/* harmony import */ var _round_stations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_stations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round.directive */ 4051);
var _class;
var RoundStationsComponent_1;






let RoundStationsComponent = RoundStationsComponent_1 = (_class = class RoundStationsComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_3__.RoundBaseDirective {
  // @Input() playerId: UID;
  // @Input() roundId: string;
  constructor(injector) {
    super(injector);
  }
  ngOnInit() {}
  calcScores() {
    return this.getMemberByPlayerId().scoresLine.reduce((prev, cur) => prev + cur, 0);
  }
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector
}], _class);
RoundStationsComponent = RoundStationsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-round-stations',
  template: _round_stations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_2__.ROUND_COMPONENT,
    useExisting: RoundStationsComponent_1
  }],
  styles: [(_round_stations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundStationsComponent);


/***/ }),

/***/ 6009:
/*!**************************************************************************!*\
  !*** ./src/app/modules/games/round/uno/round-uno/round-uno.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundUnoComponent: () => (/* binding */ RoundUnoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _round_uno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-uno.component.html?ngResource */ 7904);
/* harmony import */ var _round_uno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-uno.component.scss?ngResource */ 3907);
/* harmony import */ var _round_uno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_round_uno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 1976);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 4051);
var _class;
var RoundUnoComponent_1;







let RoundUnoComponent = RoundUnoComponent_1 = (_class = class RoundUnoComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundScoresLineDirective {
  constructor(injector) {
    super(injector);
    this.namedScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.uno.namedScores;
    this.namedScoreLine = [];
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector
}], _class);
RoundUnoComponent = RoundUnoComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-round-uno',
  template: _round_uno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [{
    provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
    useExisting: RoundUnoComponent_1
  }],
  styles: [(_round_uno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RoundUnoComponent);


/***/ }),

/***/ 7277:
/*!**************************************************************!*\
  !*** ./src/app/modules/games/game/game.page.scss?ngResource ***!
  \**************************************************************/
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

/***/ 1947:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/games/gamers/choose-players/choose-players.component.scss?ngResource ***!
  \**********************************************************************************************/
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

/***/ 5382:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/games/gamers/create-gamer/create-gamer.component.scss?ngResource ***!
  \******************************************************************************************/
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

/***/ 2369:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/games/gamers/select-color/select-color.component.scss?ngResource ***!
  \******************************************************************************************/
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

/***/ 8602:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/games/round/round-t-wrapper/round-t-wrapper.component.scss?ngResource ***!
  \***********************************************************************************************/
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

/***/ 282:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/games/round/round-wrapper/round-wrapper.component.scss?ngResource ***!
  \*******************************************************************************************/
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

/***/ 9067:
/*!*********************************************************************!*\
  !*** ./src/app/modules/games/round/round.component.scss?ngResource ***!
  \*********************************************************************/
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

/***/ 8844:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/games/round/rummy/round-rummy/round-rummy.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5618:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/games/round/thousand/round-thousand/round-thousand.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9603:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-cars/round-cars.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1259:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-length/round-length.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5899:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-routes/round-routes.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4135:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-stations/round-stations.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3907:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/games/round/uno/round-uno/round-uno.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4539:
/*!**************************************************************!*\
  !*** ./src/app/modules/games/game/game.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button menu=\"games-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-segment\r\n      *ngIf=\"showToolbarMenu\"\r\n      scrollable\r\n      [value]=\"(activeRoundId$ | async)\"\r\n      (ionChange)=\"onMenuClickHandler($event)\"\r\n    >\r\n      <ion-segment-button\r\n        *ngFor=\"let round of roundsCfg; let idx = index\"\r\n        [value]=\"round._id\"\r\n        [disabled]=\"(round._id === 'start' && (rounds$ | async).length) ||\r\n                    (round._id !== 'start' && (rounds$ | async).length === 0)\"\r\n      >\r\n        <ion-icon [name]=\"round.icon\"></ion-icon>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col\r\n        size-lg=\"6\"\r\n        size-md=\"8\"\r\n        size-sm=\"10\"\r\n        offset-lg=\"3\"\r\n        offset-md=\"2\"\r\n        offset-sm=\"1\"\r\n      >\r\n\r\n        <ion-card *ngIf=\"(rounds$ | async).length !== 0\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\"\r\n              >{{'games.' + gameType + '.name' | translate}}</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item\r\n                *ngFor=\"let player of playersWithTotal\"\r\n                (click)=\"selectPlayer(player._id)\"\r\n                [ngClass]=\"{'active-player': player._id === (activePlayerId$ | async) && gameType !== 'thousand'}\"\r\n              >\r\n                <ion-label\r\n                  [ngStyle]=\"{\r\n                  'border-left': '6px solid ' + player.color,\r\n                  'padding-left': '10px'\r\n                }\"\r\n                >\r\n                  {{player.name}}\r\n                </ion-label>\r\n                <div\r\n                  slot=\"end\"\r\n                  [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\"\r\n                >\r\n                  {{getPlayerTotalScores(player._id)}}\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-row class=\"ion-justify-content-around\">\r\n              <ion-button\r\n                *ngIf=\"gameType !== 'thousand'\"\r\n                fill=\"outline\"\r\n                size=\"small\"\r\n                (click)=\"onFinishGameHandler()\"\r\n                [disabled]=\"(rounds$ | async).length === 0 || (loading$ | async) ||\r\n              (gameType === 'rummy' && finishGameDisabled(playersWithTotal))\"\r\n              >\r\n                {{'elements.button.finishGame' | translate}}\r\n              </ion-button>\r\n              <ion-button\r\n                fill=\"outline\"\r\n                size=\"small\"\r\n                [disabled]=\"(rounds$ | async).length === 0 || (loading$ | async)\"\r\n                (click)=\"onCancelGameHandler()\"\r\n              >\r\n                {{'elements.button.cancelGame' | translate}}\r\n              </ion-button>\r\n              <ion-button\r\n                *ngIf=\"gameType === 'uno'\"\r\n                fill=\"outline\"\r\n                size=\"small\"\r\n                (click)=\"openNextRound()\"\r\n              >\r\n                {{'elements.button.nextRound' | translate}}\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      *ngIf=\"(activeRoundId$ | async) === 'start' || ((activeRoundId$ | async) && (activePlayerId$ | async))\"\r\n    >\r\n      <ion-col\r\n        size-lg=\"8\"\r\n        size-md=\"10\"\r\n        size-sm=\"12\"\r\n        offset-lg=\"2\"\r\n        offset-md=\"1\"\r\n        offset-sm=\"0\"\r\n      >\r\n        <app-round\r\n          [activeRoundId$]=\"activeRoundId$\"\r\n          [activePlayerId$]=\"activePlayerId$\"\r\n          [gameType$]=\"gameType$\"\r\n          [players$]=\"players$\"\r\n        ></app-round>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 2685:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/games/gamers/choose-players/choose-players.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title class=\"ion-text-center\">{{\r\n      'modules.games.addPlayers' | translate\r\n    }}</ion-card-title>\r\n    <ion-card-subtitle class=\"ion-text-center\">{{'games.' + gameType + '.name' | translate}}</ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"choose-players\">\r\n    <ion-list class=\"choose-players__list\">\r\n      <ion-item-sliding *ngFor=\"let player of players$ | async; let index = index\" lines=\"none\">\r\n        <ion-item lines=\"none\">\r\n          <div class=\"players-list\">\r\n            <div class=\"players-list__color\">\r\n              <div\r\n                class=\"select-color\"\r\n                (click)=\"filtredColors.length > 1 ? showSelectColorPopup($event, index) : null\"\r\n                [ngStyle]=\"{ 'background-color': player?.color }\"\r\n              ></div>\r\n            </div>\r\n            <div class=\"players-list__info\">\r\n              <ion-item>\r\n                <ion-select\r\n                  placeholder=\"Select One\"\r\n                  [value]=\"player\"\r\n                  interface=\"popover\"\r\n                  (ionChange)=\"choosePlayerHandler($event, index)\"\r\n                  slot=\"end\"\r\n                >\r\n                  <ion-select-option [value]=\"player\">\r\n                    {{ player.name }}\r\n                  </ion-select-option>\r\n                  <ion-select-option\r\n                    *ngFor=\"let filtredGamer of filtredGamers\"\r\n                    [value]=\"filtredGamer\"\r\n                  >\r\n                    {{ filtredGamer.name }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-note slot=\"end\" color=\"danger\">\r\n                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                  <ion-icon name=\"caret-back-outline\"></ion-icon>\r\n                </ion-note>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"removePlayerHandler(player._id)\">{{\r\n            'elements.button.remove' | translate\r\n          }}</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-row class=\"choose-players__btn-block\">\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          fill=\"outline\"\r\n          size=\"small\"\r\n          color=\"secondary\"\r\n          (click)=\"addPlayerHandler()\"\r\n          [disabled]=\"players.length >= environment.games[gameType]?.maxPlayersQty\"\r\n        >\r\n          {{ 'elements.button.add' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          fill=\"outline\"\r\n          size=\"small\"\r\n          color=\"success\"\r\n          (click)=\"showCreateGamerPopup($event)\"\r\n        >\r\n          {{ 'elements.button.create' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          fill=\"outline\"\r\n          size=\"small\"\r\n          color=\"danger\"\r\n          (click)=\"removeAllPlayersHandler()\"\r\n        >\r\n          {{ 'elements.button.removeAll' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"choose-players__btn-block\">\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"startGameHandler()\"\r\n          [disabled]=\"\r\n            players.length < 2 || players.length > environment.games[gameType]?.maxPlayersQty\r\n          \"\r\n        >\r\n          {{ 'elements.button.startGame' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<!-- </ion-col>\r\n  </ion-row>\r\n</ion-grid> -->\r\n";

/***/ }),

/***/ 4541:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/games/gamers/create-gamer/create-gamer.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{'modules.games.createGamer' | translate}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        {{'elements.button.close' | translate}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-list>\r\n\r\n        <ion-item lines=\"none\">\r\n          <div class=\"players-list\">\r\n            <div class=\"players-list__color\">\r\n              <div class=\"select-color\" (click)=\"showSelectColorPopup($event)\"\r\n                [ngStyle]=\"{'background-color' : color }\">\r\n              </div>\r\n            </div>\r\n            <div class=\"players-list__info\">\r\n              <ion-item>\r\n                <ion-input [placeholder]=\"'modules.user.name' | translate\"\r\n                 clearInput [(ngModel)]=\"name\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"onCreate()\" [disabled]=\"!name\">\r\n            {{'elements.button.create' | translate}}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";

/***/ }),

/***/ 656:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/games/gamers/select-color/select-color.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <ion-row class=\"select-color\">\r\n        <ion-col class=\"select-color__container\" *ngFor=\"let color of colors\" (click)=\"onSelect(color)\">\r\n          <div class=\"select-color__item\" [ngStyle]=\"{'background-color' : color }\"></div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>";

/***/ }),

/***/ 5567:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/games/round/round-t-wrapper/round-t-wrapper.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-header [ngStyle]=\"{'border-bottom': '2px solid ' + getPlayerColor()}\">\r\n    <!-- <ion-card-subtitle>\r\n      <span class=\"round-subtitle\">\r\n        <ion-icon class=\"round-subtitle__icon\" color=\"primary\" [name]=getRoundById()?.icon></ion-icon>\r\n        <span class=\"ion-text-capitalize round-subtitle__text\">\r\n          {{'games.' + (gameType$ | async) + '.' + getRoundById()?.name | translate}} {{getRoundById()?.namePostfix}}\r\n        </span>\r\n        <span class=\"round-subtitle__blank\"></span>\r\n        <span>{{calcScores()}}</span>\r\n      </span>\r\n    </ion-card-subtitle> -->\r\n    <ion-card-title class=\"ion-text-center\">\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let player of (players$ | async)\">\r\n         <ion-text>{{player.name}}</ion-text>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n  <ng-content></ng-content>\r\n</ion-card>";

/***/ }),

/***/ 4308:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/games/round/round-wrapper/round-wrapper.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n  <ion-card-header [ngStyle]=\"{'border-bottom': '2px solid ' + getPlayerColor()}\">\r\n    <ion-card-subtitle>\r\n      <span class=\"round-subtitle\">\r\n        <ion-icon class=\"round-subtitle__icon\" color=\"primary\" [name]=getRoundById()?.icon></ion-icon>\r\n        <span *ngIf=\"(gameType$ | async) !== 'rummy'\" class=\"ion-text-capitalize round-subtitle__text\">\r\n          {{'games.' + (gameType$ | async) + '.' + getRoundById()?.name | translate}} {{getRoundById()?.namePostfix}}\r\n        </span>\r\n\r\n        <span class=\"round-subtitle__blank\"></span>\r\n        <span>{{calcScores()}}</span>\r\n      </span>\r\n    </ion-card-subtitle>\r\n    <ion-card-title class=\"ion-text-center\">{{getPlayerName()}}</ion-card-title>\r\n  </ion-card-header>\r\n  <ng-content></ng-content>\r\n</ion-card>";

/***/ }),

/***/ 1897:
/*!*********************************************************************!*\
  !*** ./src/app/modules/games/round/round.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-choose-players\r\n  *ngIf=\"(activeRoundId$ | async) === 'start' && (rounds$ | async).length === 0; else restRounds\"\r\n>\r\n</app-choose-players>\r\n<ng-template #restRounds>\r\n  <!-- Ticket to ride -->\r\n  <app-round-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'train'\"\r\n    [ngSwitch]=\"activeRoundId$ | async\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-routes\r\n      *ngSwitchCase=\"'routes'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-routes>\r\n    <app-round-length\r\n      *ngSwitchCase=\"'length'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-length>\r\n    <app-round-stations\r\n      *ngSwitchCase=\"'stations'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-stations>\r\n    <app-round-cars\r\n      *ngSwitchCase=\"'cars'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    >\r\n    </app-round-cars>\r\n  </app-round-wrapper>\r\n  <!-- Uno -->\r\n  <app-round-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'uno'\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-uno [roundId]=\"activeRoundId$ | async\" [playerId]=\"activePlayerId$ | async\">\r\n    </app-round-uno>\r\n  </app-round-wrapper>\r\n  <!-- Rummy -->\r\n  <app-round-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'rummy'\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-rummy [roundId]=\"activeRoundId$ | async\" [playerId]=\"activePlayerId$ | async\">\r\n    </app-round-rummy>\r\n  </app-round-wrapper>\r\n  <!-- Thousand -->\r\n  <app-round-t-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'thousand'\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-thousand\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-thousand>\r\n    <!-- <app-round-thousand *ngFor=\"let round of (rounds$ | async)\" [roundId]=\"round._id\" [round]=\"round\"\r\n      [playerId]=\"(activePlayerId$ | async)\"></app-round-thousand> -->\r\n  </app-round-t-wrapper>\r\n</ng-template>\r\n";

/***/ }),

/***/ 3665:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/games/round/rummy/round-rummy/round-rummy.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col *ngFor=\"let namedScore of namedScoresEnv\" size=\"2.4\">\r\n      <!-- <img class=\"uno-round-img\" [src]=\"namedScore.picture\" [alt]=\"namedScore.name\"\r\n      (click)=\"addToNamedScoresLine(namedScore)\"> -->\r\n\r\n      <ion-chip  (click)=\"addToNamedScoresLine(namedScore)\">\r\n        <ion-label>{{namedScore.name}}</ion-label>\r\n      </ion-chip>\r\n    </ion-col>\r\n    <!-- <ion-col size=\"3\">\r\n      <ion-chip [color]=\"'danger'\" (click)=\"inverseScore()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n        <ion-icon name=\"remove-outline\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row class=\"round round_result\">\r\n    <ion-col *ngFor=\"let namedScore of getMemberByPlayerId()?.namedScoresLine\" size=\"1\">\r\n      <!-- <img [src]=\"namedScore.picture\" [alt]=\"namedScore.name\" (click)=\"removeFromNamedScoresLine(namedScore)\"> -->\r\n\r\n      <ion-chip outline [color]=\"'secondary'\" (click)=\"removeFromNamedScoresLine(namedScore)\">\r\n        <ion-label>{{namedScore.name }}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n\r\n      </ion-chip>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>";

/***/ }),

/***/ 5000:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/games/round/thousand/round-thousand/round-thousand.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ng-container class=\"round round_result\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"storeRoundScores()\" expand=\"block\"> {{'elements.button.submit' | translate}} </ion-button>\r\n      </ion-col>\r\n      <ion-col\r\n        *ngFor=\"let roundMember of roundMembers$ | async; let i = index\"\r\n        [size]=\"12 / qtyOfPlayers\"\r\n      >\r\n        <div\r\n          [ngClass]=\"\r\n            roundMember._id === activeRoundMemberId\r\n              ? { 'active-item': true }\r\n              : { 'regular-item': true }\r\n          \"\r\n        ></div>\r\n        <div class=\"round-btn-block\">\r\n          <ion-button\r\n            class=\"round-btn-block__item\"\r\n            size=\"small\"\r\n            (click)=\"changeScoresState(roundMember._id, 'r')\"\r\n            color=\"secondary\"\r\n            [fill]=\"scores[roundMember._id]?.name !== 'r' ? 'solid' : 'outline'\"\r\n            [disabled]=\"\r\n              scores[roundMember._id]?.disabled.includes('r') ||\r\n              scores[roundMember._id].barrel > 0 ||\r\n              (roundMember._id === activeRoundMemberId && qtyOfPlayers === 4)\r\n            \"\r\n            >R</ion-button\r\n          >\r\n          <ion-button\r\n            class=\"round-btn-block__item\"\r\n            size=\"small\"\r\n            (click)=\"changeScoresState(roundMember._id, 's')\"\r\n            color=\"secondary\"\r\n            [fill]=\"scores[roundMember._id]?.name !== 's' ? 'solid' : 'outline'\"\r\n            [disabled]=\"\r\n              scores[roundMember._id]?.disabled.includes('s') ||\r\n              scores[roundMember._id].barrel > 0 ||\r\n              (roundMember._id === activeRoundMemberId && qtyOfPlayers === 4)\r\n            \"\r\n            >S</ion-button\r\n          >\r\n        </div>\r\n        <ion-item class=\"thousand-score-input\">\r\n          <ion-input\r\n            type=\"number\"\r\n            placeholder=\"0\"\r\n            [(ngModel)]=\"scores[roundMember._id].value\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col\r\n        *ngFor=\"let roundMember of addTotals(roundMembers$ | async)\"\r\n        [size]=\"12 / qtyOfPlayers\"\r\n      >\r\n        <ion-item\r\n          class=\"thousand-score__wrapper\"\r\n          [lines]=\"\r\n            (roundMember.namedScoresLine.length - i - 1) % qtyOfPlayers === 0 ? 'full' : 'none'\r\n          \"\r\n          *ngFor=\"let score of roundMember.namedScoresLine.slice().reverse(); let i = index\"\r\n        >\r\n          <ion-text\r\n            class=\"thousand-score__current\"\r\n            [color]=\"i <= 1 && scores[roundMember._id].doubleZero ? 'danger' : ''\"\r\n            >{{ score.name === 'r' || score.name === 's' ? score.name.toUpperCase() : score.value }}</ion-text\r\n          >\r\n          <div style=\"width: 100%\"></div>\r\n          <ion-text\r\n            class=\"thousand-score__total\"\r\n            [ngClass]=\"{ 'thousand-score__total_last': i === 0 }\"\r\n            [color]=\"\r\n              score.total >= 900 &&\r\n              score.total < 1000 &&\r\n              scores[roundMember._id].barrel &&\r\n              i < qtyOfPlayers\r\n                ? 'danger'\r\n                : ''\r\n            \"\r\n            >{{ score.total }}</ion-text\r\n          >\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n</ion-card-content>\r\n";

/***/ }),

/***/ 2747:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-cars/round-cars.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ion-row *ngFor=\"let car of carsScoresEnv\" class=\"round round_tools\">\r\n    <ion-col class=\"round_tools__score\">\r\n      <ion-label>{{calcQtyOfArrItems(car.value)}}</ion-label>\r\n    </ion-col>\r\n    <ion-col class=\"round_tools__btn\">\r\n      <div class=\"incDecBtn\">\r\n        <ion-button shape=\"round\" color=\"danger\" fill=\"outline\" (click)=\"removeFromScoresLine(car.value)\">\r\n          <ion-icon name=\"remove-outline\"></ion-icon>\r\n        </ion-button>\r\n        <span class=\"incDecBtn__caption\">\r\n          <ion-icon name=\"train-outline\"></ion-icon>\r\n          {{car.name}}\r\n        </span>\r\n        <ion-button shape=\"round\" color=\"success\" fill=\"outline\" (click)=\"addToScoresLine(car.value)\">\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>";

/***/ }),

/***/ 4685:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-length/round-length.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ion-row>\r\n    <ion-col class=\"round round_tools\">\r\n      <div>{{'games.train.longestRoute' | translate}}</div>\r\n      <ion-toggle [checked]=\"getMemberByPlayerId()?.scoresLine.length\"\r\n        (ionChange)=\"onMarkLongestHandler($event)\">\r\n      </ion-toggle>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>";

/***/ }),

/***/ 1244:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-routes/round-routes.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col *ngFor=\"let routeScore of routesScoresEnv\" size=\"3\">\r\n      <ion-chip [color]=\"routeScore.value > 19 ? 'secondary' : 'warning'\"\r\n        (click)=\"addToNamedScoresLine({value: routeScore.value * inverse, name: (numberFn(routeScore.name) * inverse) + '' })\">\r\n        <ion-label>{{routeScore.value * inverse}}</ion-label>\r\n      </ion-chip>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-chip [color]=\"'danger'\" (click)=\"inverseScore()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n        <ion-icon name=\"remove-outline\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"round round_result\">\r\n    <ion-col *ngFor=\"let routeScore of getMemberByPlayerId().namedScoresLine\" size=\"3\">\r\n      <ion-chip outline [color]=\"routeScore.value > 19 ? 'secondary' : routeScore.value < 0 ? 'danger' : 'warning'\"\r\n        (click)=\"removeFromNamedScoresLine({value: routeScore.value, name: routeScore.name})\">\r\n        <ion-label>{{routeScore.value}}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>";

/***/ }),

/***/ 2604:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-stations/round-stations.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col class=\"round_tools__score\">\r\n      <ion-label>{{ 3 - calcScores() / 4 }}</ion-label>\r\n    </ion-col>\r\n    <ion-col class=\"round_tools__btn\">\r\n      <div class=\"incDecBtn\">\r\n        <ion-button shape=\"round\" color=\"danger\" fill=\"outline\" (click)=\"addToScoresLine(4)\"\r\n          [disabled]=\"getMemberByPlayerId().scoresLine.length >= 3\">\r\n          <ion-icon name=\"remove-outline\"></ion-icon>\r\n        </ion-button>\r\n        <span class=\"incDecBtn__caption\">\r\n          <div>{{'games.train.stationsShort' | translate}}</div>\r\n        </span>\r\n        <ion-button shape=\"round\" color=\"success\" fill=\"outline\" (click)=\"removeFromScoresLine(4)\"\r\n          [disabled]=\"getMemberByPlayerId().scoresLine.length <= 0\">\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>";

/***/ }),

/***/ 7904:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/games/round/uno/round-uno/round-uno.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col *ngFor=\"let namedScore of namedScoresEnv\" size=\"2.4\">\r\n      <img class=\"uno-round-img\" [src]=\"namedScore.picture\" [alt]=\"namedScore.name\"\r\n      (click)=\"addToNamedScoresLine(namedScore)\">\r\n\r\n      <!-- <ion-chip  (click)=\"addToNamedScoresLine(namedScore)\">\r\n        <ion-label>{{namedScore.name}}</ion-label>\r\n      </ion-chip> -->\r\n    </ion-col>\r\n    <!-- <ion-col size=\"3\">\r\n      <ion-chip [color]=\"'danger'\" (click)=\"inverseScore()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n        <ion-icon name=\"remove-outline\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row class=\"round round_result\">\r\n    <ion-col *ngFor=\"let namedScore of getMemberByPlayerId()?.namedScoresLine\" size=\"1\">\r\n      <img [src]=\"namedScore.picture\" [alt]=\"namedScore.name\" (click)=\"removeFromNamedScoresLine(namedScore)\">\r\n\r\n      <!-- <ion-chip outline [color]=\"routeScore > 19 ? 'secondary' : 'warning'\" (click)=\"removeFromScoresLine(routeScore)\">\r\n        <ion-label>{{routeScore }}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n\r\n      </ion-chip> -->\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_games_game_game_module_ts.js.map