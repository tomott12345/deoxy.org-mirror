function Compute() {
with (Math){

// Read in the data entered by the user. 
   var Distance = eval(document.Math_Form.Distance.value); 
   var G_Factor = eval(document.Math_Form.G_Factor.value);

// Replace null distance value with 0 (zero) value.
   if (Distance == null) {A = 0;  document.Math_Form.Distance.value = 0};

// Replace null G_Factorvalue with default 1.0 value.
   if (G_Factor == null) {G_Factor = 0;  document.Math_Form.G_Factor.value = 1}; 

// Start main computations here.
// Compute non-relativistic acceleration component and its square.
   var Alpha  = (G_Factor * 9.80665 * 31557600) / 299792457.9;
   var Alpha2 = Alpha * Alpha;
   var Midpoint_Distance = Distance / 2;

// Compute distance to midpoint of voyage.
   var X = Midpoint_Distance + (1 / Alpha);



// Compute time required to reach the midpoint according to an earth based observer.    
   var T = sqrt((X * X) - (1 / Alpha2));
   var Days = 365.25 * T; Days = ceil(Days * 10000) / 10000;

// Compute relativistic velocity (Beta = max speed) reached at midpoint of voyage.
   var Beta = (T / X);

// Compute relativistic 'doppler' component of motion.
   var k = Alpha * (X + T);

// Compute time according to accelerated traveler.
   var t = log(k) / Alpha;
   var days = 365.25 * t; days = ceil(days * 10000) / 10000;

// Compute the time differences between traveler and static earth based observer
// required for the voyage both ways.
   var dT    = (T - t);
   var dDays = (365.25 * dT);
   var T2    = (T * 2);
   var t2    = (t * 2);
   var DT2   = (365.25 * T2);
   var Dt2   = (365.25 * t2);

// Round off answers to up to 6 decimal places.
   T     = rounded(T,6);
   T2    = rounded(T2,6);
   t     = rounded(t,6);
   t2    = rounded(t2,6);
   DT2   = rounded(DT2,6);
   Dt2   = rounded(Dt2,6);
   dT    = rounded(dT,6);
   dDays = rounded(dDays,6);  

// Construct output string.   
   var Out = "According to an Earth based observer:\n" + "Time to reach destination is  " + T + " yr\n";
if (T < 10) {Out = Out + "(or  " + Days + ") days\n\n"} else {Out = Out + "\n"}
   Out = Out + "According to the space traveler:\n" + "Time to reach destination is  " + t + " yr\n";
if (t < 10) {Out = Out + "(or  " + days + ") days\n\n"} else {Out = Out + "\n"}
   Out = Out + "Max relativistic speed achieved at midpoint is  \n" + (Beta * 100) + " percent of light speed\n\n";
   Out = Out + "The traveler experiences  " + dT + " yr\n";
if (dT < 10) {Out = Out + "(or  " + dDays + " days) "}
   Out = Out + "LESS time during the trip\nthan an Earth based observer.\n\n"; 
   Out = Out + "Round trip travel time as measured on Earth:\n"
   Out = Out + T2 + " yr\n"
if (T2 < 10) {Out = Out + "(or  " + DT2 + " days)\n"}
   Out = Out + "\n";
   Out = Out + "Round trip travel time as measured by traveler:\n"
   Out = Out + t2 + " yr\n"
if (t2 < 10) {Out = Out + "(or  " + Dt2 + " days)\n"}

// Now print the answer(s) into the answer box.
   document.Math_Form.Answer.value = Out;

}					
}

// A special function to round off (x) to given number of decimal places.
   function rounded(x, decimal_places){
   with(Math) {
   var d = -decimal_places
   var a = abs(d);
   var m = 0;
   if (d < 0) {m = pow(10,a);   return Math.round(x * m) / m}
   else {m = pow(10,d);         return round(x/m) * m}
}
}

function Info() {
 var Out = "About the type of voyage:\n\n";
 Out = Out + "In this scenario, the space traveler accelerates\n";
 Out = Out + "at a constant rate to the midpoint of the voyage\n";
 Out = Out + "and then reverses thrust and decelerates at the\n"
 Out = Out + "same rate until reaching the destination.\n\n";
 Out = Out + "The relativistic times involved are computed for\n";
 Out = Out + "comparison to an Earth based observer.\n\nProgram written by S. Jay Tanner";

 document.Math_Form.Answer.value = Out;
}
