$(function(){
    // 导航栏的动作
    // 下面是鼠标到图片上面的动作
    $('#heada1').mouseover(function(){
        $('#headimg1').css('opacity','0.25');
        $('#heada1s').css('opacity','0.25');
    });
    $('#heada1').mouseout(function(){
        $('#headimg1').css('opacity','1');
        $('#heada1s').css('opacity','1');
    });
    $('#heada2').mouseover(function(){
        $('#headimg2').css('opacity','0.25');
        $('#heada2s').css('opacity','0.25');
    });
    $('#heada2').mouseout(function(){
        $('#headimg2').css('opacity','1');
        $('#heada2s').css('opacity','1');
    });
    $('#heada3').mouseover(function(){
        $('#headimg3').css('opacity','0.25');
        $('#heada3s').css('opacity','0.25');
    });
    $('#heada3').mouseout(function(){
        $('#headimg3').css('opacity','1');
        $('#heada3s').css('opacity','1');
    });
    $('#heada4').mouseover(function(){
        $('#headimg4').css('opacity','0.25');
        $('#heada4s').css('opacity','0.25');
    });
    $('#heada4').mouseout(function(){
        $('#headimg4').css('opacity','1');
        $('#heada4s').css('opacity','1');
    });
    $('#heada5').mouseover(function(){
        $('#headimg5').css('opacity','0.25');
        $('#heada5s').css('opacity','0.25');
    });
    $('#heada5').mouseout(function(){
        $('#headimg5').css('opacity','1');
        $('#heada5s').css('opacity','1');
    });
    $('#heada6').mouseover(function(){
        $('#headimg6').css('opacity','0.25');
        $('#heada6s').css('opacity','0.25');
    });
    $('#heada6').mouseout(function(){
        $('#headimg6').css('opacity','1');
        $('#heada6s').css('opacity','1');
    });
    
    // 以上是对的导航栏的动作
    // 下面是第二行图片的动作
    $('#toppicts').mouseover(function(){
        $('#toppicts').css('background-color','none');
        $('#toppictimg').attr('transform','scale(1.1)');
    })

    // 文章遍历的鼠标动作
    $('#backa').mouseover(function(){
        $('#backa').css('color','skyblue');
        $('#backimg').css('display','inline')
    });
    $('#backa').mouseout(function(){
        $('#backa').css('color','rgb(102, 100, 100)');
        $('#backimg').css('display','none')
    });
    $('#nexta').mouseover(function(){
        $('#nexta').css('color','skyblue');
        $('#nextimg').css('display','inline')
    });
    $('#nexta').mouseout(function(){
        $('#nexta').css('color','rgb(102, 100, 100)');
        $('#nextimg').css('display','none')
    });
    // 下面是对搜索框的动作
    // 
    $('#backback').click(function(){
        $('#bbtp').toggle();
    });
    $('#heada7').click(function(){
        $('#bbtp').toggle();
    });
    // 滚动条动作
    // var itemTwo = $('#bottompict').offset().top;
    var allHeight=document.body.scrollHeight;  //获取整个页面的高度 
     var fixHeight=allHeight*0.2;
    $(window).scroll(function() { 
        if($(window).scrollTop()>=fixHeight){ //滚动条距离顶部大于某高度(整个页面的百分之二十)
             $("#head").css("display","block"); //设置菜单栏的固定属性
             $("#backspanimg").css("display","block"); //设置菜单栏距离顶部的距离
         }
         if($(window).scrollTop()<fixHeight){
             $("#head").css("display","none");
              //清空菜单栏的固定属性
              $("#backspanimg").css("display","none");
         }
          });


})