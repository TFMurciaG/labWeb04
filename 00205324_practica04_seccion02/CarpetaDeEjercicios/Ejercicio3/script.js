function ordenar(arr) {
    const nuevoArray = [...arr];
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}
console.log(ordenar([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

function esPar(numero) {
    return numero % 2 === 0
}
console.log(esPar(7)); // false
console.log(esPar(10)); // true

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimientoB, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;

        if (altura >= alturaDeseada) {
            return dias;
        }

        altura -= velocidadDecrecimientoB;

    } return dias;
}
console.log(calcularDiasCrecimiento(5, 2, 10)); // 4 
