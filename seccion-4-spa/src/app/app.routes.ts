import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent }, //Ruta con parametro
    { path: 'search/:text', component: SearchComponent }, //Ruta con parametro
    { path: '**', pathMatch:'full', redirectTo:'home'}, //Esta es la declaracion de pagina por defecto o cualquier entrada no valida
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);