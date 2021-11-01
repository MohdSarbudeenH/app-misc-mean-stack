import { Component, OnInit } from '@angular/core';
import { Card } from '@core/models/card.model';
import { NavService } from '@core/services/nav.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  public cards: Array<Card>;
  constructor(private navService: NavService) {
    navService.refreshLinks('hub');
  }

  ngOnInit(): void {
    this.cards = [
      {
        id: 1,
        title: 'DRE',
        subTitle: 'Defect Removal Efficiency',
        description: 'Test Case Suite: UT, FAT, IST, REG, PROD,..',
        hint: 'Capture test cases',
        url: '/dre',
        img: ''
      },
      {
        id: 2,
        title: 'Guidelines',
        subTitle: 'App Guidelines',
        description: 'Best Practices, Coding standards,..',
        hint: 'Refer app guidelines',
        url: '/guidelines',
        img: ''
      },
    ];
  }
}
