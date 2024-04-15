import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild(MatSidenav) nav!: MatSidenav;

  constructor() { }

  toggleSidenav() {
    if (this.nav) {
      this.nav.toggle();
    }
  }
}