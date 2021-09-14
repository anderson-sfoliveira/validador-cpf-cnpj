import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
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
