import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }
  
  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {


    if (window.pageYOffset > document.querySelector('nav').clientHeight) {
      
      document.querySelector('nav').classList.add('navbar-fixed')
      document.querySelector('nav').classList.add('black');


    } else {

      document.querySelector('nav').classList.remove('black')
    }
    
     
}
  

}
