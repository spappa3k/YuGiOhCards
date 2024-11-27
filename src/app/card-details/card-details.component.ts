import { Component, OnInit } from '@angular/core';
import { YugiohService } from '../yugioh.service';
import { CardData } from '../../models/models';
import { MaterialModule } from '../material/material.module';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{
dataCard?:CardData
showMore:boolean=false;
idCard?:number
existingCard?:CardData
showAddToFavorites:boolean=true;

  constructor(private ys:YugiohService, private route:ActivatedRoute){}

ngOnInit(): void {
const id=Number(this.route.snapshot.paramMap.get('id'));
this.idCard=id; //  per l aggiunta ai preferiti

    this.ys.findCardById(id).subscribe({   // 68464358 rokket tracer
     next: (data)=>{
      this.dataCard=data;
   },
  error: (err)=>{
    console.log(err)
  }
});

  this.existingCard=this.ys.favorites.find(card=>{
  return card.data[0].id===this.idCard;
    })

    if(this.existingCard==null){
      this.showAddToFavorites=true;
      }else{
        this.showAddToFavorites=false;
      }
  }


getType(type: string): string {
  switch (type) {
    case 'Effect Monster':
        return 'type-effectMonster';
        case 'Flip Effect Monster':
        return 'type-effectMonster';
        case 'Normal Monster':
      return 'type-normalMonster';
      case 'Tuner Monster':
        return 'type-effectMonster';
      case 'Fusion Monster':
        return 'type-fusionMonster';
        case 'Link Monster':
        return 'type-linkMonster';
        case 'Xyz Effect Monster':
          return 'type-xyzMonster';
          case 'Skill Card':
            return 'type-linkMonster';
            case 'Ritual Effect Monster':
              return 'type-ritualMonster';
    case 'Spell Card':
      return 'type-spell';    
    case 'Trap Card':
      return 'type-trap';   
      
        default:
      return 'type-white';  // Nessuna classe se il tipo non corrisponde
  }
}

viewMore(){
this.showMore= !this.showMore;
}

addToFav(){
    this.showAddToFavorites=false;
    this.ys.addToFavorites(this.idCard!);

}

removeFromFav(){
  this.showAddToFavorites=true;
  this.ys.removeFromFavorites(this.idCard!);
}

}

