import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryPage } from './order-history.page';
import { HeaderModule } from '../../../../components/header/header.module';
import { TranslateModule } from '@capillarytech/pwa-framework';
import { SubHeaderModule } from '../../../../components/sub-header/sub-header.module';
import { OrderWidgetModule } from '@cap-widget/order-widget';
import { OrderDetailsWidgetModule } from '@cap-widget/order-details-widget';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SubHeaderModule,
    OrderWidgetModule,
    OrderDetailsWidgetModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [OrderHistoryPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrderHistoryPageModule {}