$(document).ready(function () {
    //news判断新闻标题长度并且给予省略号
    var newstitle = $(".news ul:nth-of-type(3) li div p");
    if (newstitle.text().length >= 20) {
        newstitle.text(newstitle.text().substring(0, 20) + '...')
    }
    //免费设计模块
    var gewei = $(".free p:nth-of-type(2) span:nth-of-type(3)");
    var shiwei = $(".free p:nth-of-type(2) span:nth-of-type(2)");
    var baiwei = $(".free p:nth-of-type(2) span:nth-of-type(1)");
    var geweiIndex = 9;
    var shiweiIndex = 9;
    var baiweiIndex = 0;
    var rd = Math.floor(Math.random() * 9 + 0);
    var timer = null;
    var rdTimer = setInterval(rdCount, 50)
    var rdTimer2 = null;
    var rdTimer3 = null;
    var out1 = setTimeout(function () {
        clearInterval(rdTimer);
        rdTimer2 = setInterval(rdCount, 350);
    }, 1000)
    var out2 = setTimeout(function () {
        clearInterval(rdTimer2);
        rdTimer3 = setInterval(rdCount, 700);
    }, 2000)
    var out3 = setTimeout(function () {
        clearInterval(rdTimer3);
        clearTimeout(out1);
        clearTimeout(out2);
        gewei.text("9");
        shiwei.text("9");
        baiwei.text("0");
        setInterval(calc,100)
    }, 3000)
    function rdCount() {
        rd1 = Math.floor(Math.random() * 9 + 0);
        rd2 = Math.floor(Math.random() * 9 + 0);
        rd3 = Math.floor(Math.random() * 9 + 0);
        gewei.text(rd1);
        shiwei.text(rd2);
        baiwei.text(rd3);
    }
    function calc() {
        if (geweiIndex === -1) {
            geweiIndex = 9;
            gewei.text(geweiIndex--);
            if (shiweiIndex === 0) {
                baiweiIndex = 0;
                baiwei.text(baiweiIndex);
                if (geweiIndex === 0) {
                    baiwei.text(0);
                }
            } else {
                shiweiIndex--;
                shiwei.text(shiweiIndex);
            }
        } else {
            gewei.text(geweiIndex--);
        }
        if (baiweiIndex === 0 && shiweiIndex === 0 && geweiIndex === 0) {
            clearInterval(timer);
            geweiIndex = 9;
            shiweiIndex = 9;
            baiweiIndex = 0;
            baiwei.text(baiweiIndex);
            shiwei.text(shiweiIndex);
            gewei.text(geweiIndex);
            timer = setInterval(calc, 1000);
        }
    }
    // 表单验证
    var nameInput = $(".free form div:nth-of-type(1) input");
    var phoneInput = $(".free form div:nth-of-type(2) input");
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    nameInput.click(function () {
        $(this).attr("placeholder", "");
        $(".free form div:nth-of-type(1) p").hide();
    });
    nameInput.blur(function () {
        if ($(this).val() !== "") {
            $(".free form div:nth-of-type(1) p").hide();
        } else {
            $(this).attr("placeholder", "请输入您的称呼");
        }
    })
    phoneInput.click(function () {
        $(this).attr("placeholder", "");
        $(".free form div:nth-of-type(2) p").hide();
    })
    phoneInput.blur(function () {
        if ($(this).val() !== "" && regPhone.test($(this).val())) {
            $(".free form div:nth-of-type(2) p").hide();
        } else {
            $(this).attr("placeholder", "请输入手机号抢免费设计名额");
        }
    })
    $(".free form button:nth-of-type(2)").click(function (ev) {
        if (nameInput.val() !== "" && (phoneInput.val() !== "" && regPhone.test(phoneInput.val()))) {
            $(".free from").submit();
        } else {
            ev.preventDefault();
            if (nameInput.val() !== "") {
                $(".free form div:nth-of-type(1) p").hide();
            } else {
                nameInput.attr("placeholder", "请输入您的称呼");
                $(".free form div:nth-of-type(1) p").show();
            }
            if (phoneInput.val() !== "" && regPhone.test($(this).val())) {
                $(".free form div:nth-of-type(2) p").hide();
            } else {
                phoneInput.attr("placeholder", "请输入手机号抢免费设计名额");
                $(".free form div:nth-of-type(2) p").show();
            }
        }
    })
    var trIndex = 0;
    var saveNode = null;
    setInterval(function () {
        //detach是JQ特有的，所以不能用Array去调用这个方法，否则报错
        console.log(trIndex);
        saveNode = $(".new-older table tbody tr:nth-of-type(1)").detach();
        $(".new-older table tbody").append(saveNode);
    }, 1000)
    //风格样式切换
    $("#fg").click(function () {
        $(".zxstyle ul li").removeClass("zxstyle-active");
        $(this).addClass("zxstyle-active");
        $(".hx,.kj,.jb").hide();
        $(".fg").show();
        var mySwiper = new Swiper('.fg', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            spaceBetween: 10,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    })
    $("#hx").click(function () {
        $(".zxstyle ul li").removeClass("zxstyle-active");
        $(this).addClass("zxstyle-active");
        $(".fg,.kj,.jb").hide();
        $(".hx").show();
        var mySwiper = new Swiper('.hx', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            spaceBetween: 10,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    })
    $("#kj").click(function () {
        $(".zxstyle ul li").removeClass("zxstyle-active");
        $(this).addClass("zxstyle-active");
        $(".hx,.fg,.jb").hide();
        $(".kj").show();
        var mySwiper = new Swiper('.kj', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            spaceBetween: 10,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    })
    $("#jb").click(function () {
        $(".zxstyle ul li").removeClass("zxstyle-active");
        $(this).addClass("zxstyle-active");
        $(".hx,.kj,.fg").hide();
        $(".jb").show();
        var mySwiper = new Swiper('.jb', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            spaceBetween: 10,
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    })
    $(".pageIn-nav span").click(function(){
        var screenHeight = $(".dialog").height();
        $(".dialog > ul").height(screenHeight);
        $(".dialog").fadeIn();
    })
    $(".dialog").click(function(){
        $(this).fadeOut();
    })
    $(".pageIn-nav a").click(function(){
        history.go(-1);
    })
})