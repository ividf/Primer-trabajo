"use strict";
 function numeroAleatorio(){
        let num = Math.floor(Math.random()*49)
        let acumulacion=[]
    
        return num
        
    }

    async function getData(ruta){
        const response = await fetch(ruta)
    
        const data = await response.json()
    
        return data
    }
    
    
      // Petición a archivo JSON
   
    
    const data =getData("./json.json")

    
    /* let datos =usuariosData.then(question => console.log(question[numeroAleatorio()].question)) */

    async function preguntaAleatoria(){
        let arrayJson =await data//aqui tengo un array con el json
        console.log(arrayJson);
        let nAleatorio=numeroAleatorio()//guardo en una varaible un numero aleatorio para usar despues
        //generar las preguntas y respuestas
        let preguntaAle =(arrayJson[nAleatorio].question)
        console.log(preguntaAle);
        let respuesta1=(arrayJson[nAleatorio].answers[0])
        let respuesta2=(arrayJson[nAleatorio].answers[1])
        let respuesta3=(arrayJson[nAleatorio].answers[2])
        let respuesta4=(arrayJson[nAleatorio].answers[3])
        let respuestaCorrecta=(arrayJson[nAleatorio].correct)

        console.log(respuesta1);
        console.log(respuesta2);
        console.log(respuesta3);
        console.log(respuesta4);
        console.log(respuestaCorrecta);

        //PONER LAS PREGUNTAS Y RESPUESTAS EN LOS DIVS
        const queryPregunta=document.querySelector("#pregunta")
        console.log(queryPregunta);
        queryPregunta.textContent=preguntaAle
        console.log(queryPregunta);

        const queryRespuesta1=document.querySelector("#boton1")
        const queryRespuesta2=document.querySelector("#boton2")
        const queryRespuesta3=document.querySelector("#boton3")
        const queryRespuesta4=document.querySelector("#boton4")

        queryRespuesta1.textContent=respuesta1
        queryRespuesta2.textContent=respuesta2
        queryRespuesta3.textContent=respuesta3
        queryRespuesta4.textContent=respuesta4

        



    }
    preguntaAleatoria()
    
    
    

    //crear trivial







