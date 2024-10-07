import { Injectable } from '@angular/core';
import { Details } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YugiohService {

  apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http:HttpClient) { }

findCard(id:number):Observable<Details>{
return this.http.get<Details>(this.apiUrl+'?id='+id)
}

}
