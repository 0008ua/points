"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_games_game_game_module_ts"],{

/***/ 48265:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/deactivate-route.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeactivateRouteGuard": () => (/* binding */ DeactivateRouteGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal.service */ 39853);
/* harmony import */ var _common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/action-confirm/action-confirm.component */ 50658);
/* harmony import */ var src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/app.actions */ 58717);






let DeactivateRouteGuard = class DeactivateRouteGuard {
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
                confirmBtnText: 'elements.button.leaveGame',
            };
            return this.modalService.presentModal(_common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ActionConfirmComponent, { data }).then(({ role }) => {
                if (role === 'confirm') {
                    this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__.clearGame());
                    return true;
                }
                return false;
            });
        }
        else {
            return Promise.resolve(true);
        }
    }
};
DeactivateRouteGuard.ctorParameters = () => [
    { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store }
];
DeactivateRouteGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], DeactivateRouteGuard);



/***/ }),

/***/ 62926:
/*!***********************************************************!*\
  !*** ./src/app/modules/games/game/game-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageRoutingModule": () => (/* binding */ GamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_deactivate_route_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/deactivate-route.guard */ 48265);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 19123);





const routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage,
        canDeactivate: [_auth_deactivate_route_guard__WEBPACK_IMPORTED_MODULE_0__.DeactivateRouteGuard],
    },
];
let GamePageRoutingModule = class GamePageRoutingModule {
};
GamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], GamePageRoutingModule);



/***/ }),

/***/ 60770:
/*!***************************************************!*\
  !*** ./src/app/modules/games/game/game.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageModule": () => (/* binding */ GamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 62926);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 19123);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _round_round_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../round/round.module */ 20740);
/* harmony import */ var _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gamers/gamers.module */ 6932);
/* harmony import */ var _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-result/game-result.component */ 18339);
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shared.module */ 43938);












let GamePageModule = class GamePageModule {
};
GamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild({
                extend: true,
            }),
            _round_round_module__WEBPACK_IMPORTED_MODULE_2__.RoundModule,
            _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_3__.GamersModule,
            _common_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ],
        declarations: [_game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage, _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_4__.GameResultComponent],
    })
], GamePageModule);



/***/ }),

/***/ 19123:
/*!*************************************************!*\
  !*** ./src/app/modules/games/game/game.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePage": () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./game.page.html */ 44464);
/* harmony import */ var _game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page.scss */ 97728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 40563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 92890);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/reducers/app.reducer */ 55305);
/* harmony import */ var _store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/round.reducer */ 88761);
/* harmony import */ var _store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/reducers/player.reducer */ 43051);
/* harmony import */ var _store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/reducers/round-member.reducer */ 27539);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/actions/app.actions */ 58717);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/modal.service */ 39853);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/action-confirm/action-confirm.component */ 50658);


















let GamePage = class GamePage {
    constructor(store, sharedService, route, modalService) {
        this.store = store;
        this.sharedService = sharedService;
        this.route = route;
        this.modalService = modalService;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.showToolbarMenu = false;
        this.activeRoundId$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.ReplaySubject(1);
        this.activePlayerId$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.ReplaySubject(1);
    }
    ngOnInit() {
        this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__.selectLoading);
        this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__.selectGameType);
        this.rounds$ = this.store.select(_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_4__.selectAllRounds);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.gameType$, this.rounds$]).subscribe(([gameType, rounds]) => {
            if (!gameType) {
                return;
            }
            this.gameType = gameType;
            this.showToolbarMenu = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games[gameType].showToolbarMenu;
            this.roundsCfg = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games[gameType].rounds;
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
                    this.activeRoundId$.next(this.roundsCfg[1]._id +
                        (rounds.length === 1 ? this.roundsCfg[1].namePostfix : rounds.length));
                }
                else {
                    this.activeRoundId$.next(this.roundsCfg[1]._id);
                }
            }
            else {
                // game not started and active menu !'start'
                this.activeRoundId$.next(this.roundsCfg[0]._id);
            }
        });
        this.roundMembers$ = this.store.select(_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_6__.selectAllRoundMembers);
        this.players$ = this.store.select(_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllPlayers);
        this.players$.subscribe((players) => {
            if (players.length) {
                this.activePlayerId$.next(players[0]._id);
            }
        });
        this.players$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((players) => {
            this.players = players;
            return this.roundMembers$;
        }))
            .subscribe((roundMembers) => {
            this.roundMembers = roundMembers;
            this.playersWithTotal = this.players
                .map((player) => {
                return Object.assign(Object.assign({}, player), { totalScore: this.getPlayerTotalScores(player._id) });
            })
                .sort((a, b) => b.totalScore - a.totalScore);
        });
        this.activePlayerId$.subscribe((activePlayerId) => (this.activePlayerId = activePlayerId));
        this.route.params.subscribe((params) => {
            // this.gameType = params.id;
        });
    }
    canDeactivate() {
        return this.rounds.length === 0;
    }
    finishGameDisabled(playersWithTotal) {
        let countZeros = 0;
        playersWithTotal.forEach((player) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                title: 'elements.button.finishGame',
                text: 'common.finishGameQuestion',
                cancelBtnText: 'elements.button.returnToGame',
                confirmBtnText: 'elements.button.finishGame',
            };
            const { role } = yield this.modalService.presentModal(_common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_10__.ActionConfirmComponent, { data });
            if (role === 'confirm') {
                this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__.finishGame());
            }
        });
    }
    onCancelGameHandler() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                title: 'elements.button.cancelGame',
                text: 'common.cancelGameQuestion',
                cancelBtnText: 'elements.button.returnToGame',
                confirmBtnText: 'elements.button.cancelGame',
            };
            const { role } = yield this.modalService.presentModal(_common_action_confirm_action_confirm_component__WEBPACK_IMPORTED_MODULE_10__.ActionConfirmComponent, { data });
            if (role === 'confirm') {
                this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__.clearGame());
            }
        });
    }
    openNextRound() {
        this.store.dispatch(src_app_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__.openNextRound());
        // this.sharedService.addRounds(this.nextRound);
    }
    selectPlayer(playerId) {
        if (this.gameType === 'thousand') {
            return;
        }
        this.activePlayerId$.next(playerId);
    }
};
GamePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_9__.ModalService }
];
GamePage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonModal,] }]
};
GamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-game',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_game_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_game_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GamePage);



/***/ }),

/***/ 78412:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/games/gamers/choose-players/choose-players.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosePlayersComponent": () => (/* binding */ ChoosePlayersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_choose_players_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./choose-players.component.html */ 26244);
/* harmony import */ var _choose_players_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-players.component.scss */ 11243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/gamer-data.service */ 19973);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-color/select-color.component */ 95648);
/* harmony import */ var _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-gamer/create-gamer.component */ 4874);
/* harmony import */ var _store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/reducers/player.reducer */ 43051);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/reducers/app.reducer */ 55305);
/* harmony import */ var _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/actions/player.actions */ 75803);
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/actions/app.actions */ 58717);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 18260);
















