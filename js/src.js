$( document ).ready(function() {

    $('li').click(function(){
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.filter-bar-item').click(function(){
        $('.filter-bar-item').removeClass('filter-item-active');
        $(this).addClass('filter-item-active');
    });


    $('.item-item-left').click(function(){
        $('.item-item-left').removeClass('filter-item-active');
        $(this).addClass('filter-item-active');
    });

    $('.item-item-right').click(function(){
        $('.item-item-right').removeClass('filter-item-active');
        $(this).addClass('filter-item-active');
    });
    $('.fa-heart').click(function(){
        if($(this).hasClass('fas')){
            $(this).addClass('far');
            $(this).removeClass('fas');
        }else{
            $(this).addClass('fas');
            $(this).removeClass('far');
        }
    });
});
// ---------------------------------------------
function startTimer(duration, minutes1, seconds1) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes1.textContent = minutes;
        seconds1.textContent = seconds;

        // display.textContent = minutes + `m` +":"+ seconds + `s`; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        minutes1 = document.querySelector('#minute');
        seconds1 = document.querySelector('#second')
    startTimer(fiveMinutes, minutes1, seconds1);
};