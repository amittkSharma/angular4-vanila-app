import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { MaterialModule } from './material-module/material-module.module';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { PostlistComponent } from './posts/post/postlist.component';
import { PostComponent } from './posts/post/post.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      {
        path: 'posts',
        component: PostlistComponent,
        data: { routeName: '/posts/' },
        children: [
          { path: ':id', component: PostComponent }
        ]
      }
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
