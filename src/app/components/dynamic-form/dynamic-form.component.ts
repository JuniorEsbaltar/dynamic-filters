import { Component, Input, OnInit } from "@angular/core";
import { FilterForm } from "src/app/helpers/filter-form";
import { FilterControlService } from "src/app/services/filter-control.service";
import { FilterDataService } from "src/app/services/filter-data.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
})
export class DynamicFormComponent implements OnInit {
  @Input() filters: FilterForm<string>[] = [];

  constructor(
    private filterControlService: FilterControlService,
    private filterDataService: FilterDataService
  ) {}

  ngOnInit(): void {
    this.filterControlService.buildFormGroup(this.filters);
  }

  getForm() {
    return this.filterDataService.group;
  }
}
