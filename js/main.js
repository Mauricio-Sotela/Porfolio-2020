///////////function//////////////
const berger = document.querySelector(".berger_menu");
berger.addEventListener("click", () => {
  document.body.classList.toggle("berger");
  //////////X function/////////////
  document.querySelector(".x1").classList.toggle("menu_line1");
  document.querySelector(".x2").classList.toggle("menu_line2");
  document.querySelector(".x3").classList.toggle("menu_line3");
});

////////////function/////////////
window.addEventListener("resize", () => {
  if (window.innerWidth > 601) {
    document.body.classList.add("berger");
     //////////X function/////////////
    document.querySelector(".x1").classList.remove("ch1");
    document.querySelector(".x2").classList.remove("ch2");
    document.querySelector(".x3").classList.remove("ch3");
  }
});

/*light box */

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* prevent default */
document.querySelector("#sub").addEventListener("click", function(event){
  event.preventDefault()
});


///////////function////////////////========>//not working ATM
// window.addEventListener('scroll', () => {
//   document.body.classList.add('berger');
//   console.log("ggggg");

//  });
