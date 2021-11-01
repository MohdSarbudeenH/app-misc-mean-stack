import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RichTextEditorComponent } from '@shared/components/rich-text-editor/rich-text-editor.component';
import { TextAreaComponent } from '@shared/components/text-area/text-area.component';
import { RTEToggleService } from '@core/services/rte-toggle.service';

@Component({
  selector: 'app-shared-rte-toggle',
  templateUrl: './rte-toggle.component.html',
  styleUrls: ['./rte-toggle.component.scss'],
  providers: [RTEToggleService]
})
export class RteToggleComponent implements OnInit {
  @Input() public rteTitle: string;
  @Input() public showRTE = false;
  @Input() public editorContentExt: string;
  @Output() public rteEditorBlurExt = new EventEmitter<any>();

  constructor(private rteToggleService: RTEToggleService){
  }

  ngOnInit(): void {
    this.rteToggleService.showRTE = this.showRTE;
    this.rteToggleService.title = this.rteTitle;
    if (this.editorContentExt && this.editorContentExt.trim() !== '') {
      this.rteToggleService.setEditorContent(this.showRTE ? 'html' : 'text', this.editorContentExt);
    }
  }

  onEditorBluredExt(value): void {
    this.rteEditorBlurExt.emit(value);
  }


}
