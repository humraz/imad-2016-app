var request=new XMLHttpRequest();
var counter=10;
request.onreadystatechange= function(){
    if(request.readystatechange==XMLHttpRequest.DONE)
    {if(request.status==200)
    {
     
      
    }
        
    }
};

var butto= document.getElementById('butt');
butto.onclick= function(){
    
    counter=counter+1;
    var span= document.getElementById('number');
    span.innerHTML=counter.toString();
}