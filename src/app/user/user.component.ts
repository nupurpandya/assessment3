import { Component, OnInit } from '@angular/core';
import { BankuserService } from './bankuser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public toggle=false
  public transitionform=true
  bankdata: any;
  id: any;
  editbody: any;
  constructor(private bankservice:BankuserService) { }
  ngOnInit(): void {
    this.getUser()
  }
  toggleForm(data:any){
    this.toggle=data
  }
  closeForm(data:any){
    this.toggle=data
    console.log(data);
    
  
  }
  getUser(){
    this.bankservice.getUser().subscribe(res=>this.bankdata=res)
  }
 
  delUser(id:any){
    this.bankservice.delUser(id).subscribe(res=>res)
    this.getUser()
  }
  addUser(body:any){
    this.bankservice.addUser(body).subscribe(res=>res);
    this.getUser()
  }
  editUser(id:any){
    this.id=id
    this.bankservice.getUserById(id).subscribe(res=>this.editbody=res)
  }
  updateUser(body:any){
    this.bankservice.updateUser(this.id,body).subscribe(res=>res)
    this.getUser()
  }
  
}
