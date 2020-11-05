import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  tiles = ['droge', 'nasveti', 'zapleti', 'emergency', 'info', 'opozorila'];
  reserved = ['timer', 'chat', 'knofi', 'meter', 'kitty'];
  colors = [
    '#eed586',
    '#dd6c56',
    '#c63f55',
    '#653a4b',
    '#49d3a3',
    '#31656d'
  ];

  constructor() { }

  getTitles(){
    return this.tiles;
  }

  getColor(tile: string){
    return this.colors[(this.tiles.indexOf(tile) % 6) || 0];
  }

  addTile(tile: string): void {
    if (!(tile.startsWith('#') && tile.endsWith('#')) ) { return; }
    this.reserved.forEach( val => {
      if (tile.includes(val)) { this.tiles.push(val); }
    });
  }
}
