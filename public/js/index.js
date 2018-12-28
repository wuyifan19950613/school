var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
})
$('.orbit-prev').on('click', function (e) {
  e.preventDefault()
  mySwiper.slidePrev()
});
$('.orbit-next').on('click',function (e) {
  e.preventDefault()
  mySwiper.slideNext()
});
