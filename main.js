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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"custom-file\" style=\"width:320px;display:inline-block;margin-right:15px;\">\r\n\t\t<input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"fileChanged($event)\" >\r\n\t\t<label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\r\n\t</div>\r\n\r\n\t<button class=\"btn btn-outline-primary\" (click)=\"uploadDocument()\">import</button>\r\n\t<button class=\"btn btn-outline-primary\" (click)=\"downloadEquips()\">export</button>\r\n\t<hr>\r\n\r\n</div>\r\n<hr>\r\n<div>\r\n\t<div>\r\n\t\t<div style=\"display:inline-block;\">\r\n\t\t\tHero<br>\r\n\t\t\t<select name=\"equipType\" style=\"width:95px;\" [(ngModel)]=\"selectedHero\" (change)=\"selectHero()\">\r\n\t\t\t\t<option *ngFor=\"let e of heroes\" [ngValue]=\"e\">{{e.name}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t\t<div style=\"display:inline-block;\">\r\n\t\t\t\t<br>\r\n\t\t\t\t<span [class.fas]=\"i<=selectedStar.starLevel\" [class.far]=\"i>selectedStar.starLevel\" class=\"fa-star\" *ngFor=\"let i of [1,2,3,4,5,6]\" (click)=\"selectedHero.statsbyStar[0].starLevel <= i && selectStar(selectedHero.statsbyStar[i - selectedHero.statsbyStar[0].starLevel])\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\t\t\tAwakening <br>\r\n\t\t\t\t<span [class.fas]=\"i<=selectedAwakening\" [class.far]=\"i>selectedAwakening\" class=\"fa-star\" *ngFor=\"let i of [1,2,3,4,5,6]\" (click)=\"selectAwakening(i)\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n\t\t<div class=\"modal-content modal-lg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Add equipment</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\tSlot\r\n\t\t\t\t\t\t\t<select name=\"equipType\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.type\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let e of equipTypes\" [value]=\"e.name\">{{e.name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\tSet\r\n\t\t\t\t\t\t\t<select name=\"set\" style=\"width:95px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.set\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let e of sets\" [value]=\"e.name\">{{e.name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\trarity\r\n\t\t\t\t\t\t\t<select name=\"rarity\" style=\"width:90px;\" class=\"col-auto form-control form-control-sm\" [(ngModel)]=\"addEquip.rarity\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let r of rarities\" [value]=\"r\">{{r}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">Level<br><input name=\"level\" [(ngModel)]=\"addEquip.level\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-4\">Enhancement<input name=\"enhance\" [(ngModel)]=\"addEquip.enhancementLvl\" size=\"2\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/health.gif\" alt=\"Health\"><input name=\"health\" [(ngModel)]=\"addEquip.stats.health\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">%<input name=\"healthPct\" [(ngModel)]=\"addEquip.stats.healthPct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/defense.gif\" alt=\"Defense\"><input name=\"defense\" [(ngModel)]=\"addEquip.stats.defense\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">%<input name=\"defensePct\" [(ngModel)]=\"addEquip.stats.defensePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/attack.gif\" alt=\"Attack\"><input name=\"attack\" [(ngModel)]=\"addEquip.stats.attack\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\">%<input name=\"attackPct\" [(ngModel)]=\"addEquip.stats.attackPct\" size=\"2\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/speed.gif\" alt=\"Speed\"><input name=\"speed\" [(ngModel)]=\"addEquip.stats.speed\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\"><input name=\"critChance\" [(ngModel)]=\"addEquip.stats.critRatePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\"><input name=\"critDamage\" [(ngModel)]=\"addEquip.stats.critDamagePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\"><input name=\"eff\" [(ngModel)]=\"addEquip.stats.effectivenessPct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"><img src=\"assets/resistance.gif\" alt=\"Resistance\"><input name=\"resistance\" [(ngModel)]=\"addEquip.stats.resistancePct\" size=\"2\"></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"addEquipment()\">Add</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<hr>\r\n<div [hidden]=\"!selectedHero || !selectedStar\">\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td>Base Level {{selectedStar.maxLevel}}</td>\r\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{selectedStar.stats.attack}}</td>\r\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{selectedStar.stats.health}}</td>\r\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{selectedStar.stats.defense}}</td>\r\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{selectedStar.stats.speed}}</td>\r\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{selectedStar.stats.critRatePct}}</td>\r\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{selectedStar.stats.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{selectedStar.stats.dualPct}}</td>\r\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{selectedStar.stats.effectivenessPct}}</td>\r\n\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{selectedStar.stats.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Awakening</td>\r\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{awakenStat.attack}} {{awakenStat.attackPct}}%</td>\r\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{awakenStat.health}} {{awakenStat.healthPct}}%</td>\r\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{awakenStat.defensePct}}%</td>\r\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{awakenStat.speed}}</td>\r\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{awakenStat.critRatePct}}</td>\r\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{awakenStat.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{awakenStat.dualPct}}</td>\r\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{awakenStat.effectivenessPct}}</td>\r\n\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{awakenStat.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Equipment</td>\r\n\t\t\t<td><img src=\"assets/attack.gif\" alt=\"Attack\">{{finalStats.attack}} {{finalStats.attackPct}}%</td>\r\n\t\t\t<td><img src=\"assets/health.gif\" alt=\"Health\">{{finalStats.health}} {{finalStats.healthPct}}%</td>\r\n\t\t\t<td><img src=\"assets/defense.gif\" alt=\"Defense\">{{finalStats.defense}} {{finalStats.defensePct}}</td>\r\n\t\t\t<td><img src=\"assets/speed.gif\" alt=\"Speed\">{{finalStats.speed}}</td>\r\n\t\t\t<td><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{finalStats.critRatePct}}</td>\r\n\t\t\t<td><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{finalStats.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{finalStats.dualPct}}</td>\r\n\t\t\t<td><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{finalStats.effectivenessPct}}</td>\r\n\t\t\t<td><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{finalStats.resistancePct}}</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Artifact</td>\r\n\t\t\t<td><input [(ngModel)]=\"artifact.attack\" size=\"2\"></td>\r\n\t\t\t<td><input [(ngModel)]=\"artifact.health\" size=\"2\"></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Final</td>\r\n\t\t\t<td class=\"attack\"><img src=\"assets/attack.gif\" alt=\"Attack\">{{((selectedStar.stats.attack + awakenStat.attack + ( selectedStar.stats.attack * awakenStat.attackPct/100)) + ((selectedStar.stats.attack + awakenStat.attack + ( selectedStar.stats.attack * awakenStat.attackPct/100)) * (finalStats.attackPct/100)) + finalStats.attack + getNumber(artifact.attack)) | number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"health\"><img src=\"assets/health.gif\" alt=\"Health\">{{((selectedStar.stats.health + awakenStat.health + ( selectedStar.stats.health * awakenStat.healthPct/100)) + ((selectedStar.stats.health + awakenStat.health + ( selectedStar.stats.health * awakenStat.healthPct/100)) * (finalStats.healthPct/100)) + finalStats.health + getNumber(artifact.health)) | number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"defense\"><img src=\"assets/defense.gif\" alt=\"Defense\">{{(selectedStar.stats.defense + (selectedStar.stats.defense * (finalStats.defensePct + awakenStat.defensePct))/100 + finalStats.defense) | number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"speed\"><img src=\"assets/speed.gif\" alt=\"Speed\">{{(selectedStar.stats.speed + awakenStat.speed + (selectedStar.stats.speed * finalStats.speedPct)/100 + finalStats.speed)| number:'1.0-0'}}</td>\r\n\t\t\t<td class=\"crit\"><img src=\"assets/critRate.gif\" alt=\"Crit Rate\">{{selectedStar.stats.critRatePct + finalStats.critRatePct + awakenStat.critRatePct}}</td>\r\n\t\t\t<td  class=\"crit\"><img src=\"assets/critDmg.gif\" alt=\"Crit Damage\">{{selectedStar.stats.critDamagePct + finalStats.critDamagePct + awakenStat.critDamagePct}}</td>\r\n\t\t\t<td><img src=\"assets/dual.gif\" alt=\"Dual Attack\">{{selectedStar.stats.dualPct + finalStats.dualPct}}</td>\r\n\t\t\t<td class=\"eff\"><img src=\"assets/effectiveness.gif\" alt=\"Effectiveness\">{{selectedStar.stats.effectivenessPct + finalStats.effectivenessPct + awakenStat.effectivenessPct}}</td>\r\n\t\t\t<td class=\"eff\"><img src=\"assets/resistance.gif\" alt=\"Resistance\">{{selectedStar.stats.resistancePct + finalStats.resistancePct + awakenStat.resistancePct}}</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div>\r\n\t<div>\r\n\t\t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">Add Equipment</button>\r\n\t</div> <br><br>\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\tWeapon\r\n\t\t<app-equipment-list [list]=\"weapons\" [selectedEquip]=\"weapons[selectWeaponIdx]\" (selectEquipChange)=\"selectWeapon($event)\" (editEquip)=\"edit(weapons,$event)\" (removeEquip)=\"remove(weapons,$event)\"></app-equipment-list>\r\n\t</div>\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\tHelmet\r\n\t\t<app-equipment-list [list]=\"helmets\" [selectedEquip]=\"helmets[selectHelmetIdx]\" (selectEquipChange)=\"selectHelmet($event)\" (editEquip)=\"edit(helmets,$event)\" (removeEquip)=\"remove(helmets,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\tArmor\r\n\t\t<app-equipment-list [list]=\"armors\" [selectedEquip]=\"armors[selectArmorIdx]\" (selectEquipChange)=\"selectArmor($event)\" (editEquip)=\"edit(armors,$event)\" (removeEquip)=\"remove(armors,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\tNecklace\r\n\t\t<app-equipment-list [list]=\"necklaces\" [selectedEquip]=\"necklaces[selectNecklaceIdx]\" (selectEquipChange)=\"selectNecklace($event)\" (editEquip)=\"edit(necklaces,$event)\" (removeEquip)=\"remove(necklaces,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\tRing\r\n\t\t<app-equipment-list [list]=\"rings\" [selectedEquip]=\"rings[selectRingIdx]\" (selectEquipChange)=\"selectRing($event)\" (editEquip)=\"edit(rings,$event)\" (removeEquip)=\"remove(rings,$event)\"></app-equipment-list>\r\n\t</div>\r\n\r\n\t<div style=\"display:inline-block;margin-left:10px;\">\r\n\t\tBoot\r\n\t\t<app-equipment-list [list]=\"boots\" [selectedEquip]=\"boots[selectBootIdx]\" (selectEquipChange)=\"selectBoot($event)\" (editEquip)=\"edit(boots,$event)\" (removeEquip)=\"remove(boots,$event)\"></app-equipment-list>\r\n\t</div>\r\n</div>\r\n<hr>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _starStatLevel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./starStatLevel */ "./src/app/starStatLevel.ts");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stats */ "./src/app/stats.ts");










