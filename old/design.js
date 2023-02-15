// to show/hidden with ID

//end



//button to get top:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function menu_btn(x) {
  x.classList.toggle("change");
}

//start swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4.5,
  spaceBetween: 30,
  freeMode: true,
  slidesPerGroup: 3,
  grabCursor: true,
  /*autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },*/
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//end swiper  // 

/** size */
function zoomIn() {
  var z = document.getElementsByClassName("size");
  if(z.style.left == '0px')
     z.style.fontSize = '1em';
  else
     z.style.left = '0px';
}
