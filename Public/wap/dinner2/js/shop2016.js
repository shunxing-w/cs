var touchMover = {
    stop:function(){//停止滚动
        window.ontouchmove=function(e){
            e.preventDefault && e.preventDefault();
            e.returnValue=false;
            e.stopPropagation && e.stopPropagation();
            return false;
        }
    },
    start:function(){//可以滚动
        window.ontouchmove="";
    }
}
var shopType = {
    transUtil: function(slt, duration, lenX, lenY) { //移动效果
        $(slt).css("-webkit-transition", "-webkit-transform " + duration + "ms ease");
        $(slt).css("transition", "transform " + duration + "ms ease");
        $(slt).css("-webkit-transform", "translate3d(" + lenX + "rem, " + lenY + "rem,0rem)");
        $(slt).css("transform", "translate3d(" + lenX + "rem, " + lenY + "rem,0rem)");
    }
}
var s=0,ss;
$(".shop-type-btn,.shop-type-shadow").click(function(){
    ss=s%2;
    if(ss==0){
        shopType.transUtil(".shop-type",250,0,0);
        $(".shop-type-shadow").show();
    }else{
        shopType.transUtil(".shop-type",250,5.2,0);
        $(".shop-type-shadow").hide();
    }
    s++;
});


//搜索下 菜品的详情展示
$("#poder").on("click",".class-pro a",function(){
    touchMover.stop();
    $(".shop-show").show();
    $(".top-list").hide();
    var shopWrapper = '<div class="swiper-wrapper"></div>'
    $(".shop-show").find(".swiper-container").append(shopWrapper);

    var thisPic = $(this).data("pic"),
        thisTitle = $(this).data("title"),
        thisPrice = $(this).data("price"),
        thisInfo = $(this).data("info"),
        shopContent = '<div class="swiper-slide"><table class="swiper-table"><tr><td><img data-src="'+ thisPic +'" alt=""></td></tr></table><div class="title-price"><div class="title">'+ thisTitle +'</div><div class="price">'+ thisPrice +'</div></div><div class="swiper-container content"><div class="swiper-wrapper"><div class="swiper-slide">'+ thisInfo +'</div></div></div></div>';
    $(".shop-show").find(".swiper-wrapper").append(shopContent);
    var swiperb = new Swiper('.content', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });
    Lazy.Load();

    var thisIndex=$(".shop-list").index($(this));
});

$(".shop-show").on("click",".swiper-close",function(){
    $(".top-list").attr("style","display:block");
    $('.shop-show').hide();
    $('.shop-show .swiper-container').empty();
    touchMover.start();
});

//加入购物车效果
var shopCar = {
    shoping: function(options) {
        var self = $('.shop-shadow .price i'),
            $shop = $('.shop-gwc'),
            $num = $('.shop-gwc i'),
            add = $('.shop-name i')
        add2= $('.add-icon .jia');


        var S = {
            init: function() {
                self.on('click', this.addShoping);
                add.on('click', this.addShoping);
                add2.on('click', this.addShoping);
            },
            addShoping: function(e) {
                e.stopPropagation();
                var $target = $(e.target),
                    id = $target.attr('id'),
                    x = $target.offset().left,
                    y = $target.offset().top + 10,
                    X = $shop.offset().left + $shop.width() / 2 - $target.width() / 2 + 10,
                    Y = $shop.offset().top;
                $('#floatOrder').remove();
                if ($('#floatOrder').length <= 0) {
                    $('body').append('<div id="floatOrder"></div');
                    var $obj = $('#floatOrder');
                    var $num = $('.shop-gwc i');
                    $obj.css({
                        'left': x,
                        'top': y
                    }).animate({
                        'left': X,
                        'top': Y - 20,
                        '-webkit-transform': 'rotate(360deg) scale(.1)',
                        'transform': 'rotate(360deg) scale(.1)'
                    }, 500, function() {
                        $num.animate({'-webkit-transform': 'scale(1.5)','transform': 'scale(1.5)'},100,function(){
                            $num.animate({'-webkit-transform': 'scale(1)','transform': 'scale(1)'},100);
                        });
                        num = Number($num.text());
                        /*$num.text(num + 1);*/
                        $obj.animate({
                            'top': Y - 20,
                            'opacity': 0
                        }, 500, function() {
                            $obj.remove();
                        });
                    });

                };

            },

        };
        S.init();
    }
};
if($(".shop-shadow .price i,.add-icon").size()>0){
    shopCar.shoping();
}