var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jobZodiacBonusList = _jobSignBonusList__WEBPACK_IMPORTED_MODULE_7__["JOB_SIGN_BONUS_LIST"];
        this.equipTypes = _equipmentTypeList__WEBPACK_IMPORTED_MODULE_4__["EQUIPMENT_TYPES"];
        this.addEquipType = _equipmentTypeList__WEBPACK_IMPORTED_MODULE_4__["EQUIPMENT_TYPES"][0];
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
        this.artifact = { attack: 0, health: 0 };
        this.statBonuses = [];
        this.selectWeaponIdx = 0;
        this.selectHelmetIdx = 0;
        this.selectArmorIdx = 0;
        this.selectNecklaceIdx = 0;
        this.selectRingIdx = 0;
        this.selectBootIdx = 0;
        this.finalStats = new _stats__WEBPACK_IMPORTED_MODULE_9__["Stats"]();
        this.selectedStar = new _starStatLevel__WEBPACK_IMPORTED_MODULE_8__["StarStatLevel"]();
        this.selectedAwakening = 0;
        this.awakenStat = new _stats__WEBPACK_IMPORTED_MODULE_9__["Stats"]();
        // ************************ File things
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
        // *****************************************
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
    AppComponent.prototype.remove = function (arr, i) {
        arr.splice(i, 1);
    };
    AppComponent.prototype.edit = function (arr, i) {
        console.log("edit", arr, i);
        this.addEquip = arr[i];
        this.addEquipType = this.equipTypes.filter(function (item) {
            return item.name === arr[i].type;
        })[0];
    };
    AppComponent.prototype.selectWeapon = function (w) {
        this.selectWeaponIdx = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectArmor = function (w) {
        this.selectArmorIdx = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectNecklace = function (w) {
        this.selectNecklaceIdx = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectRing = function (w) {
        this.selectRingIdx = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectHelmet = function (w) {
        this.selectHelmetIdx = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectBoot = function (w) {
        this.selectBootIdx = w;
        this.CalculateStats();
    };
    AppComponent.prototype.selectHero = function () {
        this.selectedStar = this.selectedHero.statsbyStar[0];
        this.selectAwakening(this.selectedAwakening);
    };
    AppComponent.prototype.selectStar = function (e) {
        if (!e) {
            return;
        }
        this.selectedStar = e;
    };
    AppComponent.prototype.selectAwakening = function (n) {
        var _this = this;
        console.log("selected " + n);
        this.selectedAwakening = n;
        this.awakenStat = new _stats__WEBPACK_IMPORTED_MODULE_9__["Stats"]();
        var jobZodiacBonus = this.jobZodiacBonusList.filter(function (item) {
            return item.job === _this.selectedHero.job;
        })[0].bonusStats;
        var bonusStatsList = jobZodiacBonus.filter(function (item) {
            return item.sign === _this.selectedHero.zodiacSign;
        })[0].bonusStats;
        for (var i = 0; i < n; i++) {
            this.addStats(this.awakenStat, bonusStatsList[i]);
        }
        console.log("awaken stats", this.awakenStat);
    };
    AppComponent.prototype.addStats = function (dest, src) {
        for (var property in src) {
            if (src.hasOwnProperty) {
                dest[property] = dest[property] + this.getNumber(src[property]);
            }
        }
    };
    AppComponent.prototype.CalculateStats = function () {
        this.statBonuses = [];
        this.finalStats = new _stats__WEBPACK_IMPORTED_MODULE_9__["Stats"]();
        this.addStats(this.finalStats, this.weapons[this.selectWeaponIdx].stats);
        this.addStats(this.finalStats, this.helmets[this.selectHelmetIdx].stats);
        this.addStats(this.finalStats, this.armors[this.selectArmorIdx].stats);
        this.addStats(this.finalStats, this.necklaces[this.selectNecklaceIdx].stats);
        this.addStats(this.finalStats, this.rings[this.selectRingIdx].stats);
        this.addStats(this.finalStats, this.boots[this.selectBootIdx].stats);
        // calculate bonus
        for (var i = 0; i < this.sets.length; i++) {
            var currentSet = this.sets[i];
            var setCnt = this.getSetCnt(currentSet.name);
            if (setCnt >= currentSet.requiredItems) {
                this.statBonuses.push(currentSet);
            }
        }
        for (var i = 0; i < this.statBonuses.length; i++) {
            this.finalStats[this.statBonuses[i].bonusStat] = this.finalStats[this.statBonuses[i].bonusStat] + this.statBonuses[i].bonusStatValue;
        }
        console.log('final', this.finalStats);
    };
    AppComponent.prototype.getSetCnt = function (setName) {
        var selectedSets = [this.weapons[this.selectWeaponIdx].set,
            this.helmets[this.selectHelmetIdx].set,
            this.armors[this.selectArmorIdx].set,
            this.necklaces[this.selectNecklaceIdx].set,
            this.rings[this.selectRingIdx].set,
            this.boots[this.selectBootIdx].set];
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

module.exports = "<div *ngIf=\"list\">\r\n\t<table border=\"1\">\r\n\t\t<tr>\r\n\t\t\t<td>Set</td>\r\n\t\t\t<td class=\"health\"><img src=\"../assets/health.gif\" alt=\"Health\"></td>\r\n\t\t\t<td class=\"healthPct text-center\">%</td>\r\n\t\t\t<td class=\"defense\"><img src=\"../assets/defense.gif\" alt=\"Defense\"></td>\r\n\t\t\t<td class=\"defensePct text-center\">%</td>\r\n\t\t\t<td class=\"attack\"><img src=\"../assets/attack.gif\" alt=\"Attack\"></td>\r\n\t\t\t<td class=\"attackPct text-center\">%</td>\r\n\t\t\t<td class=\"bg-warning\"><img src=\"../assets/speed.gif\" alt=\"Speed\"></td>\r\n\t\t\t<td class=\"bg-info\"><img src=\"../assets/critRate.gif\" alt=\"Crit Rate\"></td>\r\n\t\t\t<td class=\"bg-info\"><img src=\"../assets/critDmg.gif\" alt=\"Crit Damage\"></td>\r\n\t\t\t<td class=\"bg-secondary\"><img src=\"../assets/effectiveness.gif\" alt=\"Effectiveness\"></td>\r\n\t\t\t<td class=\"bg-secondary\"><img src=\"../assets/resistance.gif\" alt=\"Resistance\"></td>\r\n\t\t\t<td></td>\r\n\t\t</tr>\r\n\t\t<tr *ngFor=\"let w of list;let i =index\" (click)=\"select(i)\">\r\n\t\t\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\"><div class=\"{{w.set}}Icon\"></div></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\"><span class=\"health\">{{w.stats.health}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"health\"><span>{{w.stats.healthPct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"defense\"><span>{{w.stats.defense}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"defense\"><span>{{w.stats.defensePct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"attack\"><span>{{w.stats.attack}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"attack\"><span>{{w.stats.attackPct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"speed\"><span>{{w.stats.speed}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"crit\"><span>{{w.stats.critRatePct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"crit\"><span>{{w.stats.critDamagePct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"eff\"><span>{{w.stats.effectivenessPct}}</span></td>\r\n\t\t\t<td [class.bg-dark]=\"w === selectedEquip\" class=\"eff\"><span>{{w.stats.resistancePct}}</span></td>\r\n\t\t\t<td>\r\n\t\t\t\t<span class=\"fas fa-trash\" aria-hidden=\"true\" (click)=\"remove(i)\"></span>&nbsp;\r\n\t\t\t\t<span class=\"far fa-edit\" aria-hidden=\"true\" (click)=\"edit(i)\"></span>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>"

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

var HERO_LIST = [{ name: "Cidd", job: "Thief", zodiacSign: "Aries",
        statsbyStar: [
            { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2844, 0, 297, 0, 501, 0, 120, 0, 0, 0, 15, 150, 5) },
            { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3720, 0, 381, 0, 647, 0, 120, 0, 0, 0, 15, 150, 5) },
            { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4677, 0, 473, 0, 807, 0, 120, 0, 0, 0, 15, 150, 5) }
        ] },
    { name: "Kise", job: "Thief", zodiacSign: "Leo",
        statsbyStar: [
            { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3752, 0, 421, 0, 771, 0, 116, 0, 0, 0, 15, 150, 5) },
            { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4718, 0, 522, 0, 961, 0, 116, 0, 0, 0, 15, 150, 5) }
        ] },
    { name: "Diene", job: "Soul Weaver", zodiacSign: "Gemini",
        statsbyStar: [
            { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3527, 0, 559, 0, 400, 0, 99, 0, 0, 0, 15, 150, 5) },
            { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4435, 0, 694, 0, 499, 0, 99, 0, 0, 0, 15, 150, 5) }
        ] },
    { name: "Commander Lorina", job: "Warrior", zodiacSign: "Leo",
        statsbyStar: [
            { starLevel: 4, maxLevel: 40, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](2721, 0, 341, 0, 524, 0, 101, 0, 0, 0, 15, 150, 5) },
            { starLevel: 5, maxLevel: 50, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](3559, 0, 438, 0, 677, 0, 101, 0, 0, 0, 15, 150, 5) },
            { starLevel: 6, maxLevel: 60, stats: new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"](4475, 0, 543, 0, 843, 0, 101, 0, 0, 0, 15, 150, 5) }
        ] }
];


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
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aquarius', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 3, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 6, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Virgo', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Cancer', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Sagittarius', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Libra', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }] },
    { job: 'Soul Weaver',
        bonusStats: [{ sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 3, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, defensePct: 0, attackPct: 0, healthPct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
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
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
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
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 3, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 3, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
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
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
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
            { sign: 'Aries', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Scorpio', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 6, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Gemini', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Aquarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Taurus', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 3, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 6, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Pisces', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 2 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 6 }
                ] },
            { sign: 'Cancer', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Sagittarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Libra', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Capricorn', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] },
            { sign: 'Virgo', bonusStats: [new _stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]()] }
        ] },
    { job: 'Warrior',
        bonusStats: [{ sign: 'Leo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
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
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 3, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 6, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Capricorn', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Virgo', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 3, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 6, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Cancer', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 3, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 3, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 6, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 6, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 }
                ] },
            { sign: 'Sagittarius', bonusStats: [{ attack: 20, health: 60, defense: 0, attackPct: 3, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 3, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 20, health: 60, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 4 },
                    { attack: 30, health: 80, defense: 0, attackPct: 6, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 0, dualPct: 0, speedPct: 0, speed: 0 },
                    { attack: 30, health: 80, defense: 0, attackPct: 0, healthPct: 0, defensePct: 0, effectivenessPct: 0, resistancePct: 0, critDamagePct: 0, critRatePct: 6, dualPct: 0, speedPct: 0, speed: 0 }
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
        this.effectivenessPct = 0;
        this.resistancePct = 0;
        this.critRatePct = 0;
        this.critDamagePct = 0;
        this.dualPct = 0;
        this.speedPct = 0;
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