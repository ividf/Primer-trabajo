"use strict";
//funcion para pedirle datos al servidor y recibir el json
async function getData(url)
{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);

    return data
}
getData("https://gist.github.com/bertez/2528edb2ab7857dae29c39d1fb669d31")

