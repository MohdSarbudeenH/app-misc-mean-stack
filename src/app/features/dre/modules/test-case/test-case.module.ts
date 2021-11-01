import { NgModule } from '@angular/core';
import { TestCaseComponent } from './components/test-case.component';
import { TestCaseRoutingModule } from './test-case-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        TestCaseComponent
    ],
    imports: [
        TestCaseRoutingModule,
        SharedModule,
    ],
    exports: [],
    providers: [],
    entryComponents: []
})

export class TestCaseModule {}
