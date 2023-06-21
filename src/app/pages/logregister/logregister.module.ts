import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogregisterPageRoutingModule } from './logregister-routing.module';

import { LogregisterPage } from './logregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogregisterPageRoutingModule
  ],
  declarations: [LogregisterPage]
})
export class LogregisterPageModule {}
