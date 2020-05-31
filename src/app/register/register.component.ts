import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../authservice.service'
import { HttpClient } from '@angular/common/http'


declare const $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,AfterViewInit {

  formdata: any
  message: any
  isloading: boolean
  data: any


  constructor(private router: Router,private element: ElementRef,private authservice: AuthserviceService) {


   }

  ngOnInit() {
  }

  ngAfterViewInit(){

    $(this.element.nativeElement).bootstrapMaterialDesign();

  }
  
  onSubmit(form: NgForm){

    if(!form.valid){
      return 
    }

    if(form.value.confirmpassword!=form.value.password){
      
      alert("password and confirm password doesn't matched")
      return

    }
    else{

      this.isloading=true;

      this.data={name: form.value.fullname,email: form.value.email,password: form.value.password, hostelname: form.value.hostelname,phone: form.value.mobilenumber.toString(),city: form.value.city,state: form.value.state};

      this.authservice.register(this.data).subscribe((d)=>{
         
        localStorage.setItem("auth-token",d.toString());
        this.isloading=false;
        this.router.navigate(['/ownerdetails']);

      
      },(error)=>{
        
        console.log(error);
        this.isloading=false;
        if(error.status==401){
          this.message="Validation Error"
          document.getElementById("modalpop").click();
        }
        else if(error.status==400){
            this.message="Email Already exists"
            document.getElementById("modalpop").click();
        }
        else{
          this.message="Internal Server Error"
          document.getElementById("modalpop").click();
        }

      })

    }

  }


}
