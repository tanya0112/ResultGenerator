function result(){
    var x=document.getElementById("eng").value;
    var y=document.getElementById("math").value;
    var z=document.getElementById("sc").value;
    var p=document.getElementById("his").value;
    var n=document.getElementById("name").value;
    x= parseInt(x);
    y= parseInt(y);
    z= parseInt(x);
    p= parseInt(y);
    var percent=((x+y+z+p)/400)*100;
    document.getElementById("rper").innerHTML=percent;
    document.getElementById("rname").innerHTML=n;
    if(percent<40 && percent>=0){
        document.getElementById("rgrade").innerHTML="Fail";
        document.getElementById("rpass").innerHTML="Fail";
    }
    else if(percent>=40 && percent<60){
        document.getElementById("rgrade").innerHTML="C";
        document.getElementById("rpass").innerHTML="Pass";
    }
    else if(percent>=60 && percent<80){
        document.getElementById("rgrade").innerHTML="B";
        document.getElementById("rpass").innerHTML="Pass";
    }
    else if(percent>=80 && percent<=100){
        document.getElementById("rgrade").innerHTML="A";
        document.getElementById("rpass").innerHTML="Pass";
    }
    else{
        document.getElementById("rgrade").innerHTML="Entered marks not correct";
    }
}

if(percentage>=80 && percentage<=100){
    document.getElementById("").innerHTML="A";

}
else if(percentage>=60 && percentage<80){
    document.getElementById("").innerHTML="A";

}
else if(percentage<40){
    document.getElementById("").innerHTML="F";

}
else{
    document.getElementById("").innerHTML="Entered marks not correct";
}