import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Shared3Service } from './shared3.service';
import { Feature1Component } from './feature-1/feature-1.component';
import { Feature2Component } from './feature-2/feature-2.component';
import { SharedService } from './shared.service';
import { Shared2Service } from './shared2.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HelloComponent},
      {path: 'feature-1', component: Feature1Component},
      {path: 'feature-2', component: Feature2Component}
    ])
  ],
  declarations: [AppComponent, HelloComponent, Feature1Component, Feature2Component],
  bootstrap: [AppComponent],
  providers: [Shared3Service, SharedService, Shared2Service]
})
export class AppModule {
}
