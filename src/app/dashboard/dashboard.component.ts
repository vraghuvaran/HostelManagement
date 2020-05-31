import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AllocationService } from '../allocation.service'

declare const $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./styles.css']
})
export class DashboardComponent implements OnInit {


  showbuildings: any

  constructor(private router: Router,private allocate: AllocationService) { }

  ngOnInit() {

    if(localStorage.getItem("auth-token")==null){
      this.router.navigate(['/login']);
    }

    var fullHeight = function() {
    
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();
  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


    this.allocate.showbuildings().subscribe((d)=>{
   
      this.showbuildings=d;
      // console.log(d);

  },(error)=>{
    
     if(error['status']==500){
       alert('Internal Server Error')
     }

 })

  }

}
