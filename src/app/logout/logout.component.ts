import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem("auth-token")!=null){
      localStorage.removeItem("auth-token");
    }
    else{
      alert("Inorder to Logout you need to Login first");
    }

    this.router.navigate(['/home']);
    
  }

}
