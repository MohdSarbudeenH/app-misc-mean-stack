import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '@core/guard/auth.guard';
import { NoAuthGuard } from '@core/guard/no-auth.guard';
import { throwIfAlreadyLoaded } from '@core/guard/module-import.guard';

// import { TokenInterceptor } from '@app/interceptor/token.interceptor';

// import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    HttpClientModule,
    // NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    // NoAuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
