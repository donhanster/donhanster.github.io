(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"custom-file\" style=\"width:320px;\">\r\n\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"fileChanged($event)\" >\r\n\t\t<label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\r\n\t</div>\r\n\t<br>\r\n\t<button class=\"btn btn-success\" (click)=\"uploadDocument()\">upload</button>\r\n\t<button class=\"btn btn-success\" (click)=\"downloadEquips()\">download</button>\r\n\t<br/> <br/>\r\n\r\n\t<hr>\r\n\r\n\t<form>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Set</td>\r\n\t\t\t\t<td class=\"bg-secondary\">Rarity</td>\r\n\t\t\t\t<td class=\"bg-secondary\">Level</td>\r\n\t\t\t\t<td class=\"bg-secondary\">enhance</td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td class=\"bg-success text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td class=\"bg-primary text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td class=\"bg-danger text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><button class=\"btn btn-success\" (click)=\"addEquipment()\">Add</button></td>\r\n\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<select name=\"equipType\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.type\">\r\n\t\t\t\t\t\t<option *ngFor=\"let e of equipTypes\" [value]=\"e.name\">{{e.name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<select name=\"set\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.set\">\r\n\t\t\t\t\t\t<option *ngFor=\"let e of sets\" [value]=\"e.name\">{{e.name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<select name=\"rarity\" style=\"width:90px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.rarity\">\r\n\t\t\t\t\t\t<option *ngFor=\"let r of rarities\" [value]=\"r\">{{r}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td> \r\n\r\n\t\t\t\t<td><input name=\"level\" [(ngModel)]=\"addEquip.level\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"enhance\" [(ngModel)]=\"addEquip.enhancementLvl\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"health\" [(ngModel)]=\"addEquip.health\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"healthPct\" [(ngModel)]=\"addEquip.healthPct\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"armor\" [(ngModel)]=\"addEquip.armor\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"armorPct\" [(ngModel)]=\"addEquip.armorPct\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"attack\" [(ngModel)]=\"addEquip.attack\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"attackPct\" [(ngModel)]=\"addEquip.attackPct\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"speed\" [(ngModel)]=\"addEquip.speed\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"critChance\" [(ngModel)]=\"addEquip.critRatePct\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"critDamage\" [(ngModel)]=\"addEquip.critDamagePct\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"eff\" [(ngModel)]=\"addEquip.effectivenessPct\" size=\"2\"></td>\r\n\t\t\t\t<td><input name=\"resistance\" [(ngModel)]=\"addEquip.resistancePct\" size=\"2\"></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</form>\r\n</div>\r\n<div>\r\n\t<div style=\"display:inline-block;\">\r\n\t\tWeapon\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let w of weapons\" (click)=\"selectWeapon(w)\">\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\r\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\r\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div style=\"display:inline-block;\">\r\n\t\tHelmet\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let w of helmets\" (click)=\"selectHelmet(w)\">\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\r\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\r\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;\">\r\n\t\tArmor\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let w of armors\" (click)=\"selectArmor(w)\">\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\r\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\r\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;\">\r\n\t\tNecklace\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let w of necklaces\" (click)=\"selectNeck(w)\">\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\r\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\r\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;\">\r\n\t\tRing\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let w of rings\" (click)=\"selectRing(w)\">\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\r\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\r\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;\">\r\n\t\tBoot\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\r\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr *ngFor=\"let w of boots\" (click)=\"selectBoot(w)\">\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\r\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\r\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\r\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\r\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\r\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n<hr>\r\n<div>\r\n\tHero\r\n\t<select name=\"equipType\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" (change)=\"selectHero()\"[ngModel]=\"$ctrl.selectedHero\">\r\n\t\t<option *ngFor=\"let e of heroes\" [value]=\"e\">{{e.name}}</option>\r\n\t</select>\r\n\t<ul>\r\n\t\t<li *ngFor=\"let e of selectedHero.stats\">{{e.starLevel}}</li>\r\n\t</ul>\r\n</div>\r\n<div>\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td>{{selectedStar.attack}}</td>\r\n\t\t\t<td>{{selectedStar.health}}</td>\r\n\t\t\t<td>{{selectedStar.armor}}</td>\r\n\t\t\t<td>{{selectedStar.speed}}</td>\r\n\t\t\t<td>{{selectedStar.critRatePct}}</td>\r\n\t\t\t<td>{{selectedStar.critDamagePct}}</td>\r\n\t\t\t<td>{{selectedStar.dualPct}}</td>\r\n\t\t\t<td>{{selectedStar.effectiveness}}</td>\r\n\t\t\t<td>{{selectedStar.resistance}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>{{(selectedStar.attack * finalStats.attackPct) + finalStats.attack}}</td>\r\n\t\t\t<td>{{(selectedStar.health * finalStats.healthPct) + finalStats.health}}</td>\r\n\t\t\t<td>{{(selectedStar.armor * finalStats.armorPct) + finalStats.armor}}</td>\r\n\t\t\t<td>{{selectedStar.speed + finalStats.speed}}</td>\r\n\t\t\t<td>{{selectedStar.critRatePct + finalStats.critRatePct}}</td>\r\n\t\t\t<td>{{selectedStar.critDamagePct + finalStats.critDamagePct}}</td>\r\n\t\t\t<td>{{selectedStar.dualPct }}</td>\r\n\t\t\t<td>{{selectedStar.effectiveness + finalStats.effectivenessPct}}</td>\r\n\t\t\t<td>{{selectedStar.resistance + finalStats.resistancePct}}</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n<div>\r\n\t<ul class=\"list-group\">\r\n\t\tTotal\r\n\t\t<li>\r\n\t\t\t<button class=\"btn btn-success btn-sm\" style=\"width:50px\">{{finalStats.health}}</button>\r\n\t\t\t<button class=\"btn btn-success btn-sm\" style=\"width:50px\">{{finalStats.healthPct}}%</button>\r\n\t\t\t<button class=\"btn btn-primary btn-sm\" style=\"width:50px\">{{finalStats.armor}}</button>\r\n\t\t\t<button class=\"btn btn-primary btn-sm\" style=\"width:50px\">{{finalStats.armorPct}}%</button>\r\n\t\t\t<button class=\"btn btn-danger btn-sm\" style=\"width:50px\">{{finalStats.attack}}</button>\r\n\t\t\t<button class=\"btn btn-danger btn-sm\" style=\"width:50px\">{{finalStats.attackPct}}%</button>\r\n\t\t\t<button class=\"btn btn-warning btn-sm\" style=\"width:50px\">{{finalStats.speed}} </button>\r\n\t\t\t<button class=\"btn btn-info btn-sm\" style=\"width:50px\">R:{{finalStats.critRatePct}}% </button>\r\n\t\t\t<button class=\"btn btn-info btn-sm\" style=\"width:50px\">D:{{finalStats.critDamagePct}}%</button>\r\n\t\t\t<button class=\"btn btn-secondary btn-sm\" style=\"width:50px\">E:{{finalStats.effectivenessPct}}%</button>\r\n\t\t\t<button class=\"btn btn-secondary btn-sm\" style=\"width:50px\">R:{{finalStats.resistancePct}}%</button>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipment */ "./src/app/equipment.ts");
/* harmony import */ var _equipmentTypeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipmentTypeList */ "./src/app/equipmentTypeList.ts");
/* harmony import */ var _equipmentSetList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipmentSetList */ "./src/app/equipmentSetList.ts");
/* harmony import */ var _heroList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroList */ "./src/app/heroList.ts");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero */ "./src/app/hero.ts");
/* harmony import */ var _starStatLevel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./starStatLevel */ "./src/app/starStatLevel.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
        this.equipTypes = _equipmentTypeList__WEBPACK_IMPORTED_MODULE_4__["EQUIPMENT_TYPES"];
        this.addEquipType = this.equipTypes[0];
        this.addEquip = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.rarities = ['Epic', 'Heroic', 'Rare', 'Good', 'Normal'];
        this.sets = _equipmentSetList__WEBPACK_IMPORTED_MODULE_5__["SET_LIST"];
        this.heroes = _heroList__WEBPACK_IMPORTED_MODULE_6__["HERO_LIST"];
        this.selectedHero = new _hero__WEBPACK_IMPORTED_MODULE_7__["Hero"]();
        this.weapons = [];
        this.armors = [];
        this.helmets = [];
        this.necklaces = [];
        this.rings = [];
        this.boots = [];
        this.selectedWeapon = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.selectedHelmet = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.selectedArmor = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.selectedNeck = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.selectedRing = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.selectedBoot = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.finalStats = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.selectedStar = new _starStatLevel__WEBPACK_IMPORTED_MODULE_8__["StarStatLevel"]();
    }
    AppComponent.prototype.addEquipment = function () {
        console.log("Adding", this.addEquip);
        switch (this.addEquip.type) {
            case ("Weapon"):
                this.weapons.push(this.addEquip);
                break;
            case ("Helmet"):
                this.helmets.push(this.addEquip);
                break;
            case ("Armor"):
                this.armors.push(this.addEquip);
                break;
            case ("Necklace"):
                this.necklaces.push(this.addEquip);
                break;
            case ("Ring"):
                this.rings.push(this.addEquip);
                break;
            case ("Boot"):
                this.boots.push(this.addEquip);
                break;
        }
        console.log("weapons", this.weapons);
        console.log("armors", this.armors);
        this.addEquip = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
    };
    AppComponent.prototype.selectWeapon = function (w) {
        this.selectedWeapon = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectArmor = function (w) {
        this.selectedArmor = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectNecklace = function (w) {
        this.selectedNeck = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectRing = function (w) {
        this.selectedRing = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectHelmet = function (w) {
        this.selectedHelmet = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectBoot = function (w) {
        this.selectedBoot = w;
        this.CalculateStats();
    };
    AppComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
    };
    AppComponent.prototype.fakeEquips = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ weapons: this.weapons, armors: this.armors, helmets: this.helmets, necklaces: this.necklaces, rings: this.rings, boots: this.boots });
    };
    AppComponent.prototype.downloadEquips = function () {
        var _this = this;
        this.fakeEquips().subscribe(function (res) {
            _this.dyanmicDownloadByHtmlTag({
                fileName: 'equips',
                text: JSON.stringify(res)
            });
        });
    };
    AppComponent.prototype.uploadDocument = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            var equipsIn;
            if (typeof fileReader.result === 'string') {
                equipsIn = JSON.parse(fileReader.result);
            }
            _this.weapons = equipsIn.weapons;
            _this.helmets = equipsIn.helmets;
            _this.armors = equipsIn.armors;
            _this.necklaces = equipsIn.necklaces;
            _this.rings = equipsIn.rings;
            _this.boots = equipsIn.boots;
            console.log(equipsIn);
        };
        fileReader.readAsText(this.file);
    };
    AppComponent.prototype.CalculateStats = function () {
        this.finalStats.health = this.selectedWeapon.health + this.selectedHelmet.health + this.selectedArmor.health + this.selectedNeck.health + this.selectedRing.health + this.selectedBoot.health;
        this.finalStats.healthPct = this.selectedWeapon.healthPct + this.selectedHelmet.healthPct + this.selectedArmor.healthPct + this.selectedNeck.healthPct + this.selectedRing.healthPct + this.selectedBoot.healthPct;
        this.finalStats.armor = this.selectedWeapon.armor + this.selectedHelmet.armor + this.selectedArmor.armor + this.selectedNeck.armor + this.selectedRing.armor + this.selectedBoot.armor;
        this.finalStats.armorPct = this.selectedWeapon.armorPct + this.selectedHelmet.armorPct + this.selectedArmor.armorPct + this.selectedNeck.armorPct + this.selectedRing.armorPct + this.selectedBoot.armorPct;
        this.finalStats.attack = this.selectedWeapon.attack + this.selectedHelmet.attack + this.selectedArmor.attack + this.selectedNeck.attack + this.selectedRing.attack + this.selectedBoot.attack;
        this.finalStats.attackPct = this.selectedWeapon.attackPct + this.selectedHelmet.attackPct + this.selectedArmor.attackPct + this.selectedNeck.attackPct + this.selectedRing.attackPct + this.selectedBoot.attackPct;
        this.finalStats.speed = this.selectedWeapon.speed + this.selectedHelmet.speed + this.selectedArmor.speed + this.selectedNeck.speed + this.selectedRing.speed + this.selectedBoot.speed;
        this.finalStats.critRatePct = this.selectedWeapon.critRatePct + this.selectedHelmet.critRatePct + this.selectedArmor.critRatePct + this.selectedNeck.critRatePct + this.selectedRing.critRatePct + this.selectedBoot.critRatePct;
        this.finalStats.critDamagePct = this.selectedWeapon.critDamagePct + this.selectedHelmet.critDamagePct + this.selectedArmor.critDamagePct + this.selectedNeck.critDamagePct + this.selectedRing.critDamagePct + this.selectedBoot.critDamagePct;
        this.finalStats.effectivenessPct = this.selectedWeapon.effectivenessPct + this.selectedHelmet.effectivenessPct + this.selectedArmor.effectivenessPct + this.selectedNeck.effectivenessPct + this.selectedRing.effectivenessPct + this.selectedBoot.effectivenessPct;
        this.finalStats.resistancePct = this.selectedWeapon.resistancePct + this.selectedHelmet.resistancePct + this.selectedArmor.resistancePct + this.selectedNeck.resistancePct + this.selectedRing.resistancePct + this.selectedBoot.resistancePct;
        console.log('final', this.finalStats);
    };
    AppComponent.prototype.dyanmicDownloadByHtmlTag = function (arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        var element = this.setting.element.dynamicDownload;
        var fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
        element.setAttribute('href', "data:" + fileType + ";charset=utf-8," + encodeURIComponent(arg.text));
        element.setAttribute('download', arg.fileName);
        var event = new MouseEvent("click");
        element.dispatchEvent(event);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/equipment.ts":
/*!******************************!*\
  !*** ./src/app/equipment.ts ***!
  \******************************/
/*! exports provided: Equipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipment", function() { return Equipment; });
var Equipment = /** @class */ (function () {
    function Equipment() {
        this.health = 0;
        this.healthPct = 0;
        this.armor = 0;
        this.armorPct = 0;
        this.attack = 0;
        this.attackPct = 0;
        this.speed = 0;
        this.effectivenessPct = 0;
        this.resistancePct = 0;
        this.critRatePct = 0;
        this.critDamagePct = 0;
        this.level = 0;
        this.enhancementLvl = 0;
    }
    return Equipment;
}());



/***/ }),

