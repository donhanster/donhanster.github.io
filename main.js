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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n\t<div class=\"custom-file\" style=\"width:320px;display:inline-block;margin-right:15px;\">\r\n\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"fileChanged($event)\" >\r\n\t\t<label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\r\n\t</div>\r\n\r\n\t<button class=\"btn btn-outline-primary\" (click)=\"uploadDocument()\">import</button>\r\n\t<button class=\"btn btn-outline-primary\" (click)=\"downloadEquips()\">export</button>\r\n\t<button class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#helpModal\">Help</button>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n\t<div>\r\n\t\t<div style=\"display:inline-block;\">\r\n\t\t\tHero<br>\r\n\t\t\t<select name=\"equipType\" style=\"width:95px;\" [(ngModel)]=\"selectedHero\" (change)=\"selectHero()\">\r\n\t\t\t\t<option *ngFor=\"let e of heroes\" [ngValue]=\"e\">{{e.name}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t\t<div style=\"display:inline-block;\">\r\n\t\t\t\t<br>\r\n\t\t\t\t<span [class.fas]=\"i<=selectedStar.starLevel\" [class.far]=\"i>selectedStar.starLevel\" class=\"fa-star finger\" *ngFor=\"let i of [1,2,3,4,5,6]\" (click)=\"selectedHero.statsbyStar[0].starLevel <= i && selectStar(selectedHero.statsbyStar[i - selectedHero.statsbyStar[0].starLevel])\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t\t\tAwakening <br>\r\n\t\t\t\t<span [class.fas]=\"i<=selectedAwakening\" [class.far]=\"i>selectedAwakening\" class=\"fa-star finger\" *ngFor=\"let i of [1,2,3,4,5,6]\" (click)=\"selectAwakening(i)\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t\t\tJob: {{selectedHero.job}} <br>\r\n\t\t\t\tSign: {{selectedHero.zodiacSign}}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<hr>\r\n<div style=\"width:720px;\"[hidden]=\"!selectedHero || !selectedStar\">\r\n\t<table class=\"table table-sm\">\r\n\t\t<tr scope=\"row\">\r\n\t\t\t<td>Base Level {{selectedStar.maxLevel}}</td>\r\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{selectedStar.stats.attack}}</td>\r\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{selectedStar.stats.health}}</td>\r\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{selectedStar.stats.defense}}</td>\r\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{selectedStar.stats.speed}}</td>\r\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{selectedStar.stats.critRatePct}}</td>\r\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{selectedStar.stats.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{selectedStar.stats.dualPct}}</td>\r\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{selectedStar.stats.effectivenessPct}}</td>\r\n\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{selectedStar.stats.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<tr scope=\"row\">\r\n\t\t\t<td>Awakening</td>\r\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{awakenStat.attack}} {{awakenStat.attackPct}}%</td>\r\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{awakenStat.health}} {{awakenStat.healthPct}}%</td>\r\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{awakenStat.defensePct}}%</td>\r\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{awakenStat.speed}}</td>\r\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{awakenStat.critRatePct}}</td>\r\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{awakenStat.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{awakenStat.dualPct}}</td>\r\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{awakenStat.effectivenessPct}}</td>\r\n\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{awakenStat.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<tr scope=\"row\">\r\n\t\t\t<td>Artifact</td>\r\n\t\t\t<td><input [(ngModel)]=\"artifact.attack\" size=\"2\"></td>\r\n\t\t\t<td><input [(ngModel)]=\"artifact.health\" size=\"2\"></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t\t<tr scope=\"row\">\r\n\t\t\t<td>Equipment</td>\r\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{equipStats.attack}} {{equipStats.attackPct}}%</td>\r\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{equipStats.health}} {{equipStats.healthPct}}%</td>\r\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{equipStats.defense}} {{equipStats.defensePct}}%</td>\r\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{equipStats.speed}}</td>\r\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{equipStats.critRatePct}}</td>\r\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{equipStats.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{equipStats.dualPct}}</td>\r\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{equipStats.effectivenessPct}}</td>\r\n\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{equipStats.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<tr scope=\"row\">\r\n\t\t\t<td>Final</td>\r\n\t\t\t<td class=\"attack\"><img src=\"assets/attack.gif\" alt=\"Attack\">{{finalStats.attack | number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"health\"><img src=\"assets/health.gif\" alt=\"Health\">{{finalStats.health | number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"defense\"><img src=\"assets/defense.gif\" alt=\"Defense\">{{finalStats.defense | number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"speed\"><img src=\"assets/speed.gif\" alt=\"Speed\">{{finalStats.speed| number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"crit\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{finalStats.critRatePct}}</td>\r\n\t\t\t<td  class=\"crit\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{finalStats.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{finalStats.dualPct}}</td>\r\n\t\t\t<td class=\"eff\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{finalStats.effectivenessPct}}</td>\r\n\t\t\t<td class=\"eff\"><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{finalStats.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<ng-container *ngFor=\"let e of equipmentSetStats;let i =index\">\r\n\t\t\t<tr  scope=\"row\">\r\n\t\t\t\t<td>{{e.name}} <span class=\"fas fa-minus attack finger\" (click)=\"removeSet(i)\"></span></td>\r\n\t\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{e.stats.attack}} {{e.stats.attackPct}}%</td>\r\n\t\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{e.stats.health}} {{e.stats.healthPct}}%</td>\r\n\t\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{e.stats.defense}} {{e.stats.defensePct}}</td>\r\n\t\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{e.stats.speed}}</td>\r\n\t\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{e.stats.critRatePct}}</td>\r\n\t\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{e.stats.critDamagePct}}</td>\r\n\t\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{e.stats.dualPct}}</td>\r\n\t\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{e.stats.effectivenessPct}}</td>\r\n\t\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{e.stats.resistancePct}}</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr scope=\"row\">\r\n\t\t\t\t<td>{{equipmentSetFinal[i].name}}</td>\r\n\t\t\t\t<td class=\"attack\"><img src=\"assets/attack.gif\" alt=\"Attack\">{{equipmentSetFinal[i].stats.attack | number:'1.0-0'}}</td>\r\n\t\t\t\t<td class=\"health\"><img src=\"assets/health.gif\" alt=\"Health\">{{equipmentSetFinal[i].stats.health | number:'1.0-0'}}</td>\r\n\t\t\t\t<td class=\"defense\"><img src=\"assets/defense.gif\" alt=\"Defense\">{{equipmentSetFinal[i].stats.defense | number:'1.0-0'}}</td>\r\n\t\t\t\t<td class=\"speed\"><img src=\"assets/speed.gif\" alt=\"Speed\">{{equipmentSetFinal[i].stats.speed| number:'1.0-0'}}</td>\r\n\t\t\t\t<td class=\"crit\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{equipmentSetFinal[i].stats.critRatePct}}</td>\r\n\t\t\t\t<td  class=\"crit\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{equipmentSetFinal[i].stats.critDamagePct}}</td>\r\n\t\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{equipmentSetFinal[i].stats.dualPct}}</td>\r\n\t\t\t\t<td class=\"eff\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{equipmentSetFinal[i].stats.effectivenessPct}}</td>\r\n\t\t\t\t<td class=\"eff\"><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{equipmentSetFinal[i].stats.resistancePct}}</td>\r\n\t\t\t</tr>\r\n\t\t</ng-container>\r\n\t</table>\r\n\r\n</div>\r\n\r\n<hr>\r\n\r\n<div>\r\n\t<h5>Find Sets</h5>\r\n\t<div style=\"width:650px;\">\r\n\t\t<div style=\"display:inline-block;width:400px;\">\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<select class=\"custom-select\" name=\"equipType\"  [(ngModel)]=\"bestStatName\">\r\n\t\t\t\t\t<option *ngFor=\"let e of statList\" [ngValue]=\"e\">{{e}}</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<input type=\"text\" placeholder=\"Min Value\" class=\"form-control\" [(ngModel)]=\"bestStatMin\">\r\n\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t<button class=\"btn btn-outline-dark\" type=\"button\" (click)=\"addFilter()\">Add Filter</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div style=\"display:inline-block;margin-left:20px;width:150px\">\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input type=\"text\" aria-label=\"max best\" class=\"form-control\" [(ngModel)]=\"bestStatMaxEquip\">\r\n\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t<button class=\"btn btn-outline-dark\" type=\"button\" (click)=\"generateBest()\">Find Sets</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<i class=\"fas fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"this number is the top x equipment to use when calculating which sets match. the higher the number the more combinations are available. This also slows down the calculation\"></i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div style=\"width:307px;\">\r\n\t\t<div class=\"input-group\" *ngFor=\"let s of statFilters;let i =index\">\r\n\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t<span class=\"fas fa-trash finger\" (click)=\"remove(statFilters,i)\"></span>\r\n\t\t\t\t<span class=\"input-group-text\" id=\"basic-addon1\">{{s.statName}}</span>\r\n\t\t\t</div>\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"stat minimum\" [(ngModel)]=\"s.statMin\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t<span class=\"input-group-text\">{{s.resultCnt}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<br/>\r\n\t<div style=\"display:inline-block;margin-left:10px;width:360;\" class=\"panel panel-default\" *ngFor=\"let es of equipmentSets;let i =index\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"es.name\" class=\"form-control\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t<button class=\"btn btn-outline-dark\" (click)=\"showSet(i)\" title=\"Compare\"><span class=\"fas fa-angle-double-up\"></span></button>\r\n\t\t\t\t<button class=\"btn btn-outline-dark\" (click)=\"remove(equipmentSets,i)\"><span class=\"fas fa-times\"></span></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<app-equipment-list [list]=\"es.equipment\" (editEquip)=\"edit(es.equipment,$event)\" (removeEquip)=\"remove(es.equipment,$event)\"></app-equipment-list>\r\n\t</div>\r\n</div>\r\n<hr>\r\n\r\n<div>\r\n\t<h5 style=\"display:inline-block;margin-right:15px;\">Equipment</h5>\r\n\t<span class=\"fas fa-plus finger health\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"addEquipmentInit()\"></span>\r\n\t\r\n\t<div class=\"container\" style=\"display:inline-block;\">\r\n\t\t<div class=\"input-group\" style=\"width:200px;\">\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"setName\" placeholder=\"Set Name\" class=\"form-control\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t<button class=\"btn btn-outline-dark\" type=\"button\" (click)=\"addSet()\">Add Set</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<br><br>\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t<b>Weapon</b>\r\n\t\t<app-equipment-list [list]=\"weapons\" [selectedEquip]=\"weapons[selectWeaponIdx]\" (selectEquipChange)=\"selectWeapon($event)\" (editEquip)=\"edit(weapons,$event)\" (removeEquip)=\"remove(weapons,$event)\"></app-equipment-list>\r\n\t</div>\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t<b>Helmet</b>\r\n\t\t<app-equipment-list [list]=\"helmets\" [selectedEquip]=\"helmets[selectHelmetIdx]\" (selectEquipChange)=\"selectHelmet($event)\" (editEquip)=\"edit(helmets,$event)\" (removeEquip)=\"remove(helmets,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t<b>Armor</b>\r\n\t\t<app-equipment-list [list]=\"armors\" [selectedEquip]=\"armors[selectArmorIdx]\" (selectEquipChange)=\"selectArmor($event)\" (editEquip)=\"edit(armors,$event)\" (removeEquip)=\"remove(armors,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t<b>Necklace</b>\r\n\t\t<app-equipment-list [list]=\"necklaces\" [selectedEquip]=\"necklaces[selectNecklaceIdx]\" (selectEquipChange)=\"selectNecklace($event)\" (editEquip)=\"edit(necklaces,$event)\" (removeEquip)=\"remove(necklaces,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t<b>Ring</b>\r\n\t\t<app-equipment-list [list]=\"rings\" [selectedEquip]=\"rings[selectRingIdx]\" (selectEquipChange)=\"selectRing($event)\" (editEquip)=\"edit(rings,$event)\" (removeEquip)=\"remove(rings,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t<b>Boot</b>\r\n\t\t<app-equipment-list [list]=\"boots\" [selectedEquip]=\"boots[selectBootIdx]\" (selectEquipChange)=\"selectBoot($event)\" (editEquip)=\"edit(boots,$event)\" (removeEquip)=\"remove(boots,$event)\"></app-equipment-list>\r\n\t</div>\r\n</div>\r\n<hr>\r\n\r\n<div class=\"modal fade\" id=\"helpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n\t\t<div class=\"modal-content modal-lg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">How to use</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<b>Equipment</b>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tUpload your saved equipment if you've previously visited by choosing the save file and pressing the \"import\" button. This file is just Json.\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tAdd your equipment by pressing the green <span class=\"fas fa-plus finger health\"></span> next to the equipment title.\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tMake sure to save your equipment by pressing the \"Export\" button\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tChoose equipments you'd like to preview on a hero by clicking on them. You can select a hero at any point.\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t\r\n\t\t\t<b>Sets:</b>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tIf you want to save the combination of equipments you've just selected, move your eyes to \"Add Set\". Give your set a name and click it.\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tThis now gives you a set. Click the <button class=\"btn btn-outline-dark\"><span class=\"fas fa-angle-double-up\"></span></button> button to preview the set on a selected hero.\r\n\t\t\t\t\tOr compare against other equipment sets.\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<b>Find Set</b>\r\n\t\t\t<ul>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tSelect a stat from the drop-down. and enter in a minimum value for that stat. Click \"Add Filter\". Add as many as you like. Click \"Find Sets\"\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\tUp to 5 sets will be chosen randomly that meet your requirements and added as sets.\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n\t\t<div class=\"modal-content modal-lg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Add equipment</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\tSlot\r\n\t\t\t\t\t\t\t<select name=\"equipType\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.type\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let e of equipTypes\" [value]=\"e.name\">{{e.name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\tSet\r\n\t\t\t\t\t\t\t<select name=\"set\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.set\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let e of sets\" [value]=\"e.name\">{{e.name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\trarity\r\n\t\t\t\t\t\t\t<select name=\"rarity\" style=\"width:90px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.rarity\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let r of rarities\" [value]=\"r\">{{r}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">Level<br><input name=\"level\" [(ngModel)]=\"addEquip.level\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">Enhancement<input name=\"enhance\" [(ngModel)]=\"addEquip.enhancementLvl\" size=\"2\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/health.gif\" alt=\"Health\"><input name=\"health\" [(ngModel)]=\"addEquip.stats.health\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">%<input name=\"healthPct\" [(ngModel)]=\"addEquip.stats.healthPct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/defense.gif\" alt=\"Defense\"><input name=\"defense\" [(ngModel)]=\"addEquip.stats.defense\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">%<input name=\"defensePct\" [(ngModel)]=\"addEquip.stats.defensePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/attack.gif\" alt=\"Attack\"><input name=\"attack\" [(ngModel)]=\"addEquip.stats.attack\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">%<input name=\"attackPct\" [(ngModel)]=\"addEquip.stats.attackPct\" size=\"2\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/speed.gif\" alt=\"Speed\"><input name=\"speed\" [(ngModel)]=\"addEquip.stats.speed\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"><input name=\"critChance\" [(ngModel)]=\"addEquip.stats.critRatePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"><input name=\"critDamage\" [(ngModel)]=\"addEquip.stats.critDamagePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"><input name=\"eff\" [(ngModel)]=\"addEquip.stats.effectivenessPct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/resistance.gif\" alt=\"Resistance\"><input name=\"resistance\" [(ngModel)]=\"addEquip.stats.resistancePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"addEquipment()\">Add</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _jobSignBonusList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobSignBonusList */ "./src/app/jobSignBonusList.ts");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero */ "./src/app/hero.ts");
/* harmony import */ var _userSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userSet */ "./src/app/userSet.ts");
/* harmony import */ var _starStatLevel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./starStatLevel */ "./src/app/starStatLevel.ts");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stats */ "./src/app/stats.ts");












