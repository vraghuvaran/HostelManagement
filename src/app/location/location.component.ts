import { Component, OnInit } from '@angular/core';


declare const $;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.showPosition(position);
        console.log('latitude',position.coords.latitude)
        console.log('longitude',position.coords.longitude)
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

  }

}
