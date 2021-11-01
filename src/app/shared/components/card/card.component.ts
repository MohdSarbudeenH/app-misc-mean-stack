import { Component, OnInit, Input } from '@angular/core';
import { Card } from '@core/models/card.model';

@Component({
    selector: 'app-shared-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
    constructor() { }

    @Input() public cards: Array<Card>;

    ngOnInit(): void {
    }
}
