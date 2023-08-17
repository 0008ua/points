(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_error-log_error-log_module_ts"],{

/***/ 1036:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-details/error-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDetailsComponent: () => (/* binding */ ErrorDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _error_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-details.component.html?ngResource */ 9468);
/* harmony import */ var _error_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-details.component.scss?ngResource */ 173);
/* harmony import */ var _error_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4210);
var _class;





let ErrorDetailsComponent = (_class = class ErrorDetailsComponent {
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
}, _class.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}], _class.propDecorators = {
  error: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
}, _class);
ErrorDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-error-details',
  template: _error_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_error_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ErrorDetailsComponent);


/***/ }),

/***/ 2719:
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorLogRoutingModule: () => (/* binding */ ErrorLogRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _error_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-log.component */ 981);




const routes = [{
  path: '',
  component: _error_log_component__WEBPACK_IMPORTED_MODULE_0__.ErrorLogComponent
}, {
  path: '**',
  redirectTo: ''
}];
let ErrorLogRoutingModule = class ErrorLogRoutingModule {};
ErrorLogRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ErrorLogRoutingModule);


/***/ }),

/***/ 981:
/*!***************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorLogComponent: () => (/* binding */ ErrorLogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _error_log_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-log.component.html?ngResource */ 2967);
/* harmony import */ var _error_log_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-log.component.scss?ngResource */ 5796);
/* harmony import */ var _error_log_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_log_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 9580);
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces */ 3038);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/modal.service */ 2855);
/* harmony import */ var src_app_store_reducers_error_log_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers/error-log.reducer */ 5633);
/* harmony import */ var _store_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/error-log.actions */ 4487);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-details/error-details.component */ 1036);
/* harmony import */ var _error_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-log.service */ 6316);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/shared.service */ 7857);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 2934);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 4942);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
var _class;

















