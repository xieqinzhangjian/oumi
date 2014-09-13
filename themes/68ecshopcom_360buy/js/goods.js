
    /*详情页切换*/
    $(".tabt3 span").click(function () { $(this).addClass("current").siblings().removeClass("current").parent().siblings().hide().siblings("." + $(this).attr("id")).show(); });
    /*详情页大图*/
    $(".jqzoom").imagezoom();
    if ($("#smallpic li").length > 5) { $(".smallbox").imageScroller({ next: "leftpicbtn", prev: "rightpicbtn", frame: "smallpic", width: 80, child: "li", auto: false, smpic: true }); }
    $("#smallpic li a").mouseover(function () { smpicMouse(this) });
    $("#smallpic li:eq(0) a").trigger("mouseover");
    /*详情页库存状态*/
    var ckkcTimer;
    $(".ck_kucun").hover(function(){
        clearInterval(ckkcTimer);
        $(this).addClass("ck_cur");$(".ck_kucunshow").show();
    },function(){
        ckkcTimer=setInterval(function(){
            $(".ck_kucunshow").hide();$(".ck_kucun").removeClass("ck_cur");
        },300);
    });
    var isSelectCity=0;   
    $(".ck_kucunshow").hover(function(){clearInterval(ckkcTimer);}, function(){if(isSelectCity!=0){return ;}; $(this).hide();$(".ck_kucun").removeClass("ck_cur");});
    $("#close_ckkc").click(function(){
		$(".ck_kucun").removeClass("ck_cur");$(".ck_kucunshow").hide();isSelectCity=0;
		});
    var mdkcTimer;
    $(".md_kucun").hover(function(){
        clearInterval(mdkcTimer);
        var pos=$(this).position();
        $(this).addClass("md_cur");
        $(".md_kucunshow").show().css({left:pos.left+10});
    },function(){
        mdkcTimer=setInterval(function(){
			$(".md_kucunshow").hide();
			$(".md_kucun").removeClass("md_cur");},300)
    });
    $(".md_kucunshow").hover(function(){clearInterval(mdkcTimer);},function(){
		$(this).hide();$(".md_kucun").removeClass("md_cur");
		});
    var ztkcTimer;
    $(".zt_kucun").hover(function(){
        clearInterval(ztkcTimer);
        var pos=$(this).position();
        $(this).addClass("md_cur");
        $(".zt_kucunshow").show().css({"left":pos.left+10,"width":"200px"});
    },function(){
        ztkcTimer=setInterval(function(){
			$(".zt_kucunshow").hide();$(".zt_kucun").removeClass("md_cur");},300)
    });
    $(".zt_kucunshow").hover(function(){clearInterval(ztkcTimer);},function(){
		$(this).hide();$(".zt_kucun").removeClass("md_cur");});
    $(".ct_now strong").click(function(){
        var i=$(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".kcct_se").eq(i).show().siblings().hide();
    });

    UArea.Init();
    var nowpid=UArea.pid,nowzid=UArea.zid,nowdid=UArea.did,nowdame=UArea.dname;
    var re,nowpname,nowzname;
    $.get("/js/oaArea.ashx?pid=" + nowpid, function (json) {
        if (json.stats == 1) {
            re=json.result;
            var zname="",zid="",shiStr="",xianStr="";
            for(var i=0;i<re.length;i++){
                var reItem=re[i];
                zname=reItem.name,zid=reItem.id;
                shiStr+="<a onclick='loadxian("+zid+",this)' zname='"+zname+"'>"+zname+"</a>";
                if(zid==nowzid){
                    nowzname=zname;
                    for(var j=0;j<reItem.items.length;j++){
                        var xian=reItem.items[j];
                        var xianName;
                        xianName=xian.name;
                        if(xian.iskc==true){xianName=xianName+"&nbsp;*"}
                        xianStr+="<a pid='"+reItem.pid+"' zid='"+zid+"' did='"+xian.id+"' dname='"+xian.name+"' onclick='AreaMin.AreaClick(this)'>"+xianName+"</a>"
                    }
                    $("#ct_xian").html(xianStr+"<p style='clear:both;padding-top:15px;margin-left:10px;'>注：标 * 的为有三九实体门店的地区</p>");
                    $("#now_shi small").html(nowzname);
                }
            }
            $("#ct_shi").html(shiStr);
        }
    },'JSON');
    if(nowpid==2){nowpname="云南省"}else if(nowpid==3){nowpname="贵州省"}
    $("#now_sheng small").html(nowpname);
    $("#kc_cityname,#now_xian small").html(nowdame);

    function loadKcArea(pid,the){
        isSelectCity=1;
        $.get("/js/oaArea.ashx?pid=" + pid, function (json) {
            if (json.stats == 1) {
                re=json.result;
                var shiStr="";
                for(var i=0;i<re.length;i++){
                    var reItem=re[i];
                    var zname=reItem.name,zid=reItem.id;
                    shiStr+="<a onclick='loadxian("+zid+",this)' zname='"+zname+"'>"+zname+"</a>";
                }
                $("#ct_shi").html(shiStr);
            }
            $("#now_shi").trigger("click").find("small").html("请选择");
            $("#now_xian small").html("请选择");
            $("#now_sheng small").html($(the).attr("pname"));
            $("#ct_xian").html("")
        },'JSON');
    }
    function loadxian(sid,the){
        isSelectCity=1;
        var xianStr="";
        for(var i=0;i<re.length;i++){
            var reItem=re[i];
            var zname=reItem.name,zid=reItem.id;
            if(zid==sid){
                for(var j=0;j<reItem.items.length;j++){
                    var xian=reItem.items[j];
                    var xianName;
                    xianName=xian.name;
                    if(xian.iskc==true){xianName=xianName+"&nbsp;*"}
                    xianStr+="<a pid='"+reItem.pid+"' zid='"+zid+"' did='"+xian.id+"' dname='"+xian.name+"' onclick='AreaMin.AreaClick(this)'>"+xianName+"</a>"
                }
                $("#ct_xian").html(xianStr+"<p style='clear:both;padding-top:15px;margin-left:10px;'>注：标 * 的为有三九实体门店的地区</p>");
            }
            $("#now_shi small").html($(the).attr("zname"));
        }
        $("#now_xian").trigger("click").find("small").html("请选择");
    }
    
    /*详情页配件组合切换*/
    $(".ztab span").mouseover(function () {
		
		$(this).addClass("zhover").siblings().removeClass("zhover").parent().siblings().hide().siblings("." + $(this).attr("id")).show(); });
    $("#zuhe_tab ul").each(function (index, the) { $(the).css({ 'width': $(the).find('li').length * 140 + 'px' }); });
    detailPrice();
    /*详情页菜单浮动*/
    $(".tabt3").smartFloat();
    
    detailPrice();
    function loadzoushi() {

        var myChart = new FusionCharts("/FusionChartsV3.2/Line.swf", "myChartId", "920", "500", "0");
        myChart.setJSONUrl("/ajaxOperate.aspx?act=priceline&ppid=" + PRODUCT.PPID);
        myChart.render("jg_zoushi");

    }

    var projl = Cookie.Get("projl");
    if (projl == null) {
        Cookie.Set('projl', PRODUCT.PPID, 24 * 365);
    } else {
        $('#myhistory').load("/ajaxOperate.aspx?act=myhistory&proids=" + projl);
        if ((',' + projl + ',').indexOf(',' + PRODUCT.PPID + ',') == -1) {
            if (projl.length < 2) {
                Cookie.Set('projl', PRODUCT.PPID, 24 * 365);
            } else {
                projl = PRODUCT.PPID + ',' + projl;
                var arr = projl.split(',');
                if (arr.length > 10) { arr.length = 10; }
                Cookie.Set('projl', arr.join(','), 24 * 365);
            }
        }
    }

    //点击量
    $.ajax({
        url: '/ajaxOperate.aspx?act=getviews',
        data: { productid: window.PRODUCT.ID, ppriceid: window.PRODUCT.PPID },
        dataType: "jsonp",
        //jsonp: "jsonpcallback",
        success: function (data) {
            $("#viewsspan").attr("title", "累计：" + data.viewsr + ",本周：" + data.viewsWeekr);
        }
    });
    //分期付款
    var proprice = parseInt($("#spprice").html());
    if (proprice < 600) { $("#fenqifu").hide(); }
    $("#fenqifu").hover(function () { $("#fenqishow").show(); }, function () { $("#fenqishow").hide(); });

    var jhshouxu3 = proprice * 0.03, jhshouxu6 = proprice * 0.03, jhshouxu12 = proprice * 0.05;
    var zgshouxu3 = proprice * 0.02, zgshouxu6 = proprice * 0.03, zgshouxu12 = proprice * 0.05;
    var xyshouxu3 = proprice * 0.035, xyshouxu6 = proprice * 0.045, xyshouxu12 = proprice * 0.065;

    var jhmonth3 = (proprice + jhshouxu3) / 3;
    var jhmonth6 = (proprice + jhshouxu6) / 6;
    var jhmonth12 = (proprice + jhshouxu12) / 12;

    var zgmonth3 = (proprice + zgshouxu3) / 3;
    var zgmonth6 = (proprice + zgshouxu6) / 6;
    var zgmonth12 = (proprice + zgshouxu12) / 12;

    var xymonth3 = (proprice + xyshouxu3) / 3;
    var xymonth6 = (proprice + xyshouxu6) / 6;
    var xymonth12 = (proprice + xyshouxu12) / 12;

    $("#jhmonth3").html(Math.round(jhmonth3 * 100) / 100);
    $("#jhmonth6").html(Math.round(jhmonth6 * 100) / 100);
    $("#jhmonth12").html(Math.round(jhmonth12 * 100) / 100);
    $("#zgmonth3").html(Math.round(zgmonth3 * 100) / 100);
    $("#zgmonth6").html(Math.round(zgmonth6 * 100) / 100);
    $("#zgmonth12").html(Math.round(zgmonth12 * 100) / 100);
    $("#xymonth3").html(Math.round(xymonth3 * 100) / 100);
    $("#xymonth6").html(Math.round(xymonth6 * 100) / 100);
    $("#xymonth12").html(Math.round(xymonth12 * 100) / 100);

    $("img.lazy").lazyload({
        effect: "fadeIn",
        skip_invisible: false,
        threshold: 200
    });

    function LoadValideImg() {
        $("#imgValiateImg").attr("src", '/ImgCode.aspx?t=' + Math.random());
    }
    $(function () {
        $("#imgValiateImg").css("cursor", "pointer").click(LoadValideImg);
        setTimeout(function () { LoadValideImg(); }, 500);
        $("a[class=add_gwc]:first").click(function () {
            var url = $(this).attr("href");
            var serverid = "";
            if ($("#servicesContent a[class*=cur]").length > 0) {
                serverid = "&otherPPID=";
                $("#servicesContent a[class*=cur]").each(function () {
                    serverid += $(this).attr("ppriceid") + ",";
                });
                serverid = serverid.substring(0, serverid.length - 1);
            }

            if(url)
            {
                url = url + serverid;
                window.location.href = url;
            }
        
            return false;
        });

        //$("#yixuanze h6").text('“'+$("h2.d_h2").text()+'”');
        $("#yixuanze").hide();
        $(".fuwu a").not(".a-link").on("click",function(){
            var txt = $("h2.d_h2").text(),txt2="";
            $(this).toggleClass("cur");
            $(".fuwu .cur").each(function(index, element) {
                txt2 += '，“' + $(this).text() + '”';
            });
            if(txt2!=""){
                $("#yixuanze h6").text(txt+txt2);
                $("#yixuanze").show();
            }else{
                $("#yixuanze").hide();  
            }
        });
        $(".fuwu .item").hover(function(){
			$(this).addClass("hover");},function(){
			$(this).removeClass("hover");});

    });

//$(".fuwu a").not(".a-link").on("click",function(){ $(this).toggleClass("cur");});
