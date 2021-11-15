import { Injectable } from '@angular/core';
import { RTEToggle } from '../models/rte-toggle.model';


@Injectable()
export class RTEToggleService implements RTEToggle {
    constructor() { }

    public title: string;
    public showRTE: boolean;
    public editorContent: string;
    public editorContentText: string;
    public editorContentHTML: string;

    getEditorContent(): string {
        if (this.showRTE) {
            if ((!this.editorContentHTML || this.editorContentHTML.trim() === '') && (this.editorContentText && this.editorContentText.trim() !== '')) {
                this.editorContentHTML = this.editorContentText;
            }
            this.editorContent = this.editorContentHTML;
        } else {
            this.editorContent = this.editorContentText;
        }
        return this.editorContent;
    }

    setEditorContent(type: string, editorContentVal: string): string {
        if (!editorContentVal && !type) {
            return;
        }
        if (type === 'text') {
            this.editorContentText = editorContentVal;
        } else if (type === 'html') {
            this.editorContentHTML = editorContentVal;
        }
    }

}