let ErrorLogComponent = (_class = class ErrorLogComponent {
  constructor() {
    this.injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.EnvironmentInjector);
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store);
    this.errorLogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_error_log_service__WEBPACK_IMPORTED_MODULE_8__.ErrorLogService);
    this.sharedService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_9__.SharedService);
    this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService);
    this.allErrors = [];
    this.errorTypes = ['all', ...src_app_interfaces__WEBPACK_IMPORTED_MODULE_3__.errors];
    this.getOwnersWithQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
    this.newOwnersSearch = true;
    this.newErrorsSearch = true;
  } // private sharedService: SharedService, // private modalService: ModalService, // private errorLogService: ErrorLogService, // private store: Store,
  ngOnInit() {
    this.minDate = this.sharedService.convertDateToISO((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(), {
      days: 7
    }));
    this.maxDate = this.sharedService.convertDateToISO(new Date());
    this.createDateRanges();
    this.errorsQuery = {
      skip: 0,
      limit: 20,
      minDate: this.sharedService.convertISOToShort(this.minDate),
      // query all docs that 'lt' than upper limit + 1day
      maxDate: this.sharedService.convertDateToShort((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(this.sharedService.convertISOToDate(this.maxDate), {
        days: 1
      }))
    };
    this.ownersQuerySignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)({
      name: '',
      skip: 0,
      limit: 20
    });
    this.loadedErrorsWithQuery$ = this.store.select(src_app_store_reducers_error_log_reducer__WEBPACK_IMPORTED_MODULE_5__.selectAllErrorLogs);
    this.allErrorsSignal = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.toSignal)(this.loadedErrorsWithQuery$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(loadedErrors => {
      if (this.newErrorsSearch) {
        return loadedErrors;
      } else {
        return [...this.allErrorsSignal(), ...loadedErrors];
      }
    })), {
      initialValue: [],
      injector: this.injector
    });
    this.user$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.selectUser);
    // listen ownersQuerySignal change and run request with new query
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.effect)(() => {
      this.getOwnersWithQuery$.next(this.ownersQuerySignal());
    }, {
      injector: this.injector
    });
    // convert request result from observable to signal
    this.allOwnersSignal = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.toSignal)(this.getOwnersWithQuery$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(query => this.errorLogService.getOwnersWithQuery$(query)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(loadedOwners => {
      if (this.newOwnersSearch) {
        return loadedOwners;
      }
      return {
        totalDocuments: loadedOwners.totalDocuments,
        data: [...this.allOwnersSignal().data, ...loadedOwners.data]
      };
    })), {
      initialValue: {
        data: [],
        totalDocuments: 0
      },
      injector: this.injector
    });
    this.user$.subscribe(user => {
      this.errorsQuery = {
        ...this.errorsQuery,
        owner: user._id
      };
      this.getErrorsWithQuery();
    });
  }
  createDateRanges() {
    this.maxDateRange = {
      min: this.sharedService.convertDateToISO((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(this.sharedService.convertISOToDate(this.minDate), {
        days: 1
      })),
      max: this.sharedService.convertDateToISO(new Date())
    };
    this.minDateRange = {
      max: this.sharedService.convertDateToISO((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(this.sharedService.convertISOToDate(this.maxDate), {
        days: 1
      }))
    };
  }
  onMinDateChange() {
    this.createDateRanges();
    this.errorsQuery = {
      ...this.errorsQuery,
      minDate: this.sharedService.convertISOToShort(this.minDate)
    };
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
  }
  onMaxDateChange() {
    this.createDateRanges();
    this.errorsQuery = {
      ...this.errorsQuery,
      // query all docs that 'lt' than upper limit+1day
      maxDate: this.sharedService.convertDateToShort((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(this.sharedService.convertISOToDate(this.maxDate), {
        days: 1
      }))
    };
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
  }
  errorDetails(error) {
    this.modalService.presentModal(_error_details_error_details_component__WEBPACK_IMPORTED_MODULE_7__.ErrorDetailsComponent, {
      error
    });
  }
  onSelectErrorType(event) {
    if (event.target.value === 'all') {
      const {
        errorType,
        ...rest
      } = this.errorsQuery;
      this.errorsQuery = rest;
    } else {
      this.errorsQuery = {
        ...this.errorsQuery,
        errorType: event.target.value
      };
    }
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
  }
  convertOwnersToItems(owners) {
    return owners.data.map(({
      name,
      owner
    }) => ({
      name,
      data: owner
    }));
  }
  convertItemToOwner(item) {
    const {
      name,
      data
    } = item;
    return {
      name,
      owner: data
    };
  }
  onSelectOwner(item) {
    this.selectedOwner = this.convertItemToOwner(item);
    this.errorsQuery = {
      ...this.errorsQuery,
      owner: this.selectedOwner.owner
    };
    this.newErrorsSearch = true;
    this.getErrorsWithQuery();
    this.modal.dismiss();
  }
  onIonInfinite(event) {
    this.newErrorsSearch = false;
    this.getErrorsWithQuery(this.allErrorsSignal().length);
    event.target.complete();
  }
  onIonInfiniteSelectwithSearch(event) {
    this.newOwnersSearch = false;
    this.ownersQuerySignal.update(ownersQuery => {
      var _this$allOwnersSignal;
      return {
        ...ownersQuery,
        skip: ((_this$allOwnersSignal = this.allOwnersSignal().data) === null || _this$allOwnersSignal === void 0 ? void 0 : _this$allOwnersSignal.length) || 0
      };
    });
  }
  searchOwnersWithQuery(name) {
    this.ownersQuerySignal.update(ownersQuery => ({
      ...ownersQuery,
      name
    }));
    this.newOwnersSearch = true;
  }
  getErrorsWithQuery(skip = 0) {
    this.errorsQuery = {
      ...this.errorsQuery,
      skip
    };
    this.store.dispatch(_store_actions_error_log_actions__WEBPACK_IMPORTED_MODULE_6__.getWithQuery({
      query: this.errorsQuery
    }));
  }
}, _class.ctorParameters = () => [], _class.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ['modal', {
      static: true
    }]
  }]
}, _class);
ErrorLogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-error-log',
  template: _error_log_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
  styles: [(_error_log_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ErrorLogComponent);


/***/ }),

/***/ 9240:
/*!************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorLogModule: () => (/* binding */ ErrorLogModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _error_log_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-log-routing.module */ 2719);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _error_log_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-log.component */ 981);
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shared.module */ 446);
/* harmony import */ var _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-details/error-details.component */ 1036);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);










let ErrorLogModule = class ErrorLogModule {};
ErrorLogModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_error_log_component__WEBPACK_IMPORTED_MODULE_1__.ErrorLogComponent, _error_details_error_details_component__WEBPACK_IMPORTED_MODULE_3__.ErrorDetailsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _error_log_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorLogRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
    extend: true
  }), _common_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
})], ErrorLogModule);


/***/ }),

/***/ 5822:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 1578);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 7120);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 7265);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 1435:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 1578);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 7120);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 7265);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ 4942:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ 3445);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addDays/index.js */ 5822);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addMonths/index.js */ 1435);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 7120);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 7265);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 1578);






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  if (!duration || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.seconds) : 0;

  // Add years and months
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, months + years * 12) : date;

  // Add weeks and days
  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ 7902:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 5822);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 7265);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 1578);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 8744:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 1578);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 1435);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 7265);



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 2934:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/sub/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ 3445);
/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subDays/index.js */ 7902);
/* harmony import */ var _subMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subMonths/index.js */ 8744);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 7265);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 1578);





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  if (!duration || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.seconds) : 0;

  // Subtract years and months
  var dateWithoutMonths = (0,_subMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12);

  // Subtract weeks and days
  var dateWithoutDays = (0,_subDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithoutMonths, days + weeks * 7);

  // Subtract hours, minutes and seconds
  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ }),

