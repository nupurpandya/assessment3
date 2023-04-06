import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankuserService {
  url= "http://localhost:3000/bankdetails";
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(this.url);
  }
  addUser(body:any){
    return this.http.post(this.url,body)
  }
  delUser(id:any){
    return this.http.delete(this.url+"/"+id)
  }
  getUserById(id:any){
    return this.http.get(this.url+"/"+id)
  }
  updateUser(id:any,body:any){
    return this.http.put(this.url+"/"+id,body)
  }
}
