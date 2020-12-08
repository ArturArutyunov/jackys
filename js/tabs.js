$(document).ready(function() {
  $('.j-tab-link, .scrollable-tab-link').on('click', function(e) {
    if (!$(this).hasClass('active')) {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      const id = $(this).attr('data-target');
      const el = $(this).parent().siblings('.tabs-items');
      const container = $(el).first();
      container.children().removeClass('active');
      $(container).find('#'+id).addClass('active');
    }
  });

  $('.j-tab-link.active, .scrollable-tab-link.active').each(function () {
    const id = $(this).attr('data-target');
    $('.j-tab-item#'+id).addClass('active');
  });
});
