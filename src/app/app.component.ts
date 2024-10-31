import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'YuGiOhCards';
  dataCard?:CardData

constructor(private ys:YugiohService){}

}
