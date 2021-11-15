import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';

// layout components
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { ContentWrapperComponent } from '@core/components/content-wrapper/content-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from '@core/services/api.service';
import { NavService } from '@core/services/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentWrapperComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
