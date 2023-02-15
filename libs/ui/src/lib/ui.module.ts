import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VegaComponentModule } from '@heartlandone/vega-angular';
import { MenuPlaceHolderComponent } from './menu-place-holder/menu-place-holder.component';


@NgModule({
  declarations: [
    MenuPlaceHolderComponent
  ],
  imports: [
    RouterModule,
    VegaComponentModule
  ],
  exports: [
    MenuPlaceHolderComponent
  ]
})
export class UiModule {
}
