$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

function showElementAnimation() {

  var works-img = document.getElementsByClassName('js-animation');
  if(!works-img) return; // 要素がなかったら処理をキャンセル

  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<works-img.length;i++) { var elemClientRect = works-img[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      works-img[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      works-img[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
