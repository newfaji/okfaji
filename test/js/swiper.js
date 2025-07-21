$(document).ready(function(){
    const swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 640px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.story .ctrl_wrap .next',
            prevEl: '.story .ctrl_wrap .prev',
        },
        on: {
            slideChange: function() {
                // 활성 슬라이드를 선택하여 넓이를 계산
                const activeSlide = this.slides[this.activeIndex]
                const activeSlideWidth = activeSlide.offsetWidth  // 활성 슬라이드의 넓이

                const otherSlides = this.slides[this.previousIndex]
                const otherSlideWidth = otherSlides.offsetWidth
                
                const slideWidthDifference = activeSlideWidth - otherSlideWidth;

                // console.log(activeSlideWidth)
                // let otherSlideWidth = 0;
                // this.slides.forEach((slide, index) => {
                //     if (index !== this.activeIndex) {
                //     otherSlideWidth = slide.offsetWidth;
                //     }
                // });
                
                // 다른 슬라이드들의 넓이를 계산하여 차이 구하기
                // const otherSlides = this.find('.swiper-slide:not(.swiper-slide-active)')
                // const otherSlideWidth = otherSlides.width();  // 첫 번째 비활성 슬라이드의 넓이

                // // 차이값 계산
                // const slideWidthDifference = activeSlideWidth - otherSlideWidth;

                // 슬라이드 이동: 차이값만큼 이동
                this.setTranslate(this.translate - slideWidthDifference);
                console.log(slideWidthDifference)
            },
            slideChangeTransitionEnd: function() {
                // 전환이 끝나면 Swiper를 다시 업데이트
                setTimeout(() => {
                    this.update();
                }, 100);  // 잠시 딜레이를 주고 업데이트
            }
        },
    });
})