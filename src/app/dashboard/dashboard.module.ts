import {NgModule} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule {
}
