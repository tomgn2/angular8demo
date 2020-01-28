import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
 providedIn: 'root'
}) 
export class NotificationService {
  constructor(private toastr: ToastrService) {}
 
  private config = {
    closeButton: true,
    progressBar: true
  };

  showSuccessMessage(message: string) {
    this.toastr.success(message,"",this.config);
  }

  showErrorMessage(message: string) {
    this.toastr.error(message,"",this.config);
  }

  showInfoMessage(message: string) {
    this.toastr.info(message,"",this.config);
  }

  showHTMLMessage(message: string){
    this.toastr.success(message, "", {
      enableHtml :  true
    })
  }
}