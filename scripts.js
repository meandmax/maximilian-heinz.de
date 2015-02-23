var init = function () {
    var el = document.getElementById('masthead');

    var fadeIn = function (el) {
        el.style.opacity = 0;

        (function fade() {
            var val = parseFloat(el.style.opacity);

            if (!((val += .04) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };

    fadeIn(el);
};

window.onload = init;
