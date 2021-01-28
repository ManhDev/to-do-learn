import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// phải có Input từ core của angular
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  //  dùng attribute của input để lấy attribute của button
  // tslint:disable-next-line: no-output-rename
  @Output('handle') handle: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickHandler(): void {
    this.handle.emit('data');
  }
}
