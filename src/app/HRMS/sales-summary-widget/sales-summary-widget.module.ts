import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FuryCardModule } from '../../../../../@fury/shared/card/card.module';
// import { LoadingOverlayModule } from '../../../../../@fury/shared/loading-overlay/loading-overlay.module';
// import { MaterialModule } from '../../../../../@fury/shared/material-components.module';
import { SalesSummaryWidgetComponent } from './sales-summary-widget.component';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import { LoadingOverlayModule } from 'src/@fury/shared/loading-overlay/loading-overlay.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    LoadingOverlayModule,
    FuryCardModule,
    NgChartsModule
  ],
  declarations: [SalesSummaryWidgetComponent],
  exports: [SalesSummaryWidgetComponent]
})
export class SalesSummaryWidgetModule {
}
