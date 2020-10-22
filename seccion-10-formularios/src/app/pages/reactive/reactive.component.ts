import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';


/**
 * Para el uso de validaciones en este tipo de formularios es importante los estados de los campos input (touched, dirty, etc)
 * Con el uso de estos conseguimos no marcar errores por defecto al cargar formulario vacío, mostrar errores al pulsar submit, etc
 */
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private validadores: ValidadoresService) {
    this.crearFormulario();
    this.cargarDatosFormulario();
    this.crearListener();
  }

  ngOnInit(): void {
  }

  // Get de los campos para comprobar si estos son validos
  get nombreNoValido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').dirty;
  }
  get apellidoNoValido(){
    return this.form.get('apellido').invalid && this.form.get('apellido').dirty;
  }
  get correoNoValido(){
    return this.form.get('correo').invalid && this.form.get('correo').dirty;
  }
  get usuarioNoValido(){
    return this.form.get('usuario').invalid && this.form.get('usuario').dirty;
  }
  get calleNoValida(){
    return this.form.get('direccion.calle').invalid && this.form.get('direccion.calle').dirty;
  }
  get ciudadNoValida(){
    return this.form.get('direccion.ciudad').invalid && this.form.get('direccion.ciudad').dirty;
  }
  get pass1NoValida(){
    return this.form.get('pass1').invalid && this.form.get('pass1').dirty;
  }
  get pass2NoValida(){
    const p1 = this.form.get('pass1');
    const p2 = this.form.get('pass2');
    //Comprobar que ambas contraseñas son iguales 
    return this.form.get('pass2').invalid && this.form.get('pass2').dirty || p1.value != p2.value;
  }

  //Gets

  get pasatiempos(){ //Con este get podré obtener el campo de tipo array desde la vista HTML y por lo tanto su contenido
    return this.form.get('pasatiempos') as FormArray;
  }

  /**
   * Metodo para inicializar el formulario
   */
  crearFormulario(){
    this.form = this.fb.group({
      nombre: ["",  [Validators.required, Validators.minLength(2)]], //Especificar validaciones
      apellido: ["", [Validators.required, Validators.minLength(2), this.validadores.noHerrera]],
      correo: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      usuario: ["", Validators.required, this.validadores.existeUsuario],  //En el 3 argumento se colocan los validadores asincronos
      pass1: ["",  [Validators.required, Validators.minLength(5)]], 
      pass2: ["",  [Validators.required, Validators.minLength(5)]],
      //Grupo de entradas
      direccion: this.fb.group({
        calle:['', Validators.required],
        ciudad:['', Validators.required]
      }),
      pasatiempos:this.fb.array([]),
    },{
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  //------------------------------------------------

  crearListener(){
    this.form.valueChanges.subscribe(f =>{
      console.log("sss");
    });

    this.form.statusChanges.subscribe(f =>{
      console.log(f);
    });
  }

  //------------------------------------------------

  /**
   * Metodo para cargar datos en el formulario
   */
  cargarDatosFormulario(){
    // this.form.setValue({
    //   nombre:"Angel",
    //   apellido:"Salas",
    //   correo:"angel@gmail.com",
    //   direccion:{
    //     calle:"Avd.Almanzora nº9",
    //     ciudad:"Tíjola",
    //   }
    // });

    //Si no queremos establecer todos los valores, podemos utilizar el metodo reset indicando solo los campos que queramos
    this.form.reset({
      nombre:"Angel",
      apellido:"Salas",
      correo:"angel@gmail.com",
      pass1:"123456",
      pass2:"123456",
      direccion:{
            calle:"Avd.Almanzora nº9",
            ciudad:"Tíjola",
          }
    });

    //Para agregar valores por defecto al 
    ['comer', 'dormir'].forEach(data =>{
      this.pasatiempos.push(this.fb.control(data));
    })

  }

  //------------------------------------------------

  /**
   * Metodo a ejecutar al hacer submit
   */
  guardar(){

    //Comprobar si el formulario es valido
    if(this.form.invalid){
      //Recorrer todos los inputs para marcarlos como tocados  (simular que el usuario ha introducido algo en el campo) para que se lancen las validaciones
      return Object.values(this.form.controls).forEach(control =>{
        
          control.markAsDirty();

          //Marcar como tocados tambien los controles de los grupos (grupos hijos como direccion en este caso)
          if(control instanceof FormGroup){
            Object.values(control.controls).forEach(control =>{
              control.markAsDirty();
            });
          }

      })
    }

    console.log(this.form);
    console.log(this.form.invalid)

    //Todo es válido, por lo que reseteamos todos los campos
    this.form.reset({
      nombre:"Sin Nombre",
    });

  }

  //-----------------------------------------------------------------------------------------------

  /**
   * Metodo para agregar un elemento al array del formulario
   */
  agregarPasatiempo(){
    //Llamada al get para obtener el pasatiempos
    this.pasatiempos.push(this.fb.control('Nuevo elemento', Validators.required));
  }

  /**
   * Metodo para eliminar un elemento del array del formulario
   * @param i 
   */
  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }

}
