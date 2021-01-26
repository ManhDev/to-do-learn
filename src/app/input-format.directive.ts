import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// HostListener: lắng nghe sự kiện của chủ
// ElementRef: tham chiếu
// Input: lấy các giá trị đầu vào

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  // @Input('inputFormatType') type: String; nhiều option
  @Input('appInputFormat') type: String; // 1 option
  @HostListener('blur', ['$event']) onBlur() {
    // console.log(this.type);
    // console.dir(this.el);
    if (this.type === 'uppercase') {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    } else {
      this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
    }
    // dir: lấy theo dạng object;
  } // cú pháp: tên hành động, $event là chính nó khi được gọi vào element; $event chỉ cho mình vị trí xảy ra ở đâu
  constructor(private el: ElementRef) {}
}
