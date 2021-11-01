import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Nav } from '../models/nav.model';


@Injectable({
  providedIn: 'root'
})
export class NavService {
  private navs: Nav[];
  private nav: Nav;
  public navSource = new BehaviorSubject<Nav>({ feature: '', items: [] });
  public nav$ = this.navSource.asObservable();

  constructor() { }

  setNav(navsVal: Nav): void {
    if (navsVal) {
      this.nav = navsVal;
      this.navSource.next(navsVal);
    }
  }

  getNav(): Nav {
    return this.nav;
  }

  refreshLinks(feature: string): void {
    if (feature) {
      if (this.nav && feature === this.nav.feature) {
        return;
      }
      if (this.navs && this.navs.length > 0) {
        const nav = this.navs.find((item) => item.feature === feature);
        if (nav) {
          this.setNav(nav);
        } else {
          const hubNav = this.selectNav(feature);
          this.navs.push(hubNav);
          this.setNav(hubNav);
        }
      } else {
        const hubNav = this.selectNav(feature);
        this.navs = new Array<Nav>();
        this.navs.push(hubNav);
        this.setNav(hubNav);
      }
    }
  }

  selectNav(feature: string): Nav {
    switch (feature) {
      case 'hub':
        const hubNav: Nav = {
          feature: 'hub',
          items: []
        };
        return hubNav;
      case 'dre':
        const dreNav: Nav = {
          feature: 'dre',
          items: [
            {
              id: 1,
              name: 'Dashboard',
              url: '/dre/dashboard',
              img: ''
            },
            {
              id: 2,
              name: 'Release',
              url: '/dre/release',
              img: ''
            },
            {
              id: 3,
              name: 'PCR',
              url: '/dre/pcr',
              img: ''
            },
            {
              id: 4,
              name: 'Test Case',
              url: '/dre/test-case',
              img: ''
            }
          ]
        };
        return dreNav;
      case 'guidelines':
        const guidelinesNav: Nav = {
          feature: 'guidelines',
          items: [
            {
              id: 1,
              name: 'Guidelines',
              url: '/guidelines',
              img: ''
            }
          ]
        };
        return guidelinesNav;
      default:
        const defNav: Nav = {
          feature: '',
          items: []
        };
        return defNav;
    }
  }
}
