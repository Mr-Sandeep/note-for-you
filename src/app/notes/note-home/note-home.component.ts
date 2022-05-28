import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.css']
})
export class NoteHomeComponent implements OnInit {

  notes =[ {
    noteId : 1,
    title : "First Note",
    desc : "My first note"
  },
  {
    noteId : 2,
    title : "Second Note",
    desc : "My second note"
  },
  {
    noteId : 3,
    title : "Third Note",
    desc : "My third note"
  },
  {
    noteId : 4,
    title : "Second Note",
    desc : "My second note"
  },
  {
    noteId : 5,
    title : "Third Note",
    desc : "My third note"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
