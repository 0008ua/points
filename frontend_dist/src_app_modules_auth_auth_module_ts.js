"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 68428:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 547);
/* harmony import */ var _no_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-auth.guard */ 53604);





const routes = [
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 91157)).then((m) => m.ProfilePageModule),
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'signin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_signin_signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signin/signin.module */ 58474)).then((m) => m.SigninPageModule),
        canLoad: [_no_auth_guard__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard],
        canActivate: [_no_auth_guard__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard],
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_auth_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 51690)).then((m) => m.SignupPageModule),
        canLoad: [_no_auth_guard__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard],
        canActivate: [_no_auth_guard__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard],
    },
    {
        path: '**',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AuthRoutingModule);



/***/ }),

/***/ 547:
/*!********************************************!*\
  !*** ./src/app/modules/auth/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 76006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 24433);








let AuthGuard = class AuthGuard {
    constructor(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.userRole$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.selectUserRole);
        // this.userRole$ = this.store.select(selectUserRole);
        this.store
            .select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.selectUserRole)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((role) => console.log('role change guard', role)))
            .subscribe((_) => _);
    }
    // Prevents fetching lazy loading modules
    canLoad(route, segments) {
        return this.userRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((role) => {
            if (role === 'guest') {
                this.router.navigateByUrl('/auth/signin');
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1));
    }
    // If lazy loadnig module already fetched and user logged out
    // this guard prevents to activate module
    canActivate(route, state) {
        return this.userRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((role) => {
            if (role === 'guest') {
                this.router.navigateByUrl('/auth/signin');
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((e) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(e);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 61142:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 68428);




let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule],
    })
], AuthModule);



/***/ }),

/***/ 53604:
/*!***********************************************!*\
  !*** ./src/app/modules/auth/no-auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAuthGuard": () => (/* binding */ NoAuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/reducers/auth.reducer */ 24433);






let NoAuthGuard = class NoAuthGuard {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.userRole$ = this.store.select(src_app_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__.selectUserRole);
    }
    // Prevents fetching lazy loading modules
    canLoad(route, segments) {
        // const userRole$ = this.store.select(selectUserRole);
        return this.userRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((role) => {
            if (role === 'member' || role === 'admin') {
                this.router.navigateByUrl('/auth/profile');
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    }
    canActivate(route, state) {
        // const userRole$ = this.store.select(selectUserRole);
        return this.userRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((role) => {
            if (role === 'member' || role === 'admin') {
                this.router.navigateByUrl('/auth/profile');
                return false;
            }
            return true;
        }));
    }
};
NoAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store }
];
NoAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], NoAuthGuard);



/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map