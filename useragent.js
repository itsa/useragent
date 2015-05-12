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
require('js-ext/lib/object.js');
require('js-ext/lib/string.js');

var createHashMap = require('js-ext/extra/hashmap.js').createMap;

module.exports = function (window) {

    var UserAgent,
        navigator = window.navigator,
        useragent = navigator.userAgent,
        ieTest = useragent.match(/MSIE (\d+)\./),
        isMobile, isSafari, isIE, ieVersion;

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', createHashMap());

/*jshint boss:true */
    if (UserAgent=window._ITSAmodules.UserAgent) {
/*jshint boss:false */
        return UserAgent; // UserAgent was already created
    }

    isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    isSafari = useragent.contains('AppleWebKit');
    isIE = !!ieTest;
    ieVersion = isIE && parseFloat(ieTest[1]);

    window._ITSAmodules.UserAgent = UserAgent = {
        isMobile: isMobile,
        isSafari: isSafari,
        isIE: isIE,
        ieVersion: ieVersion
    };

    return UserAgent;
};