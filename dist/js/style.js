var slide_index=1;displaySlides(slide_index);function nextSlide(n){displaySlides(slide_index+=n)}function displaySlides(n){var i,slides=document.getElementsByClassName("showSlide");for(n>slides.length&&(slide_index=1),1>n&&(slide_index=slides.length),i=0;i<slides.length;i++)slides[i].style.display="none";slides[slide_index-1].style.display="block"}var swiper=new Swiper(".mySwiper",{loop:!0,keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{"@0.00":{slidesPerView:1,spaceBetween:10},"@0.75":{slidesPerView:2,spaceBetween:20},"@1.00":{slidesPerView:3,spaceBetween:40},"@1.50":{slidesPerView:4,spaceBetween:50}}});const togglebtn=document.getElementById("toggle"),sidebar=document.getElementById("sidebar"),removebtn=document.getElementById("removebtn");togglebtn.addEventListener("click",function(){sidebar.style.left="0",togglebtn.style.display="none",removebtn.style.display="block"}),removebtn.addEventListener("click",function(){sidebar.style.left="-270px",removebtn.style.display="none",togglebtn.style.display="flex"});const nav=document.querySelector(".nav"),navList1=document.querySelectorAll("li"),totalNavList1=navList1.length;for(let i=0;i<totalNavList1;i++){const a=navList1[i].querySelector("a");a.addEventListener("click",function(){for(let j=0;j<totalNavList1;j++)navList1[j].querySelector("a").classList.remove("active");this.classList.add("active")})}window.slide_index=slide_index,window.nextSlide=nextSlide,window.displaySlides=displaySlides,window.swiper=swiper;