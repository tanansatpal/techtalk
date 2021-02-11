import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { FormsModule } from '@angular/forms';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AComponent, BComponent, CComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'nyan',
        loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        data: {applyPreload: true}
      },
      {
        path: 'dom',
        component: AComponent
      }
    ]),
    FormsModule,
    // ], {preloadingStrategy: PreloadAllModules})
    // ], {preloadingStrategy: QuicklinkStrategy})
    // ], {preloadingStrategy: CustomPreloadingStrategy})
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {
}
