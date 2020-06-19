
function step1() {
    const createjs = document.createElement('script');
    createjs.src = "https://code.createjs.com/1.0.0/createjs.min.js";
    createjs.onload = function () {
        step2()
    }
    document.body.appendChild(createjs);
}

function step2() {
    const particlejs_gochiusa = document.createElement('script');
    particlejs_gochiusa.src = "/particlejs_gochiusa.js";
    particlejs_gochiusa.onload = function () {
        step3()
    }
    document.body.appendChild(particlejs_gochiusa);
}

function step3() {
    const particlejs_init = document.createElement('script');
    particlejs_init.src = "/particlejs_init.js";
    document.body.appendChild(particlejs_init);
}

step1();
