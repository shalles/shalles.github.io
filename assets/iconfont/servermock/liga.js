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
			'file-text': '&#xe900;',
			'file': '&#xe900;',
			'profile': '&#xe901;',
			'file2': '&#xe901;',
			'file-empty': '&#xe902;',
			'file3': '&#xe902;',
			'files-empty': '&#xe903;',
			'files': '&#xe903;',
			'file-text2': '&#xe904;',
			'file4': '&#xe904;',
			'file-zip': '&#xe909;',
			'file9': '&#xe909;',
			'copy': '&#xe90a;',
			'duplicate': '&#xe90a;',
			'user': '&#xe90c;',
			'profile2': '&#xe90c;',
			'user-plus': '&#xe90d;',
			'user2': '&#xe90d;',
			'user-minus': '&#xe90e;',
			'user3': '&#xe90e;',
			'user-check': '&#xe90f;',
			'user4': '&#xe90f;',
			'user-tie': '&#xe910;',
			'user5': '&#xe910;',
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