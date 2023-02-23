// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


var demo = document.getElementById("size");
var one = document.getElementById("one");
var menu = document.getElementById("menu-phone");
//var twmm = document.getElementsById("title");


var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");
//var one = document.getElementsByClassName("one");






function small(){  
  demo.style.fontSize = "25px";   
}
function medium(){  
  demo.style.fontSize = "28px";   
}
function big(){  
  demo.style.fontSize = "33px";   
}

function menuBtn(){
  
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

}

var two = document.getElementById("two");

function ltwo(){

  if (two.style.display === "block") {
    two.style.display = "none";
  } else {
    two.style.display = "block";
    four.style.display = "none";
    three.style.display= "none";
    one.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";

  }
}

function lthree(){
  if (three.style.display === "block") {
    three.style.display = "none";
  } else {
    three.style.display = "block";
    four.style.display = "none";
    two.style.display= "none";
    one.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";

  }
}


function lfour(){
  if (four.style.display === "block") {
    four.style.display = "none";
  } else {
    four.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    one.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";
  }

}




/*
function ltwo(){
  twmm.style.fontSize = "33px";   

  

}*/






function lone(){
  
  one.style.display= "block";

  two.style.display= "none";
  three.style.display= "none";
  four.style.display= "none";
  five.style.display= "none";
  six.style.display= "none";
  seven.style.display= "none";
  eight.style.display= "none";
  nine.style.display= "none";
  ten.style.display= "none";
  eleven.style.display= "none";
  twelve.style.display= "none";
}





function lfive(){
  if (five.style.display === "block") {
    five.style.display = "none";
  } else {
    five.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    one.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";  
  }

}
function lsix(){
  if (six.style.display === "block") {
    six.style.display = "none";
  } else {
    six.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    one.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none"; 
  }
}
function lseven(){
  if (seven.style.display === "block") {
    seven.style.display = "none";
  } else {
    seven.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    one.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";
  }
}

function leight(){
  if (eight.style.display === "block") {
    eight.style.display = "none";
  } else {
    eight.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    one.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";
  }

}
function lnine(){
  if (nine.style.display === "block") {
    nine.style.display = "none";
  } else {
    nine.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    one.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";
  }
}
function lten(){
  if (ten.style.display === "block") {
    ten.style.display = "none";
  } else {
    ten.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    one.style.display= "none";
    eleven.style.display= "none";
    twelve.style.display= "none";  
  }
}
function leleven(){
  if (eleven.style.display === "block") {
    eleven.style.display = "none";
  } else {
    eleven.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    one.style.display= "none";
    twelve.style.display= "none";  
  }

}
function ltwelve(){
  if (twelve.style.display === "block") {
    twelve.style.display = "none";
  } else {
    twelve.style.display = "block";
    two.style.display= "none";
    three.style.display= "none";
    four.style.display= "none";
    five.style.display= "none";
    six.style.display= "none";
    seven.style.display= "none";
    eight.style.display= "none";
    nine.style.display= "none";
    ten.style.display= "none";
    eleven.style.display= "none";
    one.style.display= "none";
  
  }
}


function menu_btn(x) {
  x.classList.toggle("change");
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.height = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  switchColorScheme();
});




