import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-buildingwiseinfo',
  templateUrl: './buildingwiseinfo.component.html',
  styleUrls: ['./buildingwiseinfo.component.css']
})
export class BuildingwiseinfoComponent implements OnInit {

  block: any
  
  constructor() { }

  ngOnInit() {

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

   
      $(document).ready(function() {
        $('#example').DataTable();
      });



      document.getElementById('modalpop').click();
   
    
  }


  




}
