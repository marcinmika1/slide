   'use strict';
   $(document).ready(function () {
       /*zliczenie ile mamy single-slide*/
       var slideCount = $('.single-slide').length;
       /*nadanie wartosci width dla diva glownego przy pomocy dzialania*/
       var slideShow = $('.slide-show');
       slideShow.css('width', slideCount * 100 + '%');
       console.log(slideCount);
   });
   /*nadawanie szerokosci dla pojedynczego diva z obrazkiem */
   $(document).ready(function () {
       var slideCount = $('.single-slide').length;
       /*obliczenie wartosci szerokosci pojedycnczego divs single-slide*/
       $('.single-slide').css('width', 100 / slideCount + '%');
       console.log('fff');
   });

   /*ustawienie margina dla single-slide przy pomocy funkcji each*/
   $(document).ready(function () {
       $('.single-slide').each(function (index) {
           var slideCount = $('.single-slide').length;
           var slideWidth = 100 / slideCount;

           $(this).css({
               'margin-left': index * slideWidth + '%'
           })
       })


       var slideIndex = 0;
       var slideCount = $('.single-slide').length;

       $('.prev-slide').click(function () {
           /*za kazdym klieknieciem newSlideIndex powiekszy sie o +1 */
           var newSlideIndex = slideIndex - 1;
           /*jesli index bedzie rowny 0 przestan wwykonywac funkcje*/
           if (newSlideIndex < 0) {
               return;
           }
           /*definiujemy wartosc marig left */
           var marginLeft = (newSlideIndex * (-100)) + '%';
           /*aniimacja zmieniania wartosci margin-left w css  */
           $('.slide-show').animate({
               'margin-left': marginLeft
           }, 800, function () {
               slideIndex = newSlideIndex;
           });


           console.log('dziala wstecz');
       })

       
       $('.next-slide').click(function () {

           var newSlideIndex = slideIndex + 1;

           if (newSlideIndex >= slideCount) {
               return;
           }
           var marginLeft = (newSlideIndex * (-100)) + '%';

           $('.slide-show').animate({
               'margin-left': marginLeft
           }, 800, function () {
               slideIndex = newSlideIndex;
           });

           console.log("dziala")
       });


   })
