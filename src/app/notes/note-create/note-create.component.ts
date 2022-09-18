import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  title : String = "";
  desc : String = "";
  notes : any = [];
  localNotes : any = "";
  constructor(private router: Router, private http: HttpClient) {
   }

  ngOnInit(): void {
    // this.localNotes = localStorage.getItem('notes');
    this.http.get<any>('http://localhost:3000/getNotes').subscribe((result)=>{
      if(result.data){
        this.notes = result.data;
      }
    })
    // this.notes = JSON.parse(this.localNotes)
  }


  saveNotes(){
    let noteId = new Date().getMilliseconds();
    let newNote = {
      noteId : noteId,
      title : this.title,
      desc : this.desc
    }
    this.notes.push(newNote);
    console.log(this.notes);

    this.localNotes = JSON.stringify(this.notes);
    localStorage.setItem('notes', this.localNotes);
    
    this.router.navigate(['/']);
  }
}
