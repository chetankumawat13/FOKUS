// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });


let P = document.querySelector("#p1l2i")


 let p1 = document.querySelector("#p1l1i")
 p1.addEventListener("click",function(d){
    let temp1 = P.src;
    P.src = p1.src;
    p1.src = temp1;
 })

let p2 = document.querySelector("#p1l12i")
p2.addEventListener("click",function(){
    let temp2 = P.src;
    P.src = p2.src;
    p2.src = temp2;
})

let p3 = document.querySelector("#p1l13i")
p3.addEventListener("click",function(){
    let temp3 = P.src;
    P.src = p3.src;
    p3.src = temp3;
})

let p4 = document.querySelector("#p1rh1")
let p5 = document.querySelector("#p1rh2")
let p6 = document.querySelector(".ppppp")
let p8 = document.querySelector("#page1")
let p9 = document.querySelector("#page2")
let p10 = document.querySelector("#i1")
let p11 = document.querySelector("#i2")
let p12 = document.querySelector("#p4img")
let p13 = document.querySelector("#p1r4rn")
let p14 = document.querySelector("#page3")
let p15 = document.querySelector("#addm1")
let p16 = document.querySelector("#addm2")
let p17 = document.querySelector(".rxn")
let p18 = document.querySelector(".atct2")
let p19 = document.querySelector("#atch2")
let p20 = document.querySelector(".atc");

p4.addEventListener("click",() => {
    p4.style.backgroundColor = "black"
    p5.style.backgroundColor = "#B8DA4A"
    p4.style.color = "#ffffff"
    p5.style.color = "black"
    p6.innerHTML = `<a id="p1rimga" href="./product.html">
                        <div id="p1rimg">
                        <img src="./asists/imgs/p1rimg.avif" alt="">
                        <h4 id="p1rimgh">Pack of 3</h4>
                        </div>
                    </a>`
    
})

p5.addEventListener("click",() => {
    p4.style.backgroundColor = "#B8DA4A"
    p5.style.backgroundColor = "black"
    p4.style.color = "black"
    p5.style.color = "#ffffff"
    p6.innerHTML = `
                        <div id="p1rimg">
                        <img src="./asists/imgs/p6y.avif" alt="">
                        <h4 class="yellow" id="p1rimgh">Mango Pineapple</h4>
                        </div>
                        <div id="p1rimg">
                        <img src="./asists/imgs/p6g.avif" alt="">
                        <h4 class="green" id="p1rimgh">Kiwi Lemon</h4>
                        </div>
                        <div id="p1rimg">
                        <img src="./asists/imgs/p6r.avif" alt="">
                        <h4 class="red" id="p1rimgh">Strawberry Watermelon</h4>
                        </div>`

})
//yellow class ke liye
document.addEventListener("click", () => {
    let yellowElem = document.querySelector(".yellow");
    if (yellowElem) {
        yellowElem.addEventListener("click", () => {
            p8.style.backgroundColor = "#FCF3D4";
            p9.style.backgroundColor = "#FFE060";
            p14.style.backgroundColor = "#FFE060";
            P.src = "./asists/imgs/yelloww1.webp";
            p1.src = "./asists/imgs/yelloww2.webp";
            p2.src = "./asists/imgs/yelloww3.webp";
            p3.src = "./asists/imgs/yelloww4.webp";
            p10.style.backgroundColor = "#FFE062";
            p11.style.backgroundColor = "#FFE062";
            p4.style.backgroundColor = "#FFE062"
            p5.style.backgroundColor = "black"
            p4.style.color = "black"
            p5.style.color = "#ffffff"
             p20.style.backgroundColor = "#FCF3D4"
            p4.addEventListener("click",() => {
            p4.style.backgroundColor = "#FFE062"
            p5.style.backgroundColor = "black"
            p4.style.color = "black"
            p5.style.color = "#ffffff"
            })
            p5.addEventListener("click",() => {
                p4.style.backgroundColor = "black"
                p5.style.backgroundColor = "#FFE062"
                p4.style.color = "#ffffff"
                p5.style.color = "black"
            })
            p12.src = "./asists/imgs/yelloww5.webp"
        });
    }
});

//green class ke liye
document.addEventListener("click", () => {
    let greenElem = document.querySelector(".green");
    if (greenElem) {
        greenElem.addEventListener("click", () => {
            p8.style.backgroundColor = "#C6E7A9";
            p9.style.backgroundColor = "#95DA49";
            p14.style.backgroundColor = "#95DA49";
            P.src = "./asists/imgs/greenn1.webp";
            p1.src = "./asists/imgs/greenn2.webp";
            p2.src = "./asists/imgs/greenn3.webp";
            p3.src = "./asists/imgs/greenn4.webp";
            p10.style.backgroundColor = "#95DA49";
            p11.style.backgroundColor = "#95DA49";
            p4.style.backgroundColor = "#95DA49"
            p5.style.backgroundColor = "black"
            p4.style.color = "black"
            p5.style.color = "#ffffff"
            p20.style.backgroundColor = "#C6E7A9"
            p4.addEventListener("click",() => {
            p4.style.backgroundColor = "#95DA49"
            p5.style.backgroundColor = "black"
            p4.style.color = "black"
            p5.style.color = "#ffffff"
            })
            p5.addEventListener("click",() => {
                p4.style.backgroundColor = "black"
                p5.style.backgroundColor = "#95DA49"
                p4.style.color = "#ffffff"
                p5.style.color = "black"
            })
            p12.src = "./asists/imgs/greenn5.webp"
        });
    }
});

