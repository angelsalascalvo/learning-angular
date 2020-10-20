import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// RUTAS
import {APP_ROUTING} from './app.routes';

// SERVICIOS
import {HeroesService} from './services/heroes.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING //Agregar el archivo de rutas
  ],
  providers: [
    HeroesService //Agregar servicios aqui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
