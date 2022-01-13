import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NumberFormatDirective } from "../directives/number-format.directive";
import { FilterForm, setComma } from "../helpers/filter-form";

@Injectable({
  providedIn: "root",
})
export class FilterDataService {
  filters: FilterForm<string>[] = [
    // {
    //   value: "",
    //   key: "color",
    //   label: "Color",
    //   options: [
    //     { key: "", value: "All" },
    //     { key: "yellow", value: "Yellow" },
    //     { key: "green", value: "Green" },
    //   ],
    //   component: "select",
    // },
    {
      value: "",
      key: "date",
      label: "Date",
      options: [],
      component: "text",
      applyMask: (e: any) => setComma(e),
    },
  ];

  constructor() {}
  getFoodFilterData() {
    return this.filters;
  }
}
