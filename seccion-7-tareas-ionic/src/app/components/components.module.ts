import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { FiltroCompletadoPipe } from '../pipes/filtro-completado.pipe';



@NgModule({
  declarations: [
    ListasComponent,
    FiltroCompletadoPipe
  ],
  exports: [
    ListasComponent,
    FiltroCompletadoPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