/***/ 173:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-details/error-details.component.scss?ngResource ***!
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

/***/ 5796:
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.component.scss?ngResource ***!
  \****************************************************************************/
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

/***/ 9468:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-details/error-details.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"ion-page\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"cancel()\">Cancel</ion-button>\n      </ion-buttons>\n      <ion-title>Error details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ion-padding\">\n    <ion-item *ngFor=\"let pair of error | keyvalue\">\n      <ion-label *ngIf=\"pair.key === 'error'\" class=\"ion-text-wrap\">\n        <h2>{{ pair.key }}</h2>\n        <p>{{ pair.value | json }}</p>\n      </ion-label>\n      <ion-label *ngIf=\"pair.key !== 'error'\">\n        <h2>{{ pair.key }}</h2>\n        <p>{{ pair.value }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-content>\n</div>\n";

/***/ }),

/***/ 2967:
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/error-log/error-log.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ 'modules.profile.errorLog' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"profile-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col\n        size-lg=\"6\"\n        size-md=\"8\"\n        size-sm=\"10\"\n        offset-lg=\"3\"\n        offset-md=\"2\"\n        offset-sm=\"1\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">{{\n              'modules.profile.errorLogTitle' | translate\n            }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-text-center\">{{\n              'modules.profile.errorLogDescription' | translate\n            }}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-row class=\"ion-justify-content-around\">\n                <ion-col size=\"5\" class=\"ion-justify-content-center\">\n                  <ion-datetime-button datetime=\"minDateTime\"></ion-datetime-button>\n                  <ion-modal [keepContentsMounted]=\"true\" #minDateTimeModal>\n                    <ng-template>\n                      <ion-datetime\n                        id=\"minDateTime\"\n                        presentation=\"date\"\n                        [max]=\"minDateRange.max\"\n                        [(ngModel)]=\"minDate\"\n                        (ionChange)=\"onMinDateChange(); minDateTimeModal.dismiss()\"\n                      ></ion-datetime>\n                    </ng-template>\n                  </ion-modal>\n                </ion-col>\n                <ion-col size=\"2\" class=\"ion-justify-content-center\">\n                  <!-- <span>1 of 2</span> -->\n                </ion-col>\n                <ion-col size=\"5\" class=\"ion-justify-content-center\">\n                  <ion-datetime-button datetime=\"maxDateTime\"></ion-datetime-button>\n                  <ion-modal [keepContentsMounted]=\"true\" #maxDateTimeModal>\n                    <ng-template>\n                      <ion-datetime\n                        id=\"maxDateTime\"\n                        presentation=\"date\"\n                        [(ngModel)]=\"maxDate\"\n                        [min]=\"maxDateRange.min\"\n                        [max]=\"maxDateRange.max\"\n                        (ionChange)=\"onMaxDateChange(); maxDateTimeModal.dismiss()\"\n                      ></ion-datetime>\n                    </ng-template>\n                  </ion-modal>\n                </ion-col>\n              </ion-row>\n              <ion-item slot=\"start\">\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"Select error type\"\n                  (ionChange)=\"onSelectErrorType($event)\"\n                  [value]=\"errorTypes[0]\"\n                  label=\"Select error type\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let error of errorTypes\"\n                    [value]=\"error\"\n                    slot=\"end\"\n                    >{{ error }}</ion-select-option\n                  >\n                </ion-select>\n              </ion-item>\n              <ion-item button=\"true\" detail=\"true\" id=\"select-owners\" slot=\"end\">\n                <ion-label>Select user</ion-label>\n                <div slot=\"end\">\n                  {{ selectedOwner?.name || (user$ | async).name || 'all' }}\n                </div>\n              </ion-item>\n            </ion-list>\n\n            <ion-list>\n              <ion-item\n                *ngFor=\"let item of allErrorsSignal(); let i = index\"\n                button\n                detail=\"true\"\n                (click)=\"errorDetails(item)\"\n              >\n                <ion-label>\n                  {{ i + '. ' + item.createdAt + ' ' + item.message }}</ion-label\n                >\n              </ion-item>\n            </ion-list>\n            <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\n              <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-modal trigger=\"select-owners\" #modal>\n  <ng-template>\n    <app-select-with-search\n      class=\"ion-page\"\n      title=\"Select user\"\n      [items]=\"convertOwnersToItems(allOwnersSignal())\"\n      [totalItems]=\"allOwnersSignal().totalDocuments\"\n      (searchQuery)=\"searchOwnersWithQuery($event)\"\n      (selectionChange)=\"onSelectOwner($event)\"\n      (selectionCancel)=\"modal.dismiss()\"\n      (ionInfinite)=\"onIonInfiniteSelectwithSearch($event)\"\n    ></app-select-with-search>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_error-log_error-log_module_ts.js.map