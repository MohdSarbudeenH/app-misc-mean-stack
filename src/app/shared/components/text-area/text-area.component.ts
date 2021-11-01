import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation, TemplateRef, AfterViewInit, Optional } from '@angular/core';
import { RTEToggleService } from '@core/services/rte-toggle.service';

@Component({
  selector: 'app-shared-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextAreaComponent implements OnInit, AfterViewInit {
  public canFocus = true;
  @Input() public headerTemplate: TemplateRef<any>;
  @Input() public editorContent: string;
  @Output() public textEditorBlur = new EventEmitter<any>();

  constructor(@Optional() private rteToggleService?: RTEToggleService) {
  }

  ngOnInit(): void {
    if (this.rteToggleService) {
      this.rteToggleService.showRTE = false;
      this.editorContent = this.rteToggleService.getEditorContent();
    }
  }

  ngAfterViewInit(): void {
    this.canFocus = true;
  }

  // onEditorFocused(editor): void {
  //  this.setEditorValue();
  // }

  onEditorBlured(editor): void {
    if (this.rteToggleService) {
      this.rteToggleService.setEditorContent('text', this.editorContent);
    }
    this.textEditorBlur.emit(this.editorContent);
  }
}
