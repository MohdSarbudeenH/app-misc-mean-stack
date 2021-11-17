import { NgModule } from '@angular/core';
import { TestCaseComponent } from './components/test-case.component';
import { TestCaseRoutingModule } from './test-case-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TestCaseService } from './services/test-case-service';

@NgModule({
    declarations: [
        TestCaseComponent
    ],
    imports: [
        TestCaseRoutingModule,
        SharedModule,
    ],
    exports: [],
    providers: [TestCaseService],
    entryComponents: []
})

export class TestCaseModule {}
