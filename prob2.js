/*
You wake up one morning and you get an alert that it's about to rain. 
You are in a daze and started to write a javascript function that will decide the outcome for you. 

If you have an alert of rain but the rain didn't start until you left home then you will bring an umbrella with you, 
or you have an alert of rain and the rain started before leaving home, then you won't go to the office, 
if you didn't get an alert but the rain started anyway, you will also stay home, 
if you're on your way and rain started you'll buy a vunakhichuri for launch 
but if it's a weekend then nothing to worry 
*/

var rainAlert = true;
var rain = false;
var stayHome = true;
var weekend = false;

if (!weekend) {
    if (rainAlert) {
        console.log(!stayHome && !rain ? 'bring an umbrella' : `won't go to the office`);
    }else if (!rainAlert) {
        console.log(rain && !stayHome ? 'buy a vunakhichuri for launch' : 'stay home');
    }
}else{
    console.log('nothing to worry.. chill');
}