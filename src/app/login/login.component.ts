import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { YugiohService } from '../yugioh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Login:FormGroup;
  loginValid:boolean|null=null
  UserReg: RegExp=/^[a-zA-Z0-9]{5,15}$/;

  constructor(private fb:FormBuilder, private ys:YugiohService){
  this.Login=fb.group({
username:['',[Validators.required, Validators.pattern(this.UserReg)]],
password:['',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
  });
  }
onSubmit(){
  if (this.Login.valid) {

    console.log('Form Personal Value:', this.Login.value);
    const username = this.Login.get('username')?.value;
    const password = this.Login.get('password')?.value;
    this.ys.login(username,password);
}

}
}
