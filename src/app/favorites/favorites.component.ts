import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YugiohService } from '../yugioh.service';
import { Card, CardData } from '../../models/models';

@Component({
  selector: 'app-list',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{
nameSearched?:string
dataSearched?:CardData
cards?:CardData[]
cardsMultiplier:number=0
numberListened:number=20
numberOfObjectsInCall:number=0

constructor(private route:ActivatedRoute, private ys:YugiohService){}


  ngOnInit(): void {
    this.cards = this.ys.favorites;

    this.cardsMultiplier=0;
this.numberOfObjectsInCall=0;
      }
  }

