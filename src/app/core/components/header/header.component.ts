import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NavService } from '@core/services/nav.service';
import { NavItem } from '@core/models/nav-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy  {
  private navSubscription: any;
  public navItems: NavItem[];
  constructor(private navService: NavService) {
  }

  ngOnInit(): void {
    this.navSubscription = this.navService.nav$.subscribe(
      navObs => {
            this.navItems = navObs.items;
      });
  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.navSubscription.unsubscribe();
  }
}
