'use strict'

window.addEventListener('load',function(){
   
    
    var mostrarA=setInterval(function(){
        var animacion=document.querySelector('.Animacion');
        animacion.style.display="none";
    },5000);
    var ocultarA=setInterval(function(){
        var animacion=document.querySelector('.Animacion');
        animacion.style.display="block";
    },10000);
    

   
});