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
        ieTest10_11 = useragent.match(/Windows NT(?:.)*rv:(\d+)/),
        ieTestEdge = useragent.match(/Windows NT(?:.)*Edge\/(\d+)/),
        isMobile, isSafari, isIE_below10, isIE_10_11, isIE_Edge, ieVersion;

    window._ITSAmodules || Object.protectedProp(window, '_ITSAmodules', createHashMap());

/*jshint boss:true */
    if (UserAgent=window._ITSAmodules.UserAgent) {
/*jshint boss:false */
        return UserAgent; // UserAgent was already created
    }

    isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    isSafari = useragent.contains('AppleWebKit');
    isIE_below10 = !!ieTest;
    isIE_10_11 = !isIE_below10 && !!ieTest10_11;
    isIE_Edge = !isIE_below10 && !isIE_10_11 && !!ieTestEdge;
    if (isIE_below10) {
        ieVersion = parseFloat(ieTest[1]);
    }
    else if (isIE_10_11) {
        ieVersion = parseFloat(ieTest10_11[1]);
    }
    else if (isIE_Edge) {
        ieVersion = parseFloat(ieTestEdge[1]);
    }

    window._ITSAmodules.UserAgent = UserAgent = {
        isMobile: isMobile,
        isSafari: isSafari,
        isIE: isIE_below10 || isIE_10_11 || isIE_Edge,
        ieVersion: ieVersion
    };

    return UserAgent;
};