let ChoosePlayersComponent = class ChoosePlayersComponent {
    constructor(store, translate, gamerService, popoverController, alertController, sharedService) {
        this.store = store;
        this.translate = translate;
        this.gamerService = gamerService;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.sharedService = sharedService;
        // @Input() gameType: string;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment;
        this.gamers = [];
        this.filtredGamers = [];
        // showSelectColor: number | null;
        this.players = [];
    }
    ngOnInit() {
        this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_6__.selectGameType);
        this.gameType$.subscribe((gameType) => {
            var _a, _b;
            this.gameType = gameType;
            this.playersColors = (_a = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.games[gameType]) === null || _a === void 0 ? void 0 : _a.playersColors;
            this.filtredColors = (_b = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.games[gameType]) === null || _b === void 0 ? void 0 : _b.playersColors;
        });
        this.players$ = this.store.select(_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllPlayers);
        this.players$.subscribe((players) => {
            this.players = players;
            this.filter();
        });
        this.gamers$ = this.gamerService.entities$;
        this.gamers$.subscribe((gamers) => {
            this.gamers = gamers;
            this.filter();
        });
    }
    startGameHandler() {
        this.store.dispatch(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__.createRounds());
        // this.sharedService.createRounds(this.gameType);
    }
    presentPopover(event, component, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component,
                cssClass: 'select-color-popover',
                // event,
                componentProps: data,
                translucent: true,
            });
            yield popover.present();
            return yield popover.onDidDismiss();
        });
    }
    showSelectColorPopup(event, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { data } = yield this.presentPopover(event, _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_3__.SelectColorComponent, {
                colors: this.filtredColors,
            });
            if (data) {
                const { color } = data;
                this.chooseColorHandler(color, index);
            }
        });
    }
    showCreateGamerPopup(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { data } = yield this.presentPopover(event, _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_4__.CreateGamerComponent, null);
            if (data) {
                const { gamer } = data;
                this.createGamerHandler(gamer);
            }
        });
    }
    filter() {
        var _a;
        this.filtredGamers = this.gamers.filter((gamer) => {
            for (const player of this.players) {
                if (player._id === gamer._id) {
                    return false;
                }
            }
            return true;
        });
        const filtredColors = (_a = this.playersColors) === null || _a === void 0 ? void 0 : _a.filter((color, idx) => {
            for (const player of this.players) {
                if (player.color === color) {
                    return false;
                }
            }
            return true;
        });
        this.filtredColors = (filtredColors === null || filtredColors === void 0 ? void 0 : filtredColors.length)
            ? filtredColors
            : this.filtredColors;
    }
    choosePlayerHandler(e, index) {
        const players = this.players.map((player, idx) => {
            if (idx === index) {
                const preferredColor = this.filtredGamers[0].color;
                if (this.filtredColors.includes(preferredColor)) {
                    return e.target.value;
                }
                else {
                    return Object.assign(Object.assign({}, e.target.value), { color: this.filtredColors[0] });
                }
            }
            return player;
        });
        this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_7__.loadPlayers({ players }));
    }
    chooseColorHandler(color, index) {
        this.players = this.players.map((player, idx) => {
            if (idx === index) {
                return Object.assign(Object.assign({}, player), { color });
            }
            return player;
        });
        this.filter();
    }
    removePlayerHandler(_id) {
        this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_7__.deletePlayer({ id: _id }));
    }
    removeAllPlayersHandler() {
        this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_7__.clearPlayers());
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
            this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_7__.addPlayer({ player: Object.assign({}, candidate) }));
        }
        else {
            this.store.dispatch(_store_actions_player_actions__WEBPACK_IMPORTED_MODULE_7__.addPlayer({
                player: Object.assign(Object.assign({}, candidate), { color: this.filtredColors[0] }),
            }));
        }
        // this.filter();
    }
    createGamerHandler(gamer) {
        this.gamerService.add(gamer).subscribe((result) => {
            // console.log(result);
        });
    }
};
ChoosePlayersComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: src_app_store_gamer_data_service__WEBPACK_IMPORTED_MODULE_2__.GamerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_9__.SharedService }
];
ChoosePlayersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-choose-players',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_choose_players_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_choose_players_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChoosePlayersComponent);



/***/ }),

/***/ 4874:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/games/gamers/create-gamer/create-gamer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGamerComponent": () => (/* binding */ CreateGamerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_gamer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-gamer.component.html */ 86938);
/* harmony import */ var _create_gamer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-gamer.component.scss */ 78716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-color/select-color.component */ 95648);







let CreateGamerComponent = class CreateGamerComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.playersColors = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.playersColors;
        this.color = this.playersColors[0];
    }
    ngOnInit() { }
    presentPopover(event, component, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component,
                cssClass: 'select-color-popover',
                // event,
                componentProps: data,
                translucent: true,
            });
            yield popover.present();
            return yield popover.onDidDismiss();
        });
    }
    showSelectColorPopup(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { data } = yield this.presentPopover(event, _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_3__.SelectColorComponent, {
                colors: this.playersColors,
            });
            if (data) {
                const { color } = data;
                this.color = color;
            }
        });
    }
    dismiss(data) {
        this.popoverController.dismiss(data);
    }
    onCreate() {
        this.dismiss({
            gamer: {
                color: this.color,
                name: this.name,
            },
        });
    }
};
CreateGamerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController }
];
CreateGamerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-create-gamer',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_gamer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_gamer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateGamerComponent);



/***/ }),

/***/ 6932:
/*!*******************************************************!*\
  !*** ./src/app/modules/games/gamers/gamers.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamersModule": () => (/* binding */ GamersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _choose_players_choose_players_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-players/choose-players.component */ 78412);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-color/select-color.component */ 95648);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-gamer/create-gamer.component */ 4874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);









let GamersModule = class GamersModule {
};
GamersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_choose_players_choose_players_component__WEBPACK_IMPORTED_MODULE_0__.ChoosePlayersComponent, _select_color_select_color_component__WEBPACK_IMPORTED_MODULE_1__.SelectColorComponent, _create_gamer_create_gamer_component__WEBPACK_IMPORTED_MODULE_2__.CreateGamerComponent],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                extend: true,
            }),
        ],
        exports: [_choose_players_choose_players_component__WEBPACK_IMPORTED_MODULE_0__.ChoosePlayersComponent],
    })
], GamersModule);



/***/ }),

/***/ 95648:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/games/gamers/select-color/select-color.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectColorComponent": () => (/* binding */ SelectColorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_color_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-color.component.html */ 50488);
/* harmony import */ var _select_color_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-color.component.scss */ 24327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let SelectColorComponent = class SelectColorComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    dismiss(data) {
        this.popoverController.dismiss(data);
    }
    onSelect(color) {
        this.dismiss({
            color,
        });
    }
};
SelectColorComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
SelectColorComponent.propDecorators = {
    colors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SelectColorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-select-color',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_color_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_color_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectColorComponent);



/***/ }),

/***/ 75333:
/*!************************************************!*\
  !*** ./src/app/modules/games/games.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesService": () => (/* binding */ GamesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 84452);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers/round-member.reducer */ 27539);
/* harmony import */ var _store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/round-member.actions */ 8775);
/* harmony import */ var _auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/telegram/telegram.service */ 50153);








