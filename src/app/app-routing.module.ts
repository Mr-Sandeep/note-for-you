import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { LoginComponent } from './notes/login/login/login.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { RegisterComponent } from './notes/register/register/register.component';

const routes: Routes = [ 
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', canActivate:[AuthGuardGuard],component: NoteHomeComponent},
  {path: 'create-notes', canActivate:[AuthGuardGuard],component : NoteCreateComponent},
  {path: 'note-details', canActivate:[AuthGuardGuard], component : NoteDetailsComponent},
  // {path: '**', component : LoginComponent}
  {path: '**',redirectTo:"/home", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
