$(document).ready(function () {
  // Create the Back-to-Top button and its styles dynamically
  var back_to_top_button = [
    '<a href="#top" class="back-to-top" style="',
    "position: fixed; ",
    "bottom: 20px; ",
    "right: 10px; ",
    "padding: 1em; ",
    "z-index: 100; ",
    "color: white; ",
    "text-align: center; ",
    "border-radius: 5px; ",
    "font-family: Arial, sans-serif; ",
    "font-size: 50px; ",
    "text-decoration: none; ",
    "display: none;",
    '">⇧</a>',
  ].join("");

  // Append the button to the body
  $("body").append(back_to_top_button);

  // Handle the scroll event to toggle visibility
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  // Smooth scroll to the top when the button is clicked
  $(".back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
