$(document).ready(function () {
  var flipbook = $(".flipbook");
  var prevBtn = $("#prev-page-btn");
  var nextBtn = $("#next-page-btn");

  function resizeFlipbook() {
    var containerWidth = $(".flipbook-container").width();
    var bookWidth = containerWidth;
    var bookHeight = bookWidth / (842 / 595) / 2;

    flipbook.turn("size", bookWidth, bookHeight * 2);
  }

  flipbook.turn({
    autoCenter: true,
    width: 842,
    height: 595,
  });

  $(window)
    .on("resize", function () {
      resizeFlipbook();
    })
    .trigger("resize");

  prevBtn.on("click", function () {
    flipbook.turn("previous");
  });

  nextBtn.on("click", function () {
    flipbook.turn("next");
  });

  // Tab navigation
  $(".tabs .tab").on("click", function (event) {
    event.preventDefault();
    var targetPage = $(this).data("page");
    flipbook.turn("page", targetPage);
    $(".tabs .tab").removeClass("tab-active");
    $(this).addClass("tab-active");
  });

  // Set initial active tab and button states
  $('.tabs .tab[data-page="1"]').addClass("tab-active");
  prevBtn.prop("disabled", true);

  // Update UI on page turn
  flipbook.bind("turned", function (event, page, view) {
    var totalPages = flipbook.turn("pages");

    // Update buttons
    prevBtn.prop("disabled", page === 1);
    nextBtn.prop("disabled", page === totalPages);

    // Update active tab
    $(".tabs .tab").removeClass("tab-active");
    var visiblePage = view[0] || view[1];
    if (visiblePage) {
      var tab = $('.tabs .tab[data-page="' + visiblePage + '"]');
      if (tab.length === 0) {
        // Try to find the tab for the previous page if the current one isn't a direct match
        tab = $('.tabs .tab[data-page="' + (visiblePage - 1) + '"]');
      }
      tab.addClass("tab-active");
    }
  });
});