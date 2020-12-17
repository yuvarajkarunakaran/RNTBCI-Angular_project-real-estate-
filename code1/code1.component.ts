import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-code1',
  templateUrl: './code1.component.html',
  styleUrls: ['./code1.component.css']
})
export class Code1Component implements OnInit {

  public zip:any;
  id:any;
  constructor(private route:ActivatedRoute) { 
   // this.zip=this.route.snapshot.params.ip;
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