/*购买数量*/
var buyNum = {
    add:function(){
        $(".numjia").on("click",function(){
            var bnjia=$(this).prev(".num").val()-"";
            $(this).prev(".num").val(bnjia+1);
        });
    },
    sub:function(){
        $(".numjian").on("click",function(){
            var bnjian=$(this).next(".num").val()-"";
            if(bnjian>1){
                $(this).next(".num").val(bnjian-1);
            }
        });
    }
}

if($(".numjia").size()>0){
    buyNum.add();
}
if($(".numjian").size()>0){
    buyNum.sub();
}

























/*懒加载效果*/
var Lazy = {
    "Img": null,
    "getY": function(b) {
        var a = 0;
        if (b && b.offsetParent) while (b.offsetParent) a += b.offsetTop, b = b.offsetParent; else b && b.y && (a += b.y);
        return a;
    },
    "getX": function(b) {
        var a = 0;
        if (b && b.offsetParent) while (b.offsetParent) a += b.offsetLeft, b = b.offsetParent; else b && b.x && (a += b.X);
        return a;
    },
    "scrollY": function() {
        var a = document.documentElement;
        return self.pageYOffset || a && a.scrollTop || document.body.scrollTop || 0;
    },
    "scrollX": function() {
        var a = document.documentElement;
        return self.pageXOffset || a && a.scrollLeft || document.body.scrollLeft || 0;
    },
    "windowWidth": function() {
        var a = document.documentElement;
        return self.innerWidth || a && a.clientWidth || document.body.clientWidth;
    },
    "windowHeight": function() {
        var a = document.documentElement;
        return self.innerHeight || a && a.clientHeight || document.body.clientHeight;
    },
    "CurrentHeight": function() {
        return Lazy.scrollY() + Lazy.windowHeight();
    },
    "CurrentWidth": function() {
        return Lazy.scrollX() + Lazy.windowWidth();
    },
    "Load": function(d) {
        Lazy.Init();

        var f = Lazy.CurrentHeight(), b = Lazy.CurrentWidth();
        for (_index = 0; _index < Lazy.Img.length; _index++) {

            var a = Lazy.Img[_index];
            $(a).attr("lazy") == undefined && $(a).attr("lazy", "n");
            if($(a).attr("lazy") == "y") continue;
            /*$(a).bind("error", function() {
             this.id == "subject" ? $(this).attr("src", "") : $(this).attr("src", "http://wap.cmread.com/rbc/p/content/repository/ues/image/s109/nopic.png");
             });*/
            if (d == undefined || d == "" || d == null) {

                var c = Lazy.getY(a), e = Lazy.getX(a);
                //e < b && c < f && (a.src = a.getAttribute("data-src"), $(a).attr("lazy", "y"), a.removeAttribute("data-src"));
                c < f && (a.src = a.getAttribute("data-src"), $(a).attr("lazy", "y"), a.removeAttribute("data-src"));
                $(a).attr("data-rel",e);

            } else if (d == "x") {

                var c = Lazy.getX(a);
                c < b && (a.src = a.getAttribute("data-src"), $(a).attr("lazy", "y"));

            }

        }

    },
    "Init": function() {
        var a = document.querySelectorAll("img[data-src]");
        Lazy.Img = a;
    }
};
var page = {
    "Load": function() {
        if(Lazy.scrollY()+Lazy.windowHeight()==document.body.scrollHeight){
            //alert("底部加载");
        }
    }
};
document.onscroll = function(){Lazy.Load();page.Load();};
setTimeout(function(){Lazy.Load();},100);

//口味选择切换
if($(".tasteChoice-wrap .nav").size()>0){
    $(".tasteChoice-wrap .nav a").removeClass("cur");
    $(".tasteChoice-wrap .nav a").click(function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
    });
}
//新分类切换
if($(".class-main2").size()>0){
    $(".right-list section").eq(0).show();
    $(".left-list .list-con").eq(0).addClass("cur");
    $(".left-list .list-con").on("click",function(){
        $(this).siblings().removeClass("cur");
        $(this).addClass("cur");
        var x = $(this).index();
        $(".right-list .class-pro").hide();
        $(".right-list .class-pro").eq(x).toggle();
    });
}
