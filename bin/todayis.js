var months=new Array(13);
months[1]="January";
months[2]="February";
months[3]="March";
months[4]="April";
months[5]="May";
months[6]="June";
months[7]="July";
months[8]="August";
months[9]="September";
months[10]="October";
months[11]="November";
months[12]="December";
var time=new Date();
var lmonth=months[time.getMonth() + 1];
var date=time.getDate();
var year=time.getYear();
if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))		
year="19" + year;
if (navigator.appName == "Netscape")
year=1900 + year;
document.write("<font size=-1 color=silver>Today is " + lmonth + " ");
document.write(date + ", " + year + "</font>");
