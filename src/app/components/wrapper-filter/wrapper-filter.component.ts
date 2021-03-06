import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ContainerRefDirective } from "src/app/directives/container-ref.directive";
import { FilterForm } from "src/app/helpers/filter-form";
import { SelectFilterComponent } from "../select-filter/select-filter.component";
import { TextFilterComponent } from "../text-filter/text-filter.component";

@Component({
  selector: "app-wrapper-filter",
  templateUrl: "./wrapper-filter.component.html",
  styleUrls: ["./wrapper-filter.component.scss"],
})
export class WrapperFilterComponent implements OnInit {
  @Input() filter!: FilterForm<string>;
  @Input() form!: FormGroup;
  @ViewChild(ContainerRefDirective, { static: true })
  appContainerRef!: ContainerRefDirective;

  components = {
    select: SelectFilterComponent,
    text: TextFilterComponent,
  };

  constructor(private componentFactoryResolve: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const component = this.componentFactoryResolve.resolveComponentFactory(
      this.components[this.filter.component]
    );
    const viewContainerRef = this.appContainerRef.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(component);
    componentRef.instance.form = this.form;
    componentRef.instance.filter = this.filter;
  }
}
