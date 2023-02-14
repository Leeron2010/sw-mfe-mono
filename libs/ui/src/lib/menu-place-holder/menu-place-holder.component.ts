import { Component, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MenuComponent } from 'apps/menu/src/app/menu/menu.component';

@Component({
  selector: 'lib-menu-place-holder',
  templateUrl: './menu-place-holder.component.html',
  styleUrls: ['./menu-place-holder.component.scss']
})
export class MenuPlaceHolderComponent {
  constructor(public viewContainer: ViewContainerRef) {
  }

  async ngOnInit() {
    const menu = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5201/remoteEntry.js',
      exposedModule: './Component'
    });

    const ref = this.viewContainer.createComponent<MenuComponent>(menu.MenuComponent);
  }
}
