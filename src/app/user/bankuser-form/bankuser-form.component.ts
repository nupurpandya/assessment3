import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bankuser-form',
  templateUrl: './bankuser-form.component.html',
  styleUrls: ['./bankuser-form.component.css']
})
export class BankuserFormComponent implements OnInit,OnChanges {
  @Output() addevent=new EventEmitter
  @Output() closeevent=new EventEmitter
  @Output() updateevent=new EventEmitter
  @Input() editbody:any
  condition=true
btn="Save"
  public closeform=false;
  userstatus=[
    {statusid:1,name:'Open'},
    {statusid:2,name:'Error'},
    {statusid:3,name:'Inactive'},
    {statusid:4,name:'Success'},
  ]
  constructor() { }
  
  public userForm!:FormGroup

  ngOnInit(): void {
    this.userForm=new FormGroup({
      "username":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      "description":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(150)]),
      "statusid":new FormControl(null,[Validators.required]),
      "rate":new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$")]),
      "balance":new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
     })
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.editbody){
      console.log(this.editbody);
     
      this.userForm.setValue({
        
        "username":this.editbody.username,
        "description":this.editbody.description,
        "statusid":this.editbody.statusid,
        "rate":this.editbody.rate,
        "balance":this.editbody.balance,
      })
      this.btn="Update"
      this.condition=false
     }
     
  }
 
  formClose(){
    this.closeevent.emit(this.closeform)
  }

  addUser(){
    console.log(this.userForm.value);
    this.addevent.emit(this.userForm.value);
  
  }
  updateUser(){
    
      this.updateevent.emit(this.userForm.value);
    
  }
  itemSelected(e:any){
    console.log(e);
    
  }
}
