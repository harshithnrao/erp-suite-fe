import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { Utility } from 'src/app/common/Utility';

@Component({
  selector: 'fury-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean;
  userDetail: any = {};

  constructor(private commonService: CommonService, private router: Router) { }



  ngOnInit() {
    this.userDetail = Utility.userDetails;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    console.log('logout in toolbar');
    this.commonService.logout();
    this.router.navigate(['/login']);
  }

  onClickOutside() {
    this.isOpen = false;
  }

}
