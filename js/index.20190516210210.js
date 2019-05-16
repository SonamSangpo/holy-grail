(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="tvqqpsuAdibonfejb/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/chanmedia-copy-2-292.png' : 'images/chanmedia-copy-2-146.png');
$('.js3').attr('src', (dpi>1) ? 'images/attik-screen-shot-960.jpg' : 'images/attik-screen-shot-480-1.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/unisonixs-ss-960.jpg' : 'images/unisonixs-ss-480-1.jpg');
$('.js5').attr('src', (dpi>1) ? 'images/d-and-j-ss-960.jpg' : 'images/d-and-j-ss-480-1.jpg');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/chanmedia-copy-2-146.png' : 'images/chanmedia-copy-2-73.png');
$('.js3').attr('src', (dpi>1) ? 'images/attik-screen-shot-480.jpg' : 'images/attik-screen-shot-240.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/unisonixs-ss-480.jpg' : 'images/unisonixs-ss-240.jpg');
$('.js5').attr('src', (dpi>1) ? 'images/d-and-j-ss-480.jpg' : 'images/d-and-j-ss-240.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/chanmedia-copy-2-98.png' : 'images/chanmedia-copy-2-49.png');
$('.js3').attr('src', (dpi>1) ? 'images/attik-screen-shot-320.jpg' : 'images/attik-screen-shot-160.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/unisonixs-ss-320.jpg' : 'images/unisonixs-ss-160.jpg');
$('.js5').attr('src', (dpi>1) ? 'images/d-and-j-ss-320.jpg' : 'images/d-and-j-ss-160.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.s4').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.20s", "0.10s", 1, 100);
wl.start();

});