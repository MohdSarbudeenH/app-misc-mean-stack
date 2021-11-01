import { NgModule } from '@angular/core';
import { HubComponent } from './components/hub.component';
import { HubRoutingModule } from './hub-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NavService } from '@core/services/nav.service';


@NgModule({
    declarations: [
        HubComponent
    ],
    imports: [
        SharedModule,
        HubRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})

export class HubModule {
    constructor(private navService: NavService) {
        // first time set, important to specify here!
        navService.refreshLinks('hub');
    }
}
