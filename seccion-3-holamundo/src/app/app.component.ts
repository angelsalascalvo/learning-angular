import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Es una clase normal con un decorador que le permite a angular decirle que esto es un componente en particular
//que podrá se inyectado en un archivo html
export class AppComponent {
  title = 'my-app';
  nombre = "Ángel";
  apellido = "Salas";
}
