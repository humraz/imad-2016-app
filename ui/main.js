console.log('Loaded!');
var img = document.getElementById('imgg');
var marginleft=0;
function moveright(){
    marginleft= marginleft +10;
    img.style.marginLeft= marginleft+'px';
}
img.onClick = function() {
    //var interval = setInterval(moveright,100);
    img.style.marginLeft = '100px';
};