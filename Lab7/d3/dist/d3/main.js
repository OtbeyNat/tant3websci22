(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tobster\Desktop\d3\d3\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "F11b":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiserver = "http://localhost:3000/api";
    }
    sendGetRequest(url) {
        return this.httpClient.get(url);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QZ6x":
/*!**************************************!*\
  !*** ./src/app/bar/bar.component.ts ***!
  \**************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "F11b");



class BarComponent {
    constructor(HttpService) {
        this.HttpService = HttpService;
        this.margin = 200;
        this.width = 2550;
        this.height = 800 - (this.margin * 2);
    }
    ngOnInit() {
        this.createSvg();
        //this.drawBars(this.data);
        // Comment out the line above and uncomment the line below when you're
        // ready to try fetching JSON from a REST API endpoint.
        // Comment out the private data [] above too.
        // d3.json('https://api.jsonbin.io/b/5eee6a5397cb753b4d149343').then((data: any) => this.drawBars(data));
        this.HttpService.sendGetRequest('/yugi').subscribe((res) => {
            this.drawBars(res);
        });
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }
    drawBars(data) {
        // Create the X-axis band scale
        const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(d => d.name))
            .padding(0.2);
        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
        // Create the Y-axis band scale
        const y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 5000])
            .range([this.height, 0]);
        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y));
        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d) => x(d.name))
            .attr("y", (d) => y(d.atk))
            .attr("width", x.bandwidth())
            .attr("height", (d) => this.height - y(d.atk))
            .attr("fill", "#d04a35");
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["app-bar"]], decls: 3, vars: 0, consts: [["id", "bar"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Bar Chart - Attack Damage of Yu-Gi-Oh Synchro Monsters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "figure", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar/bar.component */ "QZ6x");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie/pie.component */ "icus");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'd3';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-pie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_bar_bar_component__WEBPACK_IMPORTED_MODULE_1__["BarComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_2__["PieComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar/bar.component */ "QZ6x");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie/pie.component */ "icus");
/* harmony import */ var _scatter_scatter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scatter/scatter.component */ "ZWLQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _bar_bar_component__WEBPACK_IMPORTED_MODULE_3__["BarComponent"],
        _pie_pie_component__WEBPACK_IMPORTED_MODULE_4__["PieComponent"],
        _scatter_scatter_component__WEBPACK_IMPORTED_MODULE_5__["ScatterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZWLQ":
/*!**********************************************!*\
  !*** ./src/app/scatter/scatter.component.ts ***!
  \**********************************************/
/*! exports provided: ScatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterComponent", function() { return ScatterComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScatterComponent {
    constructor() {
        this.data = [
            { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
            { "Framework": "React", "Stars": "150793", "Released": "2013" },
            { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
            { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
            { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
        ];
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
    }
    ngOnInit() {
        this.createSvg();
        this.drawPlot();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#scatter")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }
    drawPlot() {
        // Add X axis
        const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([2009, 2017])
            .range([0, this.width]);
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x).tickFormat(d3__WEBPACK_IMPORTED_MODULE_0__["format"]("d")));
        // Add Y axis
        const y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 200000])
            .range([this.height, 0]);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y));
        // Add dots
        const dots = this.svg.append('g');
        dots.selectAll("dot")
            .data(this.data)
            .enter()
            .append("circle")
            .attr("cx", (d) => x(d.Released))
            .attr("cy", (d) => y(d.Stars))
            .attr("r", 7)
            .style("opacity", .5)
            .style("fill", "#69b3a2");
        // Add labels
        dots.selectAll("text")
            .data(this.data)
            .enter()
            .append("text")
            .text((d) => d.Framework)
            .attr("x", (d) => x(d.Released))
            .attr("y", (d) => y(d.Stars));
    }
}
ScatterComponent.ɵfac = function ScatterComponent_Factory(t) { return new (t || ScatterComponent)(); };
ScatterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScatterComponent, selectors: [["app-scatter"]], decls: 3, vars: 0, consts: [["id", "scatter"]], template: function ScatterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Scatter Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "figure", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2F0dGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "icus":
/*!**************************************!*\
  !*** ./src/app/pie/pie.component.ts ***!
  \**************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "F11b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PieComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", x_r1.type, " ", x_r1.count, "");
} }
class PieComponent {
    constructor(HttpService) {
        this.HttpService = HttpService;
        this.margin = 50;
        this.width = 750;
        this.height = 600;
        // The radius of the pie chart is half the smallest side
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
    }
    ngOnInit() {
        this.createSvg();
        this.HttpService.sendGetRequest('/poketypes').subscribe((res) => {
            this.data = res;
            this.createColors(res);
            this.drawChart(res);
        });
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("figure#pie")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    }
    createColors(data) {
        this.colors = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]()
            .domain(data.map(d => d.count.toString()))
            .range(["#3B9950", "#5A5979", "#b1b12b", "#EA1369", "#EF6138",
            "#FD4B5A", "#6F808E", "#906790", "#28C950", "#6E491F", "#BEE7F5", "#C899A7",
            "#9B69D9", "#F81C91", "#8B3E21", "#43BD94", "#86A8FC"]);
    }
    drawChart(data) {
        // Compute the position of each group on the pie:
        const pie = d3__WEBPACK_IMPORTED_MODULE_0__["pie"]().value((d) => Number(d.count));
        // Build the pie chart
        this.svg
            .selectAll('pieces')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__["arc"]()
            .innerRadius(0)
            .outerRadius(this.radius))
            .attr('fill', (d, i) => (this.colors(i)))
            .attr("stroke", "#121926")
            .style("stroke-width", "1px");
        // Add labels
        const labelLocation = d3__WEBPACK_IMPORTED_MODULE_0__["arc"]()
            .innerRadius(100)
            .outerRadius(this.radius);
        this.svg
            .selectAll('pieces')
            .data(pie(data))
            .enter()
            .append('text')
            .text((d) => d.data.type)
            .attr("transform", (d) => "translate(" + labelLocation.centroid(d) + ")")
            .style("text-anchor", "middle")
            .style("font-size", 15);
    }
}
PieComponent.ɵfac = function PieComponent_Factory(t) { return new (t || PieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PieComponent, selectors: [["app-pie"]], decls: 4, vars: 1, consts: [["id", "pie"], [4, "ngFor", "ngForOf"]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pie Chart - Distribution of Generation I Pokemon Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PieComponent_li_3_Template, 2, 2, "li", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map