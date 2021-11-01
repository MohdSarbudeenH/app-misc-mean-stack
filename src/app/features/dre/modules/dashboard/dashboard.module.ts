import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})

export class DashboardModule {}
