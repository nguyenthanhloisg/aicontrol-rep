function readCookie(name) {	var nameEQ = name + "=";	var ca = document.cookie.split(';');	for(var i=0;i < ca.length;i++) {		var c = ca[i];		while (c.charAt(0)==' ') c = c.substring(1,c.length);		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);	}	return null;}function closeBar(){$('#promotion-bar').remove();$('html').removeClass('promotion-top promotion-show');}var head  = document.getElementsByTagName('head')[0];var link  = document.createElement('link');link.rel  = 'stylesheet';link.type = 'text/css';link.href = "https://onapp.haravan.com/promotionbar/embed/asset/frontend/css/hrvpromotionbar.css?ver=1719817072133";link.media = 'all';head.appendChild(link);$(document).ready(function () { 
$("body").prepend(`<div id="promotion-bar" class="top-position dev-custom-position" style="background:#345675;visibility: hidden;opacity: 0;"><div class="bar-wrapper" ><p class="bar-content" style="font-family:Roboto !important; font-size:15px; color: #ffffff">|  DEMO & TƯ VẤN ONLINE  |</p><a type="button" class="action-button" style="font-family:Roboto !important; font-size:15px; color: #ffffff; background-color:#128b8e; " href="https://aicontrol.vn/pages/meet-aicontrol"  target="_blank"> TẠI ĐÂY</a></div><a href="#" class="close-bar " aria-label="close" id="closebar" onclick="closeBar()" >×</a></div>`); 
var cookie = readCookie('_ab');var openab = readCookie('_abv');if(cookie && openab == '1'){$('#promotion-bar.top-position').css("top", "40px");}$('html').addClass('promotion-top');$('html').addClass('promotion-show');}); 
