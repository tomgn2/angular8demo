import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthenService } from '../shared/services/authen.service';
import { NotificationService } from '../shared/services/notification.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers: [AuthenService, NotificationService]
})
export class LoginModule { }
