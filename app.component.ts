import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { Code1Component } from './code1/code1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  sel:boolean=false;
   public ip:any;
  constructor(private router:Router){
    
  }

  onSelect(input:any){
    this.sel=!this.sel;
    this.router.navigate(['./zipcode1',input]);
  }
}
