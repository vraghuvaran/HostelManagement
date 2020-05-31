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
  studentinfo: any


  address: any
  blockName: any
  unit: String
  blockNameU: any
  branch: any
  college: any
  email: any
  father: any
  floor: any
  mother: any
  name: any
  phoneNo: any
  rollno: any
  room: any
  selectdate: any
  year: any
  showbuildings: any

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
      else if (error['status'] == 400) {
        this.message = 'No Empty Block Exists'
        document.getElementById('modalpop').click();
      }
      else {
        this.message = 'Internal Server Error'
        document.getElementById('modalpop').click();
      }

    })


    this.allocate.showbuildings().subscribe((d)=>{
   
         this.showbuildings=d;
         console.log(d);

    },(error)=>{
       
        if(error['status']==500){
          this.message='Internal Server Error';
          document.getElementById('modalpop').click();
        }

    })

    //These are changes made regarding on add student on the page itself

    $(document).ready(() => {

      $("#buildingname").change(() => {

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

    $(document).ready(() => {
      $('#floornumber').change(() => {

        var fnum = (<HTMLInputElement>document.getElementById('floornumber')).value

        this.allocate.getrooms(this.bname, fnum).subscribe((d) => {

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


    //These methods are regarding the changes done in modal

    $('#buildingname1').on('change', () => {


      this.bname = (<HTMLInputElement>document.getElementById('buildingname1')).value

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


    $('#floornumber1').on('change', () => {

      var fnum = (<HTMLInputElement>document.getElementById('floornumber1')).value

      this.allocate.getrooms(this.bname, fnum).subscribe((d) => {

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


  }


  ngAfterViewInit() {

    $(this.element.nativeElement).bootstrapMaterialDesign();

  }


  addstudent(form: NgForm) {

    if (!form.valid) {
      return;
    }

    console.log(form.value);

    this.allocate.addstudent(form.value).subscribe((d) => {

      alert('Student Added Successfully');

    }, (error) => {

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

  editemail(form: NgForm) {

    if (!form.valid) {
      return;
    }


    console.log(form.value);

    // this.address = "sdfsdf"
    // this.unit = 'fsdfs'
    // this.blockName = "kldjs"
    // this.branch = "fsdfsaaf"
    // this.college = "fsdjla"
    // this.email = "sfdsadfl"
    // this.father = "fsdfasd"
    // this.floor = "an"
    // this.mother = "kjkjjhjkk"
    // this.name = "any"
    // this.phoneNo = 454
    // this.rollno = "any"
    // this.room = "any"
    // this.selectdate = '2020-05-10';
    // this.year = 5454
    // document.getElementById('edit').click();


    this.allocate.editemail(form.value.blockname,form.value.email).subscribe((d) => {

      console.log(d);

      this.studentinfo = d;

      this.address = d['address']
      // console.log('block is ',d['block']);
      this.blockNameU = d['block']
      this.blockName=d['block']
      this.branch = d['branch']
      this.college = d['college']
      this.email = d['email']
      this.father = d['father']
      this.floor = d['floor'].toString()
      this.mother = d['mother']
      this.name = d['name']
      this.phoneNo = parseInt(d['phoneNo']);
      this.rollno = d['rollno']
      this.room = d['room'].toString()
      this.selectdate = d['selectdate'].slice(0,10)
     
      this.year = d['year']


      document.getElementById('edit').click();


    }, (error) => {

      console.log(error);
      if (error.status == 400) {
        this.message = 'No Student Exists with this Email';
        document.getElementById('modalpop').click();
      }
      else {
        this.message = 'Internal Server Error'
        document.getElementById('modalpop').click();
      }
    })


  }

  finaledit() {


     var data={name:this.name,email:this.email,phoneNo: this.phoneNo,college: this.college,floor:this.floor ,room: this.room ,year: this.year ,blockName: this.blockName,blockNameU: this.blockNameU,father:this.father,mother: this.mother ,rollno: this.rollno ,selectdate: this.selectdate,branch: this.branch,address: this.address}
     


    this.allocate.finaledit(data).subscribe((d)=>{

      alert('Edited Successfully');

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/addstudent']);
      });

    },(error)=>{
      
      console.log(error);
      if(error.status==500){
          alert('Internal server Error');
      }

    })




  }

  deletestudent(form: NgForm) {

    // console.log(form.value)

    this.allocate.deletestudent(form.value.blockname,form.value.email).subscribe((d) => {

      alert('Student Deleted Successfully');

    }, (error) => {

      if (error.status == 401) {
        this.message = 'Block Not exists'
        document.getElementById('modalpop').click();
      }
      else if(error.status==400){
        this.message='Student not exists in that block'
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
