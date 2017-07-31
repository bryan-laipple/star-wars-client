import {Component} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template:
  `
    <md-toolbar color="primary">
      <button md-button [mdMenuTriggerFor]="appMenu"><md-icon>menu</md-icon> List</button>
    </md-toolbar>
    
    <md-menu #appMenu="mdMenu">
      <button md-menu-item routerLink="/characters" routerLinkActive="active"> Characters </button>
      <button md-menu-item routerLink="/planets" routerLinkActive="active"> Planets </button>
      <button md-menu-item routerLink="/starships" routerLinkActive="active"> Starships </button>
    </md-menu>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
