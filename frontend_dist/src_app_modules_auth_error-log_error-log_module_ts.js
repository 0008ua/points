"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_error-log_error-log_module_ts"],{

/***/ 55566:
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errors": () => (/* binding */ errors)
/* harmony export */ });
// global
const errors = [
    'unknownError',
    'analytics/error',
    'auth/error',
    'app/error',
    'ngrxDataError',
];


/***/ }),

/***/ 65031:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-details/error-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDetailsComponent": () => (/* binding */ ErrorDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./error-details.component.html */ 30611);
/* harmony import */ var _error_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-details.component.scss */ 73240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let ErrorDetailsComponent = class ErrorDetailsComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit', this.error);
    }
    ngOnInit() {
        console.log('ngOnInit', this.error);
    }
    cancel() {
        this.modalController.dismiss(null, 'cancel');
    }
};
ErrorDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ErrorDetailsComponent.propDecorators = {
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ErrorDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error-details',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorDetailsComponent);



/***/ }),

/***/ 17403:
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorLogRoutingModule": () => (/* binding */ ErrorLogRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _error_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-log.component */ 28244);




const routes = [
    {
        path: '',
        component: _error_log_component__WEBPACK_IMPORTED_MODULE_0__.ErrorLogComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
let ErrorLogRoutingModule = class ErrorLogRoutingModule {
};
ErrorLogRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ErrorLogRoutingModule);



/***/ }),

/***/ 28244:
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorLogComponent": () => (/* binding */ ErrorLogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_log_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./error-log.component.html */ 88463);
/* harmony import */ var _error_log_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-log.component.scss */ 8716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces */ 55566);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/modal.service */ 39853);
/* harmony import */ var src_app_store_reducers_error_log_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/reducers/error-log.reducer */ 49441);
/* harmony import */ var _store_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions/error-log.actions */ 67619);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-details/error-details.component */ 65031);
/* harmony import */ var _error_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-log.service */ 49750);













let ErrorLogComponent = class ErrorLogComponent {
    constructor(store, errorLogService, modalService) {
        this.store = store;
        this.errorLogService = errorLogService;
        this.modalService = modalService;
        this.allErrors = [];
        this.errorTypes = ['all', ...src_app_interfaces__WEBPACK_IMPORTED_MODULE_2__.errors];
        this.newOwnersSearch = true;
        this.newErrorsSearch = true;
    }
    ngOnInit() {
        this.errorsQuery = { owner: null, errorType: null, skip: 0, limit: 20 };
        this.ownersQuery = { name: '', skip: 0, limit: 20 };
        this.allOwners = { data: [], totalDocuments: 0 };
        this.loadedErrorsWithQuery$ = this.store.select(src_app_store_reducers_error_log_reducer__WEBPACK_IMPORTED_MODULE_4__.selectAllErrorLogs);
        this.loadedErrorsWithQuery$.subscribe((loadedErrorsWithQuery) => {
            console.log('loadedErrorsWithQuery', loadedErrorsWithQuery);
            if (this.newErrorsSearch) {
                return (this.allErrors = loadedErrorsWithQuery);
            }
            return this.allErrors.push(...loadedErrorsWithQuery);
        });
        this.getOwnersWithQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(this.ownersQuery);
        this.getOwnersWithQuery$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((ownersQuery) => this.errorLogService.getOwnersWithQuery(ownersQuery)))
            .subscribe((loadedOwners) => {
            if (this.newOwnersSearch) {
                return (this.allOwners = loadedOwners);
            }
            return (this.allOwners = {
                totalDocuments: loadedOwners.totalDocuments,
                data: [...this.allOwners.data, ...loadedOwners.data],
            });
        });
        this.getErrorsWithQuery();
    }
    errorDetails(error) {
        this.modalService.presentModal(_error_details_error_details_component__WEBPACK_IMPORTED_MODULE_6__.ErrorDetailsComponent, { error });
        // .then((_) => console.log('_', _));
        console.log('error Details', error);
    }
    onSelectErrorType(event) {
        this.errorsQuery = Object.assign(Object.assign({}, this.errorsQuery), { errorType: event.target.value === 'all' ? null : event.target.value });
        console.log('this.errorsQuery', this.errorsQuery);
        this.newErrorsSearch = true;
        this.getErrorsWithQuery();
    }
    convertOwnersToItems(owners) {
        return owners.data.map(({ name, owner }) => ({ name, data: owner }));
    }
    convertItemToOwner(item) {
        const { name, data } = item;
        return { name, owner: data };
    }
    onSelectOwner(item) {
        this.selectedOwner = this.convertItemToOwner(item);
        this.errorsQuery = Object.assign(Object.assign({}, this.errorsQuery), { owner: this.selectedOwner.owner });
        this.newErrorsSearch = true;
        this.getErrorsWithQuery();
        this.modal.dismiss();
    }
    onIonInfinite(event) {
        this.newErrorsSearch = false;
        this.getErrorsWithQuery(this.allErrors.length);
        event.target.complete();
    }
    onIonInfiniteSelectwithSearch(event) {
        this.newOwnersSearch = false;
        this.getOwnersWithQuery(this.allOwners.data.length);
    }
    searchOwnersWithQuery(name) {
        this.ownersQuery = Object.assign(Object.assign({}, this.ownersQuery), { name });
        this.newOwnersSearch = true;
        this.getOwnersWithQuery();
    }
    getOwnersWithQuery(skip = 0) {
        this.ownersQuery = Object.assign(Object.assign({}, this.ownersQuery), { skip });
        this.getOwnersWithQuery$.next(this.ownersQuery);
    }
    getErrorsWithQuery(skip = 0) {
        this.errorsQuery = Object.assign(Object.assign({}, this.errorsQuery), { skip });
        this.store.dispatch(_store_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_5__.getWithQuery({ query: this.errorsQuery }));
    }
};
ErrorLogComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store },
    { type: _error_log_service__WEBPACK_IMPORTED_MODULE_7__.ErrorLogService },
    { type: src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService }
];
ErrorLogComponent.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['modal', { static: true },] }]
};
ErrorLogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-error-log',
        template: _C_it_points_points_node_modules_ngtools_webpack_src_loaders_direct_resource_js_error_log_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_error_log_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorLogComponent);



