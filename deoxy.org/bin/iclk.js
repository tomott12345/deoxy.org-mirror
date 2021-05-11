// iclock - http://deoxy.org/time
var ipath = "d2k/ching/";
var d=new Array();
for(i=0;i<10;i++) {
 d[i]=new Image();
 d[i].src=ipath+i+".gif";
}
var pm=new Image;
pm.src=ipath+"16.gif";
var am=new Image;
am.src=ipath+"9.gif";
var dates,min,sec,hour;
var amPM="am";

function clock() {
 dates=new Date();
 hour=dates.getHours();
 min=dates.getMinutes();
 sec=dates.getSeconds();
 if(hour < 12) {
  amPM=am.src;
 }
 if(hour > 11) {
  amPM=pm.src;
  hour=hour-12;
 }
 if(hour == 0) {
  hour=12;
 }
 if(hour < 10) {
  document["tensHour"].src=ipath+"9.gif";
  document["Hour"].src=d[hour].src;
 }
 if(hour > 9) {
  document["tensHour"].src=d[1].src;
  document["Hour"].src=d[hour-10].src;
 }
 if(min < 10) {
  document["tensMin"].src=d[0].src;
 }
 if(min > 9) {
  document["tensMin"].src=d[parseInt(min/10,10)].src;
 }
 document["Min"].src=d[min%10].src;
 if(sec < 10) {
  document["tensSec"].src=d[0].src;
 }
 if(sec > 9) {
  document["tensSec"].src=d[parseInt(sec/10,10)].src;
 }
 document["Sec"].src=d[sec%10].src;
 document["amPM"].src=amPM;
 setTimeout("clock();",100);
}