import { OnInit, ElementRef, Input, Directive } from '@angular/core';

@Directive({
    selector: '[appFocusMe]'
})
export class FocusMeDirective implements OnInit {

    @Input('appFocusMe') isFocused: boolean;

    constructor(private hostElement: ElementRef) {
    }

    ngOnInit(): void {
        if (this.isFocused) {
            this.hostElement.nativeElement.focus();
        }
    }
}
