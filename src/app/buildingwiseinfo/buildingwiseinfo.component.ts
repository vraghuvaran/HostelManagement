import { Component, OnInit } from '@angular/core';
import { BlockinfoService } from '../blockinfo.service'

declare const $;

@Component({
  selector: 'app-buildingwiseinfo',
  templateUrl: './buildingwiseinfo.component.html',
  styleUrls: ['./buildingwiseinfo.component.css']
})
export class BuildingwiseinfoComponent implements OnInit {

  block_name: any
  floor=0;
  crfloor: any
  crroom: any
  
  constructor(private blockinfo: BlockinfoService) { }

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

   
      // $(document).ready(function() {
      //   $('#example').DataTable();
      // });

      document.getElementById('modalpop').click();



       $("#okok").on("click",()=>{
              console.log("iam here")
    })
    
  }

  submitmodal(){
    
    this.blockinfo.sendblock(this.block_name).subscribe((d)=>{   

    },(error)=>{

          if(error.status==500){
            alert('Internal Server Error')
          }

    })

  }

  submitfloor(){
      console.log("hi")
  }
  
  submitrooms(){
      
        

  }




  studentdetails(){

    console.log("heljlkjlkjlkjlkjkljlkj")
    // document.getElementById('detailsmodal').click();
    // $("modify").click(()=>{

    // })
    

  }


}
