import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editorText = '';

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    /*console.log(' editor got changed ', event);*/
    this.editorText = event['editor']['root']['innerHTML'];
  }

  myClickFunction(event) { 
    console.log(this.editorText);
 }

}
