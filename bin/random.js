// Deoxy404! - http://deoxy.org/404.htm
if (document.images) {
new Image();src="../time/d2k/ching/1.gif";
new Image();src="../time/d2k/ching/2.gif";
new Image();src="../time/d2k/ching/3.gif";
new Image();src="../time/d2k/ching/4.gif";
new Image();src="../time/d2k/ching/5.gif";
new Image();src="../time/d2k/ching/6.gif";
new Image();src="../time/d2k/ching/7.gif";
new Image();src="../time/d2k/ching/8.gif";}
if (document.images) {
img0 = new Image();img0.src="../gif/anim/oo-horiz/oo-horiz1.gif";
img1 = new Image();img1.src="../gif/anim/oo-horiz/oo-horiz2.gif";
img2 = new Image();img2.src="../gif/anim/oo-horiz/oo-horiz2a.gif";
img3 = new Image();img3.src="../gif/anim/oo-horiz/oo-horiz2ab.gif";
img4 = new Image();img4.src="../gif/anim/oo-horiz/oo-horiz2abc.gif";}
//Javascript Random I Ching Hexagram Generator by dimitri - http://deoxy.org
// Adapted from the lottery number generator in Martin Webb's "Today's the Day" script
// Visit http://irt.org for Martin's vast web programming resources
function makeArray()    {
    this[0] = makeArray.arguments.length;
    for (i = 0; i<makeArray.arguments.length; i++)
        this[i+1] = makeArray.arguments[i];
}
//**** Random routines
// start - The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
// See:  http://www.msc.cornell.edu/~houle/javascript/randomizer.html
// A linear congruential random number generator with coefficients from
// Numerical Recipes, automatically seeded from your system clock.
rnd.today=new Date();rnd.seed=rnd.today.getTime();
function rnd() { rnd.seed = (rnd.seed*9301+49297) % 233280; return rnd.seed/(233280.0); }
function rand(number) { return Math.ceil(rnd()*number); }
// end   - The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
//**** I Ching routines
var trigram = new makeArray('heaven','lake','fire','thunder','wind','water','mountain','earth');
var trigrams = 8, trigramstoselect = 2;
var trigramnumbers = new MakeEmptyArray(trigrams);
function MakeEmptyArray(size) {
    this[0] = size;
    for (i = 1; i <= size; i++)
        this[i] = '';
}
function ResetTrigrams() {
    for (var i = 1; i <= trigramnumbers[0]; i++)
        trigramnumbers[i] = '';
}
function SelectTrigrams(number) {
    while (number > 0) {
        random = rand(trigramnumbers[0]);
        if (trigramnumbers[random] == '') {
            trigramnumbers[random] = 'X';
            number--;
        }
    }
}
function ShowTrigrams() {
    document.write('<P>');
    for (var i=1; i <= trigramnumbers[0]; i++) {
        if (trigramnumbers[i] != '')
document.write('<a href="Javascript:icalcWindow()"><IMG SRC="../time/d2k/ching/'+i+'.gif" HEIGHT=47 WIDTH=72 vspace=4 hspace=12 align="middle" ALT="'+trigram[i]+'" border="0"></a><br>');
    }
}
// END ICHING ROUTINES

function icalcWindow() { icalcWin=window.open("../time/d2k/ching/icalc.htm","icalcWin","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=yes,width=680,height=360");}
function sandWindow() {
sandWin=window.open("../time/d2k/ching/sandbox.htm","sandWin","resizable=yes,width=700,height=600").location.href;}
function chingI() {
window.alert("Select the hexagram to active a computer that     \nwill allow you to identify it while simultaneously     \nenhancing your familiarity with the hexagram's              \ntrigrammatic components.   \n\nConsult an I Ching (Book of Changes)\nfor sayings and commentary. ");}
function formHandler(form){
var URL = form.site.options[form.site.selectedIndex].value;
if (URL == "vvoid") {} else	{ 
var options = "toolbar=yes,location=yes,location=yes,status=yes,menubar=yes,"
            + "scrollbars=yes,resizable=yes,width=700,height=600"
todayWin=window.open("","todayWin",options)
todayWin.location.href = URL;todayWin.focus();}}
function formHandler2(form){
var URL = form.site.options[form.site.selectedIndex].value;
window.location.href = URL;
window.focus();}
function ooHoriz(num){if (num=="1")  {on0();} if (num=="0")  {off0();}}
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
function ouro(){ooHoriz("1");setTimeout("ourob()",500);}
function ourob(){ooHoriz("0");setTimeout("ouro()",3000);}
function feedBack() {
var options = "height=600,width=700,top=25,left=20,status=no,directories=no"
            + "toolbars=no,menubar=no,scrollbars=yes,resizable=no,location=no"
feedWin = window.open("../annex/feedback.htm","feedme",options);feedWin.focus();}