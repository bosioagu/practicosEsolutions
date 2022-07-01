/**
 * Autor: Bosio Agustin
 * Version: 0.0.1
 * email: bosio.agustinariel@gmail.com
 * El codigo devuelve datos de usuarios getUsers(getData1 ó getData2) 
 * El codigo devuelve datos de un album por id getAlbums(id, getData1 ó getData2)
 */


// getUsers(getData1 ó getData2) devuelve el array de objetos de users sin "phone", "zipcode" y "lat"
async function getUsers(functionParameter) {
    try{
        const userUrl =  "https://jsonplaceholder.typicode.com/users"
        await functionParameter(userUrl);
    } catch (error) {
        console.log(error)
    }
}

 // getAlbums(id, getData1 ó getData2) devuelve el album con el id indicado
async function getAlbums(id, functionParameter) {
    try{
       const userUrl = "https://jsonplaceholder.typicode.com/albums"
       await functionParameter(userUrl,id);
    } catch (error) {
        console.log(error)
    }
}
 
 //FUNCION 1 Async Await
async function getData1(userUrl,id) {
    try{
        const url = userUrl
        if( url === "https://jsonplaceholder.typicode.com/users"){
            const result    = await fetch(url);
            const data      = await result.json();
            const newData   =  removeUserElements(data)
 
        } else if (url === "https://jsonplaceholder.typicode.com/albums") {
            const result    = await fetch(url);
            const data      = await result.json();
            const newData   = selecIdAlbum(id, data)
        }
    } catch (error) {
        console.log(error);
    }
        console.log("El proceso ha finalizado")
}
 
 //FUNCION 2 
function getData2(userUrl,id) {
    const url =  userUrl
    if( url === "https://jsonplaceholder.typicode.com/users"){
        fetch(url)
            .then((response) => response.json())
            .then ((data) => {
                    newData = removeUserElements(data)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {       
                console.log("El proceso ha finalizado")
            })
    } else if (url === "https://jsonplaceholder.typicode.com/albums") {
        fetch(url)
            .then((response) => response.json())
            .then ((data) => {
                selecIdAlbum(id, data)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {      
                console.log("El proceso ha finalizado")
            })
    }
}
 
 
 // removeUserElements() devuelve  un array eliminando "phone", "zipcode" y "lat"
function removeUserElements(originalArray){
    let users   = []
    let user    = {}
    for( i = 0; i < originalArray.length ; i++) {
        const {phone, address:{zipcode,...addressRest}, address:{geo:{lat, ...geoRest}},  ...rest} = originalArray[i];
        const address = Object.assign(addressRest,{"geo": geoRest});
        user = Object.assign(rest,{"address": address}) ;
        users.push(user)

        }
    console.log(users)
    console.log("datos recibidos")
}
 
 
 //  selecIdAlbum() devuelve el album seleccionado por ID
function selecIdAlbum(id, originalArray){

    let item = originalArray.filter(item => item.id === id);
    console.log(item)
    console.log("datos recibidos")
}
 