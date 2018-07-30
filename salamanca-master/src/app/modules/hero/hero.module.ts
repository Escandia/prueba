import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { NgbCarouselConfig } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroComponent],
  providers: [NgbCarouselConfig]
})


export class HeroModule { 
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
