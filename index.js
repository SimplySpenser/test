

/*if (typeof $ !== 'undefined') {
    $('.main_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
}*/
////////////////////////////*fullscreen on click*//////////////////////////////////
window.onload = () => {
  // (A) GET ALL IMAGES
  let all = document.getElementsByClassName("gallery__image");
 
  // (B) CLICK TO GO FULLSCREEN
  if (all.length>0) { for (let i of all) {
    i.onclick = () => {
      // (B1) EXIT FULLSCREEN
      if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
        if (document.exitFullscreen) { document.exitFullscreen(); }
        else { document.webkitCancelFullScreen(); }
      }
 
      // (B2) ENTER FULLSCREEN
      else {
        if (i.requestFullscreen) { i.requestFullscreen(); }
        else { i.webkitRequestFullScreen(); }
      }
    };
  }}
};

////////////////////////////*Carousel*//////////////////////////////////


////////////////////////////*Dropdown menu*//////////////////////////////////
 
// Prevent showing animation on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});  


// Menu toogle on mobile
const navToggle = document.querySelector('.nav-toggle');
const menuToggle = document.querySelector('.menu-toggle');

navToggle.addEventListener('click', function(e) {
  this.classList.toggle('open');   
  menuToggle.classList.toggle('active');
  e.stopPropagation();
});



// Dropdown toogle on mobile
const dropdowns = document.querySelectorAll('.dropdown a');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function(e) {
    this.nextElementSibling.classList.toggle('show');   
    this.parentNode.classList.toggle('active');
    e.stopPropagation();
  });
});


// Second level dropdown toggle on mobile
const deepDropdown = document.querySelector('.second-level a');

deepDropdown.addEventListener('click', function(e) {
  this.nextElementSibling.classList.toggle('show');   
  this.parentNode.classList.toggle('active');
  e.stopPropagation();
});
