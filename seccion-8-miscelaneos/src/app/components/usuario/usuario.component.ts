import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {

  constructor(private router:ActivatedRoute) {
    //Este es otro modo de obtener los parametros de una ruta sin un observable, no nos suscribimos a cambios, los obtenemos directamente
    console.log(router.snapshot.params)
  }


}
