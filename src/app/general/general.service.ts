import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  tiles = ['droge', 'nasveti', 'zapleti', 'emergency', 'info', 'opozorila'];
  reserved = ['timer', 'chat', 'knofi', 'meter', 'kitty'];
  colors = {
    droge: '#eed586',
    nasveti: '#dd6c56',
    zapleti: '#c63f55',
    emergency: '#653a4b',
    info: '#49d3a3',
    opozorila: '#31656d',
    timer: '#eed586',
    chat: '#dd6c56',
    knofi: '#c63f55',
    meter: '#653a4b',
    kitty: '#49d3a3'
  };

  constructor() { }

  getTitles(){
    return this.tiles;
  }

  getColor(tile: string){
    return this.colors[tile];
  }

  addTile(tile: string): void {
    if (!(tile.startsWith('#') && tile.endsWith('#')) ) { return; }
    this.reserved.forEach( val => {
      if (tile.includes(val)) { this.tiles.push(val); }
    });
  }
}
