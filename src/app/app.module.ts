import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { WrapperFilterComponent } from './components/wrapper-filter/wrapper-filter.component';
import { ContainerRefDirective } from './directives/container-ref.directive';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFilterComponent } from './components/text-filter/text-filter.component';
import { MaskDirective } from './directives/mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    DynamicFormComponent,
    WrapperFilterComponent,
    ContainerRefDirective,
    SelectFilterComponent,
    TextFilterComponent,
    MaskDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
