console.log('Loaded!');

var marginleft=0;
function moveright(){
    marginleft= marginleft +10;
    img.style.marginLeft= marginleft+'px';
}
var element= document.getElementById('main');
element.innerHTML='hi bro';
var img = document.getElementById('imgg');
element.onclick = function(){
    element.style.marginLeft= '200px';
}
img.onclick = function() {
    //var interval = setInterval(moveright,100);
    img.style.marginLeft = '1000px';
};