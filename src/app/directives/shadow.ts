import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  host: {
  '(mouseenter)': 'onMouseEnter()',
  '(mouseleave)': 'onMouseLeave()',
  }
})
export class Shadow {

  constructor(private el: ElementRef){
    this.el.nativeElement.style.transition = 'box-shadow 0.3s ease-in-out';
  }
  onMouseEnter(){
    this.el.nativeElement.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

  onMouseLeave(){
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