/***/ }),

/***/ 72984:
/*!************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorLogModule": () => (/* binding */ ErrorLogModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _error_log_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-log-routing.module */ 17403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _error_log_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-log.component */ 28244);
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shared.module */ 43938);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-details/error-details.component */ 65031);









let ErrorLogModule = class ErrorLogModule {
};
ErrorLogModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_error_log_component__WEBPACK_IMPORTED_MODULE_1__.ErrorLogComponent, _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_3__.ErrorDetailsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _error_log_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorLogRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                extend: true,
            }),
            _common_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
    })
], ErrorLogModule);



/***/ }),

/***/ 30611:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/error-log/error-details/error-details.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"ion-page\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"cancel()\">Cancel</ion-button>\n      </ion-buttons>\n      <ion-title>Error details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ion-padding\">\n    <ion-item *ngFor=\"let pair of error | keyvalue\">\n      <ion-label *ngIf=\"pair.key === 'error'\" class=\"ion-text-wrap\">\n        <h2>{{ pair.key }}</h2>\n        <p>{{ pair.value | json }}</p>\n      </ion-label>\n      <ion-label *ngIf=\"pair.key !== 'error'\">\n        <h2>{{ pair.key }}</h2>\n        <p>{{ pair.value }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-content>\n</div>\n");

/***/ }),

/***/ 88463:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/error-log/error-log.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'modules.profile.errorLog' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"profile-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col\n        size-lg=\"6\"\n        size-md=\"8\"\n        size-sm=\"10\"\n        offset-lg=\"3\"\n        offset-md=\"2\"\n        offset-sm=\"1\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">{{\n              'modules.profile.errorLogTitle' | translate\n            }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-text-center\">{{\n              'modules.profile.errorLogDescription' | translate\n            }}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-label>Select error type</ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"Select error type\"\n                  (ionChange)=\"onSelectErrorType($event)\"\n                  [value]=\"errorTypes[0]\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let error of errorTypes\"\n                    [value]=\"error\"\n                    slot=\"end\"\n                    >{{ error }}</ion-select-option\n                  >\n                </ion-select>\n              </ion-item>\n              <ion-item button=\"true\" detail=\"true\" id=\"select-owners\">\n                <ion-label>Select user</ion-label>\n                <div slot=\"end\">{{ selectedOwner?.name }}</div>\n              </ion-item>\n            </ion-list>\n\n            <ion-list>\n              <ion-item\n                *ngFor=\"let item of allErrors; let i = index\"\n                button\n                detail=\"true\"\n                (click)=\"errorDetails(item)\"\n              >\n                <ion-label>\n                  {{ i + '. ' + item.createdAt + ' ' + item.message }}</ion-label\n                >\n              </ion-item>\n            </ion-list>\n            <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\n              <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-modal trigger=\"select-owners\" #modal>\n  <ng-template>\n    <app-select-with-search\n      class=\"ion-page\"\n      title=\"Select user\"\n      [items]=\"convertOwnersToItems(allOwners)\"\n      [totalItems]=\"allOwners.totalDocuments\"\n      (searchQuery)=\"searchOwnersWithQuery($event)\"\n      (selectionChange)=\"onSelectOwner($event)\"\n      (selectionCancel)=\"modal.dismiss()\"\n      (ionInfinite)=\"onIonInfiniteSelectwithSearch($event)\"\n    ></app-select-with-search>\n  </ng-template>\n</ion-modal>\n");

/***/ }),

/***/ 73240:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-details/error-details.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 8716:
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1sb2cuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_error-log_error-log_module_ts.js.map