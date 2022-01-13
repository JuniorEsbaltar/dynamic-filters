import { Directive, Type } from "@angular/core";
import { IMaskDirective } from "./mask-directive.interface";

interface IDirective {
  name: string,
  klass: Type<IMaskDirective> 
}
export const setComma = (input: HTMLInputElement) =>  {
  const { value } = input;
  input.value = value.replace('.',',');
}
export class FilterForm<T> {
  value: T | undefined;
  key: string;
  label: string;
  options: { key: string; value: string }[];
  component: 'select'|'text';
  applyMask?(e: any): void;  

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      options?: { key: string; value: string }[];
      component?: 'select'|'text';
      applyMask?(e: any): void;
    } = {
      component: 'select'
    }
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.options = options.options || [];
    this.component = options.component || "select";
    this.applyMask = options.applyMask
  }
}
