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


var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "escapology"
words[2] = "brightwork"
words[3] = "verkrampte"
words[4] = "protectrix"
words[5] = "nudibranch"
words[6] = "grandchild"
words[7] = "newfangled"
words[8] = "flugelhorn"
words[9] = "mythologer"
words[10] = "pluperfect"
words[11] = "jellygraph"
words[12] = "quickthorn"
words[13] = "rottweiler"
words[14] = "technician"
words[15] = "cowpuncher"
words[16] = "middlebrow"
words[17] = "jackhammer"
words[18] = "triphthong"
words[19] = "wunderkind"
words[20] = "dazzlement"
words[21] = "jabberwock"
words[22] = "witchcraft"
words[23] = "pawnbroker"
words[24] = "thumbprint"
words[25] = "motorcycle"
words[26] = "cryptogram"
words[27] = "torchlight"
words[28] = "bankruptcy"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}












function refreshPage(){
  window.location.reload();
}
