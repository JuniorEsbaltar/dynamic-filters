import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[dynAttr]'
})
export class DynamicAttributeDirective {
  @Input('dynAttr')
  public attrs!: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {

  }
  public ngOnChanges() {
    const formattedAttrs = this._extractAttrs(this.attrs);
    console.log('calledchange')
    console.log(formattedAttrs)
    formattedAttrs.forEach(a => { 
      this._renderer.setAttribute(this._elementRef.nativeElement, a.key, a.val); 
    })
  }
  
  private _extractAttrs(attrs: any): any[] {
    return attrs.split(" ").map((attr: any) => ({
      key: attr.split('=')[0],
      val: (attr.split('=')[1] || '').replace(/[\'\"]/g, "")
    }))
  }
}
