/*========================================

MAHADEV ADS AGENCY

SCRIPT.JS

PART - 4

=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
      BUTTON CLICK
    ==================================*/

    const joinBtn = document.querySelector(".join-btn");

    joinBtn.addEventListener("click", function (e) {

        e.preventDefault();

        // Apna Telegram / WhatsApp / Website Link yaha lagana
        window.location.href = "https://t.me/+PrLuWP-LxPk2NjI1";

    });




    /*==================================
      IMAGE LAZY LOAD
    ==================================*/

    const images = document.querySelectorAll(".proof-card img");

    images.forEach((img) => {

        img.loading = "lazy";

        img.draggable = false;

    });




    /*==================================
      PREVENT IMAGE DRAG
    ==================================*/

    document.querySelectorAll("img").forEach((img) => {

        img.addEventListener("dragstart", (e) => {

            e.preventDefault();

        });

    });




    /*==================================
      BUTTON RIPPLE
    ==================================*/

    joinBtn.addEventListener("mousemove", function (e) {

        const rect = this.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        this.style.setProperty("--x", x + "px");

        this.style.setProperty("--y", y + "px");

    });




    /*==================================
      PAGE FADE
    ==================================*/

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity .6s ease";

        document.body.style.opacity = "1";

    });




    /*==================================
      SMOOTH SCROLL
    ==================================*/

    document.documentElement.style.scrollBehavior = "smooth";

});



/*========================================

END

=========================================*/
const popup = document.getElementById("imagePopup");

const popupImg = document.getElementById("popupImage");

const closeBtn = document.querySelector(".close-popup");

document.querySelectorAll(".proof-card img").forEach(img=>{

    img.addEventListener("click",()=>{

        popup.classList.add("active");

        popupImg.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("active");

    }

});
