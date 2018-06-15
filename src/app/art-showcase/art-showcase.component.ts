import { Component, OnInit } from '@angular/core';
import { ArtFeature } from './art-feature';
import { ART_FEATURES } from './mock-art';

@Component({
  selector: 'app-art-showcase',
  templateUrl: './art-showcase.component.html',
  styleUrls: ['./art-showcase.component.css']
})
export class ArtShowcaseComponent implements OnInit {
  art_features: ArtFeature[];
  constructor() { }

  ngOnInit() {
     this.art_features = ART_FEATURES;
  }
}
