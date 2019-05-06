import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  submit(form: NgForm){
    console.log(form);
    form.resetForm();
  }
  constructor() { }

  ngOnInit() {
  }

}
