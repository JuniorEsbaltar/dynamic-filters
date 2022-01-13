import { Component, OnInit } from "@angular/core";
import { FilterForm } from "src/app/helpers/filter-form";
import { FilterDataService } from "src/app/services/filter-data.service";

@Component({
  selector: "app-foods",
  templateUrl: "./foods.component.html",
  styleUrls: ["./foods.component.scss"],
})
export class FoodsComponent implements OnInit {
  filters: FilterForm<string>[] = [
    {
      value: "",
      key: "color",
      label: "Color",
      options: [
        { key: "", value: "All" },
        { key: "yellow", value: "Yellow" },
        { key: "green", value: "Green" },
      ],
      component: 'select',
    },
  ];
  constructor(private filterDataService: FilterDataService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.filterDataService.getGroupChanges().subscribe(console.log);

    },2000)
  }
}
