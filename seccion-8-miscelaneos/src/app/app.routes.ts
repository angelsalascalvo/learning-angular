import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

//Rutas hijas
import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';

const app_routes:Routes =[
    {path:'home', 'component':HomeComponent},

    {
        path:'usuario/:id', //Pasando el id por parametro
        'component':UsuarioComponent,
        //Rutas hijas a esta, se han extraido en un fichero externo para mejorar la lectura
        children: USUARIOS_ROUTES
    },

    {path:'**', pathMatch:'full', redirectTo:'home'}
];
export const APP_ROUTING = RouterModule.forRoot(app_routes)