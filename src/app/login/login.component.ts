import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../shared/services/authen.service';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenService: AuthenService,
    private notificationService: NotificationService) { }

  ngOnInit() {
  }
  login() {
    this.notificationService.showSuccessMessage("ok roi nhe");
  }
}
