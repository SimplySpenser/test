

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

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'flex';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);