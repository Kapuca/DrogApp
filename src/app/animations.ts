﻿import { animation, trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('FirstPage => SecondPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%'})] ),
      query(':leave', [style({ overflow: 'hidden'})] ),
      query(':enter', [style({ left: '100%', height: '50%' })] ),
      group([
        query(':leave', [animate('3000ms ease-in-out', style({ left: '-100%', overflow: 'hidden' }))] ),
        query(':enter', [animate('3000ms ease-in-out', style({ left: '0%' }))] )
      ]),
      // query(':enter', animateChild()),
      // query(':leave', animateChild()),
    ]),
    transition('SecondPage => FirstPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%'})] ),
      query(':enter', [style({ left: '-100%' })] ),
      group([
        query(':leave', [animate('3000ms ease-in-out', style({ left: '100%' }))] ),
        query(':enter', [animate('3000ms ease-in-out', style({ left: '0%' }))] )
      ]),
      // query(':enter', animateChild()),
      // query(':leave', animateChild()),
    ]),
    transition('SecondPage => SecondPage', [ // NE DELA
      style({ position: 'relative' }),
      query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })] ),
      query(':enter', [style({ left: '50%' })] ),
      group([
        query(':leave', [animate('1500ms ease-in-out', style({ opacity: '0' }))] ),
        query(':enter', [animate('3000ms ease-in-out', style({ left: '0%' }))] )
      ]),
      // query(':enter', animateChild()),
      // query(':leave', animateChild()),
    ]),
    transition('* => FirstPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })] ),
      query(':enter', [style({ left: '-100%' })] ),
      group([
        query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))] )
      ]),
      // query(':enter', animateChild()),
    ]),
    transition('* => SecondPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [style({ position: 'absolute', top: 0, left: 0, width: '100%' })] ),
      query(':enter', [style({ left: '100%' })] ),
      group([
        query(':enter', [animate('300ms ease-in-out', style({ left: '0%' }))] )
      ]),
      // query(':enter', animateChild()),
    ])
  ]);
