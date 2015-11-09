/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'servermock\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-file-text': '&#xe900;',
		'icon-profile': '&#xe901;',
		'icon-file-empty': '&#xe902;',
		'icon-files-empty': '&#xe903;',
		'icon-file-text2': '&#xe904;',
		'icon-file-picture': '&#xe905;',
		'icon-file-music': '&#xe906;',
		'icon-file-play': '&#xe907;',
		'icon-file-video': '&#xe908;',
		'icon-file-zip': '&#xe909;',
		'icon-copy': '&#xe90a;',
		'icon-paste': '&#xe90b;',
		'icon-user': '&#xe90c;',
		'icon-user-plus': '&#xe90d;',
		'icon-user-minus': '&#xe90e;',
		'icon-user-check': '&#xe90f;',
		'icon-user-tie': '&#xe910;',
		'icon-file-pdf': '&#xe911;',
		'icon-file-openoffice': '&#xe912;',
		'icon-file-word': '&#xe913;',
		'icon-file-excel': '&#xe914;',
		'icon-libreoffice': '&#xe915;',
		'icon-file-directory': '&#xf016;',
		'icon-file-submodule': '&#xf017;',
		'icon-file-symlink-directory': '&#xf0b1;',
		'icon-file-text3': '&#xf011;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
