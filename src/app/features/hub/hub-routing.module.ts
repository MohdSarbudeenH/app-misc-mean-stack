import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HubComponent } from './components/hub.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HubComponent,
  },
  {
    path: 'dre',
    loadChildren: () =>
      import('@features/dre/dre.module').then(m => m.DREModule)
  },
  {
    path: 'guidelines',
    loadChildren: () =>
      import('@features/guidelines/guidelines.module').then(m => m.GuidelinesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HubRoutingModule {}
