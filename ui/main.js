console.log('Loaded!');

var marginleft=0;
function moveright(){
    marginleft= marginleft +10;
    img.style.marginLeft= marginleft+'px';
}
var img = document.getElementById('imgg');
img.onClick = function() {
    //var interval = setInterval(moveright,100);
    img.style.marginLeft = '100px';
};