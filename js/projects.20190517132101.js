(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js23').attr('src', (dpi>1) ? 'images/ubu2-1034.jpg' : 'images/ubu2-517.jpg');
$('.js24').attr('src', (dpi>1) ? 'images/ubu-1034.jpg' : 'images/ubu-517.jpg');
$('.js19').attr('src', (dpi>1) ? 'images/chanlogo2hz-886.png' : 'images/chanlogo2hz-443.png');
$('.js20').attr('src', (dpi>1) ? 'images/attik-screen-shot-960-1.jpg' : 'images/attik-screen-shot-480-3.jpg');
$('.js21').attr('src', (dpi>1) ? 'images/unisonixs-ss-960-1.jpg' : 'images/unisonixs-ss-480-2.jpg');
$('.js22').attr('src', (dpi>1) ? 'images/d-and-j-ss-960.jpg' : 'images/d-and-j-ss-480-1.jpg');}else if($(window).width()>=480){$('.js23').attr('src', (dpi>1) ? 'images/ubu2-960.jpg' : 'images/ubu2-480-1.jpg');
$('.js24').attr('src', (dpi>1) ? 'images/ubu-958.jpg' : 'images/ubu-479.jpg');
$('.js19').attr('src', (dpi>1) ? 'images/chanlogo2hz-444.png' : 'images/chanlogo2hz-222.png');
$('.js20').attr('src', (dpi>1) ? 'images/attik-screen-shot-960-2.jpg' : 'images/attik-screen-shot-480-4.jpg');
$('.js21').attr('src', (dpi>1) ? 'images/unisonixs-ss-958.jpg' : 'images/unisonixs-ss-479.jpg');
$('.js22').attr('src', (dpi>1) ? 'images/d-and-j-ss-480.jpg' : 'images/d-and-j-ss-240.jpg');}else{$('.js23').attr('src', (dpi>1) ? 'images/ubu2-640.jpg' : 'images/ubu2-320-1.jpg');
$('.js24').attr('src', (dpi>1) ? 'images/ubu-640.jpg' : 'images/ubu-320-1.jpg');
$('.js19').attr('src', (dpi>1) ? 'images/chanlogo2hz-296.png' : 'images/chanlogo2hz-148.png');
$('.js20').attr('src', (dpi>1) ? 'images/attik-screen-shot-640.jpg' : 'images/attik-screen-shot-320-1.jpg');
$('.js21').attr('src', (dpi>1) ? 'images/unisonixs-ss-638.jpg' : 'images/unisonixs-ss-319.jpg');
$('.js22').attr('src', (dpi>1) ? 'images/d-and-j-ss-320.jpg' : 'images/d-and-j-ss-160.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});