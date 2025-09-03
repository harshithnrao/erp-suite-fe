import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common/common.service';
import { Utility } from './common/Utility';
import { ThemeService } from '../@fury/services/theme.service';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { PermissionService } from './permission.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private commonService: CommonService, protected permissionService: PermissionService, private router: Router, private themeService: ThemeService, private sideNavService: SidenavService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      Utility.applicationConfig = JSON.parse(Utility.getLocalStorageItem('applicationConfig'));
      if (Utility.applicationConfig) {
        const isAuthenticated = this.commonService.isAuthenticated();
        if (isAuthenticated) {
          const applicationConfig = Utility.applicationConfig;
          if (applicationConfig.appConfig) {
            if (applicationConfig.appConfig.themeConfig) {
              const themeConfig = applicationConfig.appConfig.themeConfig;
              this.themeService.setTheme(themeConfig.theme);
              this.themeService.setNavigation(themeConfig.navigation);
              this.themeService.setSidenavUserVisible(themeConfig.sidenavUserVisible);
              this.themeService.setToolbarVisible(themeConfig.toolbarVisible);
              this.themeService.setToolbarPosition(themeConfig.toolbarPosition);
              this.themeService.setFooterPosition(themeConfig.footerPosition);
              this.themeService.setFooterVisible(themeConfig.footerVisible);
            }
          }
          Utility.userDetails = JSON.parse(Utility.getLocalStorageItem('userDetails'));
          // if (Utility.userDetails.jobTitle) {
          //   const navItems = [];
          //   Utility.applicationConfig.navConfig.map((navItem) => {
          //     if (navItem.roles && (navItem.roles.includes(Utility.userDetails.jobTitle.toLowerCase()) || navItem.roles.includes('all'))) {
          //       navItems.push(navItem);
          //     }
          //   });
          //   this.sideNavService.items = navItems;
          // }
          // console.log(route.title);;
          const routeTitle = route.data?.title;


          if (routeTitle && this.permissionService.hasPermission(routeTitle, 'Read')) {
            // console.log('bande brooo ')
            return true;
          }
          else if (routeTitle == undefined) {
            // console.log('im in brotha')
            return true;
          }
          console.log(routeTitle);
          // console.log('im out brotha');


          //   this.router.navigate(['/']); 
          //   return false; 
          // }
          return false;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    }
    catch (e) {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
