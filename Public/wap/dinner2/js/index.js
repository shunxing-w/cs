/*function showpro(){
    var cateid=$("#catelist .cur").attr("data-id");
    $.getJSON("http://www.weiwoju.com/OrderDinner/prolist",{cateid:cateid},function(data){

        $("#poder").empty();
        $.each(data.list,function(i,e){
            var html='<div class="swiper-slide class-pro"><a href="javascript:;" data-pic="'+e.pic_url+'"' +
                ' data-title="'+ e.name+'" data-price="￥'+ e.price+'" data-info="'+ e.description+'">\
                <div class="pic"><img src="'+e.pic_url+'" alt=""></div>\
                <span class="text">\
                    <div class="title" style="margin-bottom:0.3rem;"><i>荐</i>'+e.name+'</div>\
                    <div class="price">?'+e.price+'</div>\
                </span>\
            	</a><div class="add-icon" data-id="'+e.id+'"><i class="jian"></i><input type="text" class="num" value="'+ e.num+'" disabled="disabled"><i class="jia"></i></div>\
        		</div>';
            $("#prolist").append(html);
        });
        $(".add-icon").each(function(i,e){
            if($(this).find('.num').val() == 0){
                $(this).addClass("empty");
            }
        });
        $("#prolist").append('<div class="swiper-slide class-pro"></div>');
        //显示左侧分类 已点菜品数量
        var car_num = 0;
        $(".left-part").each(function(i,e){
            for(var key in data.cateList){
                if($(this).attr("data-id") == data.cateList[key]['id']){
                    car_num = car_num+data.cateList[key]['cate_num'];
                    $(this).find(".num").html(data.cateList[key]['cate_num']);
                    if(data.cateList[key]['cate_num'] == 0){
                        $(this).find(".num").addClass("hide");
                    }else{
                        $(this).find(".num").removeClass("hide");
                    }
                }
            }
        });
        $("#car_num").html(car_num);
        //显示总价
        $(".total-price i").html(data.all_price+'元');
        swiperr.updateSlidesSize();//重新更新size
        swiperr.slideTo(0);
        shopCar.shoping();//重新注册动画事件
        //点击添加
        $(".add-icon .jia").on("touchend",function(){
            var pro_id=$(this).parent(".add-icon").attr("data-id");
            var cate_id=$(".cur").attr("data-id");

            $.getJSON("http://www.weiwoju.com/OrderDinner/shoppingCarAdd", {pro_id: pro_id, num: 1, style_id: 0,cate_id:cate_id}, function (data) {
                if (data.errcode == "0") {
                    $(".class-pro").each(function(i,e){
                        for(var key in data.list){
                            if($(this).find(".add-icon").attr("data-id") == data.list[key]['id']){
                                $(this).find(".add-icon .num").val(data.list[key]['num']);
                            }
                            if($(this).find(".add-icon .num").val() == 0){
                                $(this).find(".add-icon").addClass("empty");
                            }else{
                                $(this).find(".add-icon").removeClass("empty");
                            }
                        }
                    });

                    //显示左侧分类 已点菜品数量
                    var car_num = 0;
                    $(".left-part").each(function(i,e){
                        for(var key in data.cateList){
                            if($(this).attr("data-id") == data.cateList[key]['id']){
                                car_num = car_num+data.cateList[key]['cate_num'];
                                $(this).find(".num").html(data.cateList[key]['cate_num']);
                                if(data.cateList[key]['cate_num'] == 0){
                                    $(this).find(".num").addClass("hide");
                                }else{
                                    $(this).find(".num").removeClass("hide");
                                }
                            }
                        }
                    });
                    $("#car_num").html(car_num);
                    //显示总价
                    $(".total-price i").html(data.all_price+'元');

                }else{
                    alert('添加购物失败，请重试');
                }
            }, "json");


        });
        $(".add-icon .jian").on("touchend",function(){
            var pro_id=$(this).parent(".add-icon").attr("data-id");
            var cate_id=$(".cur").attr("data-id");
            $.getJSON("http://www.weiwoju.com/OrderDinner/shoppingCarDel", {pro_id: pro_id, num: 1, style_id: 0,cate_id:cate_id}, function (data) {
                if (data.errcode == "0") {
                    $(".class-pro").each(function(i,e){
                        for(var key in data.list){
                            if($(this).find(".add-icon").attr("data-id") == data.list[key]['id']){
                                $(this).find(".add-icon .num").val(data.list[key]['num']);
                            }
                            if($(this).find(".add-icon .num").val() == 0){
                                $(this).find(".add-icon").addClass("empty");
                            }else{
                                $(this).find(".add-icon").removeClass("empty");
                            }
                        }
                    });
                    //显示左侧分类 已点菜品数量
                    var car_num = 0;
                    $(".left-part").each(function(i,e){
                        for(var key in data.cateList){
                            if($(this).attr("data-id") == data.cateList[key]['id']){
                                car_num = car_num+data.cateList[key]['cate_num'];
                                $(this).find(".num").html(data.cateList[key]['cate_num']);
                                if(data.cateList[key]['cate_num'] == 0){
                                    $(this).find(".num").addClass("hide");
                                }else{
                                    $(this).find(".num").removeClass("hide");
                                }
                            }
                        }
                    });
                    $("#car_num").html(car_num);
                    //显示总价
                    $(".total-price i").html(data.all_price+'元');

                }else{
                    console.log("删除失败");
                }
            }, "json");

        });
    },"json");
}*/