/***/ "./src/app/equipmentSetList.ts":
/*!*************************************!*\
  !*** ./src/app/equipmentSetList.ts ***!
  \*************************************/
/*! exports provided: SET_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LIST", function() { return SET_LIST; });
var SET_LIST = [{ name: "Lifesteal", bonusStat: "Lifesteal", bonusStatValue: 20, requiredItems: 4 },
    { name: "Immunity", bonusStat: "Immunity", bonusStatValue: 1, requiredItems: 2 },
    { name: "Hit", bonusStat: "effectivenessPct", bonusStatValue: 20, requiredItems: 2 },
    { name: "Speed", bonusStat: "speed", bonusStatValue: 25, requiredItems: 4 },
    { name: "Health", bonusStat: "healthPct", bonusStatValue: 15, requiredItems: 2 },
    { name: "Attack", bonusStat: "attackPct", bonusStatValue: 35, requiredItems: 4 },
    { name: "Resist", bonusStat: "resistancePct", bonusStatValue: 20, requiredItems: 2 },
    { name: "Rage", bonusStat: "Rage", bonusStatValue: 30, requiredItems: 2 },
    { name: "Unity", bonusStat: "dualPct", bonusStatValue: 4, requiredItems: 2 },
    { name: "Critical", bonusStat: "critical", bonusStatValue: 15, requiredItems: 2 }
];


/***/ }),

