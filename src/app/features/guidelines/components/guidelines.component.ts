import { Component, OnInit } from '@angular/core';
import { NavService } from '@core/services/nav.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {
  constructor(private navService: NavService) {
    navService.refreshLinks('guidelines');
  }

  ngOnInit(): void {
  }

}
