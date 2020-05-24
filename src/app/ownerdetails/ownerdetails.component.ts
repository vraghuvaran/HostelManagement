import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthserviceService } from '../authservice.service'

declare const $;


@Component({
  selector: 'app-ownerdetails',
  templateUrl: './ownerdetails.component.html',
  styleUrls: ['./ownerdetails.component.css']
})

export class OwnerdetailsComponent implements OnInit,AfterViewInit {

  building: number;
  f: number
  Arr = Array
  buildingname: any
  floors: any
  rooms: any
  capacity: any
  radio: any
  message: string
  isloading: boolean
  ac: boolean

  hostel: Array<{ buildingname: string, floors: number, rooms: number, capacity: number, radio: string}> = []

  constructor(private router: Router,private element: ElementRef,private authservice: AuthserviceService) {
  }

  ngOnInit() {

    if(localStorage.getItem("auth-token")==null){

      alert("access denied");
      this.router.navigate(['/home'])
      
    }
      
     if(sessionStorage.getItem("buildings")!=null){

       this.building=parseInt(sessionStorage.getItem("buildings"));

     }
     else{  

      document.getElementById('modalpop').click();

     }
     
  }

  ngAfterViewInit(){

    $(this.element.nativeElement).bootstrapMaterialDesign();

  }

  submitmodal() {
     
      sessionStorage.setItem("buildings",this.building.toString());

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/ownerdetails']);
      }); 
  }

  addbuilding(form: NgForm,index: number){

    console.log("index= ",index)
    console.log(form.value);
    
    this.hostel.splice(index,1,form.value);
    
  }

  totaldone(){


    // {
    //   "blockName":"A",
    //   "numberOfFloor":15,
    //   "numberOfRoomInFloor":20,
    //   "numberOfStudentInRoom":5,
    //   "AirConditioning":true
    // }
     
      this.isloading=true;

      this.hostel.forEach(element=>{

            if(element.radio=="ac")
              this.ac=true;
            else
              this.ac=false;
           
            var data={blockName:element.buildingname,numberOfFloor:element.floors,numberOfRoomInFloor:element.rooms,numberOfStudentInRoom:element.capacity,AirConditioning:this.ac}
             
            this.authservice.ownerdetails(data).subscribe((d)=>{
                  
                 console.log(d);
                //  this.router.navigate(['/home'])

            },(error)=>{
                
              console.log(error);
              
              if(error.status==400){
                this.message="Block already exists for your Hostel"
                document.getElementById("modalpopup").click();
              }
              else{
                this.message="Internal Server Error"
                document.getElementById("modalpopup").click();
              }

            })

      })
      this.isloading=false;
      this.router.navigate(['/dashboard'])

  }

}
