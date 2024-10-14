import { Component } from '@angular/core';
import { YugiohService } from '../yugioh.service';
import { CardData } from '../../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
showMenuOn=false;
searchValue:string=''
nameToSearch:string=''
dataList?:CardData[]

constructor(private ys:YugiohService){}

toggleMenu(){
this.showMenuOn=!this.showMenuOn;  /* Inverte il valore */
  }

  onSearch(){
this.nameToSearch=this.searchValue;
this.ys.findCardByName(this.nameToSearch).subscribe(data=>{
  this.dataList=data;
  console.log(this.dataList);
}
)
}
  }

