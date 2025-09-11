export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 1500
}

const tablet: Producto = {
    desc: "Ipad Air",
    precio: 3500
}

function calcularISV(productos: Producto[]): number {
    let total = 0;
    for (const producto of productos) {
        total += producto.precio;
    }
    return total * 0.15;
}

const articulos = [telefono, tablet];
const isv = calcularISV(articulos);
console.log("ISV:", isv);

export function calcularISV2(productos: Producto[]): [number, number] {
    let total = 0;
    for (const producto of productos) {
        total += producto.precio;
    }
    return [total, total * 0.15];
}

const [total1, isv2] = calcularISV2(articulos);
console.log("total:", total1);
console.log("isv2:", isv2);
