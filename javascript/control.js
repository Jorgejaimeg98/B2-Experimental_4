// ============== VARIABLES GLOBALES ==============

var portapapeles = '';

// ============== FUNCIONES DE FORMATO ==============

function aplicarNegrita() {
    document.execCommand('bold', false, null);
}

function aplicarCursiva() {
    document.execCommand('italic', false, null);
}

function aplicarSubrayado() {
    document.execCommand('underline', false, null);
}

function convertirMayusculas() {
    var editor = document.getElementById('textoEntrada');
    var seleccion = window.getSelection();

    if (seleccion.toString().length > 0) {
        var rango = seleccion.getRangeAt(0);
        var textoSeleccionado = rango.toString();

        var textoMayus = '';
        var mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var minusculas = 'abcdefghijklmnopqrstuvwxyz';

        for (var i = 0; i < textoSeleccionado.length; i++) {
            var encontrado = false;
            for (var j = 0; j < minusculas.length; j++) {
                if (textoSeleccionado[i] === minusculas[j]) {
                    textoMayus = textoMayus + mayusculas[j];
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                textoMayus = textoMayus + textoSeleccionado[i];
            }
        }

        // Reemplazar el contenido seleccionado
        rango.deleteContents();
        rango.insertNode(document.createTextNode(textoMayus));
    } else {
        alert('Selecciona un texto para convertir a mayúsculas');
    }
}

function convertirMinusculas() {
    var editor = document.getElementById('textoEntrada');
    var seleccion = window.getSelection();

    if (seleccion.toString().length > 0) {
        var rango = seleccion.getRangeAt(0);
        var textoSeleccionado = rango.toString();

        var textoMinus = '';
        var mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var minusculas = 'abcdefghijklmnopqrstuvwxyz';

        for (var i = 0; i < textoSeleccionado.length; i++) {
            var encontrado = false;
            for (var j = 0; j < mayusculas.length; j++) {
                if (textoSeleccionado[i] === mayusculas[j]) {
                    textoMinus = textoMinus + minusculas[j];
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                textoMinus = textoMinus + textoSeleccionado[i];
            }
        }

        // Reemplazar el contenido seleccionado
        rango.deleteContents();
        rango.insertNode(document.createTextNode(textoMinus));
    } else {
        alert('Selecciona un texto para convertir a minúsculas');
    }
}

function cortarTexto() {
    var seleccion = window.getSelection();

    if (seleccion.toString().length > 0) {
        portapapeles = seleccion.toString();
        document.execCommand('cut');
        alert('Texto cortado al portapapeles');
    } else {
        alert('Selecciona un texto para cortar');
    }
}

function copiarTexto() {
    var seleccion = window.getSelection();

    if (seleccion.toString().length > 0) {
        portapapeles = seleccion.toString();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } else {
        alert('Selecciona un texto para copiar');
    }
}

function pegarTexto() {
    if (portapapeles.length > 0) {
        document.execCommand('insertText', false, portapapeles);
    } else {
        alert('No hay texto en el portapapeles');
    }
}