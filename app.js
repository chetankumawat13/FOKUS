// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });

//animation
if (window.innerWidth > 700) {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "30% 90%",
            end: "30% 85%",
            scrub: 2
        }
    });

    tl.from(".p21", {
        y: 300,
        duration: 0.5
    }, "a");

    tl.from(".p22", {
        y: 300,
        duration: 0.5
    }, "a");

    tl.from(".p23", {
        y: 300,
        duration: 0.5
    }, "a");
}
if (window.innerWidth > 700) {
    let p21 = document.querySelector("#page2 .p21");
    let p22 = document.querySelector("#page2 .p22");
    let p23 = document.querySelector("#page2 .p23");
    let page2 = document.querySelector("#page2");
    let g1 = document.querySelector("#g1");
    let g2 = document.querySelector("#g2");
    let y1 = document.querySelector("#y1");
    
    
    p21.addEventListener("mouseenter", () =>{
        page2.style.backgroundColor  = "#95DA49";
        g1.style.opacity = 1;
        g1.style.scale = 1;
        g2.style.opacity = 1;
        g2.style.scale = 1;
        
    })
    p21.addEventListener("mouseleave", () =>{
        page2.style.backgroundColor  = "#F5F5DB"
        g1.style.opacity = 0;
        g1.style.scale = 0;
        g2.style.opacity = 0;
        g2.style.scale = 0;
    })
    
    p22.addEventListener("mouseenter", () =>{
        page2.style.backgroundColor  = "#FFE060";
        y1.style.opacity = 1;
        y1.style.scale = 1;
        y2.style.opacity = 1;
        y2.style.scale = 1;
    })
    p22.addEventListener("mouseleave", () =>{
        page2.style.backgroundColor  = "#F5F5DB";
        y1.style.opacity = 0;
        y1.style.scale = 0;
        y2.style.opacity = 0;
        y2.style.scale = 0;
    })
    
    
    p23.addEventListener("mouseenter", () =>{
        page2.style.backgroundColor  = "#FF6262";
        r1.style.opacity = 1;
        r1.style.scale = 1;
        r2.style.opacity = 1;
        r2.style.scale = 1;
    })
    p23.addEventListener("mouseleave", () =>{
        page2.style.backgroundColor  = "#F5F5DB";
        r1.style.opacity = 0;
        r1.style.scale = 0;
        r2.style.opacity = 0;
        r2.style.scale = 0;
    })
}


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"8% 95%",
        end:"8% 90%",
        scrub:2
    }
});
tl2.from("#page3 h1",{
    y:200,
    duration:0.5,
   
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"40% 90%",
        end:"40% 70%",
        scrub:2
    }
})

tl3.from('#p3b',{
    y:400,
    duration:0.5
})
tl3.from("#icon1",{
    x:-200,
    opacity:0
},"icon1")

tl3.from("#icon2",{
    x:-200,
    opacity:0
},"icon2")

tl3.from("#icon3",{
    x:200,
    opacity:0
},"icon1")

tl3.from("#icon4",{
    x:200,
    opacity:0
},"icon2")

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start: "20% 90%",
        end:"20% 70%",
        scrub:2,
    }
});

tl4.from("#fukra",{
    x:-300,
    opacity:0,
},"fukra")

tl4.from("#trigu",{
    x:300,
    opacity:0,
},"fukra")

tl4.from("#p5c",{
    y:200,
    opacity:0,
})

tl4.from("#p5t",{
    y:200,
    opacity:onabort,
})

tl4.from("#p5e",{
    y:200,
    opacity:0
})

let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
        start:"10% 90%",
        end:"10% 85%",
        scrub:2
    }
})

tl5.from(".p7t .i",{
    y:100,
    opacity:0
})

tl5.from(".p7t h1",{
    y:100,
    opacity:0
})

tl5.from(".p7b .p7elem",{
    y:100,
    opacity:0
})

let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        start:"40% 90%",
        end:"40% 70%",
        scrub:1,               
    }
})

tl6.from("#cl2 h4",{
    y:100,
    stagger:0.1,
    opacity:0,
})

tl6.from("#cl3 h4",{
    y:100,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        start:"50% 90%",
        end:"50% 75%",
        scrub:2,
    }
})

gsap.from("#cl4 h4",{
    y:100,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        start:"65% 95%",
        end:"65% 75%",
        scrub:2,
    }
})

gsap.from("#cl5 h4",{
    y:100,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        start:"75% 95%",
        end:"75% 85%",
        scrub:2,
    }
})



gsap.from("#ye",{
    rotate:-360,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        start:"15% 90%",
        end:"40% 30%",
        scrub:2,
    }
})

gsap.from("#re",{
    rotate:-180,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        start:"70% 90%",
        end:"70% 70%",
        scrub:2,
    }
})