var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jobZodiacBonusList = _jobSignBonusList__WEBPACK_IMPORTED_MODULE_7__["JOB_SIGN_BONUS_LIST"];
        this.equipTypes = _equipmentTypeList__WEBPACK_IMPORTED_MODULE_4__["EQUIPMENT_TYPES"];
        this.addEquipType = _equipmentTypeList__WEBPACK_IMPORTED_MODULE_4__["EQUIPMENT_TYPES"][0];
        this.addEquip = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.rarities = ['Epic', 'Heroic', 'Rare', 'Good', 'Normal'];
        this.sets = _equipmentSetList__WEBPACK_IMPORTED_MODULE_5__["SET_LIST"];
        this.heroes = _heroList__WEBPACK_IMPORTED_MODULE_6__["HERO_LIST"];
        this.selectedHero = new _hero__WEBPACK_IMPORTED_MODULE_8__["Hero"]();
        this.weapons = [];
        this.armors = [];
        this.helmets = [];
        this.necklaces = [];
        this.rings = [];
        this.boots = [];
        this.artifact = { attack: 0, health: 0 };
        this.bestStatName = '';
        this.bestStatMin = '';
        this.statFilters = [];
        this.statBonuses = [];
        this.equipmentSetStats = [];
        this.equipmentSetFinal = [];
        this.equipmentSets = [];
        this.setName = '';
        this.selectWeaponIdx = 0;
        this.selectHelmetIdx = 0;
        this.selectArmorIdx = 0;
        this.selectNecklaceIdx = 0;
        this.selectRingIdx = 0;
        this.selectBootIdx = 0;
        this.finalStats = new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        this.equipStats = new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        this.selectedStar = new _starStatLevel__WEBPACK_IMPORTED_MODULE_10__["StarStatLevel"]();
        this.selectedAwakening = 0;
        this.awakenStat = new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        this.statList = Object.getOwnPropertyNames(this.finalStats);
        this.bestStat = '';
        this.bestStatMaxEquip = 5;
        // ************************ File things
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
        // *****************************************
    }
    AppComponent.prototype.addFilter = function () {
        this.statFilters.push({ statName: this.bestStatName, statMin: this.bestStatMin, resultCnt: 0 });
    };
    AppComponent.prototype.generateBest = function () {
        var bestStat = this.bestStat;
        var bHelms = this.helmets;
        var bWeps = this.weapons;
        var bArmors = this.armors;
        var bNecks = this.necklaces;
        var bRings = this.rings;
        var bBoots = this.boots;
        var combos = []; // {stats:{}, idx:[]}
        this.statFilters.forEach(function (s) {
            s.resultCnt = 0;
        });
        bHelms = this.findBest(bHelms, this.statFilters[0].statName, this.bestStatMaxEquip);
        bWeps = this.findBest(bWeps, this.statFilters[0].statName, this.bestStatMaxEquip);
        bArmors = this.findBest(bArmors, this.statFilters[0].statName, this.bestStatMaxEquip);
        bNecks = this.findBest(bNecks, this.statFilters[0].statName, this.bestStatMaxEquip);
        bRings = this.findBest(bRings, this.statFilters[0].statName, this.bestStatMaxEquip);
        bBoots = this.findBest(bBoots, this.statFilters[0].statName, this.bestStatMaxEquip);
        combos = this.generateAllCombos(bWeps, bHelms, bArmors, bNecks, bRings, bBoots, this.statFilters[0]);
        this.statFilters[0].resultCnt = combos.length;
        var matchesAll = [];
        combos.forEach(function (c) {
            var passes = true;
            for (var i = 1; i < this.statFilters.length; i++) {
                var filter = this.statFilters[i];
                if (!this.passesFilter(c.stats, filter)) {
                    passes = false;
                    break;
                }
                else {
                    this.statFilters[i].resultCnt = this.statFilters[i].resultCnt + 1;
                }
            }
            if (passes) {
                matchesAll.push(c);
            }
        }, this);
        combos = matchesAll;
        //best = filterBestSets(combos);
        //let best = this.getBestX(combos,bestStat,this.bestStatMaxEquip);
        //console.log("best", combos);
        var cnt = 0;
        combos.slice(0, 5).forEach(function (bestSet) {
            var us = new _userSet__WEBPACK_IMPORTED_MODULE_9__["UserSet"]();
            cnt++;
            us.name = bestStat + cnt;
            us.equipment = [bWeps[bestSet.idx[0]], bHelms[bestSet.idx[1]], bArmors[bestSet.idx[2]], bNecks[bestSet.idx[3]], bRings[bestSet.idx[4]], bBoots[bestSet.idx[5]]];
            if (!this.equipmentSets) {
                this.equipmentSets = [];
            }
            this.equipmentSets.push(us);
        }, this);
        //let finalBest:Stats = this.calculateFinalStats(best[0].stats);
        //this.equipmentSetStats.push({name:"speed",stats:finalBest});
        //this.equipmentSetFinal.push({name:"speed",stats:best[0].stats});
    };
    AppComponent.prototype.getArrayFromIdx = function (array, idx) {
        var unique = idx.filter(function (v, i, a) { return a.indexOf(v) === i; });
        var newArr = [];
        unique.forEach(function (i) {
            newArr.push(array[i]);
        });
        return newArr;
    };
    AppComponent.prototype.generateAllCombos = function (bWeps, bHelms, bArmors, bNecks, bRings, bBoots, filter) {
        var combos = [];
        for (var i = 0; i < bWeps.length; i++) {
            for (var j = 0; j < bHelms.length; j++) {
                for (var k = 0; k < bArmors.length; k++) {
                    for (var l = 0; l < bNecks.length; l++) {
                        for (var m = 0; m < bRings.length; m++) {
                            for (var n = 0; n < bBoots.length; n++) {
                                var finalStats = this.addAllStats([bWeps[i], bHelms[j], bArmors[k], bNecks[l], bRings[m], bBoots[n]]);
                                if (this.passesFilter(finalStats, filter)) {
                                    combos.push({ stats: finalStats, idx: [i, j, k, l, m, n] });
                                }
                            }
                        }
                    }
                }
            }
        }
        return combos;
    };
    AppComponent.prototype.filter0 = function (equipments) {
        var finalEquips = [];
        equipments.forEach(function (e) {
            var passed = false;
            this.statFilters.forEach(function (filter) {
                if (e.stats[filter.statName] > 0) {
                    passed = true;
                }
            });
            if (passed) {
                finalEquips.push(e);
            }
        }, this);
        //console.log("filter0",equipments.length, finalEquips.length);
        if (finalEquips.length === 0) {
            return equipments.slice(0, 1);
        }
        return finalEquips;
    };
    AppComponent.prototype.passesFilter = function (item, filter) {
        var passed = true;
        if (item[filter.statName] < filter.statMin) {
            passed = false;
        }
        //console.log("checked " + filter.statName, item[filter.statName], filter.statMin,passed);
        return passed;
    };
    AppComponent.prototype.filterBestSets = function (allcombos, filters) {
        var finalList = [];
        allcombos.forEach(function (item) {
            var passed = true;
            filters.forEach(function (filter) {
                if (item[filter.statName] < filter.statMin) {
                    passed = false;
                }
            });
            if (passed) {
                finalList.push(item);
            }
        }, this);
        return finalList;
    };
    AppComponent.prototype.findBest = function (arr, statName, topNums) {
        var _this = this;
        //console.log("checking stat [" + statName + "] ", arr);
        var sortedArr = arr.sort(function (a, b) { return (_this.getNumber(a.stats[statName]) < _this.getNumber(b.stats[statName]) ? 1 : -1); });
        //console.log("sorted",sortedArr);
        var topX = sortedArr.slice(0, topNums);
        var setName = '';
        this.sets.forEach(function (set) {
            //console.log("set",set.bonusStat,statName);
            if (set.bonusStat === statName) {
                setName = set.name;
            }
        });
        //console.log("setName",setName);
        for (var i = topNums; i < sortedArr.length; i++) {
            if (sortedArr[i].set === setName) {
                topX.push(sortedArr[i]);
            }
        }
        //console.log("best find",topX);
        return topX;
    };
    AppComponent.prototype.getBestX = function (arr, statName, topNums) {
        var sortedArr = arr.sort(function (a, b) { return (a.stats[statName] < b.stats[statName] ? 1 : -1); });
        return sortedArr.slice(0, topNums);
    };
    AppComponent.prototype.addSet = function () {
        var newSet = [];
        newSet.push(this.weapons[this.selectWeaponIdx]);
        newSet.push(this.helmets[this.selectHelmetIdx]);
        newSet.push(this.armors[this.selectArmorIdx]);
        newSet.push(this.necklaces[this.selectNecklaceIdx]);
        newSet.push(this.rings[this.selectRingIdx]);
        newSet.push(this.boots[this.selectBootIdx]);
        var us = new _userSet__WEBPACK_IMPORTED_MODULE_9__["UserSet"]();
        us.equipment = newSet;
        if (this.setName) {
            us.name = this.setName;
        }
        if (!this.equipmentSets) {
            this.equipmentSets = [];
        }
        this.equipmentSets.push(us);
        //console.log("added set", us);
        this.setName = '';
    };
    AppComponent.prototype.addEquipment = function () {
        //console.log("Adding", this.addEquip);
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
        //console.log("weapons", this.weapons);
        //console.log("armors", this.armors);
        this.addEquip = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.addEquipmentInit = function () {
        this.addEquip = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
    };
    AppComponent.prototype.showSet = function (i) {
        var userSet = this.equipmentSets[i];
        var equipStats = this.addAllStats(userSet.equipment);
        var finalStats = this.calculateFinalStats(equipStats);
        this.equipmentSetStats.push({ name: userSet.name, stats: equipStats });
        this.equipmentSetFinal.push({ name: userSet.name, stats: finalStats });
    };
    AppComponent.prototype.removeSet = function (i) {
        this.remove(this.equipmentSetStats, i);
        this.remove(this.equipmentSetFinal, i);
    };
    AppComponent.prototype.remove = function (arr, i) {
        //console.log("remove", arr,i);
        arr.splice(i, 1);
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.edit = function (arr, i) {
        //console.log("edit",arr,i);
        this.addEquip = arr[i];
        this.addEquipType = this.equipTypes.filter(function (item) {
            return item.name === arr[i].type;
        })[0];
        $('#exampleModal').modal('show');
    };
    AppComponent.prototype.save = function () {
        this.addEquip = new _equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]();
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectWeapon = function (w) {
        this.selectWeaponIdx = w;
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectArmor = function (w) {
        this.selectArmorIdx = w;
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectNecklace = function (w) {
        this.selectNecklaceIdx = w;
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectRing = function (w) {
        this.selectRingIdx = w;
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectHelmet = function (w) {
        this.selectHelmetIdx = w;
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectBoot = function (w) {
        this.selectBootIdx = w;
        this.CalculateCurrentStats();
    };
    AppComponent.prototype.selectHero = function () {
        this.selectedStar = this.selectedHero.statsbyStar[0];
        this.selectAwakening(this.selectedAwakening);
        this.CalculateCurrentStats();
        this.updateSetStats();
    };
    AppComponent.prototype.updateSetStats = function () {
        for (var i = 0; i < this.equipmentSetFinal.length; i++) {
            this.equipmentSetFinal[i].stats = this.calculateFinalStats(this.equipmentSetStats[i].stats);
        }
    };
    AppComponent.prototype.selectStar = function (e) {
        if (!e) {
            return;
        }
        this.selectedStar = e;
        this.CalculateCurrentStats();
        this.updateSetStats();
    };
    AppComponent.prototype.selectAwakening = function (n) {
        var _this = this;
        //console.log("selected " + n);
        this.selectedAwakening = n;
        this.awakenStat = new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        var jobZodiacBonus = this.jobZodiacBonusList.filter(function (item) {
            return item.job === _this.selectedHero.job;
        })[0].bonusStats;
        var bonusStatsList = jobZodiacBonus.filter(function (item) {
            return item.sign === _this.selectedHero.zodiacSign;
        })[0].bonusStats;
        for (var i = 0; i < n; i++) {
            this.addStats(this.awakenStat, bonusStatsList[i]);
        }
        this.CalculateCurrentStats();
        this.updateSetStats();
        //console.log("awaken stats", this.awakenStat);
    };
    AppComponent.prototype.addStats = function (dest, src) {
        //console.log("addstats", dest, src);
        for (var property in src) {
            if (src.hasOwnProperty) {
                dest[property] = dest[property] + this.getNumber(src[property]);
            }
        }
    };
    AppComponent.prototype.CalculateCurrentStats = function () {
        var equips = [];
        equips.push(this.weapons[this.selectWeaponIdx]);
        equips.push(this.helmets[this.selectHelmetIdx]);
        equips.push(this.armors[this.selectArmorIdx]);
        equips.push(this.necklaces[this.selectNecklaceIdx]);
        equips.push(this.rings[this.selectRingIdx]);
        equips.push(this.boots[this.selectBootIdx]);
        this.equipStats = this.addAllStats(equips);
        this.finalStats = this.calculateFinalStats(this.equipStats);
    };
    AppComponent.prototype.addAllStats = function (equips) {
        if (!equips[0]) {
            return new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        }
        this.statBonuses = [];
        var finalStats = new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        equips.forEach(function (equip) {
            if (equip) {
                this.addStats(finalStats, equip.stats);
            }
        }, this);
        // calculate bonus
        this.sets.forEach(function (currentSet) {
            var setCnt = this.getSetCnt(equips, currentSet.name);
            var completeSetCnt = setCnt / currentSet.requiredItems >> 0;
            //console.log("complete set " + currentSet.name + " " + completeSetCnt);
            for (var i = 0; i < completeSetCnt; i++) {
                this.statBonuses.push(currentSet);
            }
        }, this);
        for (var i = 0; i < this.statBonuses.length; i++) {
            finalStats[this.statBonuses[i].bonusStat] = finalStats[this.statBonuses[i].bonusStat] + this.statBonuses[i].bonusStatValue;
        }
        //console.log('final', finalStats);
        return finalStats;
    };
    AppComponent.prototype.calculateFinalStats = function (stats) {
        var finalStats = new _stats__WEBPACK_IMPORTED_MODULE_11__["Stats"]();
        var baseHealth = Math.floor(this.selectedStar.stats.health * (1 + this.awakenStat.healthPct / 100) + this.awakenStat.health); // round down
        finalStats.health = (baseHealth * (1 + stats.healthPct / 100)) + // equipment health pct
            stats.health + // equipment health
            this.getNumber(this.artifact.health); // artifact health
        var baseAttack = Math.floor(this.selectedStar.stats.attack * (1 + this.awakenStat.attackPct / 100) + this.awakenStat.attack); // round down
        finalStats.attack = (baseAttack * (1 + stats.attackPct / 100)) + // equipment attack pct
            stats.attack + // equipment attack
            this.getNumber(this.artifact.attack); // artifact attack
        var baseDef = Math.floor(this.selectedStar.stats.defense * (1 + this.awakenStat.defensePct / 100) + this.awakenStat.defense); // round down
        finalStats.defense = Math.floor(baseDef * (1 + stats.defensePct / 100)) + // equipment defense pct. roll down
            stats.defense; // equipment defense
        finalStats.speed = this.selectedStar.stats.speed + this.awakenStat.speed + (this.selectedStar.stats.speed * stats.speedPct) / 100 + stats.speed;
        finalStats.critRatePct = this.selectedStar.stats.critRatePct + stats.critRatePct + this.awakenStat.critRatePct;
        finalStats.critDamagePct = this.selectedStar.stats.critDamagePct + stats.critDamagePct + this.awakenStat.critDamagePct;
        finalStats.dualPct = this.selectedStar.stats.dualPct + stats.dualPct;
        finalStats.effectivenessPct = this.selectedStar.stats.effectivenessPct + stats.effectivenessPct + this.awakenStat.effectivenessPct;
        finalStats.resistancePct = this.selectedStar.stats.resistancePct + stats.resistancePct + this.awakenStat.resistancePct;
        return finalStats;
    };
    AppComponent.prototype.getSetCnt = function (equips, setName) {
        var selectedSets = [];
        equips.forEach(function (equip) {
            selectedSets.push(equip.set);
        });
        return selectedSets.filter(function (item) {
            return item === setName;
        }).length;
    };
    AppComponent.prototype.getNumber = function (n) {
        if (!n)
            return 0;
        if (n == NaN)
            return Number(n);
        return Number(n);
    };
    AppComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
    };
    AppComponent.prototype.fakeEquips = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ weapons: this.weapons, armors: this.armors, helmets: this.helmets, necklaces: this.necklaces, rings: this.rings, boots: this.boots, equipmentSets: this.equipmentSets });
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
                _this.equipmentSets = equipsIn.equipmentSets;
                _this.CalculateCurrentStats();
                console.log("loaded Data", equipsIn);
            }
        };
        fileReader.readAsText(this.file);
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
/* harmony import */ var _equipment_list_equipment_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipment-list/equipment-list.component */ "./src/app/equipment-list/equipment-list.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _equipment_list_equipment_list_component__WEBPACK_IMPORTED_MODULE_6__["EquipmentListComponent"]
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

/***/ "./src/app/equipment-list/equipment-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/equipment-list/equipment-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudC1saXN0L2VxdWlwbWVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/equipment-list/equipment-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/equipment-list/equipment-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\">\r\n\t<table border=\"1\">\r\n\t\t<tr>\r\n\t\t\t<td></td>\r\n\t\t\t<td>Set</td>\r\n\t\t\t<td>lvl<i class=\"fas fa-sort-numeric-up finger\" (click)=\"sortLvl()\"></i></td>\r\n\t\t\t<td><img src=\"../assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t<td class=\"text-center\">%</td>\r\n\t\t\t<td><img src=\"../assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t<td class=\"text-center\">%</td>\r\n\t\t\t<td><img src=\"../assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t<td class=\"text-center\">%</td>\r\n\t\t\t<td><img src=\"../assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t<td><img src=\"../assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t<td><img src=\"../assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t<td><img src=\"../assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t<td><img src=\"../assets/resistance.gif\" alt=\"Resistance\"></td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t\t<tr *ngFor=\"let w of list;let i =index\" (click)=\"select(i)\">\r\n\t\t\t<td><div class=\"{{w.type}}Icon\"></div></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\"><div class=\"{{w.set}}Icon\"></div></td>\r\n\t\t\t<td class=\"{{w.rarity}}\"><span>{{w.level}}/{{w.enhancementLvl}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\"><span class=\"health\">{{w.stats.health}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"health\"><span>{{w.stats.healthPct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"defense\"><span>{{w.stats.defense}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"defense\"><span>{{w.stats.defensePct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"attack\"><span>{{w.stats.attack}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"attack\"><span>{{w.stats.attackPct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"speed\"><span>{{w.stats.speed}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"crit\"><span>{{w.stats.critRatePct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"crit\"><span>{{w.stats.critDamagePct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"eff\"><span>{{w.stats.effectivenessPct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"eff\"><span>{{w.stats.resistancePct}}</span></td>\r\n\t\t\t<td [class.bg-danger]=\"w.lock\">\r\n\t\t\t\t<span class=\"fas fa-trash finger\" aria-hidden=\"true\" (click)=\"remove(i)\"></span>&nbsp;\r\n\t\t\t\t<span class=\"far fa-edit finger\" aria-hidden=\"true\" (click)=\"edit(i)\"></span>\r\n\t\t\t\t<span class=\"fas fa-lock-open\" aria-hidden=\"true\" [hidden]=\"w.lock\" (click)=\"w.lock=true\"></span>\r\n\t\t\t\t<span class=\"fas fa-lock\" aria-hidden=\"true\" [hidden]=\"!w.lock\" (click)=\"w.lock=false\"></span>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/equipment-list/equipment-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/equipment-list/equipment-list.component.ts ***!
  \************************************************************/
/*! exports provided: EquipmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentListComponent", function() { return EquipmentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equipment */ "./src/app/equipment.ts");



var EquipmentListComponent = /** @class */ (function () {
    function EquipmentListComponent() {
        this.selectEquipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeEquip = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEquip = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EquipmentListComponent.prototype.ngOnInit = function () {
    };
    EquipmentListComponent.prototype.select = function (i) {
        this.selectEquipChange.emit(i);
    };
    EquipmentListComponent.prototype.remove = function (i) {
        this.removeEquip.emit(i);
    };
    EquipmentListComponent.prototype.edit = function (i) {
        this.editEquip.emit(i);
    };
    EquipmentListComponent.prototype.sortLvl = function () {
        var _this = this;
        this.list.sort(function (a, b) { return _this.getNumber(a.level, a.enhancementLvl) < _this.getNumber(b.level, b.enhancementLvl) ? 1 : -1; });
    };
    EquipmentListComponent.prototype.getNumber = function (i, j) {
        if (Number(j) < 10) {
            return Number(i + "0" + j);
        }
        return Number(i + j);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EquipmentListComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _equipment__WEBPACK_IMPORTED_MODULE_2__["Equipment"])
    ], EquipmentListComponent.prototype, "selectedEquip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EquipmentListComponent.prototype, "selectEquipChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EquipmentListComponent.prototype, "removeEquip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EquipmentListComponent.prototype, "editEquip", void 0);
    EquipmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipment-list',
            template: __webpack_require__(/*! ./equipment-list.component.html */ "./src/app/equipment-list/equipment-list.component.html"),
            styles: [__webpack_require__(/*! ./equipment-list.component.css */ "./src/app/equipment-list/equipment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EquipmentListComponent);
    return EquipmentListComponent;
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
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats */ "./src/app/stats.ts");

var Equipment = /** @class */ (function () {
    function Equipment() {
        this.stats = new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]();
        this.level = 0;
        this.enhancementLvl = 0;
    }
    ;
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
var SET_LIST = [{ name: "Speed", bonusStat: "speedPct", bonusStatValue: 25, requiredItems: 4 },
    { name: "Critical", bonusStat: "critRatePct", bonusStatValue: 12, requiredItems: 2 },
    { name: "Hit", bonusStat: "effectivenessPct", bonusStatValue: 20, requiredItems: 2 },
    { name: "Defense", bonusStat: "defensePct", bonusStatValue: 15, requiredItems: 2 },
    { name: "Health", bonusStat: "healthPct", bonusStatValue: 15, requiredItems: 2 },
    { name: "Attack", bonusStat: "attackPct", bonusStatValue: 35, requiredItems: 4 },
    { name: "Resist", bonusStat: "resistancePct", bonusStatValue: 20, requiredItems: 2 },
    { name: "Destruction", bonusStat: "critDamagePct", bonusStatValue: 40, requiredItems: 4 },
    { name: "Lifesteal", bonusStat: "Lifesteal", bonusStatValue: 20, requiredItems: 4 },
    { name: "Counter", bonusStat: "Counter", bonusStatValue: 20, requiredItems: 4 },
    { name: "Immunity", bonusStat: "Immunity", bonusStatValue: 1, requiredItems: 2 },
    { name: "Rage", bonusStat: "Rage", bonusStatValue: 30, requiredItems: 2 },
    { name: "Unity", bonusStat: "dualPct", bonusStatValue: 4, requiredItems: 2 }
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
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats */ "./src/app/stats.ts");

var HERO_LIST = [{ name: "achates", job: "Soul Weaver", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2524, 0, 416, 0, 281, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 534, 0, 364, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 662, 0, 453, 0, 95, 0, 0, 0, 15, 150, 5) }] },
    { name: "adlay", job: "Mage", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1535, 0, 283, 0, 372, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2131, 0, 381, 0, 507, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2788, 0, 489, 0, 655, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3505, 0, 606, 0, 816, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "aither", job: "Soul Weaver", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1677, 0, 296, 0, 215, 0, 92, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2328, 0, 399, 0, 293, 0, 92, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3045, 0, 511, 0, 378, 0, 92, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3828, 0, 634, 0, 471, 0, 92, 0, 0, 0, 15, 150, 5) }] },
    { name: "alexa", job: "Thief", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1819, 0, 231, 0, 360, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2524, 0, 310, 0, 490, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 398, 0, 633, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 494, 0, 789, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "angelica", job: "Soul Weaver", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 441, 0, 264, 0, 88, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 565, 0, 342, 0, 88, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 701, 0, 426, 0, 88, 0, 0, 0, 15, 150, 5) }] },
    { name: "aramintha", job: "Mage", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 551, 0, 771, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 683, 0, 961, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "arbiter-vildred", job: "Thief", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3752, 0, 421, 0, 771, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4718, 0, 522, 0, 961, 0, 116, 0, 0, 0, 15, 150, 5) }] },
    { name: "armin", job: "Knight", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3508, 0, 429, 0, 355, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4588, 0, 551, 0, 458, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5769, 0, 683, 0, 571, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](6189, 0, 785, 0, 721, 0, 91, 0, 0, 0, 15, 150, 5) }] },
    { name: "arowell", job: "Knight", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2173, 0, 288, 0, 277, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3016, 0, 388, 0, 377, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3945, 0, 497, 0, 487, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4960, 0, 617, 0, 608, 0, 95, 0, 0, 0, 15, 150, 5) }] },
    { name: "assassin-cartuja", job: "Warrior", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3164, 0, 352, 0, 552, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4138, 0, 452, 0, 713, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5203, 0, 561, 0, 889, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "assassin-cidd", job: "Thief", zodiacSign: "Aquarius", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2647, 0, 313, 0, 484, 0, 122, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3463, 0, 401, 0, 626, 0, 122, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4354, 0, 497, 0, 780, 0, 122, 0, 0, 0, 15, 150, 5) }] },
    { name: "assassin-coli", job: "Thief", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2967, 0, 295, 0, 462, 0, 122, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 378, 0, 596, 0, 122, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 469, 0, 744, 0, 122, 0, 0, 0, 15, 150, 5) }] },
    { name: "auxiliary-lots", job: "Mage", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2696, 0, 383, 0, 540, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3527, 0, 491, 0, 698, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4435, 0, 610, 0, 871, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "azalea", job: "Warrior", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2137, 0, 252, 0, 364, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2967, 0, 339, 0, 495, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 435, 0, 640, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 539, 0, 798, 0, 98, 0, 0, 0, 15, 150, 5) }] },
    { name: "baal-and-sezan", job: "Mage", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 551, 0, 771, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 683, 0, 961, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "baiken", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 381, 0, 793, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 473, 0, 989, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "basar", job: "Mage", zodiacSign: "Aquarius", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3270, 0, 576, 0, 859, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4111, 0, 715, 0, 1070, 0, 103, 0, 0, 0, 15, 150, 5) }] },
    { name: "bask", job: "Knight", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2244, 0, 288, 0, 298, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3114, 0, 388, 0, 405, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4074, 0, 497, 0, 524, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5122, 0, 617, 0, 653, 0, 90, 0, 0, 0, 15, 150, 5) }] },
    { name: "bellona", job: "Ranger", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4202, 0, 472, 0, 684, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5284, 0, 585, 0, 853, 0, 109, 0, 0, 0, 15, 150, 5) }] },
    { name: "blaze-dingo", job: "Soul Weaver", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2279, 0, 394, 0, 383, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2981, 0, 506, 0, 495, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3747, 0, 627, 0, 617, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "blood-blade-karin", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3041, 0, 291, 0, 563, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3977, 0, 373, 0, 728, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5001, 0, 462, 0, 907, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "butcher-corps-inquisitor", job: "Knight", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2067, 0, 283, 0, 314, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2869, 0, 381, 0, 428, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3752, 0, 489, 0, 553, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4718, 0, 606, 0, 689, 0, 95, 0, 0, 0, 15, 150, 5) }] },
    { name: "carmainerose", job: "Mage", zodiacSign: "Aquarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1429, 0, 311, 0, 426, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1984, 0, 418, 0, 580, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2595, 0, 537, 0, 749, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3262, 0, 666, 0, 934, 0, 96, 0, 0, 0, 15, 150, 5) }] },
    { name: "carrot", job: "Mage", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1535, 0, 283, 0, 372, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2131, 0, 381, 0, 507, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2788, 0, 489, 0, 655, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3505, 0, 606, 0, 816, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "cartuja", job: "Warrior", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3286, 0, 363, 0, 467, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4299, 0, 466, 0, 604, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5405, 0, 578, 0, 753, 0, 103, 0, 0, 0, 15, 150, 5) }] },
    { name: "cecilia", job: "Knight", zodiacSign: "Aries", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4620, 0, 523, 0, 538, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5809, 0, 648, 0, 671, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "celeste", job: "Ranger", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1889, 0, 231, 0, 335, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2623, 0, 310, 0, 456, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3431, 0, 398, 0, 589, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4313, 0, 494, 0, 735, 0, 116, 0, 0, 0, 15, 150, 5) }] },
    { name: "celestial-mercedes", job: "Mage", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2475, 0, 394, 0, 591, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3238, 0, 506, 0, 764, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4071, 0, 627, 0, 952, 0, 96, 0, 0, 0, 15, 150, 5) }] },
    { name: "challenger-dominiel", job: "Mage", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2475, 0, 394, 0, 591, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3238, 0, 506, 0, 764, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4071, 0, 627, 0, 952, 0, 96, 0, 0, 0, 15, 150, 5) }] },
    { name: "chaos-sect-axe", job: "Warrior", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1960, 0, 254, 0, 385, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 341, 0, 524, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 438, 0, 677, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 543, 0, 843, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "charlotte", job: "Knight", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4299, 0, 534, 0, 669, 0, 99, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5405, 0, 662, 0, 834, 0, 99, 0, 0, 0, 15, 150, 5) }] },
    { name: "chloe", job: "Warrior", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4074, 0, 446, 0, 757, 0, 115, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5122, 0, 553, 0, 943, 0, 115, 0, 0, 0, 15, 150, 5) }] },
    { name: "church-of-ilryos-axe", job: "Warrior", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1960, 0, 254, 0, 385, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 341, 0, 524, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 438, 0, 677, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 543, 0, 843, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "cidd", job: "Thief", zodiacSign: "Aries", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 297, 0, 501, 0, 120, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 381, 0, 647, 0, 120, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 473, 0, 807, 0, 120, 0, 0, 0, 15, 150, 5) }] },
    { name: "clarissa", job: "Warrior", zodiacSign: "Leo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2918, 0, 355, 0, 580, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3817, 0, 455, 0, 749, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4799, 0, 564, 0, 934, 0, 103, 0, 0, 0, 15, 150, 5) }] },
    { name: "coli", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3041, 0, 291, 0, 563, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3977, 0, 373, 0, 728, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5001, 0, 462, 0, 907, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "commander-lorina", job: "Warrior", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1960, 0, 254, 0, 385, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 341, 0, 524, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 438, 0, 677, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 543, 0, 843, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "corvus", job: "Warrior", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3286, 0, 363, 0, 467, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4299, 0, 466, 0, 604, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5405, 0, 578, 0, 753, 0, 103, 0, 0, 0, 15, 150, 5) }] },
    { name: "crescent-moon-rin", job: "Thief", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2967, 0, 295, 0, 462, 0, 122, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 378, 0, 596, 0, 122, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 469, 0, 744, 0, 122, 0, 0, 0, 15, 150, 5) }] },
    { name: "crimson-armin", job: "Knight", zodiacSign: "Libra", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3262, 0, 405, 0, 416, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 520, 0, 538, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 645, 0, 671, 0, 97, 0, 0, 0, 15, 150, 5) }] },
    { name: "crozet", job: "Knight", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3409, 0, 423, 0, 366, 0, 93, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4460, 0, 542, 0, 473, 0, 93, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5607, 0, 673, 0, 589, 0, 93, 0, 0, 0, 15, 150, 5) }] },
    { name: "dark-corvus", job: "Warrior", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4653, 0, 500, 0, 655, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5850, 0, 620, 0, 816, 0, 102, 0, 0, 0, 15, 150, 5) }] },
    { name: "destina", job: "Soul Weaver", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3784, 0, 590, 0, 378, 0, 89, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4758, 0, 732, 0, 471, 0, 89, 0, 0, 0, 15, 150, 5) }] },
    { name: "diene", job: "Soul Weaver", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3527, 0, 559, 0, 400, 0, 99, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4435, 0, 694, 0, 499, 0, 99, 0, 0, 0, 15, 150, 5) }] },
    { name: "dingo", job: "Warrior", zodiacSign: "Virgo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2819, 0, 372, 0, 501, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3688, 0, 477, 0, 647, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4637, 0, 592, 0, 807, 0, 108, 0, 0, 0, 15, 150, 5) }] },
    { name: "dizzy", job: "Mage", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 542, 0, 713, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 673, 0, 889, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "dominiel", job: "Mage", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2795, 0, 405, 0, 501, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3656, 0, 520, 0, 647, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4596, 0, 645, 0, 807, 0, 108, 0, 0, 0, 15, 150, 5) }] },
    { name: "doris", job: "Soul Weaver", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1819, 0, 311, 0, 178, 0, 86, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2524, 0, 418, 0, 242, 0, 86, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 537, 0, 313, 0, 86, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 666, 0, 390, 0, 86, 0, 0, 0, 15, 150, 5) }] },
    { name: "elson", job: "Soul Weaver", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1801, 0, 296, 0, 178, 0, 94, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2500, 0, 399, 0, 242, 0, 94, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3270, 0, 511, 0, 313, 0, 94, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4111, 0, 634, 0, 390, 0, 94, 0, 0, 0, 15, 150, 5) }] },
    { name: "enott", job: "Warrior", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2137, 0, 252, 0, 364, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2967, 0, 339, 0, 495, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 435, 0, 640, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 539, 0, 798, 0, 98, 0, 0, 0, 15, 150, 5) }] },
    { name: "falconer-kluri", job: "Knight", zodiacSign: "Aries", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2208, 0, 278, 0, 252, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3065, 0, 374, 0, 343, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4009, 0, 480, 0, 444, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5041, 0, 596, 0, 553, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "fighter-maya", job: "Knight", zodiacSign: "Libra", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3262, 0, 405, 0, 416, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 520, 0, 538, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 645, 0, 671, 0, 97, 0, 0, 0, 15, 150, 5) }] },
    { name: "general-purrgis", job: "Warrior", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3286, 0, 363, 0, 467, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4299, 0, 466, 0, 604, 0, 103, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5405, 0, 578, 0, 753, 0, 103, 0, 0, 0, 15, 150, 5) }] },
    { name: "gloomyrain", job: "Mage", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1783, 0, 286, 0, 405, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2475, 0, 385, 0, 552, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3238, 0, 494, 0, 713, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4071, 0, 613, 0, 889, 0, 102, 0, 0, 0, 15, 150, 5) }] },
    { name: "guider-aither", job: "Mage", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2549, 0, 394, 0, 580, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3334, 0, 506, 0, 749, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4192, 0, 627, 0, 934, 0, 102, 0, 0, 0, 15, 150, 5) }] },
    { name: "gunther", job: "Warrior", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2049, 0, 257, 0, 502, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 346, 0, 684, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 443, 0, 883, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 550, 0, 1102, 0, 104, 0, 0, 0, 15, 150, 5) }] },
    { name: "haste", job: "Thief", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3945, 0, 412, 0, 691, 0, 120, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4960, 0, 511, 0, 862, 0, 120, 0, 0, 0, 15, 150, 5) }] },
    { name: "hazel", job: "Soul Weaver", zodiacSign: "Aquarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1606, 0, 291, 0, 256, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2229, 0, 392, 0, 349, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2916, 0, 503, 0, 451, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3667, 0, 624, 0, 562, 0, 91, 0, 0, 0, 15, 150, 5) }] },
    { name: "helga", job: "Warrior", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1960, 0, 242, 0, 356, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 326, 0, 484, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 418, 0, 626, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 518, 0, 780, 0, 110, 0, 0, 0, 15, 150, 5) }] },
    { name: "hurado", job: "Mage", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1819, 0, 273, 0, 356, 0, 105, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2524, 0, 368, 0, 484, 0, 105, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 472, 0, 626, 0, 105, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 585, 0, 780, 0, 105, 0, 0, 0, 15, 150, 5) }] },
    { name: "iseria", job: "Ranger", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4074, 0, 446, 0, 742, 0, 112, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5122, 0, 553, 0, 925, 0, 112, 0, 0, 0, 15, 150, 5) }] },
    { name: "jecht", job: "Soul Weaver", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1535, 0, 280, 0, 256, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2131, 0, 377, 0, 349, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2788, 0, 483, 0, 451, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3505, 0, 599, 0, 562, 0, 98, 0, 0, 0, 15, 150, 5) }] },
    { name: "jena", job: "Mage", zodiacSign: "Aries", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1783, 0, 280, 0, 393, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2475, 0, 377, 0, 535, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3238, 0, 483, 0, 691, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4071, 0, 599, 0, 862, 0, 97, 0, 0, 0, 15, 150, 5) }] },
    { name: "judge-kise", job: "Warrior", zodiacSign: "Virgo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3913, 0, 497, 0, 713, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4920, 0, 617, 0, 889, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "judith", job: "Thief", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1695, 0, 231, 0, 318, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2352, 0, 310, 0, 433, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3077, 0, 398, 0, 560, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3869, 0, 494, 0, 698, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "karin", job: "Thief", zodiacSign: "Leo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2696, 0, 319, 0, 546, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3527, 0, 409, 0, 706, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4435, 0, 508, 0, 880, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "kayron", job: "Thief", zodiacSign: "Aries", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3913, 0, 390, 0, 713, 0, 123, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4920, 0, 483, 0, 889, 0, 123, 0, 0, 0, 15, 150, 5) }] },
    { name: "ken", job: "Warrior", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4653, 0, 500, 0, 655, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5850, 0, 620, 0, 816, 0, 102, 0, 0, 0, 15, 150, 5) }] },
    { name: "kikirat-v2", job: "Knight", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2314, 0, 304, 0, 235, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3213, 0, 410, 0, 321, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4202, 0, 525, 0, 414, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5284, 0, 652, 0, 517, 0, 90, 0, 0, 0, 15, 150, 5) }] },
    { name: "kiris", job: "Ranger", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2031, 0, 254, 0, 322, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2819, 0, 341, 0, 439, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3688, 0, 438, 0, 567, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4637, 0, 543, 0, 707, 0, 104, 0, 0, 0, 15, 150, 5) }] },
    { name: "kise", job: "Thief", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3752, 0, 421, 0, 771, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4718, 0, 522, 0, 961, 0, 116, 0, 0, 0, 15, 150, 5) }] },
    { name: "kitty-clarissa", job: "Warrior", zodiacSign: "Virgo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2819, 0, 372, 0, 501, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3688, 0, 477, 0, 647, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4637, 0, 592, 0, 807, 0, 108, 0, 0, 0, 15, 150, 5) }] },
    { name: "kluri", job: "Knight", zodiacSign: "Aries", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2208, 0, 278, 0, 252, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3065, 0, 101, 0, 343, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4009, 0, 480, 0, 444, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5041, 0, 596, 0, 553, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "krau", job: "Knight", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4492, 0, 557, 0, 553, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5647, 0, 690, 0, 689, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "leo", job: "Ranger", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3016, 0, 355, 0, 484, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3945, 0, 455, 0, 626, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4960, 0, 564, 0, 780, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "lorina", job: "Warrior", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1960, 0, 254, 0, 385, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 341, 0, 524, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 438, 0, 677, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 543, 0, 843, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "lots", job: "Soul Weaver", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2524, 0, 416, 0, 281, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 534, 0, 364, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 662, 0, 453, 0, 97, 0, 0, 0, 15, 150, 5) }] },
    { name: "ludwig", job: "Mage", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3045, 0, 520, 0, 880, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3828, 0, 645, 0, 1098, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "luna", job: "Warrior", zodiacSign: "Libra", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 477, 0, 713, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 592, 0, 889, 0, 109, 0, 0, 0, 15, 150, 5) }] },
    { name: "maid-chloe", job: "Soul Weaver", zodiacSign: "Virgo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 548, 0, 393, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 680, 0, 490, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "martial-artist-ken", job: "Warrior", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4074, 0, 472, 0, 822, 0, 105, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5122, 0, 585, 0, 1025, 0, 105, 0, 0, 0, 15, 150, 5) }] },
    { name: "maya", job: "Knight", zodiacSign: "Aries", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3557, 0, 407, 0, 416, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4653, 0, 523, 0, 538, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5850, 0, 648, 0, 671, 0, 108, 0, 0, 0, 15, 150, 5) }] },
    { name: "mercedes", job: "Mage", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2475, 0, 394, 0, 591, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3238, 0, 506, 0, 764, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4071, 0, 627, 0, 952, 0, 96, 0, 0, 0, 15, 150, 5) }] },
    { name: "mirsa", job: "Thief", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1748, 0, 234, 0, 335, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2426, 0, 315, 0, 456, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3173, 0, 404, 0, 589, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3990, 0, 501, 0, 735, 0, 116, 0, 0, 0, 15, 150, 5) }] },
    { name: "mistychain", job: "Mage", zodiacSign: "Leo", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1535, 0, 283, 0, 434, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2131, 0, 381, 0, 591, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2788, 0, 489, 0, 764, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3505, 0, 606, 0, 952, 0, 98, 0, 0, 0, 15, 150, 5) }] },
    { name: "montmorancy", job: "Soul Weaver", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1801, 0, 296, 0, 178, 0, 94, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2500, 0, 399, 0, 242, 0, 94, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3270, 0, 511, 0, 313, 0, 94, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4111, 0, 634, 0, 390, 0, 94, 0, 0, 0, 15, 150, 5) }] },
    { name: "mucacha", job: "Warrior", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1960, 0, 242, 0, 356, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 326, 0, 484, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 418, 0, 626, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 518, 0, 780, 0, 110, 0, 0, 0, 15, 150, 5) }] },
    { name: "nemunas", job: "Ranger", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1943, 0, 245, 0, 322, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2696, 0, 330, 0, 439, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3527, 0, 424, 0, 567, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4435, 0, 525, 0, 707, 0, 110, 0, 0, 0, 15, 150, 5) }] },
    { name: "otillie", job: "Mage", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1872, 0, 288, 0, 335, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2598, 0, 388, 0, 456, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3399, 0, 497, 0, 589, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4273, 0, 617, 0, 735, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "pearlhorizon", job: "Mage", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1943, 0, 294, 0, 351, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2696, 0, 369, 0, 478, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3527, 0, 508, 0, 618, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4435, 0, 631, 0, 771, 0, 108, 0, 0, 0, 15, 150, 5) }] },
    { name: "purrgis", job: "Warrior", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3164, 0, 352, 0, 552, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4138, 0, 452, 0, 713, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5203, 0, 561, 0, 889, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "pyllis", job: "Knight", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2279, 0, 301, 0, 244, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3164, 0, 405, 0, 332, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4138, 0, 520, 0, 429, 0, 91, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5203, 0, 645, 0, 535, 0, 91, 0, 0, 0, 15, 150, 5) }] },
    { name: "ras", job: "Knight", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2173, 0, 288, 0, 277, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3016, 0, 388, 0, 377, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3945, 0, 497, 0, 487, 0, 95, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4960, 0, 617, 0, 608, 0, 95, 0, 0, 0, 15, 150, 5) }] },
    { name: "ravi", job: "Warrior", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4653, 0, 500, 0, 655, 0, 102, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5850, 0, 620, 0, 816, 0, 102, 0, 0, 0, 15, 150, 5) }] },
    { name: "requiemroar", job: "Soul Weaver", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1588, 0, 286, 0, 269, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2205, 0, 385, 0, 366, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2884, 0, 494, 0, 473, 0, 100, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3626, 0, 613, 0, 589, 0, 100, 0, 0, 0, 15, 150, 5) }] },
    { name: "righteous-thief-roozid", job: "Thief", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1730, 0, 216, 0, 277, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2401, 0, 291, 0, 377, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3141, 0, 373, 0, 487, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3950, 0, 462, 0, 608, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "rikoris", job: "Warrior", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2049, 0, 257, 0, 335, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 346, 0, 456, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 443, 0, 589, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 550, 0, 735, 0, 104, 0, 0, 0, 15, 150, 5) }] },
    { name: "rima", job: "Ranger", zodiacSign: "Aquarius", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1872, 0, 262, 0, 281, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2598, 0, 352, 0, 383, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3399, 0, 452, 0, 495, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4273, 0, 561, 0, 617, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "rin", job: "Soul Weaver", zodiacSign: "Virgo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2549, 0, 410, 0, 276, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3334, 0, 525, 0, 356, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4192, 0, 652, 0, 444, 0, 98, 0, 0, 0, 15, 150, 5) }] },
    { name: "romann", job: "Mage", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2377, 0, 412, 0, 546, 0, 105, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3109, 0, 528, 0, 706, 0, 105, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3909, 0, 655, 0, 880, 0, 105, 0, 0, 0, 15, 150, 5) }] },
    { name: "roozid", job: "Thief", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1730, 0, 216, 0, 277, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2401, 0, 291, 0, 377, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3141, 0, 373, 0, 487, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3950, 0, 462, 0, 608, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "rose", job: "Knight", zodiacSign: "Libra", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3262, 0, 405, 0, 416, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 520, 0, 538, 0, 97, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 645, 0, 671, 0, 97, 0, 0, 0, 15, 150, 5) }] },
    { name: "ruele-of-light", job: "Soul Weaver", zodiacSign: "Pisces", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3688, 0, 559, 0, 378, 0, 98, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4637, 0, 694, 0, 471, 0, 98, 0, 0, 0, 15, 150, 5) }] },
    { name: "sage-ball-and-sezan", job: "Mage", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 542, 0, 713, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 673, 0, 889, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "schuri", job: "Ranger", zodiacSign: "Leo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2918, 0, 110, 0, 524, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3817, 0, 432, 0, 677, 0, 110, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4799, 0, 536, 0, 843, 0, 110, 0, 0, 0, 15, 150, 5) }] },
    { name: "serila", job: "Mage", zodiacSign: "Aquarius", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2352, 0, 429, 0, 608, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3077, 0, 551, 0, 786, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3869, 0, 683, 0, 980, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "sez", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 381, 0, 793, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 473, 0, 989, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "shadow-rose", job: "Knight", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3262, 0, 383, 0, 433, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 491, 0, 560, 0, 101, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 610, 0, 698, 0, 101, 0, 0, 0, 15, 150, 5) }] },
    { name: "shooting-star-achates", job: "Soul Weaver", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 441, 0, 264, 0, 88, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 565, 0, 342, 0, 88, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 701, 0, 426, 0, 88, 0, 0, 0, 15, 150, 5) }] },
    { name: "sigret", job: "Warrior", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 446, 0, 793, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 553, 0, 989, 0, 109, 0, 0, 0, 15, 150, 5) }] },
    { name: "silk", job: "Ranger", zodiacSign: "Virgo", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2598, 0, 326, 0, 546, 0, 117, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3399, 0, 418, 0, 706, 0, 117, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4273, 0, 518, 0, 880, 0, 117, 0, 0, 0, 15, 150, 5) }] },
    { name: "silver-blade-arimintha", job: "Mage", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 551, 0, 771, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 683, 0, 961, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "sol", job: "Warrior", zodiacSign: "Sagittarius", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3913, 0, 446, 0, 757, 0, 115, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4920, 0, 553, 0, 943, 0, 115, 0, 0, 0, 15, 150, 5) }] },
    { name: "specimen-sez", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 381, 0, 793, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 473, 0, 989, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "specter-tenebria", job: "Mage", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3302, 0, 551, 0, 771, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4152, 0, 683, 0, 961, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "surin", job: "Thief", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 313, 0, 490, 0, 117, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 401, 0, 633, 0, 117, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 497, 0, 789, 0, 117, 0, 0, 0, 15, 150, 5) }] },
    { name: "sven", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2049, 0, 211, 0, 372, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 284, 0, 507, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 364, 0, 655, 0, 108, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 452, 0, 816, 0, 108, 0, 0, 0, 15, 150, 5) }] },
    { name: "taranor-guard", job: "Warrior", zodiacSign: "Libra", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2049, 0, 257, 0, 335, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 346, 0, 456, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 443, 0, 589, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 550, 0, 735, 0, 104, 0, 0, 0, 15, 150, 5) }] },
    { name: "taranor-royal-guard", job: "Knight", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2244, 0, 288, 0, 298, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3114, 0, 388, 0, 405, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4074, 0, 497, 0, 524, 0, 90, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5122, 0, 617, 0, 653, 0, 90, 0, 0, 0, 15, 150, 5) }] },
    { name: "tenebria", job: "Mage", zodiacSign: "Cancer", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 525, 0, 822, 0, 104, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 652, 0, 1025, 0, 104, 0, 0, 0, 15, 150, 5) }] },
    { name: "tieria", job: "Warrior", zodiacSign: "Aries", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2049, 0, 254, 0, 314, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 341, 0, 428, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 438, 0, 553, 0, 96, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 543, 0, 689, 0, 96, 0, 0, 0, 15, 150, 5) }] },
    { name: "tywin", job: "Knight", zodiacSign: "Aries", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4620, 0, 523, 0, 538, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5809, 0, 648, 0, 671, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "vildred", job: "Thief", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3752, 0, 421, 0, 771, 0, 116, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4718, 0, 522, 0, 961, 0, 116, 0, 0, 0, 15, 150, 5) }] },
    { name: "violet", job: "Thief", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 381, 0, 793, 0, 113, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 473, 0, 989, 0, 113, 0, 0, 0, 15, 150, 5) }] },
    { name: "wanda", job: "Ranger", zodiacSign: "Gemini", statsbyStar: [{ starLevel: 3, maxLevel: 30, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](1872, 0, 249, 0, 339, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2598, 0, 335, 0, 462, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3399, 0, 429, 0, 596, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4273, 0, 532, 0, 744, 0, 109, 0, 0, 0, 15, 150, 5) }] },
    { name: "wanderer-silk", job: "Ranger", zodiacSign: "Capricorn", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3016, 0, 355, 0, 484, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3945, 0, 455, 0, 626, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4960, 0, 564, 0, 780, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "watcher-schuri", job: "Ranger", zodiacSign: "Scorpio", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3164, 0, 350, 0, 467, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4138, 0, 449, 0, 604, 0, 106, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5203, 0, 557, 0, 753, 0, 106, 0, 0, 0, 15, 150, 5) }] },
    { name: "yufine", job: "Warrior", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4267, 0, 446, 0, 793, 0, 109, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5364, 0, 553, 0, 989, 0, 109, 0, 0, 0, 15, 150, 5) }] },
    { name: "yuna", job: "Ranger", zodiacSign: "Leo", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4074, 0, 446, 0, 742, 0, 112, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](5122, 0, 553, 0, 925, 0, 112, 0, 0, 0, 15, 150, 5) }] },
    { name: "zeno", job: "Mage", zodiacSign: "Taurus", statsbyStar: [{ starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3881, 0, 542, 0, 713, 0, 111, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4879, 0, 673, 0, 889, 0, 111, 0, 0, 0, 15, 150, 5) }] },
    { name: "zerato", job: "Mage", zodiacSign: "Aries", statsbyStar: [{ starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2623, 0, 394, 0, 591, 0, 99, 0, 0, 0, 15, 150, 5) }, { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3431, 0, 506, 0, 764, 0, 99, 0, 0, 0, 15, 150, 5) }, { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4313, 0, 627, 0, 952, 0, 99, 0, 0, 0, 15, 150, 5) }] }];


