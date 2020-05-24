import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service'
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';

declare const $;

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css', './sidebarstyles.css']
})
export class AddstudentComponent implements OnInit, AfterViewInit {

  buildings: any
  rooms: any
  floors: any;
  message: string
  bname: any

  constructor(private router: Router, private element: ElementRef, private allocate: AllocationService) { }

  ngOnInit() {

    if (localStorage.getItem("auth-token") == null) {
      this.router.navigate(['/login'])
    }

    var fullHeight = function () {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });

    };

    fullHeight();

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });


    this.allocate.getbuildings().subscribe((d) => {

      this.buildings = d;
      console.log(d);

    }, (error) => {

      if (error['status'] == 401) {
        this.message = 'There are no blocks Registered'
        document.getElementById('modalpop').click();
      }
      else if(error['status'] == 400){
        this.message='No Empty Block Exists'
        document.getElementById('modalpop').click();
      }
      else {
        this.message = 'Internal Server Error'
        document.getElementById('modalpop').click();
      }

    })

    $(document).ready(()=>{

      $("#buildingname").change(()=>{

      
         this.bname = (<HTMLInputElement>document.getElementById('buildingname')).value
        
        this.allocate.getfloors(this.bname).subscribe((d) => {

          this.floors = d;
          console.log(d);

        }, (error) => {

          if (error['status'] == 400) {
            this.message = ''
            document.getElementById('modalpop').click();
          }
          else {
            this.message = 'Internal Server Error'
            document.getElementById('modalpop').click();
          }

        })

      })

    })

    $(document).ready(()=>{
      $('#floornumber').change(()=> {

        var fnum = (<HTMLInputElement>document.getElementById('floornumber')).value

        this.allocate.getrooms(this.bname,fnum).subscribe((d) => {

          this.rooms = d;

          console.log(d);

        }, (error) => {

          if (error['status'] == 400) {
            this.message = ''
            document.getElementById('modalpop').click();
          }
          else {
            this.message = 'Internal Server Error'
            document.getElementById('modalpop').click();
          }

        })

      })
    })


  }


  ngAfterViewInit() {

    $(this.element.nativeElement).bootstrapMaterialDesign();

  }
  

  addstudent(form: NgForm){

    if(!form.valid){
      return;
    }

    console.log(form.value);

    this.allocate.addstudent(form.value).subscribe((d)=>{

      alert('Student Added Successfully');

    },(error)=>{
      

      console.log(error);

      if (error.status == 401) {
        this.message = 'Student Already Exists with this details'
        document.getElementById('modalpop').click();
      }
      else {
        this.message = 'Internal Server Error'
        document.getElementById('modalpop').click();
      }
    })
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/addstudent']);
    }); 


  }
}
