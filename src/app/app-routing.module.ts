import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';

const routes: Routes = [
  {path: 'create-notes', component : NoteCreateComponent},
  {path: 'note-details', component : NoteDetailsComponent},
  {path: '**', component : NoteHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
