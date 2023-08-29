import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailsPageRoutingModule } from './project-details-routing.module';

import { ProjectDetailsPage } from './project-details.page';
import { ProjectBasicModule } from 'src/app/components/pm/project-basic/project-basic.module';
import { ProjectTaskModule } from 'src/app/components/pm/project-task/project-task.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDetailsPageRoutingModule,
    ProjectBasicModule,
    ProjectTaskModule
  ],
  declarations: [ProjectDetailsPage]
})
export class ProjectDetailsPageModule {}
