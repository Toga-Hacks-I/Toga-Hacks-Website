// // import libraries' CSS files
// import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
// import "font-awesome/css/font-awesome.css";
// import "animate.css/animate.css";
// import "venobox/venobox/venobox.css";
// import "owl.carousel2/dist/assets/owl.carousel.css";

// import main css file
import "../css/style.css";

// import jQuery globally
import "./jquery-global";

// import Bootstrap's js library
import "bootstrap";

// import jQuery.easing
import "jquery.easing/jquery.easing";

// import superfish
import "superfish/dist/js/hoverIntent";
import "superfish/dist/js/superfish";

// import wow.js
import { WOW } from "wowjs";

// import venobox
import "venobox/venobox/venobox";

// import owl carousel
import "owl.carousel2/dist/owl.carousel";

// import cloudinary
import "cloudinary-jquery/cloudinary-jquery";

$(document).ready(function() {
  // Back to top button
  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#intro").css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW({
    live: false
  }).init();

  // Initialize Venobox
  $(".venobox").venobox({
    bgcolor: "",
    overlayColor: "rgba(6, 12, 34, 0.85)",
    closeBackground: "",
    closeColor: "#fff"
  });

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    const $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({
        id: "mobile-nav"
      });
    $mobile_nav.find(".buy-tickets").remove();
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle" aria-label="hamburger menu"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      const container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      const target = $(this.hash);
      if (target.length) {
        let top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space -= 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });

  // Buy tickets select the ticket type on click
  $("#buy-ticket-modal").on("show.bs.modal", function(event) {
    const button = $(event.relatedTarget);
    const ticketType = button.data("ticket-type");
    const modal = $(this);
    modal.find("#ticket-type").val(ticketType);
  });

  // custom code
  $.cloudinary.config({ cloud_name: "damnzwekj", secure: true });
  $.cloudinary.responsive();
});

// title animation
// Wrap every letter in a span (for ever word)
var i;
for (var i = 1; i <= 3; i++) {
  const textWrapper = document.querySelector(`.animate .word${i}`);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}

anime.timeline({ loop: false }).add({
  targets: ".letter",
  translateY: ["1.2em", 0],
  translateZ: 0,
  duration: 2500,
  delay: (el, i) => 100 * i
});
