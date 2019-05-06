import { Component, OnInit } from '@angular/core';
import { SEWING } from '../mock-sewing';
import { REPAIR } from '../mock-repair';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  sewing = SEWING;
  repair = REPAIR;
  constructor() { }

  ngOnInit() {
  }

}
