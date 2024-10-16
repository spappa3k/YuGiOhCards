import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YugiohService } from '../yugioh.service';
import { CardData } from '../../models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
nameSearched?:string
dataSearched?:CardData[]

constructor(private route:ActivatedRoute, private ys:YugiohService){

}


  ngOnInit(): void {
   this.route.queryParams.subscribe(params =>{
this.nameSearched=params['searched'];
     this.doCallToSearch();
      }

    )
  }

  doCallToSearch(){
    this.ys.findCardByName(this.nameSearched!).subscribe(data=>{
      this.dataSearched=data})
      console.log("Dati:"+this.dataSearched);
  }
}

