import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThisandletComponent } from './thisandlet/thisandlet.component';
import { MapofcharacterComponent } from './mapofcharacter/mapofcharacter.component';
import { ReverseEveryWordComponent } from './reverse-every-word/reverse-every-word.component';
import { ReverseEveryWord2Component } from './reverse-every-word2/reverse-every-word2.component';
import { RemoveDuplicateComponent } from './remove-duplicate/remove-duplicate.component';
import { RemoveDuplicate2Component } from './remove-duplicate2/remove-duplicate2.component';
import { ObjectkeysComponent } from './objectkeys/objectkeys.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisandletComponent,
    MapofcharacterComponent,
    ReverseEveryWordComponent,
    ReverseEveryWord2Component,
    RemoveDuplicateComponent,
    RemoveDuplicate2Component,
    ObjectkeysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
