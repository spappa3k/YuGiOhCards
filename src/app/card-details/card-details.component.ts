import { Component, OnInit } from '@angular/core';
import { YugiohService } from '../yugioh.service';
import { CardData } from '../../models/models';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{
dataCard?:CardData

  constructor(private ys:YugiohService){}

ngOnInit(): void {
    this.ys.findCard(59371387).subscribe({   // 68464358 rokket tracer
     next: (data)=>{
      this.dataCard=data;
      console.log(this.dataCard);
   },
  error: (err)=>{
    console.log(err)
  }
});
}

getType(type: string): string {
  console.log('Type:', type); // Aggiungi questo per vedere cosa viene passato
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

}

