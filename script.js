"use strict";
const queryBotones=document.querySelectorAll(".boton")
let numeroPregunta ;
let puntos=0
const queryPregunta=document.querySelector("#pregunta")
let queryPuntos = document.querySelector("#puntos span")
let queryPuntosSpam=document.querySelector("#puntos")
let queryBoton1Apagar=document.querySelector("#boton1")
let queryBoton2Apagar=document.querySelector("#boton2")
let queryBoton3Apagar=document.querySelector("#boton3")
let queryBoton4Apagar=document.querySelector("#boton4")
let acumulacion=[]



//////////////////////////////////////////////

function numeroAleatorio(){
    
    
    let num = Math.floor(Math.random()*49)
    
            
            if(acumulacion.includes(num))
            {
                console.log("se repite "+num);
                
                num = Math.floor(Math.random()*49)
            }
            else
            {
                acumulacion.push(num)

            }
        
        
        console.log(acumulacion);
    
        return numeroPregunta=num
        
    }
    //////////////////////////////////////////////////

    async function getData(ruta){

        const response = await fetch(ruta)
    
        const data = await response.json()
    
        return data
    }
    
    
      // Petición a archivo JSON

    
    const data =getData("./json.json")

    ///////////////////////////////
    

    async function preguntaAleatoria(){
        let arrayJson =await data//aqui tengo un array con el json
        console.log(arrayJson);
        numeroAleatorio()
        let pregunta =arrayJson[numeroPregunta]
        console.log(pregunta);
        
        pintarPregunta(pregunta)

    

    }
    ////////////////////////////////
    
    preguntaAleatoria()

    
    

    
    /////////////////////////////////////
    function pintarPregunta({question,answers})
    {
        console.log(question,answers);
        queryPregunta.textContent=question
        console.log(queryPregunta);
        
        for(let i=0;i<queryBotones.length;i++){
            
            queryBotones[i].textContent=answers[i]
        }


        
    }

    async function presBoton(evento){
        
        
        let textoRespuestas=evento.target.textContent
        let arrayJson =await data
        let pregunta =arrayJson[numeroPregunta]
        console.log(pregunta.correct);
    

        if(pregunta.correct===textoRespuestas)
        {
            console.log(pregunta.correct);
            console.log(acumulacion.length);
            puntos++
            queryPuntos.textContent=puntos
                    
        }
        if(acumulacion.length>10){

            queryPuntosSpam.textContent="PUNTUACION FINAL: " +puntos+"/50"
            apagarBoton()
            
        }    
        preguntaAleatoria()  
    }
    
    for(let i=0;i<queryBotones.length;i++)
    {
        queryBotones[i].addEventListener("click",presBoton)
    }
    
    
    //////////////////
    
































    function apagarBoton()
    {
        queryBoton1Apagar.disabled=true
        queryBoton2Apagar.disabled=true
        queryBoton3Apagar.disabled=true
        queryBoton4Apagar.disabled=true
    }
    function encenderBoton()
    {
        queryBoton1Apagar.disabled=false
        queryBoton2Apagar.disabled=false
        queryBoton3Apagar.disabled=false
        queryBoton4Apagar.disabled=false
        
    }

    






    

    




    
    

    

    







