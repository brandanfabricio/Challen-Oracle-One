const cifrado = document.getElementById('cifrado');
const resultado = document.getElementById('resultado')

const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9"];
const llaves = ["enter","imes","ai","ober","ufat"]
const textAreas = document.getElementById('Texarea')
const btn = document.getElementById('btn')
const  enc = document.getElementById('enc');
const des = document.getElementById('des');
const cesar = document.getElementById('cesar')
const ascii =  document.getElementById('ascii')
const alura = document.getElementById('alura')
const contenedor = document.querySelector('.contenedor');
const cerrar = document.querySelector('.cerrar')
const copiar = document.getElementById('copiar')

import {encriptandoCesar,EncriptadoAssi,encriptandoAlura} from './encriptando.js'
import {DescriptadorAscii,DesecriptadorCesar,DescriptadorAlura} from  './desecriptar.js'
    



    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const datos = [...textAreas.value.toUpperCase()];
        const ass = datos.join('').split(' ')
         
        if(datos.length > 0){
        contenedor.style.display = 'flex' 

            if(cesar.checked){
                if(enc.checked){

                    return encriptandoCesar(alfabeto,0,datos)
        
                }
                if(des.checked){

                    return DesecriptadorCesar(alfabeto,0,datos)
                }
            }
           
            if(ascii.checked){
                if(enc.checked){

                   return EncriptadoAssi(datos)
               
                }
    
             if(des.checked){
                   return DescriptadorAscii(ass)
                }
                
            }


            
            if(alura.checked){
                
                if(enc.checked){
                        
                    return encriptandoAlura(datos,llaves,0)
                }
                if(des.checked){
                    return DescriptadorAlura(datos,0)
                }
    
            }
        }else{
            alert('Escribir los datos que desea encriptar o desemcriptar')
        }

    })


        
    cerrar.addEventListener('click',()=>{
        contenedor.style.display = 'none' 
        resultado.innerHTML =''
    })


copiar.addEventListener('click',()=>{
    let text='';
     text = resultado.textContent.trim()
    contenedor.style.display = 'none' 
    resultado.innerHTML =''
    textAreas.value = text

})


    






