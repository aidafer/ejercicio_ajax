'use strict';

var name = document.getElementById('name');
var picture = document.getElementById('picture');
var num = document.getElementById('num');
var userId = document.getElementById('userId');
var btn = document.getElementById('btn');
var request = new XMLHttpRequest(); //1-creamos un objeto para hacer la
                                    //petición a ajax

request.open('GET', 'https://api.github.com/users/guerrero', true); // use true to make the request async
//2-ponemos un string con el tipo de método, GET, la ruta: http....
//y poner el true para que lo haga asíncrono, si ponemos false,
//hasta que no llegue toda la info se bloquearía, el request.open hace
//la llamada al servidor

//request.onload: cuando reciba la info del servidor, ejecuta esta función
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    //request.responseText es donde se guarda lo que manda el servidor
    //y JSON.parse convierteel archivo json el objeto del servidor en js
    //y se guarda en una var, si pongo data.tittle pilla solo el tittle de json
    name.innerHTML = data.login;
    picture.src = data.avatar_url;
    num.innerHTML = data.public_repos;
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
};

//request.onerror: si no puede conectarse al servidor, da error en la consola
//y en la wed se queda en blanco

request.onerror = function() {
  console.log('Error al tratar de conectarse con el servidor');
};

//3-request.send: manda la petición al servidor
request.send();
