$(document).ready(function () {
  var flipbook = $(".flipbook");
  var prevBtn = $("#prev-page-btn");
  var nextBtn = $("#next-page-btn");

  // Initialize Turn.js with responsive settings
  function initFlipbook() {
    var displayMode = window.innerWidth < 768 ? "single" : "double";

    flipbook.turn({
      autoCenter: true,
      display: displayMode,
      width: window.innerWidth < 768 ? window.innerWidth : 842,
      height: window.innerWidth < 768 ? window.innerHeight : 595,
    });

    resizeFlipbook();
  }

  // Resize the flipbook proportionally
  function resizeFlipbook() {
    var containerWidth = $(".flipbook-container").width();
    var bookWidth = containerWidth;
    var bookHeight = bookWidth / (842 / 595) / 2;

    flipbook.turn("size", bookWidth, bookHeight * 2);
  }

  // Update display mode and resize dynamically
  function updateLayout() {
    if (!flipbook.data("turn")) return;

    var mode = window.innerWidth < 768 ? "single" : "double";
    flipbook.turn("display", mode);

    var newWidth = window.innerWidth < 768 ? window.innerWidth : 842;
    var newHeight = window.innerWidth < 768 ? window.innerHeight : 595;
    flipbook.turn("size", newWidth, newHeight);
  }

  // Initialize on page load
  initFlipbook();

  // Handle resize/orientation changes
  $(window)
    .on("resize orientationchange", function () {
      updateLayout();
    })
    .trigger("resize");

  // Navigation buttons
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

  // Initial active tab
  $('.tabs .tab[data-page="1"]').addClass("tab-active");
  prevBtn.prop("disabled", true);

  // Update UI on page turn
  flipbook.bind("turned", function (event, page, view) {
    var totalPages = flipbook.turn("pages");

    // Update button states
    prevBtn.prop("disabled", page === 1);
    nextBtn.prop("disabled", page === totalPages);

    // Update active tab
    $(".tabs .tab").removeClass("tab-active");
    var visiblePage = view[0] || view[1];
    if (visiblePage) {
      var tab = $('.tabs .tab[data-page="' + visiblePage + '"]');
      if (tab.length === 0) {
        tab = $('.tabs .tab[data-page="' + (visiblePage - 1) + '"]');
      }
      tab.addClass("tab-active");
    }
  });
});
