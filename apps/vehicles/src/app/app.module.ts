import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VehiclesModule } from './vehicles/vehicles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    VehiclesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
