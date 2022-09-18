import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './notes/login/login/login.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { RegisterComponent } from './notes/register/register/register.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'create-notes', component : NoteCreateComponent},
  {path: 'note-details', component : NoteDetailsComponent},
  {path: '**', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
