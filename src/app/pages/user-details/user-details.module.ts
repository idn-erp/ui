import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import { UserInfoModule } from 'src/app/components/common/user-info/user-info.module';
import { AttachmentModule } from 'src/app/components/common/attachment/attachment.module';
import { ContactModule } from 'src/app/components/common/contact/contact.module';
import { UserLinksModule } from 'src/app/components/user/user-links/user-links.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailsPageRoutingModule,
    UserInfoModule,
    AttachmentModule,
    ContactModule,
    UserLinksModule
  ],
  declarations: [UserDetailsPage]
})
export class UserDetailsPageModule {}
