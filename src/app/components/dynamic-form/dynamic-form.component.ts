import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FilterForm } from "src/app/helpers/filter-form";
import { FilterControlService } from "src/app/services/filter-control.service";
import { FilterDataService } from "src/app/services/filter-data.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
})
export class DynamicFormComponent implements OnInit {
  @Input() filters!: FilterForm<string>[];
  group!: FormGroup;
  constructor(
    private filterControlService: FilterControlService,
  ) {}

  ngOnInit(): void {
    this.group = this.filterControlService.buildFormGroup(this.filters);
    this.group.valueChanges.subscribe(console.log);
  }
}
