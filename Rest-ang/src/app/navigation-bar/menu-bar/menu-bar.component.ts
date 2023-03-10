import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {


  constructor(private router:Router){}

  navigateTo(route:string){
    this.router.navigate([`/${route}`])
  }
}
