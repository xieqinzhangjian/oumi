/*
==轮播{对象|对象属性}==
对象属性{宽度|高度|文字大小|自动切换时间}
*/
(function($){

dk_slideplayer11 = function(object,config1){
        this.obj1 = object;
        this.n1 =0;
        this.j1 =0;
        var _this = this;
        var t1;
        var defaults1 = {width:"209px",height:"180px",fontsize:"12px",right:"0px",bottom:"0px",time:"5000"};
        this.config1 = $.extend(defaults1,config1);
        this.count1 = $(this.obj1 + " li").size();

        if(this.config1.fontsize == "14px"){
            this.size = "14px";this.height = "23px";this.right = "6px";this.bottom = "15px";
        }else{
            this.size = "12px";this.height = "21px";this.right = "6px";this.bottom = "10px";
        }
        this.factory1 = function(){
            //元素定位
            $(this.obj1).css({position:"relative",zIndex:"0",margin:"0",padding:"0",width:this.config1.width,height:this.config1.height,overflow:"hidden"})
            $(this.obj1).prepend("<div style='position:absolute;z-index:20;left:20px;bottom:15px; width:150px;'></div>");
            $(this.obj1 + " li").css({position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}).each(function(i){
                $(_this.obj1 + " div").append("<a>"+(i+1)+"</a>");
            });
            $(this.obj1 + " img").css({border:"none",width:"100%",height:"100%"})
            this.resetclass(this.obj1 + " div a",1);

            this.slide1();
            this.addhover1();
          
        }
        //图片渐影
        this.slide1 = function(){
            $(this.obj1 + " div a").mouseover(function(){
                _this.j1 = $(this).text() - 1;
                _this.n1 = _this.j;
                if (_this.j1 >= _this.count1){return;}
                $(_this.obj1 + " li:eq(" + _this.j1 + ")").fadeIn("200").siblings("li").fadeOut("200");
                $(_this.obj1 + " .dkTitle p:eq(" + _this.j1 + ")").show().siblings().hide();
                _this.resetclass(_this.obj1 + " div a",_this.j1);
            });
        }
        //滑过停止
        this.addhover1 = function(){
            $(this.obj1).hover(function(){clearInterval(t);});
        }
     
        //翻页函数
        this.resetclass =function(obj1,i){
            $(obj1).css({float:"left",marginRight:"5px",width:"20px",height:"5px",lineHeight:"5px",textAlign:"center",fontSize:"12px",color:"#ffffff",background:"#ffffff",cursor:"default",overflow:"hidden"});
            $(obj1).eq(i).css({color:"#f70",background:"#f70",textDecoration:"none"});
        }
        this.factory1();
    }
// 代码by www.68ecshop.com


})(jQuery)
