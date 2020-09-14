import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  tiles = ['droge', 'nasveti', 'zapleti', 'emergency', 'info', 'opozorila'];
  colors = {
    droge: '#eed586',
    nasveti: '#dd6c56',
    zapleti: '#c63f55',
    emergency: '#653a4b',
    info: '#49d3a3',
    opozorila: '#31656d'
  };

  constructor() { }

  getTitles(){
    return this.tiles;
  }

  getColor(title){
    return this.colors[title];
  }
}
