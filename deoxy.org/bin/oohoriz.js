function ooHoriz(num){if (num=="1"){on0();}if (num=="0"){off0();}}
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
