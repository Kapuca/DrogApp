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

  getTitles(): string[]{
    const tmp = localStorage.getItem('tiles');
    if(tmp) return JSON.parse(tmp);
    localStorage.setItem('tiles', JSON.stringify(this.tiles));
    return this.tiles;
  }

  getColor(tile: string){
    const idx = (this.getTitles().indexOf(tile) % 6);
    return this.colors[idx < 0 ? 0 : idx];
  }

  addTile(tile: string): void {
    if (!(tile.startsWith('#') && tile.endsWith('#')) ) { return; }
    let tls = this.getTitles();
    this.reserved.forEach( (val, idx) => {
      if (tile.includes(val) && !tls.includes(val)) {
        tls.push(val);
        localStorage.setItem('tiles', JSON.stringify(tls));
      }
    });
  }
}
