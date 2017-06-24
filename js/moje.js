   'use strict';
$(document).ready(function(){
    /*zliczenie ile mamy single-slide*/
   var slideCount = $('.single-slide').length;
    /**/
    var slideShow= $('.slide-show');
    
    slideShow.css('width', slideCount * 100 + '%');
    
    console.log(slideCount);
});




