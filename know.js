// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });

//animations
let tl = gsap.timeline();
tl.from("#knowlogo",{
    y:100,
    opacity:0,
},)
tl.from("#pra1",{
    y:100,
    opacity:0,
},"a")

tl.from("#dt1",{
    x:-100,
    opacity:0,
},"a")


tl.from("#pra2",{
    y:100,
    opacity:0,
},"b")

tl.from("#dt2",{
    x:100,
    opacity:0,
},"b")

let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"20% 90%",
        end:"20% 80%",
        scrub:1,
    }
})

tl1.from("#p21h1",{
    x:100,
    opacity:0,
})

tl1.from("#v3",{
    x:100,
    opacity:0,
    scale:1.3,
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"30% 90%",
        end:"30% 80%",
        scrub:1

    }
})

tl1.from("#v3p",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"45% 90%",
        end:"45% 80%",
        scrub:1
    }
})

tl1.from("#ns",{
    x:100,
    opacity:0,
    scale:1.3,
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"55% 90%",
        end:"55% 80%",
        scrub:1
    }
})

tl1.from("#nsp",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"70% 90%",
        end:"70% 80%",
        scrub:1
    }
})

tl1.from("#cv",{
    x:100,
    opacity:0,
    scale:1.3,
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"80% 90%",
        end:"80% 80%",
        scrub:1
    }
})

tl1.from("#cvp",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:".p21",
        scroller:"body",
        start:"90% 90%",
        end:"90% 80%",
        scrub:1
    }
})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".p22",
        scroller:"body",
        start:"15% 90%",
        end:"15% 70%",
        scrub:"1"
    }
})

tl2.from("#p22h1",{
    x:200,
    opacity:0,
    scale:1.2
})

tl2.from("#p22p",{
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:".p22",
        scroller:"body",
        start:"45% 90%",
        end:"45% 70%",
        scrub:"1"
    }
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".p23",
        scroller:"body",
        start:"15% 90%",
        end:"15% 70%",
        scrub:"1"
    }
})

tl3.from("#p23h1",{
    x:200,
    opacity:0,
    scale:1.2
})

tl3.from("#p23p",{
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:".p23",
        scroller:"body",
        start:"40% 90%",
        end:"40% 70%",
        scrub:"1"
    }
})

if (window.innerWidth > 700){
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"15% 90%",
            end:"15% 75%",
            scrub:1,
        }
    })
    
    tl4.from("#p3h1",{
        y:-100,
        opacity:0,
    })
    
    tl4.from(".p3c",{
        y:-100,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"30% 90%",
            end:"30% 70%",
            scrub:1,
        }
    })
    
    tl4.from("#p3h3",{
        y:-30,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"70% 90%",
            end:"70% 70%",
            scrub:1,
        }
    })
    
    tl4.from("#p3po",{
        x:-50,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"80% 90%",
            end:"80% 70%",
            scrub:1,
        }
    })
    
    tl4.from("#p3pa",{
        scale:1.2,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"94% 100%",
            end:"94% 80%",
            scrub:1,
        }
    })
}

let mm = gsap.matchMedia();
mm.add("(max-width: 700px)",() =>{
    let tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"2% 90%",
            end:"2% 80%",
            scrub:1,
        }
    })
    tl5.from("#p3h1",{
        y:-30,
        opacity:0,
    })
    gsap.from(".p3c",{
        x:100,
        opacity:0,
        stagger:0.7,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"10% 90%",
            end:"90% 90%",
            scrub:1,
        }

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