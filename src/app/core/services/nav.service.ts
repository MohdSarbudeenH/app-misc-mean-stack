import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Nav } from '../models/nav.model';
import { ApiService } from './api.service';


@Injectable()
export class NavService {
  private navs: Nav[];
  private nav: Nav;
  private modules: Nav[];
  public navSource = new BehaviorSubject<Nav>({ feature: '', items: [] });
  public nav$ = this.navSource.asObservable();

  constructor(private apiService: ApiService) {
  }

  fetchModule(): void {
    if (this.modules && this.modules.length > 0) {
      return;
    }

    this.apiService.get('/module').subscribe(mods => {
      if (mods && mods.length > 0) {
        this.modules = [];
        mods.forEach((mod) => {
          if (mod.name) {
            var nav: Nav = {
              feature: mod.name,
              items: mod.items
            }
            this.modules.push(nav);
          }
        });
      }
    }), err => {
      console.log('Error fetching modules');
    }
  }

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
    if (feature) {
      let navs: Nav[] = this.modules.filter(val => val.feature == feature);
      if (navs && navs.length > 0) {
        const nav: Nav = navs[0];
        return nav;
      } else {
        const defNav: Nav = {
          feature: '',
          items: []
        };
        return defNav;
      }
    }
  }
}
