(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emergency/emergency.component */ "./src/app/emergency/emergency.component.ts");
/* harmony import */ var _opozorila_opozorila_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opozorila/opozorila.component */ "./src/app/opozorila/opozorila.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _droge_droge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./droge/droge.component */ "./src/app/droge/droge.component.ts");
/* harmony import */ var _nasveti_nasveti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nasveti/nasveti.component */ "./src/app/nasveti/nasveti.component.ts");
/* harmony import */ var _zapleti_zapleti_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zapleti/zapleti.component */ "./src/app/zapleti/zapleti.component.ts");












const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'emergency', component: _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyComponent"] },
    { path: 'opozorila', component: _opozorila_opozorila_component__WEBPACK_IMPORTED_MODULE_5__["OpozorilaComponent"] },
    {
        path: 'droge', component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
        children: [{ path: ':name', component: _droge_droge_component__WEBPACK_IMPORTED_MODULE_7__["DrogeComponent"] }]
    },
    {
        path: 'nasveti', component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
        children: [{ path: ':name', component: _nasveti_nasveti_component__WEBPACK_IMPORTED_MODULE_8__["NasvetiComponent"] }]
    },
    {
        path: 'zapleti', component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
        children: [{ path: ':name', component: _zapleti_zapleti_component__WEBPACK_IMPORTED_MODULE_9__["ZapletiComponent"] }]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'DrogApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _opozorila_opozorila_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./opozorila/opozorila.component */ "./src/app/opozorila/opozorila.component.ts");
/* harmony import */ var _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emergency/emergency.component */ "./src/app/emergency/emergency.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _droge_droge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./droge/droge.component */ "./src/app/droge/droge.component.ts");
/* harmony import */ var _zapleti_zapleti_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zapleti/zapleti.component */ "./src/app/zapleti/zapleti.component.ts");
/* harmony import */ var _nasveti_nasveti_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nasveti/nasveti.component */ "./src/app/nasveti/nasveti.component.ts");
/* harmony import */ var _nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-header/nav-header.component */ "./src/app/nav-header/nav-header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"],
        _opozorila_opozorila_component__WEBPACK_IMPORTED_MODULE_8__["OpozorilaComponent"],
        _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_9__["EmergencyComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
        _droge_droge_component__WEBPACK_IMPORTED_MODULE_11__["DrogeComponent"],
        _zapleti_zapleti_component__WEBPACK_IMPORTED_MODULE_12__["ZapletiComponent"],
        _nasveti_nasveti_component__WEBPACK_IMPORTED_MODULE_13__["NasvetiComponent"],
        _nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_14__["NavHeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"],
                    _opozorila_opozorila_component__WEBPACK_IMPORTED_MODULE_8__["OpozorilaComponent"],
                    _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_9__["EmergencyComponent"],
                    _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
                    _droge_droge_component__WEBPACK_IMPORTED_MODULE_11__["DrogeComponent"],
                    _zapleti_zapleti_component__WEBPACK_IMPORTED_MODULE_12__["ZapletiComponent"],
                    _nasveti_nasveti_component__WEBPACK_IMPORTED_MODULE_13__["NasvetiComponent"],
                    _nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_14__["NavHeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/data/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DataService {
    constructor(http) {
        this.http = http;
        this.url = 'http://littlechick-design.com/CLIENT/DA-backend/';
        this.endParam = '.php?type=json';
    }
    getData(type) {
        const tmp = this.http.get(this.url + type + this.endParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(arr => {
            return arr.map(obj => (Object.assign(Object.assign({}, obj), { title: 'bob' })));
        }));
        console.log(typeof tmp, tmp);
        return tmp;
        // .success(function(data) {
        //     console.log(type + " fetched in home controller and stored to localstorage")
        //     window.localStorage.setItem("zapleti", JSON.stringify(data));
        // })
        // .error(function(response) {
        // });
    }
    getDrugs() {
        const tmp = this.http.get(this.url + 'droge' + this.endParam);
        console.log('drfgettgf: ', typeof tmp);
        return tmp;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/droge/droge.component.ts":
/*!******************************************!*\
  !*** ./src/app/droge/droge.component.ts ***!
  \******************************************/
/*! exports provided: DrogeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrogeComponent", function() { return DrogeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DrogeComponent {
    constructor() { }
    ngOnInit() {
    }
}
DrogeComponent.ɵfac = function DrogeComponent_Factory(t) { return new (t || DrogeComponent)(); };
DrogeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrogeComponent, selectors: [["app-droge"]], decls: 2, vars: 0, template: function DrogeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " droge works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrogeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-droge',
                template: `
    <p>
      droge works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/emergency/emergency.component.ts":
/*!**************************************************!*\
  !*** ./src/app/emergency/emergency.component.ts ***!
  \**************************************************/
/*! exports provided: EmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyComponent", function() { return EmergencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmergencyComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmergencyComponent.ɵfac = function EmergencyComponent_Factory(t) { return new (t || EmergencyComponent)(); };
EmergencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmergencyComponent, selectors: [["app-emergency"]], decls: 2, vars: 0, template: function EmergencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " emergency works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmergencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emergency',
                template: `
    <p>
      emergency works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["routerLink", "/opozorila"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ZADNJE OPOZORILO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["div[_ngcontent-%COMP%] {background-color: black; padding: 5px;}", "p[_ngcontent-%COMP%] {margin: 0; text-align: center; color: white; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                template: `
  <div>
    <p routerLink="/opozorila">
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
                styles: [
                    'div {background-color: black; padding: 5px;}',
                    'p {margin: 0; text-align: center; color: white; }'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/general/general.service.ts":
/*!********************************************!*\
  !*** ./src/app/general/general.service.ts ***!
  \********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GeneralService {
    constructor() {
        this.tiles = ['droge', 'nasveti', 'zapleti', 'emergency', 'info', 'opozorila'];
        this.colors = {
            droge: '#eed586',
            nasveti: '#dd6c56',
            zapleti: '#c63f55',
            emergency: '#653a4b',
            info: '#49d3a3',
            opozorila: '#31656d'
        };
    }
    getTitles() {
        return this.tiles;
    }
    getColor(title) {
        return this.colors[title];
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(); };
GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 0, consts: [["routerLink", "/"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DROG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["div[_ngcontent-%COMP%] {background-color: black; padding: 5px;}", "p[_ngcontent-%COMP%] {margin: 0; text-align: center; color: white;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                template: `
  <div>
    <p routerLink="/">
      DROG<strong>APP</strong>
    </p>
  </div>
  `,
                styles: [
                    'div {background-color: black; padding: 5px;}',
                    'p {margin: 0; text-align: center; color: white;}'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 2, vars: 0, template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " info works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                template: `
    <p>
      info works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-header/nav-header.component */ "./src/app/nav-header/nav-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ListComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r1.dTITLE), " ");
} }
class ListComponent {
    constructor(ds, route) {
        this.ds = ds;
        this.route = route;
    }
    ngOnInit() {
        this.url = this.route.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(segments => segments.join(' / ')));
        this.url.subscribe(u => {
            this.baseUrl = u;
            return u;
        });
        console.log('url:', this.url, this.baseUrl);
        this.ds.getData(this.baseUrl).subscribe(data => {
            this.items = data;
            console.log('items:', typeof this.items, this.items);
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_p_1_Template, 3, 3, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_4__["NavHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                template: `
    <app-nav-header></app-nav-header>
    <p *ngFor='let item of items'>
      {{ item.dTITLE | uppercase }}
    </p>
  `,
                styles: []
            }]
    }], function () { return [{ type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _general_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/general.service */ "./src/app/general/general.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/", a1]; };
const _c1 = function (a0) { return [a0]; };
function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.color(title_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, title_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "assets/img/home-" + title_r1 + "-txt.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MainComponent {
    constructor(gs) {
        this.gs = gs;
    }
    ngOnInit() {
    }
    titles() { return this.gs.getTitles(); }
    color(title) { return this.gs.getColor(title); }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 1, consts: [["id", "main"], ["class", "tile", 3, "routerLink", "background-color", 4, "ngFor", "ngForOf"], [1, "tile", 3, "routerLink"], [3, "src"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_Template, 2, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["#main[_ngcontent-%COMP%] { display: grid;   grid-template-columns: auto auto; max-width: 100%; }", ".tile[_ngcontent-%COMP%] { text-align: center;}", "img[_ngcontent-%COMP%] { object-fit: scale-down; max-width: 100%;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                template: `
    <div id='main'>
      <div class='tile' *ngFor='let title of titles()' [routerLink]="['/', title]" [style.background-color]='color(title)'>
        <img [src]="['assets/img/home-' + title + '-txt.png']"/>
      </div>
    </div>
  `,
                styles: [
                    '#main { display: grid;   grid-template-columns: auto auto; max-width: 100%; }',
                    '.tile { text-align: center;}',
                    'img { object-fit: scale-down; max-width: 100%;}',
                ]
            }]
    }], function () { return [{ type: _general_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nasveti/nasveti.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nasveti/nasveti.component.ts ***!
  \**********************************************/
/*! exports provided: NasvetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasvetiComponent", function() { return NasvetiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NasvetiComponent {
    constructor() { }
    ngOnInit() {
    }
}
NasvetiComponent.ɵfac = function NasvetiComponent_Factory(t) { return new (t || NasvetiComponent)(); };
NasvetiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NasvetiComponent, selectors: [["app-nasveti"]], decls: 2, vars: 0, template: function NasvetiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nasveti works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NasvetiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nasveti',
                template: `
    <p>
      nasveti works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-header/nav-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav-header/nav-header.component.ts ***!
  \****************************************************/
/*! exports provided: NavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHeaderComponent", function() { return NavHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/general.service */ "./src/app/general/general.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return ["../"]; };
const _c1 = function (a0) { return [a0]; };
class NavHeaderComponent {
    constructor(route, gs) {
        this.route = route;
        this.gs = gs;
    }
    ngOnInit() {
        this.url = this.route.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(segments => segments.join(' / ')));
        this.url.subscribe(u => {
            this.baseUrl = u;
            return u;
        });
        //    console.log('url:', this.url, this.baseUrl);
    }
    color() { return this.gs.getColor(this.baseUrl); }
}
NavHeaderComponent.ɵfac = function NavHeaderComponent_Factory(t) { return new (t || NavHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"])); };
NavHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavHeaderComponent, selectors: [["app-nav-header"]], decls: 6, vars: 12, consts: [[3, "routerLink"], [3, "src"]], template: function NavHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, "assets/img/home-" + ctx.baseUrl + ".png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.url)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["img[_ngcontent-%COMP%] { width:28px; height:28px; float:left; background-size: 28px 28px; background-repeat: no-repeat; margin:8px 15px; }", "div[_ngcontent-%COMP%] { height: 45px }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-header',
                template: `
    <div [routerLink]="['../']" [style.background-color]='color()'>
      <img [src]="['assets/img/home-' + baseUrl + '.png']"/>
      <span>{{ url | async | uppercase}}</span>
    </div>
  `,
                styles: [
                    'img { width:28px; height:28px; float:left; background-size: 28px 28px; background-repeat: no-repeat; margin:8px 15px; }',
                    'div { height: 45px }',
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _general_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/opozorila/opozorila.component.ts":
/*!**************************************************!*\
  !*** ./src/app/opozorila/opozorila.component.ts ***!
  \**************************************************/
/*! exports provided: OpozorilaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpozorilaComponent", function() { return OpozorilaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OpozorilaComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpozorilaComponent.ɵfac = function OpozorilaComponent_Factory(t) { return new (t || OpozorilaComponent)(); };
OpozorilaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpozorilaComponent, selectors: [["app-opozorila"]], decls: 2, vars: 0, template: function OpozorilaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " opozorila works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpozorilaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-opozorila',
                template: `
    <p>
      opozorila works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/zapleti/zapleti.component.ts":
/*!**********************************************!*\
  !*** ./src/app/zapleti/zapleti.component.ts ***!
  \**********************************************/
/*! exports provided: ZapletiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapletiComponent", function() { return ZapletiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ZapletiComponent {
    constructor() { }
    ngOnInit() {
    }
}
ZapletiComponent.ɵfac = function ZapletiComponent_Factory(t) { return new (t || ZapletiComponent)(); };
ZapletiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZapletiComponent, selectors: [["app-zapleti"]], decls: 2, vars: 0, template: function ZapletiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " zapleti works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZapletiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zapleti',
                template: `
    <p>
      zapleti works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kapuca/projects/DrogApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map