import { Component, OnInit } from '@angular/core';
import { LINKS } from '../mock-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = ["Home", "Our Work", "Order", "Price", "Contact"]
  links = LINKS;
  constructor() { }

  ngOnInit() {
  }

}