let GamesService = class GamesService {
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
                this.store
                    .select((0,src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__.selectByIdRoundMember)(key))
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                    .subscribe((roundMember) => {
                    const namedScore = {
                        name: scores[key].name,
                        value: scores[key].value,
                    };
                    updates.push({
                        id: roundMember._id,
                        changes: Object.assign(Object.assign({}, roundMember), { namedScoresLine: [...roundMember.namedScoresLine, namedScore], scoresLine: [...roundMember.scoresLine, namedScore.value] }),
                    });
                });
            }
        }
        this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMembers({
            roundMembers: updates,
        }));
    }
    addToNamedScoresLine(namedScore, playerId, roundId) {
        const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
        const changes = Object.assign(Object.assign({}, roundMember), { namedScoresLine: [...roundMember.namedScoresLine, namedScore], scoresLine: [...roundMember.scoresLine, namedScore.value] });
        this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
            roundMember: {
                id: roundMember._id,
                changes,
            },
        }));
        // this.addToScoresLine(namedScore.value, playerId, roundId);
    }
    addToScoresLine(score, playerId, roundId) {
        const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
        const changes = Object.assign(Object.assign({}, roundMember), { scoresLine: [...roundMember.scoresLine, score] });
        this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
            roundMember: {
                id: roundMember._id,
                changes,
            },
        }));
    }
    removeFromNamedScoresLine(namedScore, playerId, roundId) {
        const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
        const namedScoresLine = [...roundMember.namedScoresLine];
        const index = namedScoresLine.findIndex((ns) => ns.name === namedScore.name);
        if (index !== -1) {
            namedScoresLine.splice(index, 1);
            const changes = Object.assign(Object.assign({}, roundMember), { namedScoresLine });
            this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
                roundMember: {
                    id: roundMember._id,
                    changes,
                },
            }));
            this.removeFromScoresLine(namedScore.value, playerId, roundId);
        }
    }
    removeFromScoresLine(score, playerId, roundId) {
        const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
        const scoresLine = [...roundMember.scoresLine];
        const index = scoresLine.indexOf(score);
        scoresLine.splice(index, 1);
        const changes = Object.assign(Object.assign({}, roundMember), { scoresLine });
        this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
            roundMember: {
                id: roundMember._id,
                changes,
            },
        }));
    }
    setScoresLine(scoresLine, playerId, roundId) {
        const roundMember = this.sharedService.getMemberByPlayerId(playerId, roundId);
        const changes = Object.assign(Object.assign({}, roundMember), { scoresLine });
        this.store.dispatch(_store_actions_round_member_actions__WEBPACK_IMPORTED_MODULE_2__.updateRoundMember({
            roundMember: {
                id: roundMember._id,
                changes,
            },
        }));
    }
};
GamesService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService },
    { type: _auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__.TelegramService }
];
GamesService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], GamesService);



/***/ }),

/***/ 6737:
/*!*********************************************************!*\
  !*** ./src/app/modules/games/round/round-interfaces.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUND_COMPONENT": () => (/* binding */ ROUND_COMPONENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

const ROUND_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('roundComponent');


/***/ }),

/***/ 46108:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/round-t-wrapper/round-t-wrapper.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundTWrapperComponent": () => (/* binding */ RoundTWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_t_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-t-wrapper.component.html */ 15440);
/* harmony import */ var _round_t_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-t-wrapper.component.scss */ 3879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../round-interfaces */ 6737);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/reducers/app.reducer */ 55305);
/* harmony import */ var src_app_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers/player.reducer */ 43051);









let RoundTWrapperComponent = class RoundTWrapperComponent {
    constructor(sharedService, store) {
        this.sharedService = sharedService;
        this.store = store;
    }
    ngOnInit() {
        this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
        this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectGameType);
        this.players$ = this.store.select(src_app_store_reducers_player_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllPlayers);
        this.gameType$.subscribe((gameType) => (this.gameType = gameType));
    }
    getRoundById() {
        return this.sharedService.getRoundById(this.roundId);
    }
    calcScores() {
        var _a;
        return (_a = this.getMemberByPlayerId()) === null || _a === void 0 ? void 0 : _a.scoresLine.reduce((prev, cur) => prev + cur, 0);
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
};
RoundTWrapperComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store }
];
RoundTWrapperComponent.propDecorators = {
    roundComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ContentChild, args: [_round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT, { static: true },] }],
    playerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    roundId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
RoundTWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-round-t-wrapper',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_t_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_round_t_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundTWrapperComponent);



/***/ }),

/***/ 72059:
/*!******************************************************************************!*\
  !*** ./src/app/modules/games/round/round-wrapper/round-wrapper.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundWrapperComponent": () => (/* binding */ RoundWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-wrapper.component.html */ 73715);
/* harmony import */ var _round_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-wrapper.component.scss */ 21134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../round-interfaces */ 6737);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/reducers/app.reducer */ 55305);








let RoundWrapperComponent = class RoundWrapperComponent {
    constructor(sharedService, store) {
        this.sharedService = sharedService;
        this.store = store;
    }
    ngOnInit() {
        this.loading$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectLoading);
        this.gameType$ = this.store.select(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_4__.selectGameType);
        this.gameType$.subscribe((gameType) => (this.gameType = gameType));
    }
    getRoundById() {
        return this.sharedService.getRoundById(this.roundId);
    }
    calcScores() {
        var _a;
        return (_a = this.getMemberByPlayerId()) === null || _a === void 0 ? void 0 : _a.scoresLine.reduce((prev, cur) => prev + cur, 0);
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
};
RoundWrapperComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store }
];
RoundWrapperComponent.propDecorators = {
    roundComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild, args: [_round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT, { static: true },] }],
    playerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    roundId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
RoundWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-round-wrapper',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_round_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundWrapperComponent);



/***/ }),

/***/ 50238:
/*!********************************************************!*\
  !*** ./src/app/modules/games/round/round.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundComponent": () => (/* binding */ RoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round.component.html */ 2695);
/* harmony import */ var _round_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round.component.scss */ 44568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/round.reducer */ 88761);






let RoundComponent = class RoundComponent {
    // gameType$: Observable<GameType>;
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.rounds$ = this.store.select(src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAllRounds);
        // this.gameType$ = this.store.select(selectGameType);
    }
};
RoundComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store }
];
RoundComponent.propDecorators = {
    activeRoundId$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    activePlayerId$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    gameType$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    players$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
RoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-round',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_round_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundComponent);



/***/ }),

/***/ 64743:
/*!********************************************************!*\
  !*** ./src/app/modules/games/round/round.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundBaseDirective": () => (/* binding */ RoundBaseDirective),
/* harmony export */   "RoundScoresLineDirective": () => (/* binding */ RoundScoresLineDirective),
/* harmony export */   "RoundTBaseDirective": () => (/* binding */ RoundTBaseDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 44718);
/* harmony import */ var src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers/round-member.reducer */ 27539);
/* harmony import */ var src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/round.reducer */ 88761);
/* harmony import */ var _auth_telegram_telegram_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/telegram/telegram.service */ 50153);
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../games.service */ 75333);









let RoundBaseDirective = class RoundBaseDirective {
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
};
RoundBaseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector }
];
RoundBaseDirective.propDecorators = {
    playerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    roundId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
RoundBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive)({
        selector: '[appRound]',
    })
], RoundBaseDirective);

let RoundScoresLineDirective = class RoundScoresLineDirective extends RoundBaseDirective {
    constructor(injector) {
        super(injector);
    }
    addToNamedScoresLine(namedScore, playerId) {
        this.gamesService.addToNamedScoresLine(namedScore, playerId || this.playerId, this.roundId);
    }
    removeFromNamedScoresLine(namedScore) {
        this.gamesService.removeFromNamedScoresLine(namedScore, this.playerId, this.roundId);
    }
};
RoundScoresLineDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector }
];
RoundScoresLineDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive)({
        selector: '[appRoundScoresLine]',
    })
], RoundScoresLineDirective);

let RoundTBaseDirective = class RoundTBaseDirective extends RoundScoresLineDirective {
    // roundMembers: RoundMember[];
    constructor(injector) {
        super(injector);
        this.store = injector.get(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store);
        this.rounds$ = this.store.select(src_app_store_reducers_round_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAllRounds);
        this.roundMembers$ = this.store.select(src_app_store_reducers_round_member_reducer__WEBPACK_IMPORTED_MODULE_1__.selectAllRoundMembers);
        // this.roundMembers$.subscribe((roundMembers) => this.roundMembers = roundMembers)
    }
};
RoundTBaseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector }
];
RoundTBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive)({
        selector: '[appRoundT]',
    })
], RoundTBaseDirective);



/***/ }),

/***/ 20740:
/*!*****************************************************!*\
  !*** ./src/app/modules/games/round/round.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundModule": () => (/* binding */ RoundModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _round_wrapper_round_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-wrapper/round-wrapper.component */ 72059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _round_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round.component */ 50238);
