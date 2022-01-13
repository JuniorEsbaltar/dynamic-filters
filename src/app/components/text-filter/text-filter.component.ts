import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NumberFormatDirective } from "src/app/directives/number-format.directive";
import { FilterForm } from "src/app/helpers/filter-form";

@Component({
  selector: "app-text-filter",
  templateUrl: "./text-filter.component.html",
  styleUrls: ["./text-filter.component.scss"],
})
export class TextFilterComponent {
  @Input() filter!: FilterForm<string>;
  @Input() form!: FormGroup;
}
