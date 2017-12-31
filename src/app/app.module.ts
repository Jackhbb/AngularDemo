import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestTextAreaComponent } from './component/test-text-area/test-text-area.component';


@NgModule({
  declarations: [
    AppComponent,
    TestTextAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
