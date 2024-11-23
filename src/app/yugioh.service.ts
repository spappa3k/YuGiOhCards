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
  username:string='Master3K'
  password:string='IamYourPassword123'   
  token:string |null =null

  apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http:HttpClient) { 
          // Recupera i dati salvati nel localStorage
      const savedFavorites = localStorage.getItem('favoritesArray');
      if (savedFavorites) {
        this.favorites = JSON.parse(savedFavorites); // Converte la stringa JSON in un array
      } else {
        this.favorites = []; // Inizializza come array vuoto
      }
    
    
  }

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
      localStorage.setItem('favoritesArray', JSON.stringify(this.favorites));
      console.log("favorites:",this.favorites); 
  }
)
  }

  
removeFromFavorites(id:number){  /* Trova l index della carta con l id  da rimuovere*/
const found = this.favorites.findIndex(card=>{
  card.data[0].id===id
})
this.favorites.splice(found, 1)
 localStorage.setItem('favoritesArray', JSON.stringify(this.favorites));
}

// LOGIN
login(inputUsername:string,inputPassword:string):boolean{
  
  if(inputUsername=== this.username&&inputPassword=== this.password){
    this.token=this.generateToken();
    console.log(this.token);
    localStorage.setItem('authToken',this.token);
    window.location.reload();
    return true;
  }else{
    return false;
  }
  

}

generateToken(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 32; // Lunghezza del token
    let token = '';
    for (let i = 0; i < tokenLength; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }
}



/*
https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=rokket*/
