window.addEventListener("load", function () {

    const button = document.getElementById("openBtn");
    const surprise = document.getElementById("surprise");
    const music = document.getElementById("music");
    const message = document.getElementById("message");


    /* --------------------------------
       Message
    -------------------------------- */

    const lines = [

        "Sometimes, life brings certain people into our journey at exactly the right moment.",

        "And for me, you are that person. ❤️",

        "I honestly feel that my luck started the day you came into my life.",

        "You are not just someone who helped me get a job —",

        "you became a very important part of my journey.",

        "You are truly my lucky charm. ✨",

        "This job is more than just a job for me.",

        "It is a milestone in my life.",

        "And a part of that milestone will always have your name in it.",

        "I may not be able to express how grateful I am in words,",

        "but I hope you always know how much your kindness and support mean to me.",

        "Thank you for believing in me.",

        "Thank you for helping me grow.",

        "And most importantly, thank you for being there when I needed someone.",

        "I will always be grateful for the role you played in my journey. ❤️"

    ];


    /* --------------------------------
       Button
    -------------------------------- */

    if (!button) {
        console.error("Open button not found!");
        return;
    }

    if (!surprise) {
        console.error("Surprise section not found!");
        return;
    }

    if (!message) {
        console.error("Message element not found!");
        return;
    }


    button.addEventListener("click", function () {

        console.log("❤️ Open My Heart clicked");


        /* Hide opening screen */

        button.style.display = "none";


        const intro =
            document.querySelector(".intro");

        const divider =
            document.querySelector(".line");

        const hint =
            document.querySelector(".hint");


        if (intro) {
            intro.style.display = "none";
        }

        if (divider) {
            divider.style.display = "none";
        }

        if (hint) {
            hint.style.display = "none";
        }


        /* Show surprise */

        surprise.style.display = "block";

        surprise.classList.add("show");


        /* Music */

        if (music) {

            music.currentTime = 0;

            music.play().catch(function (error) {

                console.log(
                    "Music cannot play:",
                    error
                );

            });

        }


        /* Start message */

        startMessage();


        /* Effects */

        createParticles();

        createConfetti();

    });


    /* --------------------------------
       Automatic Message
    -------------------------------- */

    function startMessage() {

        message.innerHTML = "";

        let index = 0;


        function showLine() {

            if (index < lines.length) {

                const line =
                    document.createElement("div");


                line.className =
                    "message-line";


                line.textContent =
                    lines[index];


                message.appendChild(line);


                /*
                 * Automatically move
                 * to the newest line.
                 */

                message.scrollTo({

                    top:
                        message.scrollHeight,

                    behavior:
                        "smooth"

                });


                index++;


                /*
                 * Show next line
                 * after 1.8 seconds.
                 */

                setTimeout(
                    showLine,
                    1800
                );


            } else {

                /*
                 * Final signature
                 */

                setTimeout(function () {

                    const signature =
                        document.createElement("div");


                    signature.className =
                        "signature";


                    signature.innerHTML = `
                        With gratitude,<br>
                        <strong>Padma ❤️</strong>
                    `;


                    message.appendChild(
                        signature
                    );


                    message.scrollTo({

                        top:
                            message.scrollHeight,

                        behavior:
                            "smooth"

                    });

                }, 1200);

            }

        }


        showLine();

    }


    /* --------------------------------
       Floating Hearts
    -------------------------------- */

    function createParticles() {

        const symbols = [
            "♥",
            "♡",
            "✦",
            "✧",
            "·"
        ];


        setInterval(function () {

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


            document.body.appendChild(
                particle
            );


            setTimeout(function () {

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


        for (
            let i = 0;
            i < 45;
            i++
        ) {

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


            document.body.appendChild(
                particle
            );


            setTimeout(function () {

                particle.remove();

            }, 6000);

        }

    }

});