let mm = gsap.matchMedia();
mm.add("(max-width: 700px)",() =>{
   let rp21 = document.querySelector(".p21");
   let rp22 = document.querySelector(".p22");
   let rp23 = document.querySelector(".p23");
    let tl7 = gsap.timeline()
    tl7.from("#p21i",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"10% 90%",
            end:("10% 80%"),
            scrub:1,
        }
    })
    rp21.addEventListener("mouseenter", () => {
        gsap.to(".p21",{
            backgroundColor: "#95DA49",
        })
        gsap.to("#g1",{
            opacity:1,
            scale:1,
        })
        gsap.to("#g2",{
            opacity:1,
            scale:1,
        })
    })
    rp21.addEventListener("mouseleave", () => {
        gsap.to(".p21",{
            backgroundColor: "#F5F5DA",
        })
        gsap.to("#g1",{
            opacity:0,
            scale:0,
        })
        gsap.to("#g2",{
            opacity:0,
            scale:0,
        })
    })
    gsap.from("#p22i",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"45% 90%",
            end:("45% 80%"),
            scrub:1,
        }
    })
    rp22.addEventListener("mouseenter", () => {
        gsap.to(".p22",{
            backgroundColor: "#FFE060",
        })
        gsap.to("#y1",{
            opacity:1,
            scale:1,
        })
        gsap.to("#y2",{
            opacity:1,
            scale:1,
        })
    })
    rp22.addEventListener("mouseleave", () => {
        gsap.to(".p22",{
            backgroundColor: "#F5F5DA",
        })
        gsap.to("#y1",{
            opacity:0,
            scale:0,
        })
        gsap.to("#y2",{
            opacity:0,
            scale:0,
        })
    })
    gsap.from("#p23i",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"80% 95%",
            end:("80% 85%"),
            scrub:1,
        }
    })
    rp23.addEventListener("mouseenter", () => {
        gsap.to(".p23",{
            backgroundColor: "#FF6262",
        })
        gsap.to("#r1",{
            opacity:1,
            scale:1,
        })
        gsap.to("#r2",{
            opacity:1,
            scale:1,
        })
    })
    rp23.addEventListener("mouseleave", () => {
        gsap.to(".p23",{
            backgroundColor: "#F5F5DA",
        })
        gsap.to("#r1",{
            opacity:0,
            scale:0,
        })
        gsap.to("#r2",{
            opacity:0,
            scale:0,
        })
    })
})

let opene = document.querySelector(".ri-menu-line");
let sideb = document.querySelector("#over");
let closerr = document.querySelector("#over1");
opene.addEventListener("click", () => {
    sideb.classList.add("active");
    lenis.stop();
  });

closerr.addEventListener("click", closeSideba);
function closeSideba() {
    sideb.classList.remove("active");
    lenis.start();
  }



let openBtn = document.getElementById("p1r42h");
let sidebar = document.querySelector(".atc");
let overlay = document.getElementById("overlay");
let closer = document.querySelector("#overlay1");
let rm = document.querySelector("#rm");
let cart = document.querySelector(".ri-shopping-cart-2-line");

cart.addEventListener("click", () => {
    console.log("hhh")
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
    p17.textContent = count;
    p18.textContent = `Rs. ${totalPrice}`;
    p19.textContent = `Rs. ${totalPrice}`;
    lenis.stop();
})

sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });
overlay.addEventListener("click", closeSidebar);
closer.addEventListener("click", closeSidebar);
rm.addEventListener("click",closeSidebar)

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
    p18.textContent = `Rs. ${totalPrice}`;
    p19.textContent = `Rs. ${totalPrice}`;
    lenis.start();
  }

let p15 = document.querySelector("#addm1")
let p16 = document.querySelector("#addm2")
let p17 = document.querySelector(".rxn")
let p18 = document.querySelector(".atct2")
let p19 = document.querySelector("#atch2")
let p20 = document.querySelector(".atc");
  let count = 1;
  let unitPrice = 450;
  let totalPrice = unitPrice;
  p16.addEventListener("click", () => {
      count++;
      p17.textContent = count;
      totalPrice += unitPrice;
      p18.textContent = `Rs. ${totalPrice}`;
      p19.textContent = `Rs. ${totalPrice}`;
  })
  p15.addEventListener("click", () => {
      if(count > 1){
          count--;
          p17.textContent = count;
          totalPrice -= unitPrice; 
          p18.textContent = `Rs. ${totalPrice}`;
          p19.textContent = `Rs. ${totalPrice}`;
      }
  })

 gsap.to("#loader",{
    autoAlpha: 0,
    delay:3.7,
    onComplete: () => {
        document.body.classList.add("loaded"); 
      }
 })