import{ Component } from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})

export class BodyComponent{
    //Flag para ocultar y mostrar el mensaje en el html
    mostrar = true;
    frase:any = {
        mensaje:"Un gran poder requiere una gran responsabilidad",
        autor:"Ben parker"
    }

    personajes:string[] = ['Spiderman', 'Venon', 'Octopus', 'Duende verde'];

}