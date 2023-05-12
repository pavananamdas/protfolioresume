let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let display3 = document.getElementById("display3");
let display4 = document.getElementById("display4");
let rowclose1 = document.getElementById("close1");
let rowclose2 = document.getElementById("close2");


function open1(){
  display1.style.display="block";
rowclose1.style.display="none";
rowclose2.style.display="none";
}
function open2(){
  display2.style.display="block";
rowclose1.style.display="none";
rowclose2.style.display="none";
}
function open3(){
  display3.style.display="block";
rowclose1.style.display="none";
rowclose2.style.display="none";
}
function open4(){
  display4.style.display="block";
rowclose1.style.display="none";
rowclose2.style.display="none";
}
// close function

function close1(){
  display1.style.display="none";
rowclose1.style.display="block";
rowclose2.style.display="block";
}

function close2(){
  display2.style.display="none";
rowclose1.style.display="block";
rowclose2.style.display="block";
}

function close3(){
  display3.style.display="none";
rowclose1.style.display="block";
rowclose2.style.display="block";
}
function close4(){
  display4.style.display="none";
rowclose1.style.display="block";
rowclose2.style.display="block";
}