/* harmony import */ var _train_round_routes_round_routes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./train/round-routes/round-routes.component */ 46284);
/* harmony import */ var _train_round_length_round_length_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./train/round-length/round-length.component */ 7535);
/* harmony import */ var _train_round_stations_round_stations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./train/round-stations/round-stations.component */ 72276);
/* harmony import */ var _train_round_cars_round_cars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./train/round-cars/round-cars.component */ 98582);
/* harmony import */ var _uno_round_uno_round_uno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uno/round-uno/round-uno.component */ 33169);
/* harmony import */ var _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gamers/gamers.module */ 6932);
/* harmony import */ var _round_t_wrapper_round_t_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./round-t-wrapper/round-t-wrapper.component */ 46108);
/* harmony import */ var _thousand_round_thousand_round_thousand_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thousand/round-thousand/round-thousand.component */ 40347);
/* harmony import */ var _rummy_round_rummy_round_rummy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rummy/round-rummy/round-rummy.component */ 35206);

















let RoundModule = class RoundModule {
};
RoundModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _round_wrapper_round_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.RoundWrapperComponent,
            _round_t_wrapper_round_t_wrapper_component__WEBPACK_IMPORTED_MODULE_8__.RoundTWrapperComponent,
            _round_component__WEBPACK_IMPORTED_MODULE_1__.RoundComponent,
            _train_round_routes_round_routes_component__WEBPACK_IMPORTED_MODULE_2__.RoundRoutesComponent,
            _train_round_length_round_length_component__WEBPACK_IMPORTED_MODULE_3__.RoundLengthComponent,
            _train_round_stations_round_stations_component__WEBPACK_IMPORTED_MODULE_4__.RoundStationsComponent,
            _train_round_cars_round_cars_component__WEBPACK_IMPORTED_MODULE_5__.RoundCarsComponent,
            _uno_round_uno_round_uno_component__WEBPACK_IMPORTED_MODULE_6__.RoundUnoComponent,
            _thousand_round_thousand_round_thousand_component__WEBPACK_IMPORTED_MODULE_9__.RoundThousandComponent,
            _rummy_round_rummy_round_rummy_component__WEBPACK_IMPORTED_MODULE_10__.RoundRummyComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forChild({
                extend: true,
            }),
            _gamers_gamers_module__WEBPACK_IMPORTED_MODULE_7__.GamersModule,
        ],
        exports: [_round_component__WEBPACK_IMPORTED_MODULE_1__.RoundComponent],
    })
], RoundModule);



/***/ }),

/***/ 35206:
/*!********************************************************************************!*\
  !*** ./src/app/modules/games/round/rummy/round-rummy/round-rummy.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundRummyComponent": () => (/* binding */ RoundRummyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_rummy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-rummy.component.html */ 63841);
/* harmony import */ var _round_rummy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-rummy.component.scss */ 26620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 64743);
var RoundRummyComponent_1;







let RoundRummyComponent = RoundRummyComponent_1 = class RoundRummyComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundScoresLineDirective {
    constructor(injector) {
        super(injector);
        this.namedScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.rummy.namedScores;
        this.namedScoreLine = [];
    }
    ngOnInit() { }
};
RoundRummyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector }
];
RoundRummyComponent = RoundRummyComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-round-rummy',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_rummy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
                useExisting: RoundRummyComponent_1,
            },
        ],
        styles: [_round_rummy_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundRummyComponent);



/***/ }),

/***/ 40347:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/games/round/thousand/round-thousand/round-thousand.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundThousandComponent": () => (/* binding */ RoundThousandComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_thousand_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-thousand.component.html */ 63580);
/* harmony import */ var _round_thousand_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-thousand.component.scss */ 81074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round.directive */ 64743);
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/actions/app.actions */ 58717);
var RoundThousandComponent_1;








let RoundThousandComponent = RoundThousandComponent_1 = class RoundThousandComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_3__.RoundTBaseDirective {
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
        this.sub = this.roundMembers$.subscribe((roundMembers) => {
            this.qtyOfPlayers = roundMembers.length;
            this.roundMembers = roundMembers;
            if (this.checkOnFinishGame() && !this.isFinished) {
                // game finished
                this.isFinished = true;
                return this.store.dispatch(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.finishGame());
            }
            else if (roundMembers.length &&
                roundMembers[0].namedScoresLine.length &&
                roundMembers[0].namedScoresLine.length % roundMembers.length === 0) {
                // game started and at least one round finished
                const messages = this.addTotals(roundMembers).map((roundMember) => {
                    const { name, value, total } = roundMember.namedScoresLine[roundMember.namedScoresLine.length - 1];
                    return {
                        playerId: roundMember.player,
                        data: { lastScores: { name, value, total } },
                        gameType: 'thousand',
                    };
                });
                this.telegramService
                    .sendMessagesThousandRoundDto(messages)
                    .subscribe((_) => _);
            }
            if (this.roundMembers.length) {
                this.resetScores();
            }
        });
        // cancel prev game
        this.actions$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_store_actions_app_actions__WEBPACK_IMPORTED_MODULE_4__.clearGame))
            .subscribe((_) => (this.scores = {}));
    }
    addTotals(roundMembers) {
        return roundMembers.map((roundMember) => {
            let acc = 0;
            return Object.assign(Object.assign({}, roundMember), { namedScoresLine: roundMember.namedScoresLine.map((namedScore) => {
                    acc = namedScore.value + acc;
                    return Object.assign(Object.assign({}, namedScore), { total: acc });
                }) });
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
        Object.keys(this.scores)
            .filter((key) => key !== roundMemberId)
            .forEach((key) => {
            this.scores[key] = Object.assign(Object.assign({}, this.initialScores[key]), { value: option === 'r' ? 60 : 0 });
        });
    }
    resetScores() {
        const activeRoundMemberPosition = this.roundMembers.length
            ? (this.roundMembers[0].namedScoresLine.length + this.qtyOfPlayers) %
                this.qtyOfPlayers
            : 0;
        this.roundMembers.forEach((roundMember, i) => {
            if (i === activeRoundMemberPosition) {
                this.activeRoundMemberId = roundMember._id;
            }
            this.scores[roundMember._id] = {
                name: 'score',
                value: null,
                disabled: [],
                doubleZero: false,
                barrel: 0,
            };
            if (roundMember.namedScoresLine.length > 1) {
                const isDoubleZero = roundMember.namedScoresLine[roundMember.namedScoresLine.length - 1]
                    .value === 0 &&
                    roundMember.namedScoresLine[roundMember.namedScoresLine.length - 2]
                        .value === 0;
                if (isDoubleZero) {
                    this.scores[roundMember._id].doubleZero = true;
                }
            }
            let acc = 0;
            roundMember.namedScoresLine.map((namedScore) => {
                acc = namedScore.value + acc;
                if (acc >= 900 && acc < 1000) {
                    this.scores[roundMember._id].barrel += 1;
                }
                else {
                    this.scores[roundMember._id].barrel = 0;
                }
            });
            const isAlreadyR = roundMember.namedScoresLine.find((score) => score.name === 'r');
            if (isAlreadyR) {
                this.scores[roundMember._id].disabled.push('r');
            }
            const isAlreadyS = roundMember.namedScoresLine.find((score) => score.name === 's');
            if (isAlreadyS) {
                this.scores[roundMember._id].disabled.push('s');
            }
        });
        this.initialScores = JSON.parse(JSON.stringify(this.scores));
    }
    checkOnTrippleZero() {
        Object.keys(this.scores).forEach((key) => {
            if (this.scores[key].barrel > 0) {
                return;
            }
            if (this.scores[key].doubleZero && this.scores[key].value === 0) {
                this.scores[key].value = -100;
            }
        });
    }
    checkOnBarrelTimes() {
        Object.keys(this.scores).forEach((key) => {
            if (this.scores[key].barrel >= this.qtyOfPlayers ||
                this.scores[key].barrel >= 3) {
                let acc = 0;
                this.roundMembers
                    .find((roundMember) => roundMember._id === key)
                    .namedScoresLine.map((namedScore) => {
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
        Object.keys(this.scores).forEach((key) => {
            let acc = 0;
            this.roundMembers
                .find((roundMember) => roundMember._id === key)
                .namedScoresLine.map((namedScore) => {
                acc = namedScore.value + acc;
            });
            if (acc >= 1000) {
                isFinishGame = true;
            }
        });
        return isFinishGame;
    }
    checkGetOnBarrelOrWin() {
        Object.keys(this.scores).forEach((key) => {
            let acc = 0;
            this.roundMembers
                .find((roundMember) => roundMember._id === key)
                .namedScoresLine.map((namedScore) => {
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
        Object.keys(this.scores).forEach((key) => {
            if (typeof this.scores[key].value !== 'number') {
                this.scores[key].value = 0;
            }
        });
    }
    checkOnRoundedValue() {
        Object.keys(this.scores).forEach((key) => {
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
};
RoundThousandComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector }
];
RoundThousandComponent = RoundThousandComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-round-thousand',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_thousand_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_2__.ROUND_COMPONENT,
                useExisting: RoundThousandComponent_1,
            },
        ],
        styles: [_round_thousand_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundThousandComponent);



/***/ }),

/***/ 98582:
/*!******************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-cars/round-cars.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundCarsComponent": () => (/* binding */ RoundCarsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_cars_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-cars.component.html */ 23462);
/* harmony import */ var _round_cars_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-cars.component.scss */ 39627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 64743);
var RoundCarsComponent_1;







let RoundCarsComponent = RoundCarsComponent_1 = class RoundCarsComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundScoresLineDirective {
    constructor(injector) {
        super(injector);
        // @Input() playerId: UID;
        // @Input() roundId: string;
        this.carsScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.carsScores;
    }
    ngOnInit() { }
    calcQtyOfArrItems(item) {
        return this.sharedService.calcQtyOfArrItems(item, this.playerId, this.roundId);
    }
};
RoundCarsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector }
];
RoundCarsComponent = RoundCarsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-round-cars',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_cars_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
                useExisting: RoundCarsComponent_1,
            },
        ],
        styles: [_round_cars_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundCarsComponent);



/***/ }),

