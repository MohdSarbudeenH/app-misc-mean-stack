import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation, TemplateRef, Optional } from '@angular/core';
import Quill from 'quill';
import BlotFormatter from 'quill-blot-formatter';
import { RTEToggleService } from '@core/services/rte-toggle.service';

Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-shared-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RichTextEditorComponent implements OnInit {
  public editor;
  public editorOptions = {
    toolbar: [
      ['bold', 'italic', 'underline'],                                              // toggled buttons
      ['code-block'],                                                               // 'blockquote','strike'
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: new Array<any>() }, { background: new Array<any>() }],              // dropdown with defaults from theme
      [{ align: new Array<any>() }],
      ['image']                                                                     // remove formatting button
      // [{ size: ['small', false, 'large', 'huge'] }],                             // custom dropdown
      // [{ 'header': 1 }, { 'header': 2 }],                                        // custom button values
      // [{ 'script': 'sub' }, { 'script': 'super' }],                              // superscript/subscript
      // [{ 'indent': '-1' }, { 'indent': '+1' }],                                  // outdent/indent
      // [{ 'direction': 'rtl' }],                                                  // text direction
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      // [{ 'font': new Array<any>() }],
      // ['clean'],
      // ['link', 'image', 'video']                                                 // link and image, video
    ],
    blotFormatter: {
    },
    clipboard: {
      matchVisual: false
    }
  };

  public editorOptionsWOToolbar = {
    toolbar: false,
    blotFormatter: {
    },
    clipboard: {
      matchVisual: false
    }
  };

  @Input() public showToolbar = true;
  @Input() public rteHeaderTemplate: TemplateRef<any>;
  @Input() public editorContent: string;
  @Output() public rteEditorBlur = new EventEmitter<any>();

  constructor(@Optional() private rteToggleService?: RTEToggleService) {
  }

  ngOnInit(): void {
    if (this.rteToggleService) {
      this.rteToggleService.showRTE = true;
      this.editorContent = this.rteToggleService.getEditorContent();
    }
  }

  onEditorCreated(quill): void {
    this.editor = quill;
    this.editor.focus();
  }

  // onEditorFocused(editor): void {
  //   this.setEditorValue();
  // }

  onEditorBlured(editor): void {
    if (this.rteToggleService) {
      this.rteToggleService.setEditorContent('text', this.editor.getText().trim());
      this.rteToggleService.setEditorContent('html', this.editorContent); // this.editor.container.innerHTML;
    }
    this.rteEditorBlur.emit(this.editorContent);
  }


  //  onContentChanged({ quill, html, text }): void {
  //   this.isToolbarActive = false;
  //   this.editorOptions.toolbar = undefined;
  //   this.rteEditorBlur.emit(this.editorContent);
  //   console.log('quill content is changed!', quill, html, text);
  //   this.quillEditor.pasteHTML(currentValue);
  //   this.editorElem.children[0].innerHTML;
  //   this.quillEditor.getText();
  //   this.quillEditor.setText('');
  //  }

}
