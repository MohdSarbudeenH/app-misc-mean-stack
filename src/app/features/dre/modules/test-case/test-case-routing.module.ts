import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCaseComponent } from './components/test-case.component';

const routes: Routes = [
  {
    path: '',
    component: TestCaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCaseRoutingModule {}