/***/ 7535:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-length/round-length.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundLengthComponent": () => (/* binding */ RoundLengthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_length_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-length.component.html */ 31986);
/* harmony import */ var _round_length_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-length.component.scss */ 60413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 64743);
var RoundLengthComponent_1;







let RoundLengthComponent = RoundLengthComponent_1 = class RoundLengthComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundBaseDirective {
    constructor(injector) {
        super(injector);
        // @Input() playerId: UID;
        // @Input() roundId: string;
        this.longestRouteScoreEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.longestRouteScore;
    }
    ngOnInit() { }
    // getMemberByPlayerId(): RoundMember {
    //   return super.sharedService.getMemberByPlayerId(this.playerId, this.roundId);
    // }
    onMarkLongestHandler(e) {
        const checked = e.target.checked;
        if (checked) {
            this.setScoresLine([this.longestRouteScoreEnv], this.playerId, this.roundId);
        }
        else {
            this.setScoresLine([], this.playerId, this.roundId);
        }
    }
};
RoundLengthComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector }
];
RoundLengthComponent = RoundLengthComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-round-length',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_length_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
                useExisting: RoundLengthComponent_1,
            },
        ],
        styles: [_round_length_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundLengthComponent);



/***/ }),

/***/ 46284:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-routes/round-routes.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundRoutesComponent": () => (/* binding */ RoundRoutesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_routes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-routes.component.html */ 96381);
/* harmony import */ var _round_routes_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-routes.component.scss */ 91735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round.directive */ 64743);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
var RoundRoutesComponent_1;







let RoundRoutesComponent = RoundRoutesComponent_1 = class RoundRoutesComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_3__.RoundScoresLineDirective {
    constructor(injector) {
        super(injector);
        this.routesScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.train.routesScores;
        this.inverse = 1;
        this.numberFn = Number;
    }
    ngOnInit() { }
    inverseScore() {
        this.inverse = (this.inverse * -1);
    }
};
RoundRoutesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector }
];
RoundRoutesComponent.propDecorators = {
    playerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    roundId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RoundRoutesComponent = RoundRoutesComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-round-routes',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_routes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_4__.ROUND_COMPONENT,
                useExisting: RoundRoutesComponent_1,
            },
        ],
        styles: [_round_routes_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundRoutesComponent);



/***/ }),

/***/ 72276:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-stations/round-stations.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundStationsComponent": () => (/* binding */ RoundStationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_stations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-stations.component.html */ 77729);
/* harmony import */ var _round_stations_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-stations.component.scss */ 14204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round.directive */ 64743);
var RoundStationsComponent_1;






let RoundStationsComponent = RoundStationsComponent_1 = class RoundStationsComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_3__.RoundBaseDirective {
    // @Input() playerId: UID;
    // @Input() roundId: string;
    constructor(injector) {
        super(injector);
    }
    ngOnInit() { }
    calcScores() {
        return this.getMemberByPlayerId().scoresLine.reduce((prev, cur) => prev + cur, 0);
    }
};
RoundStationsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
RoundStationsComponent = RoundStationsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-round-stations',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_stations_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_2__.ROUND_COMPONENT,
                useExisting: RoundStationsComponent_1,
            },
        ],
        styles: [_round_stations_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundStationsComponent);



/***/ }),

/***/ 33169:
/*!**************************************************************************!*\
  !*** ./src/app/modules/games/round/uno/round-uno/round-uno.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundUnoComponent": () => (/* binding */ RoundUnoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_uno_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./round-uno.component.html */ 70343);
/* harmony import */ var _round_uno_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round-uno.component.scss */ 53717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _round_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../round-interfaces */ 6737);
/* harmony import */ var _round_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../round.directive */ 64743);
var RoundUnoComponent_1;







let RoundUnoComponent = RoundUnoComponent_1 = class RoundUnoComponent extends _round_directive__WEBPACK_IMPORTED_MODULE_4__.RoundScoresLineDirective {
    constructor(injector) {
        super(injector);
        this.namedScoresEnv = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.games.uno.namedScores;
        this.namedScoreLine = [];
    }
    ngOnInit() { }
};
RoundUnoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector }
];
RoundUnoComponent = RoundUnoComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-round-uno',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_round_uno_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _round_interfaces__WEBPACK_IMPORTED_MODULE_3__.ROUND_COMPONENT,
                useExisting: RoundUnoComponent_1,
            },
        ],
        styles: [_round_uno_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoundUnoComponent);



/***/ }),

