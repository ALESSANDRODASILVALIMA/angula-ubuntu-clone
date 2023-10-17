import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
  ],
  exports:[
    ProgressSpinnerModule,
    InputTextModule,
    PasswordModule,
    FormsModule
  ]
})
export class SharedUiModule { }
