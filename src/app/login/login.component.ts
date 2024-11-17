import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Login:FormGroup;

  constructor(private fb:FormBuilder){
  this.Login=fb.group({
username:['',[Validators.required]],
password:['',[Validators.required]]
  });
  }


}
