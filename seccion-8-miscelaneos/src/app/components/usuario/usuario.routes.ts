import { Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';

export const USUARIOS_ROUTES:Routes =[
    {path:'nuevo', 'component':UsuarioNuevoComponent},
    {path:'editar', 'component':UsuarioEditarComponent},
    {path:'detalle', 'component':UsuarioDetalleComponent},
    {path:'**', pathMatch:'full', redirectTo:'nuevo'} //Path por defecto dentro de este grupo de rutas hijas
];
