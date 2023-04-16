import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  menubarClassList:string[] = ['menu-bar', 'change menu-bar'];
  drawerClassLis :string[]= ['dropdown-content', 'menu_change dropdown-content'];
  menubar:string = this.menubarClassList[0];
  drawer:string = this.drawerClassLis[0];
  launchDrawer() {
    var index = 1;
    if (this.menubar.includes('change')) {
      index = 0;

    }

    this.menubar = this.menubarClassList[index];
    this.drawer = this.drawerClassLis[index];


  }
}
