// ------------------------------------------------------------------
// SCRIPTS
// ------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    this.onclick = function (e) {
        e.preventDefault();

        var tabs = this.querySelectorAll(".js-tab"),
            sliders = this.querySelectorAll(".js-slide"),
            clickedElement = e.srcElement,
            sliderhash = clickedElement.hash,
            closestLi = clickedElement.closest("li");

        if (e.srcElement.className === "js-tab tabs__link") {

            tabs.forEach(function (item) {
                item.closest("li").className = "tabs__item";
            });

            closestLi.classList.contains("is-active") ?
                closestLi.className += "tabs__item is-active" :
                    closestLi.className += " is-active";

            sliders.forEach(function (item) {
                item.id === sliderhash ?
                item.className = "js-slide slide__item is-active" :
                    item.className = "js-slide slide__item is-hidden";
            });

        }
    };
});
