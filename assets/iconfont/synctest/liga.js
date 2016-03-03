/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'home': '&#xe90e;',
			'house': '&#xe90e;',
			'home2': '&#xe90f;',
			'house2': '&#xe90f;',
			'home3': '&#xe910;',
			'house3': '&#xe910;',
			'spades': '&#xe911;',
			'cards': '&#xe911;',
			'clubs': '&#xe912;',
			'cards2': '&#xe912;',
			'diamonds': '&#xe913;',
			'cards3': '&#xe913;',
			'bubble': '&#xe914;',
			'comment': '&#xe914;',
			'bubbles': '&#xe915;',
			'comments': '&#xe915;',
			'bubbles2': '&#xe916;',
			'comments2': '&#xe916;',
			'spinner2': '&#xe917;',
			'loading3': '&#xe917;',
			'spinner6': '&#xe918;',
			'loading7': '&#xe918;',
			'spinner7': '&#xe919;',
			'loading8': '&#xe919;',
			'spinner8': '&#xe91a;',
			'loading9': '&#xe91a;',
			'spinner9': '&#xe91b;',
			'loading10': '&#xe91b;',
			'spinner10': '&#xe91c;',
			'loading11': '&#xe91c;',
			'spinner11': '&#xe91d;',
			'loading12': '&#xe91d;',
			'search': '&#xe91e;',
			'magnifier': '&#xe91e;',
			'zoom-in': '&#xe91f;',
			'magnifier2': '&#xe91f;',
			'zoom-out': '&#xe92a;',
			'magnifier3': '&#xe92a;',
			'enlarge': '&#xe92b;',
			'expand': '&#xe92b;',
			'shrink': '&#xe92d;',
			'collapse': '&#xe92d;',
			'eye': '&#xe92e;',
			'views': '&#xe92e;',
			'eye-blocked': '&#xe92f;',
			'views4': '&#xe92f;',
			'heart': '&#xe930;',
			'like': '&#xe930;',
			'play3': '&#xe931;',
			'player8': '&#xe931;',
			'pause2': '&#xe932;',
			'player9': '&#xe932;',
			'stop2': '&#xe933;',
			'player10': '&#xe933;',
			'backward2': '&#xe934;',
			'player11': '&#xe934;',
			'forward3': '&#xe935;',
			'player12': '&#xe935;',
			'first': '&#xe936;',
			'player13': '&#xe936;',
			'last': '&#xe937;',
			'player14': '&#xe937;',
			'previous2': '&#xe938;',
			'player15': '&#xe938;',
			'next2': '&#xe939;',
			'player16': '&#xe939;',
			'eject': '&#xe93a;',
			'player17': '&#xe93a;',
			'volume-high': '&#xe93b;',
			'volume': '&#xe93b;',
			'volume-medium': '&#xe93c;',
			'volume2': '&#xe93c;',
			'volume-low': '&#xe93d;',
			'volume3': '&#xe93d;',
			'volume-mute': '&#xe93e;',
			'volume4': '&#xe93e;',
			'volume-mute2': '&#xe93f;',
			'volume5': '&#xe93f;',
			'volume-increase': '&#xe940;',
			'volume6': '&#xe940;',
			'git': '&#xe941;',
			'chrome': '&#xe942;',
			'browser': '&#xe942;',
			'firefox': '&#xe943;',
			'browser2': '&#xe943;',
			'IE': '&#xe944;',
			'browser3': '&#xe944;',
			'opera': '&#xe945;',
			'browser4': '&#xe945;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());