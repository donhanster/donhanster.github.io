import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import {Equipment} from './equipment';
import {EQUIPMENT_TYPES} from './equipmentTypeList';
import {SET_LIST} from './equipmentSetList';
import {HERO_LIST} from './heroList';
import {Hero} from './hero';
import {StarStatLevel} from './starStatLevel';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private setting = {
		element: {
			dynamicDownload: null as HTMLElement
		}
	}
	equipTypes = EQUIPMENT_TYPES;
	addEquipType = this.equipTypes[0];
	addEquip = new Equipment();
	rarities = ['Epic','Heroic','Rare','Good','Normal'];
	sets = SET_LIST;
	heroes = HERO_LIST;
	selectedHero = new Hero();

	weapons: Array<Equipment> = [];
	armors: Array<Equipment> = [];
	helmets: Array<Equipment> = [];
	necklaces: Array<Equipment> = [];
	rings: Array<Equipment> = [];
	boots: Array<Equipment> = [];

	file:any;

	selectedWeapon = new Equipment();
	selectedHelmet = new Equipment();
	selectedArmor = new Equipment();
	selectedNeck = new Equipment();
	selectedRing = new Equipment();
	selectedBoot = new Equipment();

	finalStats = new Equipment();
	selectedStar = new StarStatLevel();

	addEquipment():void {
		console.log("Adding", this.addEquip);

		switch(this.addEquip.type) {
			case ("Weapon"): this.weapons.push(this.addEquip); break;
			case ("Helmet"): this.helmets.push(this.addEquip); break;
			case ("Armor"): this.armors.push(this.addEquip); break;
			case ("Necklace"): this.necklaces.push(this.addEquip); break;
			case ("Ring"): this.rings.push(this.addEquip); break;
			case ("Boot"): this.boots.push(this.addEquip); break;
		}

		console.log("weapons", this.weapons);
		console.log("armors", this.armors);

		this.addEquip = new Equipment();
	}

	selectWeapon(w):void {
		this.selectedWeapon = w;
		this.CalculateStats();
	}

	selectArmor(w):void {
		this.selectedArmor = w;
		this.CalculateStats();
	}

	selectNecklace(w):void {
		this.selectedNeck = w;
		this.CalculateStats();
	}

	selectRing(w):void {
		this.selectedRing = w;
		this.CalculateStats();
	}

	selectHelmet(w):void {
		this.selectedHelmet = w;
		this.CalculateStats();
	}

	selectBoot(w):void {
		this.selectedBoot = w;
		this.CalculateStats();
	}

	fileChanged(e) {
		this.file = e.target.files[0];
	}

	fakeEquips() {
		return of({weapons:this.weapons,armors:this.armors,helmets:this.helmets,necklaces:this.necklaces,rings:this.rings,boots:this.boots});
	}

	downloadEquips() {
		this.fakeEquips().subscribe((res)=>{
			this.dyanmicDownloadByHtmlTag({
				fileName:'equips',
				text: JSON.stringify(res)
			})
		})
	}

	uploadDocument() {
		let fileReader = new FileReader();
		fileReader.onload = (e) => {
			let equipsIn = JSON.parse(fileReader.result);

			this.weapons = equipsIn.weapons;
			this.helmets = equipsIn.helmets;
			this.armors = equipsIn.armors;
			this.necklaces = equipsIn.necklaces;
			this.rings = equipsIn.rings;
			this.boots = equipsIn.boots;

			console.log(JSON.parse(fileReader.result));
		}
		fileReader.readAsText(this.file);
	}

	CalculateStats():void {
		this.finalStats.health = parseInt(this.selectedWeapon.health|| 0) + parseInt(this.selectedHelmet.health|| 0) + parseInt(this.selectedArmor.health|| 0) + parseInt(this.selectedNeck.health|| 0) + parseInt(this.selectedRing.health|| 0) + parseInt(this.selectedBoot.health|| 0);
		this.finalStats.healthPct = parseInt(this.selectedWeapon.healthPct|| 0) + parseInt(this.selectedHelmet.healthPct|| 0) + parseInt(this.selectedArmor.healthPct|| 0) + parseInt(this.selectedNeck.healthPct|| 0) + parseInt(this.selectedRing.healthPct|| 0) + parseInt(this.selectedBoot.healthPct|| 0);
		this.finalStats.armor = parseInt(this.selectedWeapon.armor|| 0) + parseInt(this.selectedHelmet.armor|| 0) + parseInt(this.selectedArmor.armor|| 0) + parseInt(this.selectedNeck.armor|| 0) + parseInt(this.selectedRing.armor|| 0) + parseInt(this.selectedBoot.armor|| 0);
		this.finalStats.armorPct = parseInt(this.selectedWeapon.armorPct|| 0) + parseInt(this.selectedHelmet.armorPct|| 0) + parseInt(this.selectedArmor.armorPct|| 0) + parseInt(this.selectedNeck.armorPct|| 0) + parseInt(this.selectedRing.armorPct|| 0) + parseInt(this.selectedBoot.armorPct|| 0);
		this.finalStats.attack = parseInt(this.selectedWeapon.attack|| 0) + parseInt(this.selectedHelmet.attack|| 0) + parseInt(this.selectedArmor.attack|| 0) + parseInt(this.selectedNeck.attack|| 0) + parseInt(this.selectedRing.attack|| 0) + parseInt(this.selectedBoot.attack|| 0);
		this.finalStats.attackPct = parseInt(this.selectedWeapon.attackPct|| 0) + parseInt(this.selectedHelmet.attackPct|| 0) + parseInt(this.selectedArmor.attackPct|| 0) + parseInt(this.selectedNeck.attackPct|| 0) + parseInt(this.selectedRing.attackPct|| 0) + parseInt(this.selectedBoot.attackPct|| 0);
		this.finalStats.speed = parseInt(this.selectedWeapon.speed|| 0) + parseInt(this.selectedHelmet.speed|| 0) + parseInt(this.selectedArmor.speed|| 0) + parseInt(this.selectedNeck.speed|| 0) + parseInt(this.selectedRing.speed|| 0) + parseInt(this.selectedBoot.speed|| 0);
		this.finalStats.critRatePct = parseInt(this.selectedWeapon.critRatePct|| 0) + parseInt(this.selectedHelmet.critRatePct|| 0) + parseInt(this.selectedArmor.critRatePct|| 0) + parseInt(this.selectedNeck.critRatePct|| 0) + parseInt(this.selectedRing.critRatePct|| 0) + parseInt(this.selectedBoot.critRatePct|| 0);
		this.finalStats.critDamagePct = parseInt(this.selectedWeapon.critDamagePct|| 0) + parseInt(this.selectedHelmet.critDamagePct|| 0) + parseInt(this.selectedArmor.critDamagePct|| 0) + parseInt(this.selectedNeck.critDamagePct|| 0) + parseInt(this.selectedRing.critDamagePct|| 0) + parseInt(this.selectedBoot.critDamagePct|| 0);
		this.finalStats.effectivenessPct = parseInt(this.selectedWeapon.effectivenessPct|| 0) + parseInt(this.selectedHelmet.effectivenessPct|| 0) + parseInt(this.selectedArmor.effectivenessPct|| 0) + parseInt(this.selectedNeck.effectivenessPct|| 0) + parseInt(this.selectedRing.effectivenessPct|| 0) + parseInt(this.selectedBoot.effectivenessPct|| 0);
		this.finalStats.resistancePct = parseInt(this.selectedWeapon.resistancePct|| 0) + parseInt(this.selectedHelmet.resistancePct|| 0) + parseInt(this.selectedArmor.resistancePct|| 0) + parseInt(this.selectedNeck.resistancePct|| 0) + parseInt(this.selectedRing.resistancePct|| 0) + parseInt(this.selectedBoot.resistancePct|| 0);

		console.log('final', this.finalStats);
	}

	private dyanmicDownloadByHtmlTag(arg: {fileName: string, text: string}) {
		if (!this.setting.element.dynamicDownload) {
			this.setting.element.dynamicDownload = document.createElement('a');
		}
		const element = this.setting.element.dynamicDownload;
		const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
		element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
		element.setAttribute('download', arg.fileName);

		var event = new MouseEvent("click");
		element.dispatchEvent(event);
	}
}
