import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[maskDirective]'
})
export class MaskDirective {
  @Input() maskDirective!: (e: any) => void;
  constructor() { }
  
  @HostListener('input', ['$event.target'])
  applyMask(input: HTMLInputElement) {
    this.maskDirective(input);
  }

}
