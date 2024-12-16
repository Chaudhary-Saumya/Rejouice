var content = document.querySelector(".content");
var cursor = document.querySelector(".cursor");

content.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        x: dets.x,
        y: dets.y,
    })
});

content.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
        scale: 1,
    })
})

content.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
        scale: 0,
    })
})

var open = document.querySelector(".content h2 i");
var close = document.querySelector(".left-slider h2 i");

var t1 = gsap.timeline();

t1.to(".left-slider", {
    left: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.4
})

t1.from(".left-slider h2", {
    duration: 1,
    delay: 1,
    stagger: 0.2,
})

t1.pause()

open.addEventListener("click", function () {
    t1.play()
})

close.addEventListener("click", function () {
    t1.reverse()
})

var menu = document.querySelector(".content .menu");
var close_menu = document.querySelector(".top-slider i");

var t2 = gsap.timeline();

t2.to(".top-slider", {
    duration: 1,
    top: "-200%",
    ease: "power2.out",
    stagger: 0.3
})

t2.from(".top-slider h2", {
    duration: 1,
    opacity: 0,
    stagger: 0.2
})

t2.from(".top-slider i", {
    duration: 1,
    opacity: 0,
    stagger: 0.2
})

t2.pause()

menu.addEventListener("click", function () {
    t2.play()
})

close_menu.addEventListener("click", function () {
    t2.reverse()
})

gsap.from(".page2 p span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 p span",
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3,
    }
})

gsap.from(".page5 h3 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page5 h3 span",
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3,
    }
})

gsap.from(".page6 h4 span", {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page6 p",
        scroller: "body",
        start: "top 50%",
        end: "bottom 80%",
        scrub: 3,
    }
})

gsap.from(".page6 p span", {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page6 p",
        scroller: "body",
        start: "top 50%",
        end: "bottom 80%",
        scrub: 3,
    }
})


function loader() {
    var loader = gsap.timeline()

    loader.from(".loader h3", {
        x: 100,
        opacity: 0,
        stagger: 0.5,
        duration: 1
    })

    loader.to(".loader h3", {
        opacity: 0,
        duration: 0.5
    })

    loader.to(".loader", {
        opacity: 0,
        duration: 1
    })

    loader.to(".loader", {
        display: "none",
    })

    loader.from(".content h2 span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5
    })
}

loader()


gsap.from(".lower-footer h1 span", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".upper-footer h3",
        scroller: "body",
        start: "top 40%"
    }
})