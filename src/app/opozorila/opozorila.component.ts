import { Component, ElementRef, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main' class='secondPage'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila' class='container' #container [id]='"container-" + opozorilo.id'>
        <div class="opozorilaItemHeader" (click)='focusOn(opozorilo.id);'>
          <h2 class="naslov">{{opozorilo.title | uppercase}}</h2>
          <p>{{ opozorilo.datetime }}</p>
        </div>
        <div class='details' *ngIf='show == opozorilo.id'>
          <p class="basic-txt" [innerHTML]='opozorilo.msg'></p>
          <a [href]='opozorilo.link'><img class="opozoriloICO" src='assets/img/more.svg' oncontextmenu="return false;"/></a>
        </div>
      </div>
    </div>
    <input id="subscribeButton" type="button" (click)="ds.getSubscribed()" value="Spremljaj opozorila" />
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { padding: 10px 15px; cursor: pointer; scroll-padding-top: 109px; }',
    '.naslov { width: 100%; }',
    '.details { display: initial}',
    '.opozoriloICO { height: 3.5em; display: block; width: 100%; }',
    '#content { animation: 0.6s ease-out 0s 1 slideFromUp; }',
    '#subscribeButton { cursor: pointer; width: 154px; position: fixed; border: none; top: 67px; right: 4px; height: 39px; z-index: 422; background-image: url(\'assets/img/sub-bell-icon.svg\'); background-blend-mode: overlay; background-size: 28px; background-repeat: no-repeat; background-position-y: center; background-position-x: 3px; text-transform: uppercase; color: white; font-size: 12px; background-color: cadetblue; animation: subscribeButtonCollapse 0.35s 2.5s 1 ease-in-out; animation-fill-mode: forwards; }'
  ]
})
export class OpozorilaComponent implements OnInit, OnDestroy{

  opozorila: any[];
  @ViewChildren('container') containers: QueryList<ElementRef>;
  show: number;
  observer: MutationObserver;

  constructor(public ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fillData();
    this.ds.onStatusChange(online => {
      if (!this.opozorila && online) { this.fillData(); }
    });

    // construct mechanism to be triggered after old shown el closes
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => this.scrollView());
    });
  }

  ngOnDestroy(): void {
    window.scrollTo({top: 0});
  }

  fillData(focus = true){
    this.ds.getData('opozorila').subscribe(data => {
      this.opozorila = data;

      this.route.queryParams.subscribe(param => {
        if (!isNaN(param.show)) { this.show = param.show; }
        else if (param.show === 'last') { this.show = this.opozorila[0].id; }

        if (this.show && focus) { this.focusOn(this.show); }
      });

    });
  }

  focusOn(idx: number): void {
    const shownEl = this.containers.filter(el => el.nativeElement.id === ('container-' + this.show))[0];
    this.show = idx;
    if (shownEl) {
      this.observer.observe( shownEl.nativeElement, {childList: true} );
    }else{
      const elToShow = this.containers.filter(el => el.nativeElement.id === ('container-' + idx))[0];
      this.observer.observe( elToShow.nativeElement, {childList: true} );
    }
  }

  scrollView() {
    const elTOshow = this.containers.filter(el => el.nativeElement.id === ('container-' + this.show))[0];
    window.scrollBy({top: elTOshow.nativeElement.getBoundingClientRect().top - 109, left: 0, behavior: 'smooth'});
  }

}
