const http = require ("http");                               // Es un modulo que viene integrado en node

const host = "localhost";
const port = 8000;

class Usuario {
    constructor(id, firstName, lastName, age, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
}

const usuarios = [
    new Usuario(1, "Francisco", "Perez", 33, "Argentina"),
    new Usuario(2, "Juan", "Lopez", 33, "Ecuador"),
    new Usuario(3, "Pedro", "Garcia", 33, "España"),
    new Usuario(4, "Luis", "Alaniz", 33, "Colombia"),
    new Usuario(5, "Peter", "Smith", 33, "EEUU"),

];

const jsonUsers = JSON.stringify(usuarios)



const requestListener = function(req, res) {                 //funcion que escucha las solicitudes
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/usuarios":
            res.writeHead(200);
            res.end(jsonUsers);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({statusCode : 404, message: "La url no existe"}));
    }
}

const server = http.createServer(requestListener);          // cuando el servidor sea llamado usa la funcion requestListener
server.listen(port, host, () => {
    console.log(`El servidor se esta ejecutando en http://${host}:${port}`)
});