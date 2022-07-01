var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

/* What we do slider */

var swiper = new Swiper(".mySwiper", {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


/* Toggle Sidebar  */
const togglebtn = document.getElementById("toggle"),
  sidebar = document.getElementById("sidebar"),
  removebtn = document.getElementById("removebtn");

/* display sidebar */
togglebtn.addEventListener("click", function () {
  sidebar.style.left = "0";
  togglebtn.style.display = "none";
  /*  console.log("======"+removebtn.style.display="none");
   */ removebtn.style.display = "block";
});

/* remove Sidebar */
removebtn.addEventListener("click", function () {
  sidebar.style.left = "-270px";
  removebtn.style.display = "none";
  togglebtn.style.display = "flex";
});

/* -------------------------------------------------------- */

/* Nav Menu item active when selected */
const nav = document.querySelector(".nav"),
  navList1 = document.querySelectorAll("li"),
  totalNavList1 = navList1.length;
/* console.log("Nav length is ====>"+totalNavList); */
for (let i = 0; i < totalNavList1; i++) {
  const a = navList1[i].querySelector("a");

  a.addEventListener("click", function () {
    /*  console.log(this); */
    for (let j = 0; j < totalNavList1; j++) {
      navList1[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}


/* highlight menu items on scroll  */
const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.sidebar .nav li');

console.log(sections);
console.log(navli);

window.addEventListener("scroll", () => {
  
  let current ='';
    
  sections.forEach( section =>{
    const sectionTop = section.offsetTop; 
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3))
    {
      current = section.getAttribute('id');
    }

    navli.forEach( li=> {
      li.classList.remove('active');
      if(li.classList.contains(current)){
        li.classList.add('active')
      }
    })

  
  });

  console.log(current);

});


/* Animate the Heading using Ajax*/

var typing = new Typed(".texttype_typing", {
  strings: [
    "",
    "Extensive Experience..."
  ],
  typeSpeed: 120,
  backSpeed: 20,
  loop: true,
});