import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {


  details: any;
  name: any;
  email: any
  phone: any
  city: any
  state: any
  hostelname: any

  constructor(private profile: AuthserviceService) { }

  ngOnInit() {

    this.profile.fetchownerdetails().subscribe((d) => {


      // console.log(d);
      this.details = d;

      this.name = d['name'];
      this.email = d['email']
      this.phone = d['phone']
      this.city = d['city']
      this.state = d['state']
      this.hostelname=d['hostelname']


    }, (error) => {


      if (error[status] == 500) {
        alert("Internal Server Error");
      }

    })

  }

}
