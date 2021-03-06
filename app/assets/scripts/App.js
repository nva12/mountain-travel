import "../styles/styles.css";
import "lazysizes";
import $ from "jquery";

$(document).ready(function() {
  $(window).scroll(function() {
    $(".fade-in").each(function(i) {
      var threshold_of_element =
        $(this).offset().top + 0.3 * $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > threshold_of_element) {
        $(this).animate({ opacity: "1" }, 1500);
      }
    });
    $(".fade-in--left").each(function(i) {
      var threshold_of_element =
        $(this).offset().top + 0.3 * $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > threshold_of_element) {
        $(this).animate({ opacity: "1", "margin-left": "0px" }, 1500);
      }
    });
    $(".fade-in--right").each(function(i) {
      var threshold_of_element =
        $(this).offset().top + 0.3 * $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > threshold_of_element) {
        $(this).animate({ opacity: "1", "margin-right": "0px" }, 1500);
      }
    });
  });
});

if (module.hot) {
  module.hot.accept();
}
