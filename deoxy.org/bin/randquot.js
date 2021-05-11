function get_random(maxNum){
	if (Math.random && Math.round) {
var ranNum= Math.round(Math.random()*(maxNum-1));
ranNum+=1;
return ranNum;
}
else
{
today= new Date();
hours= today.getHours();
mins=  today.getMinutes();
secn=  today.getSeconds();
if (hours==19)
	hours=18;
var ranNum= (((hours+1)*(mins+1)*secn)%maxNum)+1;
return ranNum;
	}
}
function getaQuote() {
 var maxQuotes=10;
 var whichQuote=get_random(maxQuotes);
 whichQuote--;
var quote=new Array(maxQuotes)
   quote[0]="&quot;The distinction between past, present, and future is only an illusion, even if a stubborn one.&quot;<font size='-1'>&#151;Albert Einstein</font><br>";
   quote[1]="&quot;The very starting point of relativity theory consists in the discovery of a new and very astonishing property of time, namely the relativity of simultaneity&quot;<br><font size='-1'>&#151;Kurt G&ouml;del</font><br>";
   quote[2]="&quot;I see the Past, Present, and Future existing all at once before me.&quot;<br><font size='-1'>&#151;William Blake</font><br>";
   quote[3]="&quot;We still cannot say what time is; we cannot agree whether there is one time or many times, cannot even agree whether time is an essential ingredient of the universe or whether it is the grand illusion of the human intellect.&quot;<br><font size='-1'>&#151;Philip Davis and Reuben Hersh, <i>Descarte's Dream,</i> 1986</font><br>";
   quote[4]="&quot;In relativity theory, in the subtle fusion of time and space known as Minkowskian space-time, the space dimensions seem to lord it over the time dimensions, and the whole structure exists as a frozen manifold outside of time.&quot;<br><font size='-1'>&#151;Philip Davis and Reuben Hersh, <i>Descarte's Dream,</i> 1986</font><br>";
   quote[5]="&quot;Time is nature's way of keeping everything from happening at once.&quot;<br><font size='-1'>&#151;Anonymous</font><br>";
   quote[6]="&quot;Time is the moving image of eternity.&quot;<br><font size='-1'>&#151;Aristotle</font><br>";
   quote[7]="&quot;I do not believe that there are any longer any <i>philosophical</i> problems about Time; there is only the physical problem of determining the exact physical geometry of the four-dimensional continuum that we inhabit.&quot;<br><font size='-1'>&#151;Professor Hilary Putnam, 1967</font><br>";
   quote[8]="&quot;Hold infinity in the palm of your hand.<br>And eternity in an hour.&quot;<br><font size='-1'>&#151;William Blake</font><br>";
  quote[9]="&quot;Everything used to measure time really measures space.&quot;<br><font size='-1'>&#151;Jerome Deshusses</font><br>";
document.write(quote[whichQuote]);
}
getaQuote();