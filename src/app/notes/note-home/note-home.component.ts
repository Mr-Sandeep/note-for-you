import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.css']
})
export class NoteHomeComponent implements OnInit {
  localNotes : any = "";
  notes : any = [];
  modalRef?: BsModalRef;
  note : any ={
    title : '',
    desc : ''
  }
  title = {title : "title of modal"}
  detailSpecificNote : any;
  editSpecificNote : any;
  constructor(private modalServ : BsModalService) { 
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

  openModal(template : TemplateRef<any>){
    this.note.desc = "";
    this.note.title = "";
    this.modalRef = this.modalServ.show(template, {
      animated: true
    });
  }

  saveNotes(){
    this.note.noteId = new Date().getMilliseconds()
    console.log("Save notes", this.note);
    this.notes.push(this.note);
    this.localNotes = JSON.stringify(this.notes);
    localStorage.setItem('notes', this.localNotes);
    this.modalRef?.hide();
  }

  openDetailModal(template : TemplateRef<any>, specifiedNote : any){
    this.detailSpecificNote = specifiedNote;
    this.modalRef = this.modalServ.show(template);
  }

  editNoteModal(template : TemplateRef<any>, specifiedEditNote : any){
    this.detailSpecificNote = '';
    this.modalRef?.hide();
    this.editSpecificNote = JSON.parse(JSON.stringify(specifiedEditNote));
    this.modalRef = this.modalServ.show(template)
    
  }

  saveEditNotes(editNote:any){
    console.log(editNote);
    let editLocalNotes : any = "";
    if(localStorage.getItem('notes') == null){
      editLocalNotes = "";
    }else{
      editLocalNotes = localStorage.getItem('notes');
      editLocalNotes = JSON.parse(editLocalNotes);
    }

    editLocalNotes.forEach((noteEle: any) => {
      if(noteEle.noteId == editNote.noteId){
        noteEle.title = editNote.title;
        noteEle.desc = editNote.desc;
      }
    });
    
    let stringifyEditLocalNotes = JSON.stringify(editLocalNotes)
    localStorage.setItem('notes', stringifyEditLocalNotes);

    if(localStorage.getItem('notes') == null){
      this.localNotes = "";
    }else{
      this.localNotes = localStorage.getItem('notes');
      this.notes = JSON.parse(this.localNotes);
    }

    this.modalRef?.hide();
  }
}
