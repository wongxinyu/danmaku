$(function(){


        //点击展开


         $("#dm-display").click(function(){
                    $("main").toggle(600);

                });
         $("#dm-hide").click(function(){
            $("main").toggle(600);
        });
        //发表评论
        $("#dm-send").click(function(){
            var text=$("#dm-text").val();
            $("#dm-show").append("<div>"+text+"</div>");
            init_screen();
        });

        $("#dm-text").keydown(function(){
            var code = window.event.keyCode;

            //alert(code);

            if(code == 13)//回车键按下时，输出到弹幕

            {
                var text=$("#dm-text").val();
                $("#dm-show").append("<div>"+text+"</div>");
                init_screen();
            }
        });

    });

    //初始化弹幕
    function init_screen(){
        var _top=0;

        $("#dm-show").find("div").show().each(function(){
            var _left=$(window).width()-$(this).width();
            var _height=$(window).height();

            _top=_top+80;

            if(_top>_height-100){
                _top=80;
            }

            var time=10000;
            if($(this).index()%2==0){
                time=20000;
            }
            //设定文字的初始化位置
            $(this).css({left:_left,top:_top,color:getRandomColor()});
            $(this).animate({left:"-"+_left+"px"},time,function(){

            });


        });
    }

    //随机获取颜色值
    function getRandomColor(){
        return '#'+(function(h){
            return new Array(7-h.length).join("0")+h
        })((Math.random()*0x1000000<<0).toString(16))
    }