// ==UserScript==
// @name         Auto refresh WebUntis
// @namespace    http://praher.name
// @version      0.1
// @description  Adds a meta tag to WebUntis Web Client so it automatically refreshes every 30 seconds in order to prevent the logout
// @author       Patrick Praher
// @match        https://euterpe.webuntis.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var meta = document.createElement('meta');
    meta.httpEquiv = "refresh";
    meta.content = "300";
    document.getElementsByTagName('head')[0].appendChild(meta);
    // document.getElementsByTagName('body')[0].setAttribute("onLoad", "setTimeout(location.href='#', '2000')");
})();
