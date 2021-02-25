import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-deactive',
  templateUrl: './can-deactive.component.html',
  styleUrls: ['./can-deactive.component.css']
})
export class CanDeactiveComponent implements OnInit {

  originalname: string = "Nguyen Van A";
  name: string;

  constructor() {
    this.name = this.originalname
   }

  save(){
    this.originalname =this.name
  }
  
  ngOnInit(): void {
  }
  canDeactivated(){
    if(this.name !== this.originalname){
      return confirm("Your change are not save. Are you sure?");
    }
    return true;
  }

}
