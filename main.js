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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"panel panel-default\">\n\t<div class=\"custom-file\" style=\"width:320px;\">\n\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"fileChanged($event)\" >\n\t\t<label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n\t</div>\n\t<br>\n\t<button class=\"btn btn-success\" (click)=\"uploadDocument()\">upload</button>\n\t<button class=\"btn btn-success\" (click)=\"downloadEquips()\">download</button>\n\t<br/> <br/>\n\n\t<hr>\n\n\t<form>\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-secondary\">Set</td>\n\t\t\t\t<td class=\"bg-secondary\">Rarity</td>\n\t\t\t\t<td class=\"bg-secondary\">Level</td>\n\t\t\t\t<td class=\"bg-secondary\">enhance</td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td class=\"bg-success text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td class=\"bg-primary text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td class=\"bg-danger text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><button class=\"btn btn-success\" (click)=\"addEquipment()\">Add</button></td>\n\n\t\t\t\t<td>\n\t\t\t\t\t<select name=\"equipType\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.type\">\n\t\t\t\t\t\t<option *ngFor=\"let e of equipTypes\" [value]=\"e.name\">{{e.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</td>\n\n\t\t\t\t<td>\n\t\t\t\t\t<select name=\"set\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.set\">\n\t\t\t\t\t\t<option *ngFor=\"let e of sets\" [value]=\"e.name\">{{e.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</td>\n\n\t\t\t\t<td>\n\t\t\t\t\t<select name=\"rarity\" style=\"width:90px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.rarity\">\n\t\t\t\t\t\t<option *ngFor=\"let r of rarities\" [value]=\"r\">{{r}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</td> \n\n\t\t\t\t<td><input name=\"level\" [(ngModel)]=\"addEquip.level\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"enhance\" [(ngModel)]=\"addEquip.enhancementLvl\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"health\" [(ngModel)]=\"addEquip.health\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"healthPct\" [(ngModel)]=\"addEquip.healthPct\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"armor\" [(ngModel)]=\"addEquip.armor\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"armorPct\" [(ngModel)]=\"addEquip.armorPct\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"attack\" [(ngModel)]=\"addEquip.attack\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"attackPct\" [(ngModel)]=\"addEquip.attackPct\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"speed\" [(ngModel)]=\"addEquip.speed\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"critChance\" [(ngModel)]=\"addEquip.critRatePct\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"critDamage\" [(ngModel)]=\"addEquip.critDamagePct\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"eff\" [(ngModel)]=\"addEquip.effectivenessPct\" size=\"2\"></td>\n\t\t\t\t<td><input name=\"resistance\" [(ngModel)]=\"addEquip.resistancePct\" size=\"2\"></td>\n\t\t\t</tr>\n\t\t</table>\n\t</form>\n</div>\n<div>\n\t<div style=\"display:inline-block;\">\n\t\tWeapon\n\t\t<table border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let w of weapons\" (click)=\"selectWeapon(w)\">\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\t<div style=\"display:inline-block;\">\n\t\tHelmet\n\t\t<table border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let w of helmets\" (click)=\"selectHelmet(w)\">\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\n\t<div style=\"display:inline-block;\">\n\t\tArmor\n\t\t<table border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let w of armors\" (click)=\"selectArmor(w)\">\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\n\t<div style=\"display:inline-block;\">\n\t\tNecklace\n\t\t<table border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let w of necklaces\" (click)=\"selectNeck(w)\">\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\n\t<div style=\"display:inline-block;\">\n\t\tRing\n\t\t<table border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let w of rings\" (click)=\"selectRing(w)\">\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\n\t<div style=\"display:inline-block;\">\n\t\tBoot\n\t\t<table border=\"1\">\n\t\t\t<tr>\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let w of boots\" (click)=\"selectBoot(w)\">\n\t\t\t\t<td></td>\n\t\t\t\t<td class=\"bg-success\"><span>{{w.health}}</span></td>\n\t\t\t\t<td style=\"background-color:#87D865\"><span>{{w.healthPct}}</span></td>\n\t\t\t\t<td class=\"bg-primary\"><span>{{w.armor}}</span></td>\n\t\t\t\t<td style=\"background-color:#65A2D8\"><span>{{w.armorPct}}</span></td>\n\t\t\t\t<td class=\"bg-danger\"><span>{{w.attack}}</span></td>\n\t\t\t\t<td style=\"background-color:#E15757\"><span>{{w.attackPct}}</span></td>\n\t\t\t\t<td class=\"bg-warning\"><span>{{w.speed}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critRatePct}}</span></td>\n\t\t\t\t<td class=\"bg-info\"><span>{{w.critDamagePct}}</span></td>\n\t\t\t\t<td><span>{{w.effectivenessPct}}</span></td>\n\t\t\t\t<td><span>{{w.resistancePct}}</span></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>\n<hr>\n<div>\n\tHero\n\t<select name=\"equipType\" style=\"width:95px;\" [(ngModel)]=\"selectedHero\">\n\t\t<option *ngFor=\"let e of heroes\" [ngValue]=\"e\">{{e.name}}</option>\n\t</select>\n\t<ul *ngIf=\"selectedHero\">\n\t\t<li *ngFor=\"let e of selectedHero.stats\" (click)=\"selectStar(e)\">{{e.starLevel}}</li>\n\t</ul>\n</div>\n<div [hidden]=\"!selectedHero && !selectedStar\">\n\t<table>\n\t\t<tr>\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{selectedStar.attack}}</td>\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{selectedStar.health}}</td>\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{selectedStar.armor}}</td>\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{selectedStar.speed}}</td>\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{selectedStar.critRatePct}}</td>\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{selectedStar.critDamagePct}}</td>\n\t\t\t<td>{{selectedStar.dualPct}}</td>\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{selectedStar.effectiveness}}</td>\n\t\t\t<td>{{selectedStar.resistance}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"text-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\">{{selectedStar.attack + (selectedStar.attack * finalStats.attackPct)/100 + finalStats.attack}}</td>\n\t\t\t<td class=\"text-success\"><img src=\"assets/health.gif\" alt=\"Health\">{{selectedStar.health + (selectedStar.health * finalStats.healthPct)/100 + finalStats.health}}</td>\n\t\t\t<td class=\"text-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\">{{selectedStar.armor + (selectedStar.armor * finalStats.armorPct)/100 + finalStats.armor}}</td>\n\t\t\t<td class=\"text-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\">{{selectedStar.speed + finalStats.speed}}</td>\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{selectedStar.critRatePct + finalStats.critRatePct}}</td>\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{selectedStar.critDamagePct + finalStats.critDamagePct}}</td>\n\t\t\t<td>{{selectedStar.dualPct }}</td>\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{selectedStar.effectiveness + finalStats.effectivenessPct}}</td>\n\t\t\t<td>{{selectedStar.resistance + finalStats.resistancePct}}</td>\n\t\t</tr>\n\t</table>\n</div>\n\n<div style=\"display:inline-block;\">\n\tFinal Stats\n\t<table border=\"1\">\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td class=\"bg-success\"><img src=\"assets/health.gif\" alt=\"Health\"></td>\n\t\t\t<td style=\"background-color:#87D865\" class=\"text-center\">%</td>\n\t\t\t<td class=\"bg-primary\"><img src=\"assets/defense.gif\" alt=\"Defense\"></td>\n\t\t\t<td style=\"background-color:#65A2D8\" class=\"text-center\">%</td>\n\t\t\t<td class=\"bg-danger\"><img src=\"assets/attack.gif\" alt=\"Attack\"></td>\n\t\t\t<td style=\"background-color:#E15757\" class=\"text-center\">%</td>\n\t\t\t<td class=\"bg-warning\"><img src=\"assets/speed.gif\" alt=\"Speed\"></td>\n\t\t\t<td class=\"bg-info\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"></td>\n\t\t\t<td class=\"bg-info\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"></td>\n\t\t\t<td class=\"bg-secondary\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\n\t\t\t<td class=\"bg-secondary\">Res</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td class=\"bg-success\"><span>{{finalStats.health}}</span></td>\n\t\t\t<td style=\"background-color:#87D865\"><span>{{finalStats.healthPct}}</span></td>\n\t\t\t<td class=\"bg-primary\"><span>{{finalStats.armor}}</span></td>\n\t\t\t<td style=\"background-color:#65A2D8\"><span>{{finalStats.armorPct}}</span></td>\n\t\t\t<td class=\"bg-danger\"><span>{{finalStats.attack}}</span></td>\n\t\t\t<td style=\"background-color:#E15757\"><span>{{finalStats.attackPct}}</span></td>\n\t\t\t<td class=\"bg-finalStatsarning\"><span>{{finalStats.speed}}</span></td>\n\t\t\t<td class=\"bg-info\"><span>{{finalStats.critRatePct}}</span></td>\n\t\t\t<td class=\"bg-info\"><span>{{finalStats.critDamagePct}}</span></td>\n\t\t\t<td><span>{{finalStats.effectivenessPct}}</span></td>\n\t\t\t<td><span>{{finalStats.resistancePct}}</span></td>\n\t\t</tr>\n\t</table>\n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _starStatLevel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./starStatLevel */ "./src/app/starStatLevel.ts");








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
        this.selectedStar = new _starStatLevel__WEBPACK_IMPORTED_MODULE_7__["StarStatLevel"]();
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
    AppComponent.prototype.selectStar = function (e) {
        this.selectedStar = e;
    };
    // ************************ File things
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
                _this.weapons = equipsIn.weapons;
                _this.helmets = equipsIn.helmets;
                _this.armors = equipsIn.armors;
                _this.necklaces = equipsIn.necklaces;
                _this.rings = equipsIn.rings;
                _this.boots = equipsIn.boots;
                console.log(equipsIn);
            }
        };
        fileReader.readAsText(this.file);
    };
    // *****************************************
    AppComponent.prototype.CalculateStats = function () {
        this.finalStats.health = this.getNumber(this.selectedWeapon.health) + this.getNumber(this.selectedHelmet.health) + this.getNumber(this.selectedArmor.health) + this.getNumber(this.selectedNeck.health) + this.getNumber(this.selectedRing.health) + this.getNumber(this.selectedBoot.health);
        this.finalStats.healthPct = this.getNumber(this.selectedWeapon.healthPct) + this.getNumber(this.selectedHelmet.healthPct) + this.getNumber(this.selectedArmor.healthPct) + this.getNumber(this.selectedNeck.healthPct) + this.getNumber(this.selectedRing.healthPct) + this.getNumber(this.selectedBoot.healthPct);
        this.finalStats.armor = this.getNumber(this.selectedWeapon.armor) + this.getNumber(this.selectedHelmet.armor) + this.getNumber(this.selectedArmor.armor) + this.getNumber(this.selectedNeck.armor) + this.getNumber(this.selectedRing.armor) + this.getNumber(this.selectedBoot.armor);
        this.finalStats.armorPct = this.getNumber(this.selectedWeapon.armorPct) + this.getNumber(this.selectedHelmet.armorPct) + this.getNumber(this.selectedArmor.armorPct) + this.getNumber(this.selectedNeck.armorPct) + this.getNumber(this.selectedRing.armorPct) + this.getNumber(this.selectedBoot.armorPct);
        this.finalStats.attack = this.getNumber(this.selectedWeapon.attack) + this.getNumber(this.selectedHelmet.attack) + this.getNumber(this.selectedArmor.attack) + this.getNumber(this.selectedNeck.attack) + this.getNumber(this.selectedRing.attack) + this.getNumber(this.selectedBoot.attack);
        this.finalStats.attackPct = this.getNumber(this.selectedWeapon.attackPct) + this.getNumber(this.selectedHelmet.attackPct) + this.getNumber(this.selectedArmor.attackPct) + this.getNumber(this.selectedNeck.attackPct) + this.getNumber(this.selectedRing.attackPct) + this.getNumber(this.selectedBoot.attackPct);
        this.finalStats.speed = this.getNumber(this.selectedWeapon.speed) + this.getNumber(this.selectedHelmet.speed) + this.getNumber(this.selectedArmor.speed) + this.getNumber(this.selectedNeck.speed) + this.getNumber(this.selectedRing.speed) + this.getNumber(this.selectedBoot.speed);
        this.finalStats.critRatePct = this.getNumber(this.selectedWeapon.critRatePct) + this.getNumber(this.selectedHelmet.critRatePct) + this.getNumber(this.selectedArmor.critRatePct) + this.getNumber(this.selectedNeck.critRatePct) + this.getNumber(this.selectedRing.critRatePct) + this.getNumber(this.selectedBoot.critRatePct);
        this.finalStats.critDamagePct = this.getNumber(this.selectedWeapon.critDamagePct) + this.getNumber(this.selectedHelmet.critDamagePct) + this.getNumber(this.selectedArmor.critDamagePct) + this.getNumber(this.selectedNeck.critDamagePct) + this.getNumber(this.selectedRing.critDamagePct) + this.getNumber(this.selectedBoot.critDamagePct);
        this.finalStats.effectivenessPct = this.getNumber(this.selectedWeapon.effectivenessPct) + this.getNumber(this.selectedHelmet.effectivenessPct) + this.getNumber(this.selectedArmor.effectivenessPct) + this.getNumber(this.selectedNeck.effectivenessPct) + this.getNumber(this.selectedRing.effectivenessPct) + this.getNumber(this.selectedBoot.effectivenessPct);
        this.finalStats.resistancePct = this.getNumber(this.selectedWeapon.resistancePct) + this.getNumber(this.selectedHelmet.resistancePct) + this.getNumber(this.selectedArmor.resistancePct) + this.getNumber(this.selectedNeck.resistancePct) + this.getNumber(this.selectedRing.resistancePct) + this.getNumber(this.selectedBoot.resistancePct);
        console.log('final', this.finalStats);
    };
    AppComponent.prototype.getNumber = function (n) {
        if (!n)
            return 0;
        if (n == NaN)
            return Number(n);
        return Number(n);
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

module.exports = __webpack_require__(/*! C:\Users\IGEN752\WORKSPACE\epic-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map