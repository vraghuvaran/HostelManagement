import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

declare const $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./styles.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

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

  }

}
