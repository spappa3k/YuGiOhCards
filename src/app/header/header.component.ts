import { Component } from '@angular/core';
import { YugiohService } from '../yugioh.service';
import { Router } from '@angular/router';
//import { CardData } from '../../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
showMenuOn=false;
searchValue:string=''
nameToSearch:string=''
//dataList?:CardData[]

constructor(private ys:YugiohService, private router:Router){}

toggleMenu(){
this.showMenuOn=!this.showMenuOn;  /* Inverte il valore */
  }

  onSearch(){
this.nameToSearch=this.searchValue;
  this.router.navigate(['/list',this.nameToSearch])

}

}
  

