import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    ScrollingModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AboutComponent
      }
    ]),
    CommonModule
  ]
})
export class AboutModule {
}
