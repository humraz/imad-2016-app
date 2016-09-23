
var counter=10;


var butto= document.getElementById('butt');
butto.onclick= function(){
    var request=new XMLHttpRequest();
   // counter=counter+1;
    //
   request.onreadystatechange= function(){
    if(request.readystate===XMLHttpRequest.DONE)
    {if(request.status===200)
    {
     var counter= request.responseText;
      var span= document.getElementById('number');
  span.innerHTML=counter.toString();
    }
        
    }
};
request.OPEN('GET', 'http://humraz.imad.hasura-app.io/counter', true);
request.send(null);
};