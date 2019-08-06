var opacityLogo = 1;
var opacityQuote = 0;
var smartphone = false;

function fadeLogoIn() {
    if(smartphone){
        document.getElementById('name').style.display = 'block';
    }
    document.getElementById('logo').style.display = 'block';
    if (opacityLogo<1) {
        opacityLogo += .075;
        setTimeout(function(){fadeLogoIn()},100);
    }
    document.getElementById('logo').style.opacity = opacityLogo;
    if(smartphone){
        document.getElementById('name').style.opacity = opacityLogo;
    }
}

function fadeQuoteIn() {
    document.getElementById('quoteContainer').style.display = 'block';
    if (opacityQuote<1) {
        opacityQuote += .075;
        setTimeout(function(){fadeQuoteIn()},100);
    }
    document.getElementById('quoteContainer').style.opacity = opacityQuote;
}

function fadeLogoOut(){
    if (opacityLogo>0){
        opacityLogo -= .075;
        setTimeout(function (){fadeLogoOut()}, 100);
    }
    document.getElementById('logo').style.opacity = opacityLogo;
    if(smartphone){
        document.getElementById('name').style.opacity = opacityLogo;
    }
    if (opacityLogo<=0){
        document.getElementById('logo').style.display = 'none';
        if(smartphone){
            document.getElementById('name').style.display = 'none';
        }
        fadeQuoteIn();
    }
}

function fadeQuoteOut(){
    if (opacityQuote>0){
        opacityQuote -= .075;
        setTimeout(function (){fadeQuoteOut()}, 100);
    }
    document.getElementById('quoteContainer').style.opacity = opacityQuote;
    if (opacityQuote<=0){
        document.getElementById('quoteContainer').style.display = 'none';
        fadeLogoIn();
    }
}
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation() {
        if(window.innerWidth<800){
            smartphone = true;
        } else {
            smartphone = false;
        }
        fadeLogoOut();
        setTimeout(function() {
            fadeQuoteOut();
        }, 7500);
    }