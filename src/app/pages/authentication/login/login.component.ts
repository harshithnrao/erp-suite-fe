import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { Utility } from 'src/app/common/Utility';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';import { LoginModel } from './login.model';

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private sideNavService: SidenavService,
    private commonService: CommonService,protected permissionService: PermissionService
  ) {
  }

  ngOnInit() {
    Utility.setLocalStorageItem('userDetails', '');
    this.sideNavService.items = [];
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async send() {
    const request: HttpRequestModel = {
      url: Utility.urlParams.login.url,
      param: {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value
      },
      type: Utility.urlParams.login.type
    };

    try {
      const loginResponse = await lastValueFrom(
        this.commonService.getAPIResponse(request)
      ) as LoginModel;
      console.log('API Response:', loginResponse);
      
      if (loginResponse != null) {
        Utility.userDetails = loginResponse;
        console.log('123')
        Utility.setLocalStorageItem('userDetails', JSON.stringify(loginResponse));
        // console.log(loginResponse)

        // Uncomment if you need role-based navigation configuration
        /*
        if (loginResponse[0].jobTitle) {
          const navItems = Utility.applicationConfig.navConfig.filter(navItem => 
            navItem.roles?.includes(loginResponse[0].jobTitle.toLowerCase()) || 
            navItem.roles?.includes('all')
          );
          this.sideNavService.items = navItems;
        }
        */

        this.router.navigate(['/']);
        this.router.navigate(['/']).then(() => {
          console.log('Navigated to /');
        });
        
      } else {
        this.snackbar.open('Invalid User Name or Password!', 'Error!', {
          duration: 1000
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.snackbar.open('An error occurred while logging in!', 'Error!', {
        duration: 1000
      });
    }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
