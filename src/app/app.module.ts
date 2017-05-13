import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShareService } from './share.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule/*,
    RouterModule.forRoot([
        {
            path: 'images/:id',
            component: ImageDetailComponent
        }
    ])*/
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
