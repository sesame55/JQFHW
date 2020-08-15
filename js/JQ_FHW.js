$(document).ready(function () {
    // 輪播
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', //水平方向
        loop: true, //循環
        speed: 3000, //滑動速度
        autoplay: { //自動循環
            delay: 5000, //換下一張圖片的速度
        },
        effect: 'coverflow', //效果，coverflow = 向左翻頁式移動，會受到speed(滑動速度)影響
        pagination: { //分頁的圓點頁碼
            el: '.swiper-pagination',
        },
        // 左右切換按鈕
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //lightBox
    lightbox.option({
        'resizeDuration': 1000, //開啟圖片的秒數
        'wrapAround': true, //最後一張繼續向右按可回到第一張
        'fadeDuration': 600, //滑動時長
        'showImageNumberLabel': false, //隱藏目前圖片編號及總數
        'disableScrolling': true, //開啟燈箱時禁止頁面滾動
    });

    //動畫
    $('.lightBox > ul > li').mouseenter(function () {
        $(this).toggleClass('animate__animated animate__swing')
    });

    // 下拉選單
    $('.dropdown').click(function (e) {
        e.preventDefault();
        $(this).siblings('.navTwo').slideToggle();
        $(this).parent().siblings().find('.navTwo').slideUp();
    });

    //top按鈕
    $('.btn-backTop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
});