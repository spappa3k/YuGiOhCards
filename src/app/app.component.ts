import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component'; 
import { YugiohService } from './yugioh.service';
import { Details } from '../models/models';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'YuGiOhCards';
  dataCard?:Details

constructor(private ys:YugiohService){}

  vai(){
    this.ys.findCard(91231901).subscribe({
     next: (data)=>{
      this.dataCard=data;
      console.log(this.dataCard);
   },
  error: (err)=>{
    console.log(err)
  }
});
}
}
