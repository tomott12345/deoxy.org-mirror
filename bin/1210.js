var isColor="red"
function colors(txt){
if ((txt=="lite") && (isColor=="red")){
isColor="toLite";
document.bgColor = "#800000";
document.bgColor = "#911111";
document.bgColor = "#a22222";
document.bgColor = "#c33333";
document.bgColor = "#d44444";
document.bgColor = "#e55555";
document.bgColor = "#f66666";
document.bgColor = "#f77777";
document.bgColor = "#f88888";
document.bgColor = "#f99999";
document.bgColor = "#faaaaa";
document.bgColor = "#fbbbbb";
document.bgColor = "#fccccc";
document.bgColor = "#fddddd";
document.bgColor = "#feeeee";
document.bgColor = "#ffffff";
isColor="lite";
return true
}
if ((txt=="red") && (isColor=="lite")){
isColor="toRed";
setTimeout("r0()",2000);
}
}
function r0() { document.bgColor = "#fddddd";
setTimeout("r1()",100);}
function r1() { document.bgColor = "#faaaaa";
setTimeout("r2()",100);}
function r2() { document.bgColor = "#f66666";
setTimeout("r3()",100);}
function r3() { document.bgColor = "#c33333";
setTimeout("r4()",100);}
function r4() { document.bgColor = "#800000";
isColor="red";
return true
}
function clickd(){
document.bgColor = "#ffffff";
return true
}
