import {Equipment} from './equipment';
import {StarStatLevel} from './starStatLevel';

export class Hero {
	name:string;
	stats:array<StarStatLevel>;
	weapon?:Equipment;
	helmet?:Equipment;
	armor?:Equipment;
	necklace?:Equipment;
	ring?:Equipment;
	boot?:Equipment; 
}