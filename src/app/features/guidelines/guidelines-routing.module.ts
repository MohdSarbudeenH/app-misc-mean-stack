import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidelinesComponent } from './components/guidelines.component';

export const routes: Routes = [
  {
    path: '',
    component: GuidelinesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule {}
