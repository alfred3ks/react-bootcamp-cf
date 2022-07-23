/*
Veremos como funciona hacer peticiones con la API de fetch y con una libreria llamada axios.

Como funciona la web:

Tenemos un cliente(client), es un navegador web o medio que pueda ser un agent user. Luego tenemos los servidores web, donde se almacena toda la informacion.

Los servidores web tienen una lista de recursos los cuales el cliente web hara peticiones sobre estos recursos.

Siempre tenemos una comunicacion ctte entre un cliente y un seridor, esta comunicacion tiene una serie de reglas.

Estas reglas de comunicacion entre un cliente y un servidor se llama los protocolos de comunicacion, PROTOCOL.

Los protocolos mas conocidos:
- HTTP,
- FTP,
- SMTP

Muchos de estos protocolos por debajo usan otros protocolos por debajo.

HTTP: HyperText Transfer Protocol
- Transferencia / intercambio de datos en la web a traves de documentos. Los mas conocidos HTML.
- Protocolo de estructura cliente - servidor.
- Cliente: Request / Peticion, el que inicia el proceso con una peticion.
- Servidor: Response / Respuesta, es que devuelve la informacion a la peticion.

Una peticion como se ve en texto plano:

GET /posts HTTP/2

Host:jsonplaceholder-typicode.com
User_Agent: Mozilla/5.0...
Accept:text/html...

Metodo: GET. Normalmente es un verbo, podemos ver la lista de metodos usados:
https://developer.mozilla.org/es/docs/Web/HTTP/Methods

/posts: Es el path o la ruta, es lo que suele venir despues del dominio. Es independiente del protocolo y dominio.

HTTP/2: La version del protocolo.
Todo esto es lo que tenemos en la primera linea lo siguiente es lo que llaman las cabeceras o headers del request.

Hay algunos metodos que si o si nos van a pedir enviar un value.

Ahora veamos como se ve una respuesta:

HTTP/2 200 OK

date: Tue, 17 May 2022 15:27:09 GMT
content-type: application/json; charset=utf-8
server:cloudflare

[
  {
    "userId": 1,
    "title": "...",
    "body": "...."
  },
  {}
]

HTTP/2: version del Protocolo
200: Status code.
https://developer.mozilla.org/es/docs/Web/HTTP/Status

OK: mensaje del status code. Cada status code tiene un mensaje en particular.

Luego tenemos las cabeceras:
date: Tue, 17 May 2022 15:27:09 GMT
content-type: application/json; charset=utf-8
server:cloudflare

Luego tenemos el cuerpo de la peticion: el body.
[
  {
    "userId": 1,
    "title": "...",
    "body": "...."
  },
  {}
]


*/