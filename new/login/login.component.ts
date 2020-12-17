import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { stringify } from 'querystring';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  register!:FormGroup;
  submit=false;
  constructor(public fb:FormBuilder,private router: Router) {
    this.register=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
   }


  ngOnInit(): void {
  }
  onCheck()
  {
    this.submit=true;
    if(this.register.invalid)
    {
      return;
    }
    else{
    this.submit=true;
    let myData = localStorage.getItem('key');
    this.router.navigateByUrl('/main-real');
  }
}
}