import { Injectable } from '@angular/core';
import { CardData } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YugiohService {
  searchedList?:CardData[]
  favorites:CardData[]=[]

  apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http:HttpClient) { }

findCardById(id:number):Observable<CardData>{
return this.http.get<CardData>(this.apiUrl+'?id='+id)
}

findCardByName(name:string):Observable<CardData>{
  return this.http.get<CardData>(this.apiUrl+'?fname='+name)
  }

  addToFavorites(id:number){
this.findCardById(id).subscribe(
  data=>{
    const datataken=data;
  
    this.favorites.find(card=>{
    const existingCard=card.data[0].id===id;
   
    if(!existingCard)
      this.favorites.push(datataken);
      console.log("favorites:",this.favorites);
    })

  }
)


  }
/*
https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=rokket*/
}
