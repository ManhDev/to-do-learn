import { CustomTextValidator } from './custom-text.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  subcribeFormFb;
  subcribeForm = new FormGroup({
    // gom group
    contact: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3), CustomTextValidator.specialCharacters]),
    }),
    period: new FormControl(''),
    news: new FormControl()
  });
  // dùng form builder
  // constructor(private fb: FormBuilder) {
  //   this.subcribeFormFb = fb.group({
  //     contact: fb.group({
  //       email: ['', [Validators.required, Validators.minLength(3), CustomTextValidator.specialCharacters]]
  //     }),
  //     period: [''],
  //     news: []
  //   })
  // }
  constructor() {

  }

  get(name) {
    // return this.subcribeFormFb['controls']['contact']['controls'][name]; dùng form builder
    return this.subcribeForm['controls']['contact']['controls'][name];
  }
  ngOnInit(): void {
  }

  log() {
    console.log(this.subcribeForm);

  }
}
