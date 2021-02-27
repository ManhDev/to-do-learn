import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  email:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  getEmailControl(form){
    console.log(form.control.get('email'));
    // lấy email thay vì dùng form.controls.email
  }

  log(value){
    console.log(value);
    
  }

}
