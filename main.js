var myopacity = 0;

function MyFadeFunction() {
    if (myopacity<1) {
        myopacity += .075;
        setTimeout(function(){MyFadeFunction()},100);
    }
    document.getElementById('quote').style.opacity = myopacity;
}