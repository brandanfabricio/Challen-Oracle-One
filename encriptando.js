const resultado = document.getElementById('resultado')
const textAreas = document.getElementById('Texarea')



export function encriptandoCesar(alfabeto,siguienteIndex,datos){
    if(datos.length === siguienteIndex) return;
    
    textAreas.value =  textAreas.value.substring(1);
        const span =  document.createElement('span');
        resultado.appendChild(span);
        const char = datos[siguienteIndex];

        span.innerHTML = alfabeto.includes(char) ? alfabeto[(alfabeto.indexOf(char) + 1) % alfabeto.length].toLowerCase()  : char ;

        encriptandoCesar(alfabeto,siguienteIndex +1 , datos)
        
}


export function EncriptadoAssi(datos){
    datos.map(x=>{
        const span =  document.createElement('span');
        resultado.appendChild(span);
        span.innerHTML += " " + x.charCodeAt()
    })
}


export function encriptandoAlura(datos,llaves,sig){

        if(datos.length === sig) return ;
    let letras = ['e','i','o','u','E','I','O','U','A','a'];

     
     const span =  document.createElement('span');
     resultado.appendChild(span);
     const char = datos[sig]
     span.innerHTML = letras.includes(char) ? conver(char.toLowerCase(),llaves) : char.toLowerCase();

     encriptandoAlura(datos,llaves,sig +1)
     
     
     
     
    }

function conver(char,llaves){
    switch(char){

        case 'a':
            return llaves[2]
        case 'e':
             return llaves[0]
        case 'i':
            return llaves[1]
        case 'o':
            return llaves[3]
         case 'u':
             return llaves[4]

    }

}