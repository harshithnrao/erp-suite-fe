import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { SplashScreenService } from '../@fury/services/splash-screen.service';
import { CommonService } from './common/common.service';
import { HttpRequestModel } from './common/common.model';
import { Utility } from './common/Utility';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService,
    private commonService: CommonService) {
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

    this.initiateApp();
  }

  async initiateApp() {
    await this.getApplicationConfig();
    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.themeService.theme$.subscribe(theme => {
      console.log(theme);
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }
    this.splashScreenService.hide();
  }

  async getApplicationConfig() {
    const request: HttpRequestModel = {
      url: Utility.urlParams.getApplicationConfig.url,
      param: {},
      type: Utility.urlParams.getApplicationConfig.type,
    }
    const applicationConfig = await lastValueFrom(this.commonService.getAPIResponse(request)) as any;
    Utility.applicationConfig = applicationConfig;
    Utility.setLocalStorageItem('applicationConfig', JSON.stringify(Utility.applicationConfig));
    if (applicationConfig.appConfig && applicationConfig.permissions) {
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
  }
}
