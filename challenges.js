// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo

     let suma = 0;
     for (let i = 0; i < arreglo.length; i++) {
         suma += arreglo[i];
     }
     return suma;

}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo

    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares

    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto

    let vocales = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a' || texto[i].toLowerCase() === 'e' || texto[i].toLowerCase() === 'i' || texto[i].toLowerCase() === 'o' || texto[i].toLowerCase() === 'u') {
            vocales++;
        }
    }
    return vocales;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso

    let invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }
    return invertido;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto

    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados

    let unicos = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (unicos.indexOf(arreglo[i]) === -1) {
            unicos.push(arreglo[i]);
        }
    }
    return unicos;
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no

    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return texto === textoInvertido;
}