/***/ }),

/***/ "./src/app/jobSignBonusList.ts":
/*!*************************************!*\
  !*** ./src/app/jobSignBonusList.ts ***!
  \*************************************/
/*! exports provided: JOB_SIGN_BONUS_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOB_SIGN_BONUS_LIST", function() { return JOB_SIGN_BONUS_LIST; });
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats */ "./src/app/stats.ts");

var JOB_SIGN_BONUS_LIST = [
    { job: 'Thief',
        bonusStats: [{ sign: 'Leo', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aquarius', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Virgo', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Cancer', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Sagittarius', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Libra', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }] },
    { job: 'Soul Weaver',
        bonusStats: [{ sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 12, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aquarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Cancer', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0, defensePct: 6 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Virgo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Sagittarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Libra', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Taurus', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Leo', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Aries', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Scorpio', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }
        ] },
    { job: 'Knight',
        bonusStats: [{ sign: 'Leo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 12, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 12, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Cancer', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Libra', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 12, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Virgo', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Sagittarius', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Aquarius', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }
        ] },
    { job: 'Mage',
        bonusStats: [{ sign: 'Leo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 10, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aquarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 12, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 6 }
                ] },
            { sign: 'Cancer', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Sagittarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Libra', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Capricorn', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Virgo', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }
        ] },
    { job: 'Warrior',
        bonusStats: [{ sign: 'Leo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 5, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 10, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Virgo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Cancer', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Sagittarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Libra', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Gemini', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Aquarius', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }
        ] },
    { job: 'Ranger', bonusStats: [
            { sign: 'Leo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Libra', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 10, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Sagittarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 }
                ] },
            { sign: 'Pisces', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aquarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Cancer', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Virgo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 12, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 4, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 8, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }
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
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats */ "./src/app/stats.ts");

var StarStatLevel = /** @class */ (function () {
    function StarStatLevel() {
        this.starLevel = 0;
        this.maxLevel = 0;
        this.stats = new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]();
    }
    return StarStatLevel;
}());



/***/ }),

/***/ "./src/app/stats.ts":
/*!**************************!*\
  !*** ./src/app/stats.ts ***!
  \**************************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
var Stats = /** @class */ (function () {
    function Stats(h, hP, d, dP, a, aP, s, sP, e, r, cr, cd, du) {
        if (h === void 0) { h = 0; }
        if (hP === void 0) { hP = 0; }
        if (d === void 0) { d = 0; }
        if (dP === void 0) { dP = 0; }
        if (a === void 0) { a = 0; }
        if (aP === void 0) { aP = 0; }
        if (s === void 0) { s = 0; }
        if (sP === void 0) { sP = 0; }
        if (e === void 0) { e = 0; }
        if (r === void 0) { r = 0; }
        if (cr === void 0) { cr = 0; }
        if (cd === void 0) { cd = 0; }
        if (du === void 0) { du = 0; }
        this.health = 0;
        this.healthPct = 0;
        this.defense = 0;
        this.defensePct = 0;
        this.attack = 0;
        this.attackPct = 0;
        this.speed = 0;
        this.speedPct = 0;
        this.effectivenessPct = 0;
        this.resistancePct = 0;
        this.critRatePct = 0;
        this.critDamagePct = 0;
        this.dualPct = 0;
        this.health = h;
        this.healthPct = hP;
        this.defense = d;
        this.defensePct = dP;
        this.attack = a;
        this.attackPct = aP;
        this.speed = s;
        this.effectivenessPct = e;
        this.resistancePct = r;
        this.critRatePct = cr;
        this.critDamagePct = cd;
        this.dualPct = du;
        this.speedPct = sP;
    }
    return Stats;
}());



/***/ }),

/***/ "./src/app/userSet.ts":
/*!****************************!*\
  !*** ./src/app/userSet.ts ***!
  \****************************/
/*! exports provided: UserSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSet", function() { return UserSet; });
var UserSet = /** @class */ (function () {
    function UserSet() {
        this.name = '';
        this.equipment = [];
    }
    return UserSet;
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