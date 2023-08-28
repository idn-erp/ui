import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailsPageRoutingModule } from './project-details-routing.module';

import { ProjectDetailsPage } from './project-details.page';
import { ProjectBasicModule } from 'src/app/components/pm/project-basic/project-basic.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDetailsPageRoutingModule,
    ProjectBasicModule
  ],
  declarations: [ProjectDetailsPage]
})
export class ProjectDetailsPageModule {}
