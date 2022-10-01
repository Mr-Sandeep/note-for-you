import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal'
import { ServicesService } from './service/services.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './notes/login/login/login.component';
import { RegisterComponent } from './notes/register/register/register.component';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NoteHomeComponent,
    NoteCreateComponent,
    NoteDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [BsModalService, ServicesService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
