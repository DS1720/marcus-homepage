var myopacity = 0;
var myopacityLogo = 1;
var fadeout=false;

function MyFadeFunction() {
    if (myopacity<1 && !fadeout) {
        myopacity += .075;
        setTimeout(function(){MyFadeFunction()},100);
    }
    document.getElementById('cite').style.opacity = myopacity;
}

function fadeOut(){
    if (myopacity>0 && fadeout){
        myopacity -= .075;
        setTimeout(function (){fadeOut()}, 100);
    }
    document.getElementById('cite').style.opacity = myopacity;
    document.getElementById('quote').style.opacity = myopacity;
}

function fadeLogoIn() {
    if (myopacityLogo<1) {
        myopacityLogo += .075;
        setTimeout(function(){fadeLogoIn()},100);
    }
    document.getElementById('logo').style.opacity = myopacityLogo;
    document.getElementById('name').style.opacity = myopacityLogo;
}

function fadeLogoOut(){
    if (myopacityLogo>0){
        myopacityLogo -= .075;
        setTimeout(function (){fadeLogoOut()}, 100);
    }
    document.getElementById('logo').style.opacity = myopacityLogo;
    document.getElementById('name').style.opacity = myopacityLogo;
}

    // array with texts to type in typewriter
    var dataText = [ "\"Unsere Daten legen nahe, dass diese Bienen effektiver sammeln, weil sie erfahrener sind.\""];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h4
            document.querySelector("h5").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" id="cursor"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 50);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            MyFadeFunction();
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        fadeLogoOut();
        document.getElementById('quote').style.opacity = 1;
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                setTimeout(function() {
                    fadeout = true; fadeOut(); fadeLogoIn();
                }, 5000);
            });
        }
    }