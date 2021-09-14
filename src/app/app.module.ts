import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // ao salvar, vai manter a máscara
      //,validation: false //
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
