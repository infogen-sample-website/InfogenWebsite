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
    loop:true,
    keyboard: {
      enabled: true,
      onlyInViewport: false
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



  /* Typing Animation */

  /* var typed = new typed(".typing",{
    strings:["EXTENSIVE EXPERIENCE","Infogen"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
  }); */




/* Nav Menu item active when selected */
const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll("li"),
      totalNavList = navList.length;
      console.log("Nav length is ====>"+totalNavList);
      for(let i=0;i<totalNavList;i++)
      {
        
        const a = navList[i].querySelector("a");

        a.addEventListener("click",function(){
          console.log(this);
          for(let j=0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active");
        });
        
      }

/* -------------------------------------------------------- */











  /* Toggler SIdebar */

 /*  const navTogglerBtn = document.querySelector(".nav-toggler"),
  sidebar = document.querySelector(".sidebar");

  navTogglerBtn.addEventListener("click", ()=>{
    sidebarSectionTogglerBtn();
  })


  function sidebarSectionTogglerBtn(){
    sidebar.classList.toggle("open");
  } */



  /* Sidebar function */

  /* Sidebar functions */

/* $("#studios_btn").on( "click", function() {
  $('.sidebar .nav .studios_show').toggleClass('show');
}); */
/* 
$("#about_btn").on( "click", function() {
  $('.sidebar_section .sidebar .menu li ul.about_show').toggleClass('show');
});

$("#whatwedo_btn").on( "click", function() {
  $('.sidebar_section .sidebar .menu li ul.whatwedo_show').toggleClass('show');
}); */


/* Toggle Sidebar  */
const togglebtn = document.getElementById("toggle"),
      sidebar = document.getElementById("sidebar"),
      removebtn =document.getElementById("removebtn");
 
      /* display sidebar */
      togglebtn.addEventListener("click",function(){
          sidebar.style.left="0";
          togglebtn.style.display="none";
         /*  console.log("======"+removebtn.style.display="none");
          */ removebtn.style.display="block";
      });

      /* remove Sidebar */
      removebtn.addEventListener("click",function(){
        sidebar.style.left="-270px";
        removebtn.style.display="none";
        togglebtn.style.display="flex";
      });



