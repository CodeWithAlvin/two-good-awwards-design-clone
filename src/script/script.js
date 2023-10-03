let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')
let logo = document.getElementById('logo')
let nav = document.getElementsByTagName("nav")[0]
let btnsDiv = document.getElementsByClassName("btns-div")[0]

menuIcon.addEventListener("click",()=>{
	menu.classList.toggle("opened")
	nav.classList.toggle("color-white")
	// logo.classList.toggle="#fff"
	logo.classList.toggle("invert")
	btnsDiv.classList.toggle("invert")
})

// lagging circle

let products = document.getElementsByClassName("product");
let circleRef = document.getElementById("lagging-circle-1");
let colors = ['#D094EA', '#F59794', '#F59794', '#9EEB47','#fff'];
let animationFrameId;

let scroll = (dets) => {
  circleRef.style.left = `${dets.clientX - 140}px`;
  circleRef.style.top = `${dets.clientY - 140}px`;
};

window.addEventListener('mousemove', (dets) => {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(() => scroll(dets));
});

for (let index = 0; index < products.length; index++) {
  products[index].addEventListener('mouseenter', () => {
    if (index < colors.length) {
      circleRef.style.backgroundColor = colors[index];
      circleRef.style.transform = 'scale(1)';
    }
  });

  products[index].addEventListener('mouseleave', () => {
    circleRef.style.transform = 'scale(0)';
  });
}

// video playback handle

let videocon = document.getElementById("video")

function videoconClickHandler() {
  const video = videocon.getElementsByTagName('video')[0]
  // play video
  video.muted = false;
  video.play()
  
  setTimeout(() => {
    video.controls = true
  },200);

  videocon.removeEventListener("click", videoconClickHandler);
}

videocon.addEventListener("click", videoconClickHandler);

// locomotive

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();




// GSAP AND SCROLLTRIGGER
gsap.from(".heading-lg",
	{
		duration: 1.5,
		yPercent: 100,
		ease: "power4",
		stagger: 0.1
	}
);
 
