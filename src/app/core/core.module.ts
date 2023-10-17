import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogonComponent } from './logon/logon.component';
import { BootComponent } from './boot/boot.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LogonComponent,
    BootComponent
  ],
  imports: [
    CommonModule,
    SharedModule 
  ]
})
export class CoreModule { }
