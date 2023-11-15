import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JugadorItemComponent } from './components/jugador-item/jugador-item.component';
import { EquipoItemComponent } from './components/equipo-item/equipo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JugadorItemComponent,
    EquipoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
