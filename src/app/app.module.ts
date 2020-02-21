import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorModule } from './modules/generator/generator.module';
import { LayoutModule } from './layout/layout.module';
import { PaymentsModule } from './modules/payments/payments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    GeneratorModule,
    PaymentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
