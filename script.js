"use strict";

// Leer JSON

async function getData(url) {							
	const respuesta = await fetch (url)
    const data = await respuesta.json()
    console.log(data);
    return data 
}							

const data = getData("./quiz.json")















