

'use strict';

var nameUser = document.getElementById('name');
var picture = document.getElementById('picture');
var num = document.getElementById('num');
var userId = document.getElementById('userId');
var btn = document.getElementById('btn');
var request = new XMLHttpRequest();


btn.addEventListener("click", requestInfo);

request.onload = requestInfo;
function requestInfo() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    request.open('GET', 'https://api.github.com/users/' +userId.value, true);
    nameUser.innerHTML = data.login;
    picture.src = data.avatar_url;
    num.innerHTML = data.public_repos;
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
};


request.onerror = function() {
  console.log('Error al tratar de conectarse con el servidor');
};


//3-request.send: manda la petición al servidor
request.send();
