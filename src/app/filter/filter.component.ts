import { Input,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  Sex = ["Female", "Male", "Child"];
  Type = ["Theatre", "Artist"];
  Collection = ["Season 2017", "Season 2018", "Season 2019"];
  
  @Input() MainFilter=["Female", "Male", "Child","Theatre", "Artist","Season 2017", "Season 2018", "Season 2019"];
  constructor() { }

  ngOnInit() {
  }

  onCheckBoxClick(filter:string){
    if( this.MainFilter.indexOf(filter, 0)> -1){
        this.MainFilter.splice(this.MainFilter.indexOf(filter, 0), 1);
      }
    else{
      this.MainFilter.push(filter);
    }
    
    console.log(this.MainFilter);
  }
}
