import { NgModule } from '@angular/core';
import { DRERoutingModule } from './dre-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NavService } from '@core/services/nav.service';

@NgModule({
    declarations: [
    ],
    imports: [
        DRERoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})

export class DREModule {
    constructor(private navService: NavService) {
        // first time set, important to specify here!
        navService.refreshLinks('dre');
    }
}
