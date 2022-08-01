import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { MobileModule } from './mobile/mobile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GifsModule,
    MobileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
