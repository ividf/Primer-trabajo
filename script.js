"use strict";
const queryBotones=document.querySelectorAll(".boton")
let numeroPregunta ;
let puntos=0
let queryPuntos = document.querySelector("#puntos span")
console.log(queryPuntos);

let acumulacion=[]

function numeroAleatorio(){
        let num = Math.floor(Math.random()*49)
    
        return numeroPregunta=num
        
    }

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
    
    
    const queryPregunta=document.querySelector("#pregunta")

    
    /////////////////////////////////////
    function pintarPregunta({question,answers}){
        console.log(question,answers);
        queryPregunta.textContent=question
        console.log(queryPregunta);
        for(let i=0;i<queryBotones.length;i++){
            console.log(queryBotones[i]);
            console.log(answers[i]);
            queryBotones[i].textContent=answers[i]
        }


        
    }

    async function presBoton(evento){
        
        let textoRespuestas=evento.target.textContent
        let arrayJson =await data//aqui tengo un array con el json
        let pregunta =arrayJson[numeroPregunta]
        console.log(pregunta.correct);




        if(pregunta.correct===textoRespuestas)
        {
            puntos++
            queryPuntos.textContent=puntos
        }
        preguntaAleatoria()
        
        

    
        
        
    }
   for(let i=0;i<queryBotones.length;i++){
       queryBotones[i].addEventListener("click",presBoton)
   }
    
  
    


    

    




    
    

    

    







