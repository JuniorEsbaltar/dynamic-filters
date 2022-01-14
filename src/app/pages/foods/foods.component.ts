import { Component, OnInit } from "@angular/core";
import { FilterForm } from "src/app/helpers/filter-form";
import { FilterDataService } from "src/app/services/filter-data.service";

@Component({
  selector: "app-foods",
  templateUrl: "./foods.component.html",
  styleUrls: ["./foods.component.scss"],
})
export class FoodsComponent implements OnInit {
  filters!: FilterForm<string>[]
  constructor(private filterDataService: FilterDataService) {}

  ngOnInit(): void {
    this.filters = this.filterDataService.getFoodFilterData();
  }
}
