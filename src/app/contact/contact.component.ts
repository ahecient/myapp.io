import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  phones = ["+380978911621", "+380978911621", "ahecientrain@gmail.com"];
  adress = ["Brovary", "Hrushevskogo 17"]
  constructor() { }

  ngOnInit() {
  }

}
