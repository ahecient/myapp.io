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
  MainFilter=[];
  constructor() { }

  ngOnInit() {
  }

  onCheckBoxClick(filter:string){
    if(filter in this.MainFilter){
      //
    }
    else{
      this.MainFilter.push(filter);
    }
    
    console.log(this.MainFilter);
  }
}
