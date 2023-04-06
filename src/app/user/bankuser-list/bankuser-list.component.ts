import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bankuser-list',
  templateUrl: './bankuser-list.component.html',
  styleUrls: ['./bankuser-list.component.css']
})
export class BankuserListComponent implements OnInit {
  public toggle=true
  @Output() toggleevent=new EventEmitter
  @Output() deleteevent=new EventEmitter
  @Output() editevent=new EventEmitter
  @Input() bankdata!:any
  searchTerm:string=''
  userstatus=[
    {statusid:1,name:'Open'},
    {statusid:2,name:'Error'},
    {statusid:3,name:'Inactive'},
    {statusid:4,name:'Success'},
  ]
  constructor() { }
  openForm(){
    this.toggleevent.emit(this.toggle)
  }
  delUser(id:any){
    this.deleteevent.emit(id)
  }
  editUser(id:any){
  
      this.toggleevent.emit(this.toggle)
      
      this.editevent.emit(id)
      
    
  }
  ngOnInit(): void {
  }

}
