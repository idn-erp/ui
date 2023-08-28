import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDetailsPageRoutingModule } from './customer-details-routing.module';

import { CustomerDetailsPage } from './customer-details.page';
import { CustomerBasicModule } from 'src/app/components/pm/customer-basic/customer-basic.module';
import { CustomerProjectsModule } from 'src/app/components/pm/customer-projects/customer-projects.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDetailsPageRoutingModule,
    CustomerBasicModule,
    CustomerProjectsModule
  ],
  declarations: [CustomerDetailsPage]
})
export class CustomerDetailsPageModule {}
