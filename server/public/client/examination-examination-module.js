(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examination-examination-module"],{

/***/ "CbUj":
/*!**********************************************************************************!*\
  !*** ./src/app/prescription/pages/list-prescription/list-prescription.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExaminationComponent", function() { return ListExaminationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ListExaminationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListExaminationComponent.ɵfac = function ListExaminationComponent_Factory(t) { return new (t || ListExaminationComponent)(); };
ListExaminationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListExaminationComponent, selectors: [["app-list-prescription"]], decls: 2, vars: 0, template: function ListExaminationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list-prescription works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWV4YW1pbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListExaminationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-prescription',
                templateUrl: './list-prescription.component.html',
                styleUrls: ['./list-prescription.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QBcV":
/*!***************************************************!*\
  !*** ./src/app/prescription/prescription.module.ts ***!
  \***************************************************/
/*! exports provided: PrescriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationModule", function() { return ExaminationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_create_examination_create_examination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/create-prescription/create-prescription.component */ "nj6G");
/* harmony import */ var _pages_bill_examination_bill_examination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/bill-prescription/bill-prescription.component */ "lGF6");
/* harmony import */ var _pages_list_examination_list_examination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/list-prescription/list-prescription.component */ "CbUj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const EXAMINATION_ROUTES = [
    {
        path: '/',
        component: _pages_list_examination_list_examination_component__WEBPACK_IMPORTED_MODULE_4__["ListExaminationComponent"]
    },
    {
        path: 'tao-phieu-kham',
        component: _pages_create_examination_create_examination_component__WEBPACK_IMPORTED_MODULE_2__["CreateExaminationComponent"]
    },
    {
        path: 'toa-kham-benh/:id',
        component: _pages_bill_examination_bill_examination_component__WEBPACK_IMPORTED_MODULE_3__["BillExaminationComponent"]
    }
];
class ExaminationModule {
}
ExaminationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExaminationModule });
ExaminationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExaminationModule_Factory(t) { return new (t || ExaminationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(EXAMINATION_ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExaminationModule, { declarations: [_pages_create_examination_create_examination_component__WEBPACK_IMPORTED_MODULE_2__["CreateExaminationComponent"], _pages_bill_examination_bill_examination_component__WEBPACK_IMPORTED_MODULE_3__["BillExaminationComponent"], _pages_list_examination_list_examination_component__WEBPACK_IMPORTED_MODULE_4__["ListExaminationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExaminationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_create_examination_create_examination_component__WEBPACK_IMPORTED_MODULE_2__["CreateExaminationComponent"], _pages_bill_examination_bill_examination_component__WEBPACK_IMPORTED_MODULE_3__["BillExaminationComponent"], _pages_list_examination_list_examination_component__WEBPACK_IMPORTED_MODULE_4__["ListExaminationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(EXAMINATION_ROUTES)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGF6":
/*!**********************************************************************************!*\
  !*** ./src/app/prescription/pages/bill-prescription/bill-prescription.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BillExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillExaminationComponent", function() { return BillExaminationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BillExaminationComponent {
    constructor() { }
    ngOnInit() {
    }
}
BillExaminationComponent.ɵfac = function BillExaminationComponent_Factory(t) { return new (t || BillExaminationComponent)(); };
BillExaminationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillExaminationComponent, selectors: [["app-bill-prescription"]], decls: 2, vars: 0, template: function BillExaminationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bill-prescription works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsLWV4YW1pbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillExaminationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill-prescription',
                templateUrl: './bill-prescription.component.html',
                styleUrls: ['./bill-prescription.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nj6G":
/*!**************************************************************************************!*\
  !*** ./src/app/prescription/pages/create-prescription/create-prescription.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExaminationComponent", function() { return CreateExaminationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreateExaminationComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateExaminationComponent.ɵfac = function CreateExaminationComponent_Factory(t) { return new (t || CreateExaminationComponent)(); };
CreateExaminationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateExaminationComponent, selectors: [["app-create-prescription"]], decls: 2, vars: 0, template: function CreateExaminationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-prescription works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXhhbWluYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateExaminationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-prescription',
                templateUrl: './create-prescription.component.html',
                styleUrls: ['./create-prescription.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=prescription-prescription-module.js.map
