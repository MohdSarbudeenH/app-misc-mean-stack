import { Component } from '@angular/core';
import { NavService } from '@core/services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-misc';
  constructor(private navService: NavService) {
    this.navService.fetchModule();
  }
}
