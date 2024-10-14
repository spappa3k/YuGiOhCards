import { Component } from '@angular/core';
import { YugiohService } from '../yugioh.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
showMenuOn=false;
searchValue:string=''
nameToSearch:string=''

constructor(private ys:YugiohService){}

toggleMenu(){
this.showMenuOn=!this.showMenuOn;  /* Inverte il valore */
  }

  onSearch(){
this.nameToSearch=this.searchValue;
this.ys.findCardByName(this.nameToSearch)
  }
}
