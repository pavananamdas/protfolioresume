// pop 1
let display1 = document.getElementById("electric1");
let popclose1 = document.getElementById("close1");
let maincontainer = document.getElementById("main");
function pop1() {
    display1.style.display="block";
    maincontainer.style.display="none"
}
popclose1.addEventListener("click",function close1(){
    display1.style.display="none";
    maincontainer.style.display="block"
})
//pop2
let display2 = document.getElementById("electric2");
let popclose2 = document.getElementById("close2");
function pop2() {
    display2.style.display="block";
    maincontainer.style.display="none"
}
popclose2.addEventListener("click",function close2(){
    display2.style.display="none";
    maincontainer.style.display="block"
})
// pop3
let display3 = document.getElementById("electric3");
let popclose3 = document.getElementById("close3");
function pop3() {
    display3.style.display="block";
    maincontainer.style.display="none"
}
popclose3.addEventListener("click",function close3(){
    display3.style.display="none";
    maincontainer.style.display="block"
})
// pop3
let display4 = document.getElementById("electric4");
let popclose4 = document.getElementById("close4");
function pop4() {
    display4.style.display="block";
    maincontainer.style.display="none"
}
popclose4.addEventListener("click",function close4(){
    display4.style.display="none";
    maincontainer.style.display="block"
})




let zoom1 = document.getElementById("zoomdisplay1");
let zoom2 = document.getElementById("zoomdisplay2");
let zoom3 = document.getElementById("zoomdisplay3");
let zoom4 = document.getElementById("zoomdisplay4");

let  floatimg1 = document.getElementById("floatimg1");
let  floatimg2 = document.getElementById("floatimg2");
let  floatimg3 = document.getElementById("floatimg3");
let  floatimg4 = document.getElementById("floatimg4");

floatimg1.addEventListener("click", function img1(){
    if (window.innerWidth <= 600) {
          zoom1.style.display = 'none';
          zoom2.style.display = 'none';
          zoom3.style.display = 'none';
          zoom4.style.display = 'none';
          floatimg1.style.display="none";
          floatimg2.style.display="none";
          floatimg3.style.display="none";
          floatimg4.style.display="none";

 }
});

floatimg2.addEventListener("click", function img2(){
    if (window.innerWidth <= 600) {
          zoom1.style.display = 'none';
          zoom2.style.display = 'none';
          zoom3.style.display = 'none';
          zoom4.style.display = 'none';
          floatimg1.style.display="none";
          floatimg2.style.display="none";
          floatimg3.style.display="none";
          floatimg4.style.display="none";
 }
});

floatimg3.addEventListener("click", function img3(){
    if (window.innerWidth <= 600) {
          zoom1.style.display = 'none';
          zoom2.style.display = 'none';
          zoom3.style.display = 'none';
          zoom4.style.display = 'none';
          floatimg1.style.display="none";
          floatimg2.style.display="none";
          floatimg3.style.display="none";
          floatimg4.style.display="none";
 }
});

floatimg4.addEventListener("click", function img4(){
    if (window.innerWidth <= 600) {
          zoom1.style.display = 'none';
          zoom2.style.display = 'none';
          zoom3.style.display = 'none';
          zoom4.style.display = 'none';
          floatimg1.style.display="none";
          floatimg2.style.display="none";
          floatimg3.style.display="none";
          floatimg4.style.display="none";
 }
});

function openzoom1(){
    if (window.innerWidth <= 600) {
        zoom1.style.display = 'block';
        floatimg1.style.display="block";
      
        zoom2.style.display = 'none';
        zoom3.style.display = 'none';
        zoom4.style.display = 'none';

        floatimg2.style.display="none";
        floatimg3.style.display="none";
        floatimg4.style.display="none";
      }
}

function openzoom2(){
    if (window.innerWidth <= 600) {
        zoom2.style.display = 'block';
        floatimg2.style.display="block";
        zoom1.style.display = 'none';

        zoom3.style.display = 'none';
        zoom4.style.display = 'none';
        floatimg1.style.display="none";

        floatimg3.style.display="none";
        floatimg4.style.display="none";
      }
}

function openzoom3(){
    if (window.innerWidth <= 600) {
        zoom3.style.display = 'block';
        floatimg3.style.display="block";

        zoom1.style.display = 'none';
        zoom2.style.display = 'none';
 
        zoom4.style.display = 'none';
        floatimg1.style.display="none";
        floatimg2.style.display="none";

        floatimg4.style.display="none";
      }
}

function openzoom4(){
    if (window.innerWidth <= 600) {
        zoom4.style.display = 'block';
        floatimg4.style.display="block";
        zoom1.style.display = 'none';
        zoom2.style.display = 'none';
        zoom3.style.display = 'none';

        floatimg1.style.display="none";
        floatimg2.style.display="none";
        floatimg3.style.display="none";

      }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
      zoom1.style.display = 'none';
      zoom2.style.display = 'none';
      zoom3.style.display = 'none';
      zoom4.style.display = 'none';
      floatimg1.style.display="none";
      floatimg2.style.display="none";
      floatimg3.style.display="none";
      floatimg4.style.display="none";
    }
  });
