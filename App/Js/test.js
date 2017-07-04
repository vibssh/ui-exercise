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
        $nav: $('nav')
    };

    //Event Handlers 
    var bindUIActions = function() {
        settings.$menuBtn.on('click', function(e) {
            e.preventDefault();
            settings.$nav.slideToggle();
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

//Initializing the Mobile Menu on the 
window.onload = function() {
    _MobileMenu.init();
};