import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomePipeComponent } from './custome-pipe/custome-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    CustomePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
