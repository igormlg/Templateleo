$(".js-tab-trigger").on("click", function () {
    var tabName = $(this).data("tab");
    tab = $('.js-tab-content[data-tab="' + tabName + '"]');
  
    $(".js-tab-trigger.active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");
  
    $(".js-tab-content.active-tab").removeClass("active-tab");
    tab.addClass("active-tab");
  });