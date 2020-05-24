import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../authservice.service'
import { Router } from '@angular/router'

declare const $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  message: string;
  isloading: boolean

  constructor(private element: ElementRef,private authservice: AuthserviceService,private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    $(this.element.nativeElement).bootstrapMaterialDesign();

  }

  onSubmit(form: NgForm){

    if(!form.valid){

      return;

    }
     
    this.isloading=true;

    this.authservice.login(form.value).subscribe((d)=>{
      
      this.isloading=false;
      
      alert("Login Successful");

      localStorage.setItem("auth-token",d.toString());

      this.router.navigate(['/dashboard'])

    },(error)=>{
       
      console.log(error);

      if(error.status>=400){

        this.isloading=false;
        this.message="Incorrect Email or Password";  
        document.getElementById("modalpop").click();

      }
      else{
        
        this.isloading=false;
        this.message="Internal Server Error"
        document.getElementById("modalpop").click();

      }

    })


  }

}
