import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterForm } from '../helpers/filter-form';
import { FilterDataService } from './filter-data.service';

@Injectable({
  providedIn: 'root'
})
export class FilterControlService {

  constructor(private filterDataService: FilterDataService) { }

  buildFormGroup(filters: FilterForm<string>[]) {
    const group: any = {};

    filters.forEach((filter: any) => {
      group[filter.key] = new FormControl("");
    });

    this.filterDataService.group = new FormGroup(group);
  }
}
