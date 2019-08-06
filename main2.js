var opacityLogo = 1;
var opacityQuote = 0;

function fadeLogoIn() {
    if (opacityLogo<1) {
        opacityLogo += .075;
        setTimeout(function(){fadeLogoIn()},100);
    }
    document.getElementById('logo').style.opacity = opacityLogo;
}

function fadeQuoteIn() {
    if (opacityQuote<1) {
        opacityQuote += .075;
        setTimeout(function(){fadeQuoteIn()},100);
    }
    document.getElementById('quoteContainer').style.opacity = opacityQuote;
    document.getElementById('cite').style.opacity = opacityQuote;
}

function fadeLogoOut(){
    if (opacityLogo>0){
        opacityLogo -= .075;
        setTimeout(function (){fadeLogoOut()}, 100);
    }
    document.getElementById('logo').style.opacity = opacityLogo;
}

function fadeQuoteOut(){
    if (opacityQuote>0){
        opacityQuote -= .075;
        setTimeout(function (){fadeQuoteOut()}, 100);
    }
    document.getElementById('quoteContainer').style.opacity = opacityQuote;
    document.getElementById('cite').style.opacity = opacityQuote;
}
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation() {
        fadeLogoOut();
        fadeQuoteIn();
        setTimeout(function() {
            fadeQuoteOut(); fadeLogoIn();
        }, 5000);
    }