/***/ "./src/app/equipmentTypeList.ts":
/*!**************************************!*\
  !*** ./src/app/equipmentTypeList.ts ***!
  \**************************************/
/*! exports provided: EQUIPMENT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUIPMENT_TYPES", function() { return EQUIPMENT_TYPES; });
var EQUIPMENT_TYPES = [{ name: 'Weapon', variableMainStat: false },
    { name: 'Helmet', variableMainStat: false },
    { name: 'Armor', variableMainStat: false },
    { name: 'Necklace', variableMainStat: true },
    { name: 'Ring', variableMainStat: true },
    { name: 'Boot', variableMainStat: true }
];


/***/ }),

/***/ "./src/app/hero.ts":
/*!*************************!*\
  !*** ./src/app/hero.ts ***!
  \*************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/heroList.ts":
/*!*****************************!*\
  !*** ./src/app/heroList.ts ***!
  \*****************************/
/*! exports provided: HERO_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERO_LIST", function() { return HERO_LIST; });
var HERO_LIST = [{ name: "Cidd", stats: [{ starLevel: 4, maxLevel: 40, attack: 501, health: 2844, speed: 120, armor: 297, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 },
            { starLevel: 5, maxLevel: 50, attack: 647, health: 3720, speed: 120, armor: 381, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 },
            { starLevel: 6, maxLevel: 60, attack: 807, health: 4677, speed: 120, armor: 473, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 }] },
    { name: "Kise", stats: [
            { starLevel: 5, maxLevel: 50, attack: 771, health: 3752, speed: 116, armor: 421, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 },
            { starLevel: 6, maxLevel: 60, attack: 961, health: 4718, speed: 116, armor: 522, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 }
        ] },
    { name: "Diene", stats: [
            { starLevel: 5, maxLevel: 50, attack: 400, health: 3527, speed: 99, armor: 559, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 },
            { starLevel: 6, maxLevel: 60, attack: 499, health: 4435, speed: 116, armor: 694, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 }
        ] },
    { name: "Commander Lorina", stats: [
            { starLevel: 4, maxLevel: 40, attack: 524, health: 2721, speed: 101, armor: 341, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 },
            { starLevel: 5, maxLevel: 50, attack: 677, health: 3559, speed: 101, armor: 438, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 },
            { starLevel: 6, maxLevel: 60, attack: 843, health: 4475, speed: 101, armor: 543, critRatePct: 15, critDamagePct: 150, dualPct: 5, effectiveness: 0, resistance: 0 }
        ] }
];


/***/ }),

/***/ "./src/app/starStatLevel.ts":
/*!**********************************!*\
  !*** ./src/app/starStatLevel.ts ***!
  \**********************************/
/*! exports provided: StarStatLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarStatLevel", function() { return StarStatLevel; });
var StarStatLevel = /** @class */ (function () {
    function StarStatLevel() {
    }
    return StarStatLevel;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\website\epic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map