/***/ 44464:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/game/game.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button menu=\"games-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-segment\r\n      *ngIf=\"showToolbarMenu\"\r\n      scrollable\r\n      [value]=\"(activeRoundId$ | async)\"\r\n      (ionChange)=\"onMenuClickHandler($event)\"\r\n    >\r\n      <ion-segment-button\r\n        *ngFor=\"let round of roundsCfg; let idx = index\"\r\n        [value]=\"round._id\"\r\n        [disabled]=\"(round._id === 'start' && (rounds$ | async).length) ||\r\n                    (round._id !== 'start' && (rounds$ | async).length === 0)\"\r\n      >\r\n        <ion-icon [name]=\"round.icon\"></ion-icon>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col\r\n        size-lg=\"6\"\r\n        size-md=\"8\"\r\n        size-sm=\"10\"\r\n        offset-lg=\"3\"\r\n        offset-md=\"2\"\r\n        offset-sm=\"1\"\r\n      >\r\n\r\n        <ion-card *ngIf=\"(rounds$ | async).length !== 0\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\"\r\n              >{{'games.' + gameType + '.name' | translate}}</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item\r\n                *ngFor=\"let player of playersWithTotal\"\r\n                (click)=\"selectPlayer(player._id)\"\r\n                [ngClass]=\"{'active-player': player._id === (activePlayerId$ | async) && gameType !== 'thousand'}\"\r\n              >\r\n                <ion-label\r\n                  [ngStyle]=\"{\r\n                  'border-left': '6px solid ' + player.color,\r\n                  'padding-left': '10px'\r\n                }\"\r\n                >\r\n                  {{player.name}}\r\n                </ion-label>\r\n                <div\r\n                  slot=\"end\"\r\n                  [ngStyle]=\"{\r\n                  'border-right': '6px solid ' + player.color,\r\n                  'padding-right': '10px'\r\n                }\"\r\n                >\r\n                  {{getPlayerTotalScores(player._id)}}\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-row class=\"ion-justify-content-around\">\r\n              <ion-button\r\n                *ngIf=\"gameType !== 'thousand'\"\r\n                fill=\"outline\"\r\n                size=\"small\"\r\n                (click)=\"onFinishGameHandler()\"\r\n                [disabled]=\"(rounds$ | async).length === 0 || (loading$ | async) ||\r\n              (gameType === 'rummy' && finishGameDisabled(playersWithTotal))\"\r\n              >\r\n                {{'elements.button.finishGame' | translate}}\r\n              </ion-button>\r\n              <ion-button\r\n                fill=\"outline\"\r\n                size=\"small\"\r\n                [disabled]=\"(rounds$ | async).length === 0 || (loading$ | async)\"\r\n                (click)=\"onCancelGameHandler()\"\r\n              >\r\n                {{'elements.button.cancelGame' | translate}}\r\n              </ion-button>\r\n              <ion-button\r\n                *ngIf=\"gameType === 'uno'\"\r\n                fill=\"outline\"\r\n                size=\"small\"\r\n                (click)=\"openNextRound()\"\r\n              >\r\n                {{'elements.button.nextRound' | translate}}\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      *ngIf=\"(activeRoundId$ | async) === 'start' || ((activeRoundId$ | async) && (activePlayerId$ | async))\"\r\n    >\r\n      <ion-col\r\n        size-lg=\"8\"\r\n        size-md=\"10\"\r\n        size-sm=\"12\"\r\n        offset-lg=\"2\"\r\n        offset-md=\"1\"\r\n        offset-sm=\"0\"\r\n      >\r\n        <app-round\r\n          [activeRoundId$]=\"activeRoundId$\"\r\n          [activePlayerId$]=\"activePlayerId$\"\r\n          [gameType$]=\"gameType$\"\r\n          [players$]=\"players$\"\r\n        ></app-round>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"cancel()\">Cancel</ion-button>\r\n          </ion-buttons>\r\n          <ion-title>Cancel game?</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 26244:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/gamers/choose-players/choose-players.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title class=\"ion-text-center\">{{\r\n      'modules.games.addPlayers' | translate\r\n    }}</ion-card-title>\r\n    <ion-card-subtitle class=\"ion-text-center\">{{'games.' + gameType + '.name' | translate}}</ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"choose-players\">\r\n    <ion-list class=\"choose-players__list\">\r\n      <ion-item-sliding *ngFor=\"let player of players$ | async; let index = index\" lines=\"none\">\r\n        <ion-item lines=\"none\">\r\n          <div class=\"players-list\">\r\n            <div class=\"players-list__color\">\r\n              <div\r\n                class=\"select-color\"\r\n                (click)=\"filtredColors.length > 1 ? showSelectColorPopup($event, index) : null\"\r\n                [ngStyle]=\"{ 'background-color': player?.color }\"\r\n              ></div>\r\n            </div>\r\n            <div class=\"players-list__info\">\r\n              <ion-item>\r\n                <ion-select\r\n                  placeholder=\"Select One\"\r\n                  [value]=\"player\"\r\n                  interface=\"popover\"\r\n                  (ionChange)=\"choosePlayerHandler($event, index)\"\r\n                  slot=\"end\"\r\n                >\r\n                  <ion-select-option [value]=\"player\">\r\n                    {{ player.name }}\r\n                  </ion-select-option>\r\n                  <ion-select-option\r\n                    *ngFor=\"let filtredGamer of filtredGamers\"\r\n                    [value]=\"filtredGamer\"\r\n                  >\r\n                    {{ filtredGamer.name }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-note slot=\"end\" color=\"danger\">\r\n                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                  <ion-icon name=\"caret-back-outline\"></ion-icon>\r\n                </ion-note>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"removePlayerHandler(player._id)\">{{\r\n            'elements.button.remove' | translate\r\n          }}</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-row class=\"choose-players__btn-block\">\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          fill=\"outline\"\r\n          size=\"small\"\r\n          color=\"secondary\"\r\n          (click)=\"addPlayerHandler()\"\r\n          [disabled]=\"players.length >= environment.games[gameType]?.maxPlayersQty\"\r\n        >\r\n          {{ 'elements.button.add' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          fill=\"outline\"\r\n          size=\"small\"\r\n          color=\"success\"\r\n          (click)=\"showCreateGamerPopup($event)\"\r\n        >\r\n          {{ 'elements.button.create' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          fill=\"outline\"\r\n          size=\"small\"\r\n          color=\"danger\"\r\n          (click)=\"removeAllPlayersHandler()\"\r\n        >\r\n          {{ 'elements.button.removeAll' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"choose-players__btn-block\">\r\n      <ion-col>\r\n        <ion-button\r\n          expand=\"block\"\r\n          (click)=\"startGameHandler()\"\r\n          [disabled]=\"\r\n            players.length < 2 || players.length > environment.games[gameType]?.maxPlayersQty\r\n          \"\r\n        >\r\n          {{ 'elements.button.startGame' | translate }}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<!-- </ion-col>\r\n  </ion-row>\r\n</ion-grid> -->\r\n");

/***/ }),

/***/ 86938:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/gamers/create-gamer/create-gamer.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{'modules.games.createGamer' | translate}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\">\r\n        {{'elements.button.close' | translate}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-list>\r\n\r\n        <ion-item lines=\"none\">\r\n          <div class=\"players-list\">\r\n            <div class=\"players-list__color\">\r\n              <div class=\"select-color\" (click)=\"showSelectColorPopup($event)\"\r\n                [ngStyle]=\"{'background-color' : color }\">\r\n              </div>\r\n            </div>\r\n            <div class=\"players-list__info\">\r\n              <ion-item>\r\n                <ion-input [placeholder]=\"'modules.user.name' | translate\"\r\n                 clearInput [(ngModel)]=\"name\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"onCreate()\" [disabled]=\"!name\">\r\n            {{'elements.button.create' | translate}}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ 50488:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/gamers/select-color/select-color.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <ion-row class=\"select-color\">\r\n        <ion-col class=\"select-color__container\" *ngFor=\"let color of colors\" (click)=\"onSelect(color)\">\r\n          <div class=\"select-color__item\" [ngStyle]=\"{'background-color' : color }\"></div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ 15440:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/round-t-wrapper/round-t-wrapper.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <ion-card-header [ngStyle]=\"{'border-bottom': '2px solid ' + getPlayerColor()}\">\r\n    <!-- <ion-card-subtitle>\r\n      <span class=\"round-subtitle\">\r\n        <ion-icon class=\"round-subtitle__icon\" color=\"primary\" [name]=getRoundById()?.icon></ion-icon>\r\n        <span class=\"ion-text-capitalize round-subtitle__text\">\r\n          {{'games.' + (gameType$ | async) + '.' + getRoundById()?.name | translate}} {{getRoundById()?.namePostfix}}\r\n        </span>\r\n        <span class=\"round-subtitle__blank\"></span>\r\n        <span>{{calcScores()}}</span>\r\n      </span>\r\n    </ion-card-subtitle> -->\r\n    <ion-card-title class=\"ion-text-center\">\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let player of (players$ | async)\">\r\n         <ion-text>{{player.name}}</ion-text>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n    </ion-card-title>\r\n  </ion-card-header>\r\n  <ng-content></ng-content>\r\n</ion-card>");

