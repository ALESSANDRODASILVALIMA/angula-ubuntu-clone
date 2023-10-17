import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './core/logon/logon.component';
import { BootComponent } from './core/boot/boot.component';

const routes: Routes = [
  {path: "boot", component: BootComponent},
  {path: "logon", component: LogonComponent},
  {path: "", redirectTo: "/boot", pathMatch: 'full'},
  {path: "**", redirectTo: "/boot"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
