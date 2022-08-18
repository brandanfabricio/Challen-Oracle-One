const resultado = document.getElementById('resultado')
const textAreas = document.getElementById('Texarea')




export  function DesecriptadorCesar(alfabeto,siguienteIndex, datos) {
       if(datos.length === siguienteIndex) return;
       
       textAreas.value =  textAreas.value.substring(1);
           const span =  document.createElement('span');
           resultado.appendChild(span);
           const char = datos[siguienteIndex];
           span.innerHTML = alfabeto.includes(char) ? alfabeto[(alfabeto.indexOf(char) - 1) % alfabeto.length].toLowerCase(): char ;
   
           DesecriptadorCesar(alfabeto,siguienteIndex +1 , datos)
}

export function DescriptadorAscii(datos){

    datos.map((x)=>{
        const span =  document.createElement('span');
        resultado.appendChild(span);

            span.innerHTML += " " + String.fromCharCode( parseInt(x))
         
        })

}

export function DescriptadorAlura(datos,sig){
    if(datos.length === sig) return;

         let letras = ['e','i','o','u','E','I','O','U','A','a'];

     const span =  document.createElement('span');
       resultado.appendChild(span);
            let contador=0; 
            while(contador < datos.length){

                let char = datos[contador].toLowerCase()

                if(letras.includes(char)){

                    switch(char){
                        case 'e':
                            span.innerHTML +=char
                            contador = contador + 4; 
                            break
                        case 'a':
                            span.innerHTML +=char
                            contador = contador + 1; 
                            break
                        case 'i':
                            span.innerHTML +=char
                             contador = contador + 3; 
                            break
                        case 'o':
                             span.innerHTML +=char
                             contador = contador + 3; 
                             break
                        case 'u':
                            span.innerHTML +=char
                            contador = contador + 3; 
                            break
                    }

                }else{

                    span.innerHTML +=char

                }
                contador++

            }
}


