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
cards?:CardData[]


constructor(private route:ActivatedRoute, public ys:YugiohService){}


  ngOnInit(): void {
    this.cards = this.ys.favorites;
        }
  }

