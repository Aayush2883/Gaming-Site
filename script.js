gsap.from(".logo",{
    x:-50,
    opacity:0,
    duration:1,
    delay:0.5,
})

gsap.from("nav li",{
    x:50,
    opacity:0,
    duration:0.25,
    delay:1.5,
    stagger:1,
})

gsap.to(".page1 .slogan .word1",{
    x:420,
    scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "+=400",
        scrub: 4,
    }
})

gsap.to(".page1 .slogan .word3",{
    x:-280,
    scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "+=400",
        scrub: 4,
    }
})


gsap.to(".header",{
    opacity:0,
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        scrub:3,
    }
})

gsap.to(".wrapper",{
    backgroundColor:"rgba(0, 0, 0, 0.9)",

    scrollTrigger:{
        trigger:".wrapper",
        scroller:"body",
        // markers:true,
        start: "top -15%",
        end: "top -70%",
        scrub:3,
    }
})

gsap.to(".page3 .content", {
    transform:"translateX(-20%)",
    scrollTrigger: {
        trigger: ".page3",
        start: "top 60%",
        end: "bottom 10%",
        scrub: 2,
    }
});

gsap.to(".image-wrapper",{
    backgroundPosition:"50% 100%",
    scrollTrigger:{
        trigger:".image-wrapper",
        scroller:"body",
        // markers:true,
        start:"top top",
        end:"+=500",
        scrub:3,
    }
})

gsap.to(".image-wrapper2",{
    backgroundPosition:"50% 100%",
    scrollTrigger:{
        trigger:".image-wrapper2",
        scroller:"body",
        // markers:true,
        start:"top top",
        end:"+=500",
        scrub:3,
    }
})

var path = "M 10 80 Q 700 80 1390 80"
let finalPath = "M 10 80 Q 700 80 1390 80"

let string = document.querySelector(".string")

string.addEventListener("mousemove",(dets) => {
    path = `M 10 80 Q ${dets.x-50} ${dets.y-200} 1390 80`

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.4,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})
