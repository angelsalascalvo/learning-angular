import{Component} from '@angular/core';

//Usaremos el decorador para indicar a angular que esto es un componente
@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
    //template: `<h1>Hola Mundo</h1>` //Con esta directiva podemos agregar directamente el código HTML que especificamos entre comillas
})
export class HeaderComponent{

}