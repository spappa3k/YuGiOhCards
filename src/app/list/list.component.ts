import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YugiohService } from '../yugioh.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
nameSearched?:string

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
      this.ys.searchedList=data})
  }
}

