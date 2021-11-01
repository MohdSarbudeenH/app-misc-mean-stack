import { Component, OnInit } from '@angular/core';
import { NavService } from '@core/services/nav.service';

@Component({
  selector: 'app-dre-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private navService: NavService) {
    navService.refreshLinks('dre');
  }
  ngOnInit(): void {
  }

}
