'use strict';

/*
 * Medina. Jimena
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };



//Validaciones

function validacionesString(cadena) {
    if (cadena != null) {
        cadena = cadena.trim(); 
    }
    
    if (cadena == "" || cadena == null || cadena == undefined) {
        alert("Ingresa por favor otra vez el dato.")
        return false;
    }
    return true;
}

function validarCodigo(codigo) {
    if (ArregloDeDiscos.length > 0) {
        for (let disco of ArregloDeDiscos) {
            if (disco.id == codigo) {
                alert("Ingresa de nuevo el ID que corresponde al disco cargado");
                return false;
            }
        }
    }
    if (codigo <= 0 || codigo > 999 || isNaN(codigo) || codigo == "") {
        alert("Ingresa el identificador del disco que sea válido")
        return false
    }
    return true;
}

function validacionDuracion(duracion) {
    if (duracion < 0 || duracion > 7200 || isNaN(duracion)) {
        alert("Ingresa de nuevo la duración del disco");
       return false;
    }
    return true;
}


let ArregloDeDiscos = [];

const Cargar = () => {

    let discoNuevo = {};
    do {
        discoNuevo.nombre = prompt("Ingresa de nuevo el nombre del  disco");
    } while (!validacionesString(discoNuevo.nombre));
    do {
        discoNuevo.banda = prompt("Ingresa de nuevo la banda del disco");
    } while (!validacionesString(discoNuevo.banda))
    do {
        discoNuevo.id = parseInt(prompt("Ingresa el identificador del disco"));
    } while (!validarCodigo(discoNuevo.id));
    discoNuevo.pistas = [];

    do {
        let pistasDelDisco = {};
        do {
            pistasDelDisco.nombreCancion = prompt("Ingresa el nombre de la canción");
        } while (!validacionesString(pistasDelDisco.nombreCancion));

        do {
            pistasDelDisco.duracion = parseInt(prompt("Ingresa la duración de la canción"));
        } while (!validacionDuracion(pistasDelDisco.duracion));

        discoNuevo.pistas.push(pistasDelDisco);

    } while (confirm("Deseas ingresar otra canción?"));

    ArregloDeDiscos.push(discoNuevo);


};

 
const Mostrar = () => {
    
    let contenedor = document.getElementById('info');
    
   
        contenedor.innerHTML = "";
        let duracionTotal = 0;
        let duracionPromedio = 0;
        let htmlContenedor = "<p class='gray'><strong>Cantidad de discos cargados:</strong>" + ArregloDeDiscos.length
        htmlContenedor += "<ul>";
        for (let discoNuevo of ArregloDeDiscos) {

            let html = `<li>
                  <div>                               
                     <p><strong>Disco:</strong> ${discoNuevo.nombre}</p>                                  
                    <p><strong>Banda:</strong> ${discoNuevo.banda}</p>                                   
                    <p><strong>ID:</strong> ${discoNuevo.id}</p>                                                             
                                    <ol>`                                     
            let pistas = discoNuevo.pistas;
            let contadorTiempoDisco = 0;
            for (let pistasDelDisco of pistas) {
                let color = "";
                if (pistasDelDisco.duracion > 180) { 
                    color = "red";
                }
                contadorTiempoDisco += pistasDelDisco.duracion
            html +=            `
                                        <li><p>${pistasDelDisco.nombreCancion}</p>
                                            <p class="${color}" > Duración: ${pistasDelDisco.duracion} seg. </p>
                                            </li>                                           
                                    `
                    
            }
            duracionTotal += contadorTiempoDisco;
            html += `
            <p><strong>Duracion Total del disco:</strong> ${contadorTiempoDisco}seg
            </div>
            </li>`;
            htmlContenedor += html;
        }


        htmlContenedor += `<ul>`;

        if(duracionTotal && ArregloDeDiscos.length > 0) {
            duracionPromedio = duracionTotal/ArregloDeDiscos.length
            htmlContenedor += `<p class='gray'><strong>Duración Promedio:</strong> ${duracionPromedio}`;
        }

        contenedor.innerHTML = htmlContenedor
       
};
