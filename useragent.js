"use strict";

/**
 *
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module useragent
 * @class USERAGENT
 * @since 0.0.1
*/

require('polyfill');

var NAME = '[useragent]: ';

module.exports = function (window) {

    var UserAgent,
        navigator = window.navigator;

    window._ITSAmodules || window.protectedProp('_ITSAmodules', {});

/*jshint boss:true */
    if (UserAgent=window._ITSAmodules.UserAgent) {
/*jshint boss:false */
        return UserAgent; // UserAgent was already created
    }

    window._ITSAmodules.UserAgent = UserAgent = {
        isMobile: ('ontouchstart' in window) || (window.navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    };

    return UserAgent;
};