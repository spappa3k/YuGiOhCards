import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { YugiohService } from './yugioh.service';
import { CardData } from '../models/models';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'YuGiOhCards';
  dataCard?:CardData
  logged:boolean=false

constructor(private ys:YugiohService){}

ngOnInit(): void {
  const token=localStorage.getItem('authToken');
  if(token){
    this.logged=true;
  }else{
    this.logged=false;
  }
}
}
