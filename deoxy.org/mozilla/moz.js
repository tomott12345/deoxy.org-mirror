// Mozilla Virus - http://deoxy.org/mozilla
/* Ultimate client-side JavaScript client sniff.
(C) Netscape Communications 1999.  Permission granted to reuse and distribute.
Revised 20 April 98 to add is_nav5up and is_ie5up
Revised 16 Nov 99 to add app variable -dimitri*/
var agt=navigator.userAgent.toLowerCase(); 
var app=navigator.appName.toLowerCase();
var is_major = parseInt(navigator.appVersion); 
var is_minor = parseFloat(navigator.appVersion); 
// mozilla
var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) 
            && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) 
            && (agt.indexOf('webtv')==-1)); 
var is_nav2 = (is_nav && (is_major == 2)); 
var is_nav3 = (is_nav && (is_major == 3)); 
var is_nav4 = (is_nav && (is_major == 4)); 
var is_nav4up = (is_nav && (is_major >= 4)); 
var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) || 
                      (agt.indexOf("; nav") != -1)) ); 
var is_nav5 = (is_nav && (is_major == 5)); 
var is_nav5up = (is_nav && (is_major >= 5)); 
// ie
var is_ms   = (app.indexOf("microsoft") != -1);
var is_ie   = (agt.indexOf("msie") != -1); 
var is_ie3  = (is_ie && (is_major < 4)); 
var is_ie4  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")==-1) ); 
var is_ie4up  = (is_ie  && (is_major >= 4)); 
var is_ie5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) ); 
var is_ie5up  = (is_ie  && !is_ie3 && !is_ie4); 
// aol with ie 3 or 4, unreliable
var is_aol   = (agt.indexOf("aol") != -1); 
var is_aol3  = (is_aol && is_ie3); 
var is_aol4  = (is_aol && is_ie4); 
// others
var is_opera = (agt.indexOf("opera") != -1); 
var is_webtv = (agt.indexOf("webtv") != -1); 
var is_lynx = (agt.indexOf("lynx") != -1);// hey!
// *** JAVASCRIPT VERSION CHECK *** 
var is_js; 
if (is_nav2 || is_ie3) is_js = 1.0 
else if (is_nav3 || is_opera) is_js = 1.1 
else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2 
else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3 
else if (is_nav5) is_js = 1.4 
else if (is_nav && (is_major > 5)) is_js = 1.4 
else if (is_ie && (is_major > 5)) is_js = 1.3 
else is_js = 0.0;
// END CLIENT SNIFF

if (is_ms) {virusDetect();}
else if (is_nav2){window.alert("You are using version "+is_minor+" of Netscape Navigator.\nIt is a FOSSIL and needs to be updated.\r\nMost older browsers contain nasty security bugs and lack\nkey features. For your own safety and the best possible\nbrowsing experience please update!");}
else if (is_nav3){window.alert("You are using version "+is_minor+" of Netscape Navigator.\nIt is a RELIC and needs to be updated.\r\nMost older browsers contain nasty security bugs and lack\nkey features. For your own safety and the best possible\nbrowsing experience please update!");}
else if (is_aol){haha();}
else if (is_webtv){window.alert("Hey! WebTV actually rewrites webpages to display them\non your televisual device. The results are unpredictable so\nthis site won't look as intended, and some javascripts may\nnot function, but the information should still be accessible. Joy!");}
function virusDetect(){if (confirm("WARNING!\r\n\nMicrosoft Internet Exploiter "+is_minor+" Detected\r\n\nProceed with Virus Removal Procedure?")){msWindow();}}
function msWindow(){
msWin=window.open("","msWin","scrollbars,resizable,status,height=666,width=666").location.href="mozilla/internet_exploiter.htm";}
function haha(){
if (is_nav){document.write('<EMBED SRC="../audio/gotmail.wav" AUTOSTART=TRUE LOOP=FALSE WIDTH=2 HEIGHT=2 ALIGN="CENTER"></EMBED>');}
else if (is_ms) {document.write('<BGSOUND SRC="../audio/gotmail.wav" LOOP="0">');}}

