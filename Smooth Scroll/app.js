function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top; //the rectangle distance btwn the target top and the window top.
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if( startTime == null ) startTime = currentTime;
        //startTime: the time between refreshing the page and clicking the button
        var timeElapsed = currentTime - startTime; //
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        //console.log('TimeElapsed : ' + timeElapsed, ', duration : ' + duration);
    }
    
    function ease(t, b, c, d){ //time elapsed, start position, distance, duration
        t /= d / 2;
        if( t < 1) return c / 2 *t *t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation); //loop at 60fps
}


var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click',function(){
    smoothScroll('.section2',1000);
});

section2.addEventListener('click',function(){
    smoothScroll('.section1',1000);
});