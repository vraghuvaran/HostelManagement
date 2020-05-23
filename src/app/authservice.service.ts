import { Injectable } from '@angular/core';
import { HttpParams, HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  url="https://hostel-management-backend.herokuapp.com"
  constructor(private http: HttpClient) { }

  login(data: any){
    
      return this.http.post(this.url+'/api/user/login',data,{observe: 'body'});

  }

  register(data: any){

    return this.http.post(this.url+'/api/user/register',data,{observe: 'body'});

  }

  ownerdetails(data: any){

    // var header_obj = new HttpHeaders();
    // header_obj.set('auth-token',localStorage.getItem('auth-token'));

    // const httpOptions = {
    //   headers: header_obj
    // };

    return this.http.post(this.url+'/api/posts/blocks',data,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))});
    // return this.http.post(this.url+'/api/posts/blocks',data,httpOptions);

  }

}
