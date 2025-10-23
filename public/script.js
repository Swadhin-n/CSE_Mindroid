$(document).ready(function () {
  var flipbook = $(".flipbook");
  var prevBtn = $("#prev-page-btn");
  var nextBtn = $("#next-page-btn");

  // Initialize Turn.js with responsive settings
  function initFlipbook() {
    var displayMode = window.innerWidth < 768 ? "single" : "double";

    var sizes = calculateSizes();

    flipbook.turn({
      autoCenter: true,
      display: displayMode,
      width: sizes.width,
      height: sizes.height,
    });

    // Ensure proper sizing initially
    updateLayout();
  }

  // Compute available height considering fixed header and tabs
  function getAvailableHeight() {
    var header = document.querySelector('.site-navbar');
    var tabs = document.querySelector('.tab-container');
    var headerH = header ? header.getBoundingClientRect().height : 0;
    var tabsH = tabs ? tabs.getBoundingClientRect().height : 0;
    // Small padding for breathing space below
    var extra = 24;
    return Math.max(320, window.innerHeight - headerH - tabsH - extra);
  }

  function calculateSizes() {
    if (window.innerWidth < 768) {
      var containerWidth = $(".flipbook-container").width();
      return {
        width: containerWidth,
        height: getAvailableHeight(),
      };
    }
    return { width: 842, height: 595 };
  }

  // Update display mode and resize dynamically
  function updateLayout() {
    if (!flipbook.data("turn")) return;

    var mode = window.innerWidth < 768 ? "single" : "double";
    flipbook.turn("display", mode);

    var sizes = calculateSizes();
    flipbook.turn("size", sizes.width, sizes.height);
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
