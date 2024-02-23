$(document).ready(function(){
    $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    if(nextImg.length){
        currentImg.removeClass().css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    }
    });
    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass().css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
        });
        $('.next').on('click', function(){
            var currentSVG = $('.activeSVG');
            var nextSVG = currentSVG.next();
            if(nextSVG.length){
                currentSVG.removeClass();
                nextSVG.addClass('activeSVG');
            }
            });
  });

// $(document).ready(function () {
//     var currentIndex = 0;
//     function showSlide(index) {
//       $(".interiorImg").hide();
//       $(".interiorImg:eq(" + index + ")").fadeIn();
//       $(".indicator").removeClass("active");
//       $(".indicator:eq(" + index + ")").addClass("active");
//     }
//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % $(".interiorImg").length;
//       showSlide(currentIndex);
//     }
//     showSlide(currentIndex);
//     var intervalId = setInterval(function () {
//       nextSlide();
//     }, 6000);
//     $(".next").on("click", function () {
//       clearInterval(intervalId);
//       nextSlide();
//     });
//     $(".autoplay-indicators .indicator").on("click", function () {
//       clearInterval(intervalId);
//       currentIndex = $(this).index();
//       showSlide(currentIndex);
//     });
//   });