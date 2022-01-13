import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { IMaskDirective } from '../helpers/mask-directive.interface';

@Directive({
  selector: '[maskDirective]'
})
export class NumberFormatDirective extends IMaskDirective {
  @Input() maskDirective!: (e:any) => void;
  constructor() { 
    super();//ref: ElementRef
  }
  
  @HostListener('input', ['$event.target'])
  applyMask(input: HTMLInputElement) {
    this.maskDirective(input);
  }

}
