import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'images',
            component: ImagesComponent
        },
        {
            path: 'images/:id',
            component: ImageDetailComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
