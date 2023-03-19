// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona{
  readonly nombre:string;
  readonly apellido:string;
  private anioNac:number;

  constructor(nombre: string, apellido:string){
    this.nombre = nombre; 
    this.apellido = apellido;
  }
 
  public toString():string
  {
    return this.nombre + ' ' + this.apellido;
  }

  public edad(anioActual:number):number{
    return (anioActual - this.anioNac);
  }


}