//red class ke liye

document.addEventListener("click", () => {
    let greenElem = document.querySelector(".red");
    if (greenElem) {
        greenElem.addEventListener("click", () => {
            p8.style.backgroundColor = "#FCF4EF";
            p9.style.backgroundColor = "#FF6262";
            p14.style.backgroundColor = "#FF6262";
            P.src = "./asists/imgs/redd1.webp";
            p1.src = "./asists/imgs/redd2.webp";
            p2.src = "./asists/imgs/redd3.webp";
            p3.src = "./asists/imgs/redd4.webp";
            p10.style.backgroundColor = "#FF6162";
            p11.style.backgroundColor = "#FF6162";
            p4.style.backgroundColor = "#FF6162"
            p5.style.backgroundColor = "black"
            p4.style.color = "black"
            p5.style.color = "#ffffff"
            p20.style.backgroundColor = "#FDF4EF"
            p4.addEventListener("click",() => {
            p4.style.backgroundColor = "#FF6162"
            p5.style.backgroundColor = "black"
            p4.style.color = "black"
            p5.style.color = "#ffffff"
            })
            p5.addEventListener("click",() => {
                p4.style.backgroundColor = "black"
                p5.style.backgroundColor = "#FF6162"
                p4.style.color = "#ffffff"
                p5.style.color = "black"
            })
            p12.src = "./asists/imgs/redd5.webp"
        });
    }
});

let count = 1;
let unitPrice = 450;
let totalPrice = unitPrice;
p11.addEventListener("click", () => {
    count++;
    p13.textContent = count;
    totalPrice += unitPrice;
    p18.textContent = `Rs. ${totalPrice}`;
    p19.textContent = `Rs. ${totalPrice}`;
});
p10.addEventListener("click", () =>{
    if(count > 1){
        count--;
        p13.textContent = count;
        totalPrice -= unitPrice; 
        p18.textContent = `Rs. ${totalPrice}`;
        p19.textContent = `Rs. ${totalPrice}`;
    }
})
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









let f = 0;
document.querySelector("#p1i").addEventListener("click", (e) => {
     if(f == 0){
        document.querySelector("#p1").style.display = "block";
        e.target.className = "ri-subtract-line";
        
        f = 1;
     }else{
         document.querySelector("#p1").style.display = "none";
         e.target.className = "ri-add-line";
         f = 0;
     }
});

document.querySelector("#p2i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p2").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p2").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p3i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p3").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p3").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p4i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p4").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p4").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p5i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p5").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p5").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p6i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p6").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p6").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p7i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p7").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p7").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p8i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p8").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p8").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p9i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p9").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p9").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p10i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p10").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p10").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p11i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p11").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p11").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

document.querySelector("#p13i").addEventListener("click", (e) => {
    if(f == 0){
       document.querySelector("#p13").style.display = "block";
       e.target.className = "ri-subtract-line";
       f = 1;
    }else{
        document.querySelector("#p13").style.display = "none";
        e.target.className = "ri-add-line";
        f = 0;
    }
});

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"4% 90%",
        end:"4% 85%",
        scrub:1,
    }
});

tl.from("#p2rh1",{
    y:-50,
    opacity:0,
})

tl.from("#p2rp",{
    y:-50,
    opacity:0
})

gsap.from("#p2limg",{
    y:-150,
    opacity:0,
    scale:1.2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"25% 90%",
        end:"25% 70%",
        scrub:1,
    }
})

gsap.from(".p211 h2",{
    x:70,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"12% 90%",
        end:"90% 90%",
        scrub:1,
    }
});


let openBtn = document.getElementById("p1r42h");
let sidebar = document.querySelector(".atc");
let overlay = document.getElementById("overlay");
let closer = document.querySelector("#overlay1");
let rm = document.querySelector("#rm");
let cart = document.querySelector(".ri-shopping-cart-2-line");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");
  p17.textContent = count;
  p18.textContent = `Rs. ${totalPrice}`;
  p19.textContent = `Rs. ${totalPrice}`;
  lenis.stop();
});

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
  p13.textContent = count;
  p18.textContent = `Rs. ${totalPrice}`;
  p19.textContent = `Rs. ${totalPrice}`;
  lenis.start();
}

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