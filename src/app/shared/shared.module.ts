import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { MaterialModule } from './material.module';

// Components
import { QuillModule } from 'ngx-quill';
import { CardComponent } from '@shared/components/card/card.component';
import { RichTextEditorComponent } from '@shared/components/rich-text-editor/rich-text-editor.component';
import { RteToggleComponent } from '@shared/components/rte-toggle/rte-toggle.component';
import { TextAreaComponent } from '@shared/components/text-area/text-area.component';

// Directives
import { FocusMeDirective } from '@shared/directives/focus-me.directive';



@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    UiSwitchModule,
    MaterialModule
  ],
  declarations: [
    CardComponent,
    RichTextEditorComponent,
    RteToggleComponent,
    TextAreaComponent,
    FocusMeDirective
  ],
  exports: [
    CommonModule,
    // FormsModule,
    QuillModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    UiSwitchModule,
    MaterialModule,

    CardComponent,
    RichTextEditorComponent,
    RteToggleComponent,
    TextAreaComponent,
    FocusMeDirective
  ]
})
export class SharedModule {}
