
////////////////////////////*load more buttom*//////////////////////////////////
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    var o;
    n(1);
    window.addEventListener("resize", (function() {
        document.body.classList.add("resize-animation-stopper"), clearTimeout(o), o = setTimeout((function() {
            document.body.classList.remove("resize-animation-stopper")
        }), 400)
    }));
    var r = document.querySelector(".nav-toggle"),
        i = document.querySelector(".menu-toggle");
    r.addEventListener("click", (function(e) {
        this.classList.toggle("open"), i.classList.toggle("active"), e.stopPropagation()
    })), document.querySelector(".dropdown a").addEventListener("click", (function(e) {
        this.nextElementSibling.classList.toggle("show"), this.parentNode.classList.toggle("active"), e.stopPropagation()
    })), document.querySelector(".second-level a").addEventListener("click", (function(e) {
        this.nextElementSibling.classList.toggle("show"), this.parentNode.classList.toggle("active"), e.stopPropagation()
    }))
}, function(e, t, n) {}]);
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