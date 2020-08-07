

$(document).ready(function(){
    $('.carousel').carousel({
        interval:6000
    })
});

//document ready
$(document).ready(function(){

    $("html").niceScroll({
        cursorwidth: "5px",
        
    });
        


    $(".Change-Colour .fa-cog").click(function(){
        $(".body-change").fadeToggle()
    });
    $(".body-change ul li").click(function(){
        $("link[href*='thome']").attr("href", $(this).attr("data-value"));

    });
 })










$(window).on("load",function()
{
    
    
    $(".loading-overlay, .loading-overlay .spinner").fadeOut(1000);


   
})





 