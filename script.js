const navigation = document.querySelector("#navbar");
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");
$(document).ready(function() {
    // Function to update testimonial message and heading
    function updateTestimonial() {
      var activeIndex = $('.carousel-item.active').index();
      var messageElement = $('#testimonialMessage');
      var nameElement = $('#testimonialName');
      
      if (activeIndex === 0) {
        messageElement.text("As an aspiring model, finding the right photographer is crucial. I'm grateful to have found XYZ Photography. Their talent and passion for their craft are evident in every shot. The photoshoot was fun and relaxed, and the results were stunning. Thank you for helping me build my portfolio!");
        nameElement.text("Brook Cagle"); // Change the name for the first image
      } else if (activeIndex === 1) {
        messageElement.text("Working with XYZ Photography was an absolute pleasure. The team was professional, creative, and attentive to every detail. The final photos exceeded my expectations and perfectly captured the essence of our special day.");
        nameElement.text("Christian Buhener"); // Change the name for the second image
      } else if (activeIndex === 2) {
        messageElement.text("I was blown away by the stunning photography captured by the team at XYZ Photography. Each image tells a unique story, and I'm thrilled with the results. Highly recommend!");
        nameElement.text("Warren Jhons"); // Change the name for the third image
      }
    }
    
    // Trigger the updateTestimonial function when the carousel slides
    $('#testimonialCarousel').on('slid.bs.carousel', updateTestimonial);
    
    // Trigger the updateTestimonial function once when the document is ready
    updateTestimonial();
  });

  $(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 50) { // Adjust the scroll value as needed
          $('#navbar').addClass('scrolled');
      } else {
          $('#navbar').removeClass('scrolled');
      }
  });
});

$(document).ready(function(){
    $('#imageCarousel').carousel({
        interval: false // Disable auto sliding
    });

    // Move carousel by one image when next button is clicked
    $('.carousel-control-next').click(function(){
        $('#imageCarousel').carousel('next');
    });

    // Move carousel by one image when previous button is clicked
    $('.carousel-control-prev').click(function(){
        $('#imageCarousel').carousel('prev');
    });
});

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000, // Adjust autoplay delay in milliseconds
    },
    breakpoints: {
      // When window width is <= 991px
      991: {
        slidesPerView: 3,
      },
      // When window width is <= 767px
      767: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });
  