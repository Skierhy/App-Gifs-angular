import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { SharedModule } from '../shared/shared.module';
import { GifsModule } from '../gifs/gifs.module';

@NgModule({
  declarations: [NavbarMobileComponent],
  exports: [NavbarMobileComponent],
  imports: [CommonModule, SharedModule, GifsModule],
})
export class MobileModule {}
