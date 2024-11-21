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
  password:string='IamYourPassword123'
  token:string |null =null

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

      this.favorites.push(datataken);
      console.log("favorites:",this.favorites); 
  }
)
  }

  
removeFromFavorites(id:number){  /* Trova l index della carta con l id  da rimuovere*/
const found = this.favorites.findIndex(card=>{
  card.data[0].id===id
})
this.favorites.splice(found, 1)
}

}

/*
https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=rokket*/
