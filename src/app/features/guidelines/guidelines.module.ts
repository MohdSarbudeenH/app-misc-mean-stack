import { NgModule } from '@angular/core';
import { GuidelinesComponent } from './components/guidelines.component';
import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NavService } from '@core/services/nav.service';


@NgModule({
    declarations: [
        GuidelinesComponent
    ],
    imports: [
        SharedModule,
        GuidelinesRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})

export class GuidelinesModule {
    constructor(private navService: NavService) {
        // first time set, important to specify here!
        navService.refreshLinks('guidelines');
    }
}
