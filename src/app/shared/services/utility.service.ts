import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../common/url.constants';
import { AuthenService } from './authen.service';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private _router: Router;

  constructor(router: Router, private http: HttpClient, private authenService: AuthenService) {
    this._router = router;
  }

  convertDateTime(date: Date) {
    var _formattedDate = new Date(date.toString());
    return _formattedDate.toDateString();
  }

  navigate(path: string) {
    this._router.navigate([path]);
  }
  navigateToLogin() {
    this._router.navigate([UrlConstants.LOGIN]);
  }
  Unflatten = (arr: any[]): any[] => {
    let map = {};
    let roots: any[] = [];
    for (var i = 0; i < arr.length; i += 1) {
      let node = arr[i];
      node.children = [];
      map[node.Id] = i; // use map to look-up the parents
      if (node.ParentId !== null) {
        arr[map[node.ParentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}
