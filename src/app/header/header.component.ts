import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
showMenuOn=false;

toggleMenu(){
this.showMenuOn=!this.showMenuOn;  /* Inverte il valore */
  }
}
