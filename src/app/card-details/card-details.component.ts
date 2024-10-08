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
    this.ys.findCard(91231901).subscribe({
     next: (data)=>{
      this.dataCard=data;
      console.log(this.dataCard);
   },
  error: (err)=>{
    console.log(err)
  }
});
}
}

