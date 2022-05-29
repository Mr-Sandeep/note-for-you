import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { FormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    NoteHomeComponent,
    NoteCreateComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
