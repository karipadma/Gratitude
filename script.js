const button =
    document.getElementById("openBtn");

const surprise =
    document.getElementById("surprise");

const music =
    document.getElementById("music");

const message =
    document.getElementById("message");


const text = `
Sometimes, life brings certain people into our journey at exactly the right moment.
And for me, you are that person. ❤️

I honestly feel that my luck started the day you came into my life.

You are not just someone who helped me get a job 
you became a very important part of my journey.

You are truly my lucky charm. ✨

This job is more than just a job for me.
It is a milestone in my life

I may not be able to express how grateful I am in words,
but I hope you always know how much your kindness and support mean to me

`;


button.addEventListener("click", () => {

    /* Hide opening content */

    button.style.display = "none";

    document.querySelector(".intro").style.display = "none";

    document.querySelector(".line").style.display = "none";

    document.querySelector(".hint").style.display = "none";


    /* Show surprise */

    surprise.classList.add("show");


    /* Play music */

    music.play().catch(error => {

        console.log("Music:", error);

    });


    /* Type message */

    typeMessage();


    /* Create floating hearts */

    createParticles();


    /* Confetti */

    createConfetti();

});


function typeMessage() {

    let index = 0;

    message.innerHTML = "";


    function type() {

        if (index < text.length) {

            if (text[index] === "\n") {

                message.innerHTML += "<br>";

            } else {

                message.innerHTML += text[index];

            }

            index++;

            setTimeout(type, 25);

        }

    }


    type();

}


/* --------------------------------
   Floating hearts
-------------------------------- */

function createParticles() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "·"
    ];


    setInterval(() => {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.fontSize =
            (10 + Math.random() * 20) + "px";


        particle.style.animationDuration =
            (5 + Math.random() * 6) + "s";


        particle.style.setProperty(
            "--move",
            (Math.random() * 200 - 100) + "px"
        );


        document.body.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 12000);

    }, 350);

}


/* --------------------------------
   Confetti
-------------------------------- */

function createConfetti() {

    const symbols = [
        "♥",
        "✦",
        "♡",
        "✨"
    ];


    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.bottom =
            Math.random() * 40 + "vh";


        particle.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        document.body.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 6000);

    }

}
