import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.css']
})
export class NoteHomeComponent implements OnInit {
  localNotes : any = "";
  notes : any = [];
  constructor() { 
    if(localStorage.getItem('notes') == null){
      this.localNotes = "";
    }else{
      this.localNotes = localStorage.getItem('notes');
      this.notes = JSON.parse(this.localNotes);
    }
   }

  ngOnInit(): void {
  }
  deleteNote(index : any){
    this.notes.splice(index, 1);
    this.localNotes = JSON.stringify(this.notes);
    localStorage.setItem('notes', this.localNotes)
  }
}
