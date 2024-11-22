import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { YugiohService } from '../yugioh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  Login:FormGroup;
  loginValid:boolean=true;
  UserReg: RegExp=/^[a-zA-Z0-9]{5,15}$/;
  showHelp: boolean = false;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.showHelp = true; 
    }, 2500);
  }

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
    this.loginValid=this.ys.login(username,password);
    if(!this.loginValid){
      this.Login.reset();
    }
}

}
}
