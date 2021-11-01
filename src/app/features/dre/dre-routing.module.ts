import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@features/dre/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'test-case',
    loadChildren: () =>
      import('@features/dre/modules/test-case/test-case.module').then(m => m.TestCaseModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRERoutingModule { }
