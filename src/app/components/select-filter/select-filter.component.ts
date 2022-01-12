import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterForm } from 'src/app/helpers/filter-form';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent {
  @Input() form!: FormGroup;
  @Input() filter!: FilterForm<string>;
  constructor() { }

}
