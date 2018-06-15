import { Component } from '@angular/core';
import { DisplayableImage } from '../model/DisplayableImage';

@Component({ selector: 'app-carousel-basic', templateUrl: './carousel-basic.html' })
export class NgbdCarouselBasicComponent {

   constructor(images: Array<DisplayableImage>) {}
}
