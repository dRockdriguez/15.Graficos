import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LineasComponent } from './components/lineas/lineas.component';

import { ChartsModule } from 'ng2-charts';
import { BarrasComponent } from './components/barras/barras.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LineasComponent,
    BarrasComponent,
    DonasComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
