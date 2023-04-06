import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BankuserListComponent } from './bankuser-list/bankuser-list.component';
import { BankuserFormComponent } from './bankuser-form/bankuser-form.component';
import { UserComponent } from './user.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchdataPipe } from './searchdata.pipe';


@NgModule({
  declarations: [
    BankuserListComponent,
    BankuserFormComponent,
    UserComponent,
    SearchdataPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