/***/ }),

/***/ 73715:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/round-wrapper/round-wrapper.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\r\n  <ion-card-header [ngStyle]=\"{'border-bottom': '2px solid ' + getPlayerColor()}\">\r\n    <ion-card-subtitle>\r\n      <span class=\"round-subtitle\">\r\n        <ion-icon class=\"round-subtitle__icon\" color=\"primary\" [name]=getRoundById()?.icon></ion-icon>\r\n        <span *ngIf=\"(gameType$ | async) !== 'rummy'\" class=\"ion-text-capitalize round-subtitle__text\">\r\n          {{'games.' + (gameType$ | async) + '.' + getRoundById()?.name | translate}} {{getRoundById()?.namePostfix}}\r\n        </span>\r\n\r\n        <span class=\"round-subtitle__blank\"></span>\r\n        <span>{{calcScores()}}</span>\r\n      </span>\r\n    </ion-card-subtitle>\r\n    <ion-card-title class=\"ion-text-center\">{{getPlayerName()}}</ion-card-title>\r\n  </ion-card-header>\r\n  <ng-content></ng-content>\r\n</ion-card>");

/***/ }),

/***/ 2695:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/round.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-choose-players\r\n  *ngIf=\"(activeRoundId$ | async) === 'start' && (rounds$ | async).length === 0; else restRounds\"\r\n>\r\n</app-choose-players>\r\n<ng-template #restRounds>\r\n  <!-- Ticket to ride -->\r\n  <app-round-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'train'\"\r\n    [ngSwitch]=\"activeRoundId$ | async\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-routes\r\n      *ngSwitchCase=\"'routes'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-routes>\r\n    <app-round-length\r\n      *ngSwitchCase=\"'length'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-length>\r\n    <app-round-stations\r\n      *ngSwitchCase=\"'stations'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-stations>\r\n    <app-round-cars\r\n      *ngSwitchCase=\"'cars'\"\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    >\r\n    </app-round-cars>\r\n  </app-round-wrapper>\r\n  <!-- Uno -->\r\n  <app-round-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'uno'\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-uno [roundId]=\"activeRoundId$ | async\" [playerId]=\"activePlayerId$ | async\">\r\n    </app-round-uno>\r\n  </app-round-wrapper>\r\n  <!-- Rummy -->\r\n  <app-round-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'rummy'\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-rummy [roundId]=\"activeRoundId$ | async\" [playerId]=\"activePlayerId$ | async\">\r\n    </app-round-rummy>\r\n  </app-round-wrapper>\r\n  <!-- Thousand -->\r\n  <app-round-t-wrapper\r\n    *ngIf=\"(gameType$ | async) === 'thousand'\"\r\n    [roundId]=\"activeRoundId$ | async\"\r\n    [playerId]=\"activePlayerId$ | async\"\r\n  >\r\n    <app-round-thousand\r\n      [roundId]=\"activeRoundId$ | async\"\r\n      [playerId]=\"activePlayerId$ | async\"\r\n    ></app-round-thousand>\r\n    <!-- <app-round-thousand *ngFor=\"let round of (rounds$ | async)\" [roundId]=\"round._id\" [round]=\"round\"\r\n      [playerId]=\"(activePlayerId$ | async)\"></app-round-thousand> -->\r\n  </app-round-t-wrapper>\r\n</ng-template>\r\n");

/***/ }),

/***/ 63841:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/rummy/round-rummy/round-rummy.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col *ngFor=\"let namedScore of namedScoresEnv\" size=\"2.4\">\r\n      <!-- <img class=\"uno-round-img\" [src]=\"namedScore.picture\" [alt]=\"namedScore.name\"\r\n      (click)=\"addToNamedScoresLine(namedScore)\"> -->\r\n\r\n      <ion-chip  (click)=\"addToNamedScoresLine(namedScore)\">\r\n        <ion-label>{{namedScore.name}}</ion-label>\r\n      </ion-chip>\r\n    </ion-col>\r\n    <!-- <ion-col size=\"3\">\r\n      <ion-chip [color]=\"'danger'\" (click)=\"inverseScore()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n        <ion-icon name=\"remove-outline\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row class=\"round round_result\">\r\n    <ion-col *ngFor=\"let namedScore of getMemberByPlayerId()?.namedScoresLine\" size=\"1\">\r\n      <!-- <img [src]=\"namedScore.picture\" [alt]=\"namedScore.name\" (click)=\"removeFromNamedScoresLine(namedScore)\"> -->\r\n\r\n      <ion-chip outline [color]=\"'secondary'\" (click)=\"removeFromNamedScoresLine(namedScore)\">\r\n        <ion-label>{{namedScore.name }}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n\r\n      </ion-chip>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>");

/***/ }),

/***/ 63580:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/thousand/round-thousand/round-thousand.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ng-container class=\"round round_result\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"storeRoundScores()\" expand=\"block\"> {{'elements.button.submit' | translate}} </ion-button>\r\n      </ion-col>\r\n      <ion-col\r\n        *ngFor=\"let roundMember of roundMembers$ | async; let i = index\"\r\n        [size]=\"12 / qtyOfPlayers\"\r\n      >\r\n        <div\r\n          [ngClass]=\"\r\n            roundMember._id === activeRoundMemberId\r\n              ? { 'active-item': true }\r\n              : { 'regular-item': true }\r\n          \"\r\n        ></div>\r\n        <div class=\"round-btn-block\">\r\n          <ion-button\r\n            class=\"round-btn-block__item\"\r\n            size=\"small\"\r\n            (click)=\"changeScoresState(roundMember._id, 'r')\"\r\n            color=\"secondary\"\r\n            [fill]=\"scores[roundMember._id]?.name !== 'r' ? 'solid' : 'outline'\"\r\n            [disabled]=\"\r\n              scores[roundMember._id]?.disabled.includes('r') ||\r\n              scores[roundMember._id].barrel > 0 ||\r\n              (roundMember._id === activeRoundMemberId && qtyOfPlayers === 4)\r\n            \"\r\n            >R</ion-button\r\n          >\r\n          <ion-button\r\n            class=\"round-btn-block__item\"\r\n            size=\"small\"\r\n            (click)=\"changeScoresState(roundMember._id, 's')\"\r\n            color=\"secondary\"\r\n            [fill]=\"scores[roundMember._id]?.name !== 's' ? 'solid' : 'outline'\"\r\n            [disabled]=\"\r\n              scores[roundMember._id]?.disabled.includes('s') ||\r\n              scores[roundMember._id].barrel > 0 ||\r\n              (roundMember._id === activeRoundMemberId && qtyOfPlayers === 4)\r\n            \"\r\n            >S</ion-button\r\n          >\r\n        </div>\r\n        <ion-item class=\"thousand-score-input\">\r\n          <ion-input\r\n            type=\"number\"\r\n            placeholder=\"0\"\r\n            [(ngModel)]=\"scores[roundMember._id].value\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col\r\n        *ngFor=\"let roundMember of addTotals(roundMembers$ | async)\"\r\n        [size]=\"12 / qtyOfPlayers\"\r\n      >\r\n        <ion-item\r\n          class=\"thousand-score__wrapper\"\r\n          [lines]=\"\r\n            (roundMember.namedScoresLine.length - i - 1) % qtyOfPlayers === 0 ? 'full' : 'none'\r\n          \"\r\n          *ngFor=\"let score of roundMember.namedScoresLine.slice().reverse(); let i = index\"\r\n        >\r\n          <ion-text\r\n            class=\"thousand-score__current\"\r\n            [color]=\"i <= 1 && scores[roundMember._id].doubleZero ? 'danger' : ''\"\r\n            >{{ score.name === 'r' || score.name === 's' ? score.name.toUpperCase() : score.value }}</ion-text\r\n          >\r\n          <div style=\"width: 100%\"></div>\r\n          <ion-text\r\n            class=\"thousand-score__total\"\r\n            [ngClass]=\"{ 'thousand-score__total_last': i === 0 }\"\r\n            [color]=\"\r\n              score.total >= 900 &&\r\n              score.total < 1000 &&\r\n              scores[roundMember._id].barrel &&\r\n              i < qtyOfPlayers\r\n                ? 'danger'\r\n                : ''\r\n            \"\r\n            >{{ score.total }}</ion-text\r\n          >\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n</ion-card-content>\r\n");

