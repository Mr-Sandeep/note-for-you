import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';

const routes: Routes = [
  {path: 'create-notes', component : NoteCreateComponent},
  {path: '**', component : NoteHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
