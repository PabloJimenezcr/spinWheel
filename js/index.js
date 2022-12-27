'use strict';

window.addEventListener('load', init, false);


function init() {
    let wheel = document.querySelector('.wheel');
    let spinBnt = document.querySelector('.spinBtn');
    let value = Math.ceil(Math.random() * 3600);

    spinBnt.onclick = function () {
        wheel.style.transform = 'rotate(' + value + 'deg)';
        value += Math.ceil(Math.random() * 3600);

    }

}