/***/ }),

/***/ 23462:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/train/round-cars/round-cars.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ion-row *ngFor=\"let car of carsScoresEnv\" class=\"round round_tools\">\r\n    <ion-col class=\"round_tools__score\">\r\n      <ion-label>{{calcQtyOfArrItems(car.value)}}</ion-label>\r\n    </ion-col>\r\n    <ion-col class=\"round_tools__btn\">\r\n      <div class=\"incDecBtn\">\r\n        <ion-button shape=\"round\" color=\"danger\" fill=\"outline\" (click)=\"removeFromScoresLine(car.value)\">\r\n          <ion-icon name=\"remove-outline\"></ion-icon>\r\n        </ion-button>\r\n        <span class=\"incDecBtn__caption\">\r\n          <ion-icon name=\"train-outline\"></ion-icon>\r\n          {{car.name}}\r\n        </span>\r\n        <ion-button shape=\"round\" color=\"success\" fill=\"outline\" (click)=\"addToScoresLine(car.value)\">\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>");

/***/ }),

/***/ 31986:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/train/round-length/round-length.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ion-row>\r\n    <ion-col class=\"round round_tools\">\r\n      <div>{{'games.train.longestRoute' | translate}}</div>\r\n      <ion-toggle [checked]=\"getMemberByPlayerId()?.scoresLine.length\"\r\n        (ionChange)=\"onMarkLongestHandler($event)\">\r\n      </ion-toggle>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>");

/***/ }),

/***/ 96381:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/train/round-routes/round-routes.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col *ngFor=\"let routeScore of routesScoresEnv\" size=\"3\">\r\n      <ion-chip [color]=\"routeScore.value > 19 ? 'secondary' : 'warning'\"\r\n        (click)=\"addToNamedScoresLine({value: routeScore.value * inverse, name: (numberFn(routeScore.name) * inverse) + '' })\">\r\n        <ion-label>{{routeScore.value * inverse}}</ion-label>\r\n      </ion-chip>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-chip [color]=\"'danger'\" (click)=\"inverseScore()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n        <ion-icon name=\"remove-outline\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"round round_result\">\r\n    <ion-col *ngFor=\"let routeScore of getMemberByPlayerId().namedScoresLine\" size=\"3\">\r\n      <ion-chip outline [color]=\"routeScore.value > 19 ? 'secondary' : routeScore.value < 0 ? 'danger' : 'warning'\"\r\n        (click)=\"removeFromNamedScoresLine({value: routeScore.value, name: routeScore.name})\">\r\n        <ion-label>{{routeScore.value}}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>");

/***/ }),

/***/ 77729:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/train/round-stations/round-stations.component.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col class=\"round_tools__score\">\r\n      <ion-label>{{ 3 - calcScores() / 4 }}</ion-label>\r\n    </ion-col>\r\n    <ion-col class=\"round_tools__btn\">\r\n      <div class=\"incDecBtn\">\r\n        <ion-button shape=\"round\" color=\"danger\" fill=\"outline\" (click)=\"addToScoresLine(4)\"\r\n          [disabled]=\"getMemberByPlayerId().scoresLine.length >= 3\">\r\n          <ion-icon name=\"remove-outline\"></ion-icon>\r\n        </ion-button>\r\n        <span class=\"incDecBtn__caption\">\r\n          <div>{{'games.train.stationsShort' | translate}}</div>\r\n        </span>\r\n        <ion-button shape=\"round\" color=\"success\" fill=\"outline\" (click)=\"removeFromScoresLine(4)\"\r\n          [disabled]=\"getMemberByPlayerId().scoresLine.length <= 0\">\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>");

/***/ }),

/***/ 70343:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/games/round/uno/round-uno/round-uno.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card-content>\r\n  <ion-row class=\"round round_tools\">\r\n    <ion-col *ngFor=\"let namedScore of namedScoresEnv\" size=\"2.4\">\r\n      <img class=\"uno-round-img\" [src]=\"namedScore.picture\" [alt]=\"namedScore.name\"\r\n      (click)=\"addToNamedScoresLine(namedScore)\">\r\n\r\n      <!-- <ion-chip  (click)=\"addToNamedScoresLine(namedScore)\">\r\n        <ion-label>{{namedScore.name}}</ion-label>\r\n      </ion-chip> -->\r\n    </ion-col>\r\n    <!-- <ion-col size=\"3\">\r\n      <ion-chip [color]=\"'danger'\" (click)=\"inverseScore()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n        <ion-icon name=\"remove-outline\"></ion-icon>\r\n      </ion-chip>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row class=\"round round_result\">\r\n    <ion-col *ngFor=\"let namedScore of getMemberByPlayerId()?.namedScoresLine\" size=\"1\">\r\n      <img [src]=\"namedScore.picture\" [alt]=\"namedScore.name\" (click)=\"removeFromNamedScoresLine(namedScore)\">\r\n\r\n      <!-- <ion-chip outline [color]=\"routeScore > 19 ? 'secondary' : 'warning'\" (click)=\"removeFromScoresLine(routeScore)\">\r\n        <ion-label>{{routeScore }}</ion-label>\r\n        <ion-icon name=\"close-circle\"></ion-icon>\r\n\r\n      </ion-chip> -->\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card-content>");

/***/ }),

/***/ 97728:
/*!***************************************************!*\
  !*** ./src/app/modules/games/game/game.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 11243:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/games/gamers/choose-players/choose-players.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2UtcGxheWVycy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 78716:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/games/gamers/create-gamer/create-gamer.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZ2FtZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 24327:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/games/gamers/select-color/select-color.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtY29sb3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3879:
/*!************************************************************************************!*\
  !*** ./src/app/modules/games/round/round-t-wrapper/round-t-wrapper.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC10LXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 21134:
/*!********************************************************************************!*\
  !*** ./src/app/modules/games/round/round-wrapper/round-wrapper.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 44568:
/*!**********************************************************!*\
  !*** ./src/app/modules/games/round/round.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 26620:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/games/round/rummy/round-rummy/round-rummy.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC1ydW1teS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 81074:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/games/round/thousand/round-thousand/round-thousand.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC10aG91c2FuZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 39627:
/*!********************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-cars/round-cars.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC1jYXJzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 60413:
/*!************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-length/round-length.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC1sZW5ndGguY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 91735:
/*!************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-routes/round-routes.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC1yb3V0ZXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 14204:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/games/round/train/round-stations/round-stations.component.scss ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC1zdGF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 53717:
/*!****************************************************************************!*\
  !*** ./src/app/modules/games/round/uno/round-uno/round-uno.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3VuZC11bm8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_games_game_game_module_ts.js.map