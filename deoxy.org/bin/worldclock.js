 // From "The 24 Hour World" by Martin Webb - http://irt.org/articles/js076/index.htm
 // Milliseconds added - dimitri @  http://deoxy.org/mckenna.htm
 function padout(number) { return (number < 10) ? '0' + number : number; }
 function ampm(time) {
     var hours = time.getHours(), minutes = padout(time.getMinutes()), seconds = padout(time.getSeconds()), msecs = padout(time.getMilliseconds()/10);
     var adjhours = (hours == 0) ? 12 : ((hours < 13) ? hours : hours-12);
     return ((adjhours < 10) ? ' ' : '') + adjhours + ':' + minutes + ':'  + seconds + '`' + msecs + ((hours < 12) ? ' am' : ' pm');
 }

 if ((navigator.appVersion.indexOf('MSIE 3') == -1))
     var fiddle = 1;
 else
     var fiddle = -1;

 function updateForm() {
     var time = new Date();
     var TimezoneOffset = time.getTimezoneOffset();
     var gmtX = document.worldclock.theirzone.options[document.worldclock.theirzone.selectedIndex].value - 0;
     time.setTime(time.getTime() + TimezoneOffset*fiddle*60*1000 + gmtX*60*60*1000 + 
                 ((document.worldclock.summer.checked) ? 60*60*1000 : 0) );
     document.worldclock.theirtime.value = ampm(time);
     document.worldclock.thezone.value = gmtX;
     setTimeout("updateForm()",10);
 }

updateForm();