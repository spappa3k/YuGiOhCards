import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YugiohService } from '../yugioh.service';
import { Card, CardData } from '../../models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
nameSearched?:string
dataSearched?:CardData
cards?:Card[]
cardsMultiplier:number=0

constructor(private route:ActivatedRoute, private ys:YugiohService){

}


  ngOnInit(): void {
    this.cards = [];
   this.route.paramMap.subscribe(params =>{
    this.nameSearched = params.get('searchedName') ?? ''; /* Usa il valore di default se e' null*/
    this.cardsMultiplier=0;
     this.doCallToSearch();
      }

    )
  }

  doCallToSearch(){
    if(this.cards?.length!=0){
      this.emptyCards();
    }

    this.ys.findCardByName(this.nameSearched!).subscribe(data=>{
      this.dataSearched=data;
      this.dataSearched.data=this.dataSearched.data.slice((10*this.cardsMultiplier), (this.cardsMultiplier+1)*210);
      this.cards?.push(...this.dataSearched.data)
      this.cardsMultiplier++;
      console.log("Data", this.cards);
    })
      
  }

  emptyCards(){
    this.cards = [];
    this.cardsMultiplier=0;
  }

}


