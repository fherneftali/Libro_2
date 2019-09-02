var $ = require('jquery');
var persona = require('./persona');

$('h1').html('Hola Browserify');

var fher = new persona("Fher", 26);
fher.saludar();
fher.presentar();