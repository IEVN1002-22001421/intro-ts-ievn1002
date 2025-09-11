function sumar(a:number, b:number): number
{
    return a+b
}
const resultado=sumar(4,3);
console.log(resultado);

function multiplicar (c:number, base:number=5): number{
    return c*base;
}
const resultado2=multiplicar(3,3);
console.log(resultado2)



//funciones de flecha

const addNumberArrow = (a: number, b: number): string => {
  return `${a + b}`;
};
interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}

function mostrarMascotas(mascota: Mascotas, x: number): void {
    mascota.edad += x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}

const nuevaMascota: Mascotas={
    nombre: "firulais",
    
    edad: 5,
    raza: "pastor aleman",
    sexo:"femenino",
    vacunado: true,
    mostrarEdad() {
        console.log(`la edad de ${this.nombre} es ${this.edad}`);
    }
}

mostrarMascotas(nuevaMascota, 2);

