import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'generator', pathMatch: 'full' },
  { path: 'generator', loadChildren: () => import('./modules/generator/generator.module').then(m => m.GeneratorModule) },
  { path: 'payment', loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
