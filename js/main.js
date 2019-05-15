(function () {
    "use strict";

    var initNav = function ($navSections){
        var $navLinks = document.querySelectorAll('.nav-link');
        var $navPage = document.querySelectorAll('.nav-page');
        var cssClassActive = 'active';

        var onNavClick = function (evt){
            evt.preventDefault();
            var targetContentId = this.getAttribute('href').replace('#', '');

            for (var i = $navPage.length - 1; i >= 0; i--) {
                let $content = $navPage[i];

                if ($content.id === targetContentId) {
                    $content.classList.add(cssClassActive);
                } else {
                    $content.classList.remove(cssClassActive);
                }
            }

            for (var i = $navLinks.length - 1; i >= 0; i--) {
                $navLinks[i].classList.remove(cssClassActive);
            }

            this.classList.add(cssClassActive);
        };

        for (var i = $navLinks.length - 1; i >= 0; i--) {
            $navLinks[i].addEventListener('click', onNavClick);
        }
    };

    var $navSections = document.querySelectorAll('.nav-section');

    for (var i = $navSections.length - 1; i >= 0; i--) {
        initNav($navSections[i]);
    }

    
})();