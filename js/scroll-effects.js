window.onscroll = function() {scrollFunction(), scrollActive()};

function scrollFunction() {
    
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){

        document.getElementById("header").style.top = "0";
    }else{
        document.getElementById("header").style.top = "-50px";
    }
}

//This part for showing active link in navbar

const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll(".header-middle a");

function scrollActive(){
    
        let fromTop = window.scrollY;
    
        navA.forEach((a) => {
            const section = document.querySelector(a.getAttribute("href"));
            if (section.offsetTop <= fromTop + 50 && section.offsetTop + section.offsetHeight > fromTop + 50) {
                a.classList.add("active");
            } else {
                a.classList.remove("active");
            }
        });
    
    
  };
  