/**
 * Project      : - UI Exercise
 * Client       : - valtech_
 * Dated        : 04.07.2017
 * Dependencies : jQuery 
 * Author       : Leo Jacobs
 */

/* Mobile Menu */
var _MobileMenu = (function() {
    'use strict';

    //Cache the elements
    var settings = {
        $menuBtn: $('.mobile-menu'),
        $nav: $('nav'),
        $navLink: $('nav').find('a')
    };

    //Event Handlers 
    var bindUIActions = function() {
        settings.$menuBtn.on('click', function(e) {
            e.preventDefault();
            settings.$nav.slideToggle();
        });

        
            settings.$navLink.on('click', function (e) {
                e.preventDefault();
                if ($(window).width() <= 767) {
                    settings.$nav.slideToggle();
                }
                
            });
        
        
    };

    //Public Method
    var init = function() {
        bindUIActions();
    };

    return {
        init: init
    }

}());



/* Toggle SideBar */
var _ToggleSideBar = (function() {
    'use strict';

    //Cache the Elements
    var settings = {
        $toggleSidebarBtn: $('.toggle-sidebar'),
        $sideBar: $('aside')
    };

    var bindUIActions = function() {
        settings.$toggleSidebarBtn.on('click', function () {
            console.info(settings.$sideBar);
            settings.$sideBar.toggleClass('active');
        });
    };

    var init = function() {
        bindUIActions();
    };


    return {
        init: init
}

}());




//Initializing the Mobile Menu on the 
window.onload = function() {
    _MobileMenu.init();
    _ToggleSideBar.init(); // As per exercise 3
};