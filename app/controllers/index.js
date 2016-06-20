function doClick(e) {
    alert($.label.text);
}

$.index.open();

var views = $.sv.views;
var viewCount = views.length;
var viewCenterNumber = Math.ceil(views.length / 2) - 1;
$.sv.currentPage = viewCenterNumber;

var isScroll = false;
$.sv.addEventListener('scroll', function(e){
  Ti.API.debug(e.currentPage, e.currentPageAsFloat);

  if(e.currentPage != e.currentPageAsFloat) return;
  isScroll = true;

  if(viewCenterNumber == $.sv.currentPage){
    return;
  }

  if(e.currentPage > viewCenterNumber){
    Ti.API.debug('next');
    views.push(views.shift());
  }else if(e.currentPage < viewCenterNumber){
    Ti.API.debug('prev');
    views.unshift(views.pop());
  }

  $.sv.currentPage = viewCenterNumber;
});

$.sv.addEventListener('scrollend', function(e){
  Ti.API.debug('scrollend');
  $.sv.setViews(views);
  isScroll = false;
});
