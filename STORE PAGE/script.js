var swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      868: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1250: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

function search_animal() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');
   
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
  }

(function($) {
  $(document).ready(function() {
    $('.my-button').on('click', function() {
      alert('You clicked: ' + $(this).text());
    });
  });
})(jQuery);

