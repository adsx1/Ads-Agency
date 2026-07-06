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

    fbq('track', 'Lead');

    fbq('trackCustom', 'TelegramClick');

    setTimeout(() => {
        window.location.href = "https://t.me/+PrLuWP-LxPk2NjI1";
    }, 200);

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
