// ==UserScript==
// @name        Auto Reload Protopage
// @namespace   http://blog.monstuff.com/archives/cat_greasemonkey.html
// @description Reload pages every 5 minutes
// @include     https://euterpe.webuntis.com/*
// @grant       none
// ==/UserScript==

// based on code by Julien Couvreur
// and included here with his gracious permission

var numMinutes = 5;
setTimeout (location.reload, numMinutes*60*1000);
