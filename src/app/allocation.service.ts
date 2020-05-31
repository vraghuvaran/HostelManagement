import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  url="https://hostel-management-backend.herokuapp.com"
  constructor( private http: HttpClient,private router: Router) {

  }

  getbuildings(){
    return this.http.get(this.url+'/api/room/choose/block',{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))});
  }

  // {{url}}/api/room/choose/block/all
  showbuildings(){
    return this.http.get(this.url+'/api/room/choose/block/all',{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }
  
  getfloors(blockName: any){
   return this.http.get(this.url+'/api/room/choose/block/floor/'+blockName,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  getrooms(blockName: any, floor: any){
    return this.http.get(this.url+'/api/room/choose/block/floor/room/'+blockName+'/'+floor,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  addstudent(data: any){
    return this.http.patch(this.url+'/api/posts/students',data,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})   
  }

  editemail(blockname: any,email: any){
    return this.http.get(this.url+'/api/room/detail/'+blockname+'/'+email,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))});
  }
  
  deletestudent(blockname: any,email: any){
    return this.http.delete(this.url+'/api/posts/students/'+blockname+'/'+email,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  // url/api/posts/student/blockname/email
  finaledit(data: any){
    return this.http.post(this.url+'',data,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

}
// {
// 	"blockName":"D",
// 	"floor":1
// }
