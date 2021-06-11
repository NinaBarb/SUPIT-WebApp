var i=0;
var j=0;
var node= document.createElement("BR");
var txt='Welcome to Hogwarts.';
var txt2='Draco dormiens nunquam titillandus.';
var speed=200;
var speed2=300;

(function typeWriter(){
    if(txt.length>i){
        document.getElementById("typing").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
    if(txt.length===i && txt2.length>j){
        if(j===0){
            document.getElementById("typing").appendChild(node);
        }
        document.getElementById("typing2").innerHTML+=txt2.charAt(j);
        j++;
        setTimeout(typeWriter,speed2);
    }

}())