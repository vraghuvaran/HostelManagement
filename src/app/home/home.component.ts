import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  f: any;

  constructor() { }

  ngOnInit() {
  }

  callme(){
    this.f=1;
    console.log("haljlf")
  }

}
