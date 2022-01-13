import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterForm } from '../helpers/filter-form';


@Injectable({
  providedIn: 'root'
})
export class FilterControlService {
  constructor() { }

  buildFormGroup(filters: FilterForm<string>[]) {
    const group: any = {};

    filters.forEach((filter: any) => {
      group[filter.key] = new FormControl("");
    });

    return new FormGroup(group);
  }
}
