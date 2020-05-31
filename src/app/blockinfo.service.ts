import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockinfoService {

  url="https://hostel-management-backend.herokuapp.com"

  constructor(private http: HttpClient) { }
   
  sendblock(block_name: any){
   return this.http.get(this.url+'',{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }



}
