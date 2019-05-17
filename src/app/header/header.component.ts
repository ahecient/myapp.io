import { Component, OnInit } from '@angular/core';
import { LINKS } from '../mock-links';
import { NAV } from '../mock-nav-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = NAV;
  links = LINKS;
  constructor() { }

  ngOnInit() {
  }

}
