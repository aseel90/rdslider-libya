$(document).ready(function() {
    $(".paging-libya").show(); 
    $(".paging-libya a:first").addClass("active");

var imageWidth = $(".rdslider-libya").width(); 
var imageSum = $(".libya_img img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".libya_img").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var libya_imgPosition = triggerID * imageWidth;

    $(".paging-libya a").removeClass('active');
        $active.addClass('active');

    $(".rdtitlelibya").stop(true,true).slideUp('slow');
    $(".rdtitlelibya").eq( 
    $('.paging-libya a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".libya_img").animate({left: -libya_imgPosition}, 400 );
    };

rotateSwitch = function(){
    $(".rdtitlelibya").eq( $('.paging-libya a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging-libya a.active').next();

if ( $active.length === 0) {
    $active = $('.paging-libya a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".libya_img a, .rdtitlelibya a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging-libya a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});
