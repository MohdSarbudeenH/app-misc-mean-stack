import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentWrapperComponent } from '@core/components/content-wrapper/content-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: ContentWrapperComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@features/hub/hub.module').then(m => m.HubModule)
      }
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
