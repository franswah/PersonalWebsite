import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtShowcaseComponent } from './art-showcase/art-showcase.component';
import { ArtService } from './art.service';


@NgModule({
  declarations: [
    AppComponent,
    ArtShowcaseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
     ArtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
