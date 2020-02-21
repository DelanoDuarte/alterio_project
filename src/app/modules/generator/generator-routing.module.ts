import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorIndexComponent } from './pages/generator-index/generator-index.component';


const routes: Routes = [
  { path: '', component: GeneratorIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule { }
