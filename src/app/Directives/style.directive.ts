import { rendererTypeName } from '@angular/compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[txtStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
    element.nativeElement.style.fontSize = '50px';
  }
}
