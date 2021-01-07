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