function ifReg() {if (confirm("Visit 'The Register' website for more information\nabout this odd search result?")) {regWin=window.open("http://www.theregister.co.uk/991007-000010.html","regWin","location,resizable,menubar,scrollbars,width=700,height=500");}}
function regWin() {
	regWin=window.open("","regWin","location,resizable,menubar,scrollbars,width=700,height=500")
}
function bgbioWin(){
var t1 = "<TITLE>$17,000,000,000</TITLE>" +
"<BODY BGCOLOR='ffffff' TEXT='000000' onLoad='focus(); window.resizeTo(500,400)'>" +
"<TABLE BORDER='0' cellpadding='4' cellspacing='0' align='center' width='95%'><TR>" +
"<TD align='right'><font size='-1'><b>$17,000,000,000</b></font></td></tr>"
var t2 ="<tr><td>Bill and Melinda Gates have endowed a foundation with more than $17 billion to support " +
"philanthropic initiatives in the areas of global health and learning, with the hope that as we move " +
"into the 21st century, advances in these critical areas will be available for all people. To date, the " +
"<a href='http://www.gatesfoundation.org/' onclick='window.resizeTo(700,500)'>Bill and Melinda Gates Foundation</a> " +
"has committed more than $300 million to organizations working in global " +
"health; more than $300 million to improve learning opportunities, including the Gates Library Initiative to " +
"bring computers, Internet Access and training to public libraries in low-income communities in the United States " +
"and Canada; more than $54 million to community projects in the Pacific Northwest; and more than $29 million to " +
"special projects and annual giving campaigns.<p><small>From " +
"<a href='http://www.microsoft.com/billgates/bio.htm' onclick='window.resizeTo(700,500)'>the online biography of William H. Gates</a> Chairman and Chief Executive Officer Microsoft Corporation</small>"
var t3 = "<div align='right'><form><input type='button' value='wow' onclick='self.close()'></form></td></tr></TABLE></BODY>"
popup = window.open("","philWin","width=500,height=400,scrollbars,resizable,menubar")
popup.document.write(t1+t2+t3)
popup.document.close()
}
if (document.images) {
img0 = new Image();img0.src="../gif/anim/oo-horiz/oo-horiz1.gif";
img1 = new Image();img1.src="../gif/anim/oo-horiz/oo-horiz2.gif";
img2 = new Image();img2.src="../gif/anim/oo-horiz/oo-horiz2a.gif";
img3 = new Image();img3.src="../gif/anim/oo-horiz/oo-horiz2ab.gif";
img4 = new Image();img4.src="../gif/anim/oo-horiz/oo-horiz2abc.gif";}
function ooHoriz(num){  if (num=="1")  {  on0();  }  if (num=="0")  {  off0();  }}
function on0(){document.images.flux.src=img0.src;setTimeout("on1()",100);}
function on1(){document.images.flux.src=img1.src;setTimeout("on2()",100);}
function on2(){document.images.flux.src=img2.src;setTimeout("on3()",100);}
function on3(){document.images.flux.src=img3.src;setTimeout("on4()",100);}
function on4(){document.images.flux.src=img4.src;}
function off0(){document.images.flux.src=img4.src;setTimeout("off1()",50);}
function off1(){document.images.flux.src=img3.src;setTimeout("off2()",50);}
function off2(){document.images.flux.src=img2.src;setTimeout("off3()",50);}
function off3(){document.images.flux.src=img1.src;setTimeout("off4()",50);}
function off4(){document.images.flux.src=img0.src;}
/* fade script ver0.1 by Kouichirou@Eto.com 1996/02/20
 * Copyright (c) 1996 Kouichirou Eto. All Rights Reserved.
 * You can freely copy, use, modify this script,
 * if the credit is given in the source.
 * If you would like to get information for this script,
 * please access */
function makearray(n) {
    this.length = n;
    for(var i = 1; i <= n; i++)
        this[i] = 0;
    return this;
}
hexa = new makearray(16);
for(var i = 0; i < 10; i++)
    hexa[i] = i;
hexa[10]="a"; hexa[11]="b"; hexa[12]="c";
hexa[13]="d"; hexa[14]="e"; hexa[15]="f";

function hex(i) {
    if (i < 0)
        return "00";
    else if (i > 255)
        return "ff";
    else
        return "" + hexa[Math.floor(i/16)] + hexa[i%16];
}
function setbgColor(r, g, b) {
    var hr = hex(r); var hg = hex(g); var hb = hex(b);
    document.bgColor = "#"+hr+hg+hb;
}
function fade(sr, sg, sb, er, eg, eb, step) {
    for(var i = 0; i <= step; i++) {
        setbgColor(
        Math.floor(sr * ((step-i)/step) + er * (i/step)),
        Math.floor(sg * ((step-i)/step) + eg * (i/step)),
        Math.floor(sb * ((step-i)/step) + eb * (i/step)));
    }
}
function fadein() {
    fade(50,255,50, 0,0,0, 32);
}
function fadeout() {
	document.bgColor = "#f0f000";
	document.bgColor = "#f0a000";
	document.bgColor = "#f00000";
	document.bgColor = "#000000";
	fade(0,0,0, 100,0,0, 32);
}
/* do fadein */
fadein();
/* end fade script */
