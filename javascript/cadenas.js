//Procesamiento de texto con Funciones propias.
//Inplementar funciones básicas para procesar un texto sin utilizar librerías o funciones predefinidas avanzadas de JavaScript.
//Reforzar el manejo de cadenas, ciclos y condicionales.


// ============== FUNCIONES DE ANÁLISIS (15 EJERCICIOS) ==============

// Ejercicio 1: Contar palabras
function contarPalabras(texto) {
    if (texto.length === 0) return 0;

    let contador = 1;
    for (let i = 0; i < texto.length - 1; i++) {
        if ((texto[i] === ' ' || texto[i] === '\n') && texto[i + 1] !== ' ' && texto[i + 1] !== '\n') {
            contador++;
        }
    }
    return contador;
}

// Ejercicio 2: Contar signos de puntuación
function contarSignosPuntuacion(texto) {
    let signos = '.,;:!?¿¡"';
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < signos.length; j++) {
            if (texto[i] === signos[j]) {
                contador++;
                break;

            }
        }
    }
    return contador;

}

// Ejercicio 3: Contar vocales
function contarVocales(texto) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (texto[i] === vocales[j]) {
                contador++;
                break;

            }
        }
    }
    return contador;

}

// Ejercicio 4: Contar consonantes
function contarConsonantes(texto) {
    let vocales = 'aeiouAEIOU';
    let letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        let esLetra = false;
        let esVocal = false;

        for (let j = 0; j < letras.length; j++) {
            if (texto[i] === letras[j]) {
                esLetra = true;
                break;

            }
        }

        for (let k = 0; k < vocales.length; k++) {
            if (texto[i] === vocales[k]) {
                esVocal = true;
                break;

            }
        }

        if (esLetra && !esVocal) {
            contador++;

        }
    }
    return contador;

}

// Ejercicio 5: Contar dígitos
function contarDigitos(texto) {
    let digitos = '0123456789';
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < digitos.length; j++) {
            if (texto[i] === digitos[j]) {
                contador++;
                break;

            }
        }
    }
    return contador;

}

// Ejercicio 6: Palabras con mayúscula inicial
function contarPalabrasMayuscula(texto) {
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let contador = 0;
    let inicioPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ' || texto[i] === '\n') {
            inicioPalabra = true;

        } else if (inicioPalabra) {
            for (let j = 0; j < mayusculas.length; j++) {
                if (texto[i] === mayusculas[j]) {
                    contador++;
                    break;

                }
            }
            inicioPalabra = false;

        }
    }
    return contador;

}

// Ejercicio 7: Palabras con minúscula inicial
function contarPalabrasMinuscula(texto) {
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let contador = 0;
    let inicioPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ' || texto[i] === '\n') {
            inicioPalabra = true;

        } else if (inicioPalabra) {
            for (let j = 0; j < minusculas.length; j++) {
                if (texto[i] === minusculas[j]) {
                    contador++;
                    break;

                }
            }
            inicioPalabra = false;

        }
    }
    return contador;

}

// Ejercicio 8: Contar párrafos
function contarParrafos(texto) {
    if (texto.length === 0) return 0;

    let contador = 1;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '\n') {
            contador++;

        }
    }
    return contador;

}

// Ejercicio 9: Invertir texto
function invertirTexto(texto) {
    let invertido = '';

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido = invertido + texto[i];

    }
    return invertido;

}

// Ejercicio 10: Contar caracteres
function contarCaracteres(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== '\n') {  // Si NO es salto de línea
            contador++;  // Lo contamos

        }
    }
    return contador;

}

/* function contarCaracteres(texto) {
    for (var i = 0; i < texto.length; i++) {
        console.log(texto[i]); // Mostrar cada carácter
    }
    return texto.length; // Retornar la longitud total del texto
} */

// Ejercicio 11: Buscar palabra
function buscarPalabra(texto, palabra) {
    if (palabra.length === 0) return false;

    for (let i = 0; i <= texto.length - palabra.length; i++) {
        let coincide = true;

        for (let j = 0; j < palabra.length; j++) {
            if (texto[i + j] !== palabra[j]) {
                coincide = false;
                break;

            }
        }

        if (coincide) {
            let antesValido = i === 0 || texto[i - 1] === ' ' || texto[i - 1] === '\n';
            let despuesValido = i + palabra.length === texto.length || texto[i + palabra.length] === ' ' || texto[i + palabra.length] === '\n';

            if (antesValido && despuesValido) {
                return true;

            }
        }
    }
    return false;

}

// Ejercicio 12: Contar carácter
function contarCaracter(texto, caracter) {
    let contador = 0;

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;

        }
    }
    return contador;

}

// Ejercicio 13: Posiciones pares
function contarPosicionesPares(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i = i + 2) {
        contador++;

    }
    return contador;

}

// Ejercicio 14: Posiciones impares
function contarPosicionesImpares(texto) {
    let contador = 0;

    for (let i = 1; i < texto.length; i = i + 2) {
        contador++;

    }
    return contador;

}

// Ejercicio 15: Agregar texto
function agregarAlInicio(texto, fragmento) {
    return fragmento + ' ' + texto;

}

function agregarAlFinal(texto, fragmento) {
    return texto + ' ' + fragmento;

}

// ============== FUNCIÓN PRINCIPAL ==============
function analizarTexto() {
    var editor = document.getElementById('textoEntrada');
    // Obtener el texto plano del editor
    var texto = editor.innerText || editor.textContent;
    var palabra = document.getElementById('palabraBuscar').value;
    var caracter = document.getElementById('caracterContar').value;
    var fragmento = document.getElementById('fragmentoAgregar').value;

    if (texto.length === 0) {
        alert('Escribe un texto para analizar');
        return;
    }

    var html = '<h3>📊 Resultados:</h3>';

    html += '<div>';
    html += '<span class="resultado-linea"><strong>Palabras:</strong> ' + contarPalabras(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Signos:</strong> ' + contarSignosPuntuacion(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Vocales:</strong> ' + contarVocales(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Consonantes:</strong> ' + contarConsonantes(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Dígitos:</strong> ' + contarDigitos(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Mayúscula inicial:</strong> ' + contarPalabrasMayuscula(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Minúscula inicial:</strong> ' + contarPalabrasMinuscula(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Párrafos:</strong> ' + contarParrafos(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Caracteres:</strong> ' + contarCaracteres(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Pos. pares:</strong> ' + contarPosicionesPares(texto) + '</span>';
    html += '<span class="resultado-linea"><strong>Pos. impares:</strong> ' + contarPosicionesImpares(texto) + '</span>';
    html += '</div>';

    html += '<div class="resultado-especial"><strong>Texto invertido:</strong> ' + invertirTexto(texto) + '</div>';

    if (palabra.length > 0) {
        var encontrada = buscarPalabra(texto, palabra);
        html += '<div class="resultado-especial"><strong>Palabra "' + palabra + '":</strong> ' +
            (encontrada ? '✅ SÍ encontrada' : '❌ NO encontrada') + '</div>';
    }

    if (caracter.length > 0) {
        html += '<div class="resultado-especial"><strong>Carácter "' + caracter + '":</strong> ' +
            contarCaracter(texto, caracter) + ' veces</div>';
    }

    if (fragmento.length > 0) {
        html += '<div class="resultado-especial"><strong>Al inicio:</strong> ' + agregarAlInicio(texto, fragmento) + '</div>';
        html += '<div class="resultado-especial"><strong>Al final:</strong> ' + agregarAlFinal(texto, fragmento) + '</div>';
    }

    document.getElementById('resultados').innerHTML = html;
    document.getElementById('resultados').style.display = 'block';
}
