import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorRoutingModule } from './generator-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { GeneratorIndexComponent } from './pages/generator-index/generator-index.component';
import { LiveCodeComponent } from './components/live-code/live-code.component';


@NgModule({
  declarations: [GridComponent, GeneratorIndexComponent, LiveCodeComponent],
  imports: [
    CommonModule,
    GeneratorRoutingModule
  ],
  exports: [
    GeneratorIndexComponent,
    LiveCodeComponent
  ],
  providers: []
})
export class GeneratorModule { }
