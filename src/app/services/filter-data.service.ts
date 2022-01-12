import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {
  group!: FormGroup;

  constructor() { }

  changeFormGroup(group: any) {
    this.group = new FormGroup(group);
  }

  getGroupChanges() {
    return this.group.valueChanges
  }
}
