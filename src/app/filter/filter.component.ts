import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  Sex = ["Female", "Male", "Child"];
  Type = ["Theatre", "Artist"];
  Collection = ["Season 2017", "Season 2018", "Season 2019"];
  constructor() { }

  ngOnInit() {
  }

}
