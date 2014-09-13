/// <reference path="../Scripts/jquery-2.0.3-vsdoc.js" />
//延时加载
!function (a, b, c, d) { var e = a(b); a.fn.lazyload = function (f) { function g() { var b = 0; i.each(function () { var c = a(this); if (!j.skip_invisible || c.is(":visible")) if (a.abovethetop(this, j) || a.leftofbegin(this, j)); else if (a.belowthefold(this, j) || a.rightoffold(this, j)) { if (++b > j.failure_limit) return !1 } else c.trigger("appear"), b = 0 }) } var h, i = this, j = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !0, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" }; return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () { return g() }), this.each(function () { var b = this, c = a(b); b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.attr("src", j.placeholder), c.one("appear", function () { if (!this.loaded) { if (j.appear) { var d = i.length; j.appear.call(b, d, j) } a("<img />").bind("load", function () { var d = c.data(j.data_attribute); c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0; var e = a.grep(i, function (a) { return !a.loaded }); if (i = a(e), j.load) { var f = i.length; j.load.call(b, f, j) } }).attr("src", c.data(j.data_attribute)) } }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () { b.loaded || c.trigger("appear") }) }), e.bind("resize", function () { g() }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) { b.originalEvent && b.originalEvent.persisted && i.each(function () { a(this).trigger("appear") }) }), a(c).ready(function () { g() }), this }, a.belowthefold = function (c, f) { var g; return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold }, a.rightoffold = function (c, f) { var g; return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold }, a.abovethetop = function (c, f) { var g; return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height() }, a.leftofbegin = function (c, f) { var g; return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width() }, a.inviewport = function (b, c) { return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c)) }, a.extend(a.expr[":"], { "below-the-fold": function (b) { return a.belowthefold(b, { threshold: 0 }) }, "above-the-top": function (b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-screen": function (b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-screen": function (b) { return !a.rightoffold(b, { threshold: 0 }) }, "in-viewport": function (b) { return a.inviewport(b, { threshold: 0 }) }, "above-the-fold": function (b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-fold": function (b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-fold": function (b) { return !a.rightoffold(b, { threshold: 0 }) } }) } (jQuery, window, document);

/*设置cookie*/
var Cookie = {
    Set: function (name, value, time, path, domain) {
        this.Clear(name, "/", "");
        this.Clear(name, "/", "ch999.com");
        var expires = new Date(new Date().getTime() + (time || 24) * 3600 * 1000);
        if (time == 0) {
            expires = null;
        }
        document.cookie = name + "=" + encodeURIComponent(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? ";domain=" + domain : ";domain=ch999.com");
       /*document.cookie = name + "=" + encodeURIComponent(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? ";domain=" + domain : "");*/
    },
    Get: function (name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) {
            try {
                return decodeURIComponent(arr[2]);
            }
            catch (err) {
                return unescape(arr[2]);
            }
        }
        return null; 
    },
    Clear: function (name, path, domain) {
        
            document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : ";domain=ch999.com") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
            document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ";domain=" + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
    },
    ISCookie: function () {
        this.Set("ISCookie", "1");
        if (this.Get("ISCookie"))
        { this.Clear("ISCookie"); return true; }
        else
        { return false; }
    }
};
/*js获取参数 ?后面*/
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}
var UArea = {
    pid: "2",
    zid: "39",
    did: "39",
    dname: "昆明市区",
    Init: function () {
        var qiehuancs_obj = $("#qiehuancs");
        if (qiehuancs_obj.length > 0) {
            this.pid = qiehuancs_obj.attr("pid");
            this.zid = qiehuancs_obj.attr("zid");
            this.did = qiehuancs_obj.attr("did");
        }
        if (Cookie.Get('dnamec') != null) { this.dname = Cookie.Get('dnamec'); }
        if (this.dname == null || this.dname == "") { this.dname = '昆明市区'; Cookie.Set('dnamec', '昆明市区') }
       /*$("#cityname").html(this.dname);*/
    }
};


var AreaMin = {
    LoadArea: function (pid, callfun) {
        $.get("/js/oaArea.ashx?pid=" + pid, function (jData) {
            if (jData.stats == 1 && typeof jData.result == 'object') {
                var json = jData.result;
                if (typeof json != 'object') return;
                var alist = json.result, yntr = '', gztr = '', pytr = '';
                for (var i = 0; i < json.length; i++) {
                    var item = json[i];
                    if (item.items.length == 0) continue;
                    var ddstr = '';
                    for (var j = 0; j < item.items.length; j++) {
                        var re = item.items[j];
                        if (re.id == 0) continue;
                        re = { pid: item.pid, zid: item.id, name: re.name, did: re.id, py: re.py, iskc: re.iskc }
                        ddstr += '<a pid="' + re.pid + '" zid="' + re.zid + '" did="' + re.did + '" dname="' + re.name + '" onclick="AreaMin.AreaClick(this)">' + (re.iskc ? re.name + '*' : re.name) + '</a>';
                    }
                    yntr += "<dl zid=" + item.id + "><dt><strong>" + item.name + "</strong></dt><dd>" + ddstr + "</dd></dl>";
                }
                $("#citymenuwrap").show().html(yntr);
                if (callfun) { callfun(json) }

                var curdl = $('#citymenuwrap dl[zid=' + UArea.zid + ']').addClass("icur");
                curdl.find('dd a[did=' + UArea.did + ']').addClass("icur");
                setTimeout(function () { cityview_align() }, 200);
            }
        }, 'json');
    },

    LoadAreaAll: function () {
        var areaArray = {};
        var pyArr = [];
        $.get("/js/oaArea.ashx", function (jData) {
            if (jData.stats == 1 && typeof jData.result == 'object') {
                var jsons = jData.result;
                for (var i = 0; i < jsons.length; i++) {
                    var item = jsons[i];
                    if (item.items.length == 0) continue;
                    for (var j = 0; j < item.items.length; j++) {
                        var re = item.items[j];
                        if (re.id == 0) continue;
                        re = { pid: item.pid, zid: item.id, name: re.name, did: re.id, py: re.py, iskc: re.iskc }
                        if (!areaArray[re.py]) {
                            pyArr.push(re.py);
                            areaArray[re.py] = [];
                            areaArray[re.py].push(re);
                        } else {
                            areaArray[re.py].push(re);
                        }
                    }
                }
                pyArr.sort();
                var newAreaArray = {};
                var zm = "";
                var allinfo = "";
                for (i = 0; i < pyArr.length; i++) {
                    zm += "<a aid=" + pyArr[i] + ">" + pyArr[i] + "</a>";
                    allinfo += "<dl id='city" + pyArr[i] + "'><dt><span>" + pyArr[i] + "</span><dt><dd>";
                    for (var j = 0; j < areaArray[pyArr[i]].length; j++) {
                        var tempobj = areaArray[pyArr[i]][j];
                        allinfo += '<a pid="' + tempobj.pid + '" zid="' + tempobj.zid + '" did="' + tempobj.did + '" dname="' + tempobj.name + '" onclick="AreaMin.AreaClick(this)">' + (tempobj.iskc ? tempobj.name + '*' : tempobj.name) + '</a>';
                    }
                    allinfo += "</dd></dl>"
                }

                $("#zimu").html(zm);
                $("#cityzimu").html(allinfo).get(0).scrollTop = 0;

                AreaMin.zimuClick();
            }
        }, "json");

    },


    zimuClick: function () {
        window.icdiv = document.getElementById('cityzimu');
        window.curSpan = null;
        $('#zimu a').click(function () {
            $(this).addClass("zmhover").siblings().removeClass("zmhover");
            var zm = $(this).attr('aid');
            window.icdiv.scrollTop = 0;
            var curdl = $('#city' + zm);
            window.icdiv.scrollTop = curdl.offset().top - $(window.icdiv).offset().top;
            if (window.curSpan && window.curSpan != curdl) { window.curSpan.find('span').css("color", "#ccc"); }
            window.curSpan = curdl;
            window.curSpan.find('span').css("color", "#ff1a50");
        });
    },

    AreaClick: function (the) {
        var time = 24 * 300;
        Cookie.Set('pidc', $(the).attr('pid'), time);
        Cookie.Set('zidc', $(the).attr('zid'), time);
        Cookie.Set('didc', $(the).attr('did'), time);
        Cookie.Set('dnamec', $(the).attr('dname'), time);
        var cityid_ = $(the).attr("did") == 0 ? $(the).attr("zid") == 0 ? $(the).attr("pid") == 0 ? 0 : $(the).attr("pid") : $(the).attr("zid") : $(the).attr("did");
        Cookie.Set('cityid', cityid_, time);
        Cookie.Set('ischecked', 1, time);
        $('#showcity,#wrapMarkDiv').hide();
        UArea.Init();
        window.location.reload();
        return false;
    },
    CheckIsSet: function () {
        if (Cookie.Get('ischecked') != "1") {
            return false;
        }
        else {
            return true;
        }
    },
    
    closefun: function(){
        if (!AreaMin.CheckIsSet())
		{
		    var curdl = $('#citymenuwrap dl.icur dd a');
			if(curdl.length==0)
			{
			    curdl = $('#citymenuwrap dl dd a');
			}
			if(curdl.length>0) {
			    AreaMin.AreaClick(curdl.get(0));
			}
		}
        $('#showcity').fadeOut(100, function () { $("#showcity").hide(); $("#wrapMarkDiv").hide(); });
	},
    Init: function () {
        UArea.Init();
        setTimeout(function () {
            $('#showcity span[pid=' + UArea.pid + ']').trigger('click');
        }, 100);
       /*this.LoadAreaAll();*/
        $("#ctclose").click(AreaMin.closefun);
        if (!AreaMin.CheckIsSet() && Cookie.ISCookie()) {/*没有选择过城市*/
            $('#showcity').show();
            $('#showcity').css({ "left": ($(window).width() - 540) * 0.5 + 'px', "top": "100px" });
            createMarkDiv();
        }

       /*给登录窗口绑定"ESC"退出关闭事件 */
        $(document).keypress(function (event) {
            if (event.keyCode == "27") {
                AreaMin.closefun();
            };
        });
    }
};

function createMarkDiv() {
    var bg_markdiv = document.getElementById('wrapMarkDiv');
    if (!bg_markdiv) {
        bg_markdiv = $('<div>', { 'id': 'wrapMarkDiv' }).appendTo("body");
        bg_markdiv.css({ 'position': 'absolute', 'z-index': 9990, width: '100%', height: '100%', left: '0px', top: '0px', overflow: 'hidden', 'background-color': '#000' });
        if (document.all) {
            bg_markdiv.html('<iframe id="ifrbugbg"  scrolling="no" frameborder="0" width="80%" height="80%" style="width:100%;height:100%" src="about:blank"></iframe>');
        }
    } else {
        bg_markdiv = $(bg_markdiv);
    }
    var win = $(window.document);
    var width = win.width(), height = win.height();
    bg_markdiv.css({ width: width, height: height, opacity: 0.3, filter: 'alpha(opacity=30)' })
    bg_markdiv.show();
}

function cityview_align() {
    var icdiv = document.getElementById('citymenuwrap');
    icdiv.scrollTop = 0;
    var curdl = $('#citymenuwrap dl.icur');
    try {
        icdiv.scrollTop = curdl.offset().top - $(icdiv).offset().top;
    } catch (e) { }
}

/*鼠标移入切换城市*/
function cityShow(obj) {
    $("#showcity").show();
    cityview_align();
    var pos = $(obj).offset();
    notIe = -[1, ];
    if (-[1, ]) {
        $("#showcity").css({ left: pos.left, top: pos.top + 20 }).fadeIn(100)
    } else {
        if (window.ActiveXObject) {
            var ua = navigator.userAgent.toLowerCase();
            var ie = ua.match(/msie ([\d.]+)/)[1]
            if (ie == 6.0) {
                $("#showcity").css({ top: pos.top + 30 }).fadeIn(100)
            } else {
                $("#showcity").css({ left: pos.left, top: pos.top + 20 }).fadeIn(100)
            }
        }
    }
    $("#showcity").hover(function () { $(this).show(); }, function () { $(this).fadeOut(200); });
   /*$("#ctclose").click(function () { $("#showcity").hide(); });*/
}

/*提示框*/
var wintip = null;
function trim(str) { return String(str).replace(/^\s+|\s+$/, '') }
function $GET(id) { return document.getElementById(id) || null }
function showtip(msg, obj, opt, time) {
    if (time == undefined) {
        time = 5000;
    }
    if (typeof opt == 'object') {
        if (opt['left'] == null) { opt.left = 0 }
        if (opt['top'] == null) { opt.top = 0 }
    } else { opt = { left: 0, top: 0} }
    if (!wintip) { if ($GET('tipdiv')) { wintip = $GET('tipdiv') } }
    if (!wintip) {
        var wintip = document.createElement("span");
        wintip.id = "tipdiv";
        var wintipmsg = document.createElement("span");
        wintipmsg.id = "tipdiv_msg";
        wintip.appendChild(wintipmsg);
        wintip.posoff = { offx: 0, offy: 0 }
        wintip.msgobj = wintipmsg;
        wintip.hide = function () { this.style.display = 'none'; this.msgobj.innerHTML = ''; }
        document.body.appendChild(wintip);
        wintip.hide();
        wintip.position = function (posobj) {
            var pos = { left: parseInt(posobj.offsetLeft), top: parseInt(posobj.offsetTop) }
            while (posobj = posobj.offsetParent) {
                pos.left += posobj.offsetLeft;
                pos.top += posobj.offsetTop
            }
            this.style.left = ((pos.left - 20) + opt.left) + 'px';
            this.style.top = ((pos.top - 36) + opt.top) + 'px';
            return this;
        }
        wintip.posshow = function (time, posobj) {
            this.style.display = document.all ? '' : 'block';
            this.position(posobj);
            clearTimeout(wintip.timer)
            wintip.timer = setTimeout(function () { $("#tipdiv").remove(); }, time);
            return this;
        }
        wintip.setmsg = function (msg) { this.msgobj.innerHTML = msg; return this; }
    }
    wintip.setmsg(msg).posshow(time || 2500, obj);
}


/*文字滚动*/
(function ($) {
    $.fn.textSlider = function (settings) {
        settings = jQuery.extend({
            speed: "normal",
            line: 2,
            timer: 3000
        }, settings);
        return this.each(function () {
            $.fn.textSlider.scllor($(this), settings);
        });
    };
    $.fn.textSlider.scllor = function ($this, settings) {
        var ul = $("ul:eq(0)", $this);
        var timerID;
        var li = ul.children();
        var liHight = $(li[0]).height();
        var upHeight = 0 - settings.line * liHight;/*滚动的高度；*/
        var scrollUp = function () {
            ul.animate({ marginTop: upHeight }, settings.speed, function () {
                for (i = 0; i < settings.line; i++) {
                    ul.find("li:first", $this).appendTo(ul);
                }
                ul.css({ marginTop: 0 });
            });
        };
        var autoPlay = function () {
            timerID = window.setInterval(scrollUp, settings.timer);
        };
        var autoStop = function () {
            window.clearInterval(timerID);
        };
       /*事件绑定*/
        ul.hover(autoStop, autoPlay).mouseout();
    };
})(jQuery);

/*回到顶部*/
(function ($) {
    $.fn.backToTop = function (options) {
        var $this = $(this); $this.hide().click(function () {
            $("body, html").animate({ scrollTop: "0px" });
        });
        var $window = $(window); $window.scroll(function () {
            if (
				$window.scrollTop() > 0) {
                $this.fadeIn();
            }
            else {
                $this.fadeOut();
            }
        });
        return this;
    };
})(jQuery);

/*全站所有幻灯片*/
function Oslider(a1, a2, a3, a4) {
    if ($(a1).length > 0) {
        var defaultOpts = { interval: 3000, fadeInTime: 300, fadeOutTime: 200 };
        var _titles = $(a2);
        var _titles_bg = $(a3);
        var _bodies = $(a4);
        var _count = _titles.length;
        var _current = 0;
        var _intervalID = null;
        var stop = function () { window.clearInterval(_intervalID); };
        var slide = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
                _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
                _bodies.removeClass("cur").eq(_current).addClass("cur");
            });
            _titles.removeClass("cur").eq(_current).addClass("cur");
            _titles_bg.removeClass("cur").eq(_current).addClass("cur");
        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
        _bodies.hover(stop, go);
        go();
    }
}

var userMenuTimeOut = null;
jQuery(function () {
    Oslider(".slide-pic_index", "ul.slide-txt_index li", "ul.op_index li", "ul.slide-pic_index li");
    var ms = $('.MMSlides');
    for (i = 0; i < ms.length; i++) {
        var ite = ms.eq(i);
        Oslider(ite.find(".slide-pic"), ite.find("div.slide-txt i"), ite.find("ul.op li"), ite.find("ul.slide-pic li"));
    }
});

/*首页弹出菜单*/
$(function () {
    $(".menu_phone").hover(function () {
        $(this).css({
            "background-color": "#f4f4f4",
            "border-top": "2px solid #0048a3",
            "width": "208px",
            "border-bottom": "2px solid #0048a3"
        }).children(".menu_sub").show();
    }, function () {
        $(this).css({
            "background-color": "#fff",
            "border-top": "2px solid #fff",
            "width": "206px",
            "border-bottom": "2px solid #ededed"
        }).children(".menu_sub").hide();
    })
    $(".menu li ul li").hover(function () {
        $(this).css("background", "");
    }, function () {
        $(this).css("background", "");
    })
})

/*详情页显示大图事件*/
function smpicMouse(smpic) {
    $(smpic).parents("li").addClass("smpichover").siblings().removeClass("smpichover");
    $(".jqzoom").attr('src', $(smpic).find("img").attr("mid"));
    $(".jqzoom").attr('rel', $(smpic).find("img").attr("big"));
}

/*首页焦点图下面滚动*/
jQuery.fn.imageScroller = function (params) {
    var p = params || {
        next: "buttonNext",
        prev: "buttonPrev",
        frame: "viewerFrame",
        width: 100,
        child: "a",
        auto: true,
        smpic: false
    };
    var _btnNext = $("#" + p.next);
    var _btnPrev = $("#" + p.prev);
    var _imgFrame = $("#" + p.frame);
    var _width = p.width;
    var _child = p.child;
    var _auto = p.auto;
    var _itv;

    var turnLeft = function () {
        _btnPrev.unbind("click", turnLeft);
        if (_auto) autoStop();
        _imgFrame.animate({ marginLeft: -_width }, 'fast', function () {
            _imgFrame.find(_child + ":first").appendTo(_imgFrame);
            _imgFrame.css("marginLeft", 0);
            _btnPrev.bind("click", turnLeft);
            if (_auto) autoPlay();
        });
    };

    var turnRight = function () {
        _btnNext.unbind("click", turnRight);
        if (_auto) autoStop();
        _imgFrame.find(_child + ":last").clone().fadeIn().prependTo(_imgFrame);
        if (p.smpic) $("#smallpic li a").unbind('mouseover').mouseover(function () { smpicMouse(this) });
        _imgFrame.css("marginLeft", -_width);
        _imgFrame.animate({ marginLeft: 0 }, 'fast', function () {
            _imgFrame.find(_child + ":last").remove();
            _btnNext.bind("click", turnRight);
            if (_auto) autoPlay();
        });
    };

    _btnNext.css("cursor", "hand").click(turnRight);
    _btnPrev.css("cursor", "hand").click(turnLeft);

    var autoPlay = function () {
        _itv = window.setInterval(turnLeft, 4000);
    };
    var autoStop = function () {
        _imgFrame.stop();
        window.clearInterval(_itv);
    };
    if (_auto) {
        autoPlay();
        _imgFrame.hover(function () { autoStop();}, function () { autoPlay(); });
    }

};

/*商品列表显示热卖等标签*/
function showTag(theTag) {
    theTag.each(function () {
        var tag = $(this).attr("tag");
        $(this).append('<i class="list_tag"></i>');
        var the = $(this).find(".list_tag");
        switch (tag) {
            case "0":
                the.hide();
                break;
            case "1":
                the.addClass("hot_tag").show();
                break;
            case "2":
                the.addClass("new_tag").show();
                break;
            case "3":
                the.addClass("sale_tag").show();
                break;
            case "4":
                the.addClass("tui_tag").show();
                break;
        }
    });
}

/*详情页图片放大镜*/
(function ($) {
    $.fn.imagezoom = function (options) {
        var settings = {
            xzoom: 310,
            yzoom: 310,
            offset: 10,
            position: "BTR",
            preload: 1
        };
        if (options) {
            $.extend(settings, options);
        }

        var noalt = '';
        var self = this;

        $(this).bind("mouseenter", function (ev) {
            var imageLeft = $(this).offset().left; //元素左边距
            var imageTop = $(this).offset().top; //元素顶边距
            var imageWidth = $(this).get(0).offsetWidth; //图片宽度
            var imageHeight = $(this).get(0).offsetHeight; //图片高度
            var boxLeft = $(this).parent().offset().left; //父框左边距
            var boxTop = $(this).parent().offset().top; //父框顶边距
            var boxWidth = $(this).parent().width(); //父框宽度
            var boxHeight = $(this).parent().height(); //父框高度
            noalt = $(this).attr("alt"); //图片标题
            var bigimage = $(this).attr("rel"); //大图地址
            $(this).attr("alt", ''); //清空图片alt
            if ($("div.zoomDiv").get().length == 0) {
                $(document.body).append("<div class='zoomDiv'><img class='bigimg' src='" + bigimage + "'/></div><div class='zoomMask'><a href='/proimage.aspx?pid=" + PRODUCT.PPID + "&taocan=" + PRODUCT.TAOCAN + "' style='display:block;width:100%;height:100%;' target='_blank'></a></div>"); //放大镜框及遮罩
            }
            if (settings.position == "BTR") {
                //如果超过了屏幕宽度 将放大镜放在右边
                if (boxLeft + boxWidth + settings.offset + settings.xzoom > screen.width) {
                    leftpos = boxLeft - settings.offset - settings.xzoom;
                } else {
                    leftpos = boxLeft + boxWidth + settings.offset;
                }
            } else {
                leftpos = imageLeft - settings.xzoom - settings.offset;
                if (leftpos < 0) {
                    leftpos = imageLeft + imageWidth + settings.offset;
                }
            }
            $("div.zoomDiv").css({ top: boxTop, left: leftpos });
            $("div.zoomDiv").width(settings.xzoom);
            $("div.zoomDiv").height(settings.yzoom);
            $("div.zoomDiv").show();

            $(this).css('cursor', 'crosshair');

            $(document.body).mousemove(function (e) {
                mouse = new MouseEvent(e);
                if (mouse.x < imageLeft || mouse.x > imageLeft + imageWidth || mouse.y < imageTop || mouse.y > imageTop + imageHeight) {
                    mouseOutImage();
                    return;
                }

                var bigwidth = $(".bigimg").get(0).offsetWidth;
                var bigheight = $(".bigimg").get(0).offsetHeight;

                var scaley = 'x';
                var scalex = 'y';

                //设置遮罩层尺寸
                if (isNaN(scalex) | isNaN(scaley)) {
                    var scalex = (bigwidth / imageWidth);
                    var scaley = (bigheight / imageHeight);
                    $("div.zoomMask").width((settings.xzoom) / scalex);
                    $("div.zoomMask").height((settings.yzoom) / scaley);
                    $("div.zoomMask").css('visibility', 'visible');
                }

                xpos = mouse.x - $("div.zoomMask").width() / 2;
                ypos = mouse.y - $("div.zoomMask").height() / 2;

                xposs = mouse.x - $("div.zoomMask").width() / 2 - imageLeft;
                yposs = mouse.y - $("div.zoomMask").height() / 2 - imageTop;

                xpos = (mouse.x - $("div.zoomMask").width() / 2 < imageLeft) ? imageLeft : (mouse.x + $("div.zoomMask").width() / 2 > imageWidth + imageLeft) ? (imageWidth + imageLeft - $("div.zoomMask").width()) : xpos;
                ypos = (mouse.y - $("div.zoomMask").height() / 2 < imageTop) ? imageTop : (mouse.y + $("div.zoomMask").height() / 2 > imageHeight + imageTop) ? (imageHeight + imageTop - $("div.zoomMask").height()) : ypos;


                $("div.zoomMask").css({ top: ypos, left: xpos });
                $("div.zoomDiv").get(0).scrollLeft = xposs * scalex;
                $("div.zoomDiv").get(0).scrollTop = yposs * scaley;
            });
        });
        function mouseOutImage() {
            $(self).attr("alt", noalt);
            $(document.body).unbind("mousemove");
            $("div.zoomMask").remove();
            $("div.zoomDiv").remove();
        }

        //预加载
        count = 0;
        if (settings.preload) {
            $('body').append("<div style='display:none;' class='jqPreload" + count + "'></div>");

            $(this).each(function () {

                var imagetopreload = $(this).attr("rel");

                var content = jQuery('div.jqPreload' + count + '').html();

                jQuery('div.jqPreload' + count + '').html(content + '<img src=\"' + imagetopreload + '\">');

            });
        }
    }

})(jQuery);
function MouseEvent(e) {
    this.x = e.pageX;
    this.y = e.pageY;
}


/*详情页配件价格计算*/
function formatPrice(numstr) {
    var nm = String(numstr).split('.');
    if (nm.length == 2) return nm[0] + '.' + (nm[1].length < 2 ? nm[1] + "0" : nm[1])
    return nm[0] + '.00';
}
function detailPrice() {
    var sppr = $("#spprice").html().replace(/\D+.\D{2}/g, "");
    sppr = parseFloat(sppr);
    $("#zongprice,#yuanprice").html(formatPrice(sppr));
    var pjpr = "";
    var pricecheckbox = $("#zuhe input[type=checkbox]");
    pricecheckbox.click(function () {
        var priceTotal = 0;
        var cjPrice = 0;
        var geshu = 0;
        pricecheckbox.each(function (index, element) {
            if (element.checked == true) {
                var danmai = $(this).prev().find("del").html();
                danmai = danmai.substring(1, danmai.length);
                cjPrice += parseFloat(danmai);
                priceTotal += parseFloat(element.value);
                geshu += 1;
            }
        });
        var temp = sppr + priceTotal;
        $("#zongjiesheng").html(formatPrice(cjPrice + sppr/*（原价）*/ - temp));
        //$("#pj_jiesheng").html(formatPrice(cjPrice - priceTotal));
        //$("#pj_zongprice").html(formatPrice(priceTotal))
        $("#yuanprice").html(formatPrice(cjPrice + sppr))
        $("#zongprice").html(formatPrice(temp))
        $("#geshu").html(geshu);
    });
    $("#clearcheck").click(function () {
        var sppr = $("#spprice").html().replace(/\D+.\D{2}/g, "");
        $("#zuhe input[type=checkbox]").attr("checked", false);
        $("#zongprice,#yuanprice").html(formatPrice(sppr));
        //$("#pj_jiesheng").html(formatPrice(0));
        $("#zongjiesheng").html(formatPrice(0));
       // $("#pj_zongprice").html(formatPrice(0));
        $("#geshu").html(0);
    });

}


/*组合购买*/
function ZuheBuy(the) {
    var zhppid = '';
    $('#zuhe input[type=checkbox]').each(function () {
        if (this.checked == true) {
            zhppid += zhppid == '' ?
			$(this).attr('ppid') : ',' + $(this).attr('ppid');
        }
    });
    if (window.PRODUCT.QUE != 0) {
        showtip("商品" + (window.PRODUCT.QUE == 1 ? "缺货" : "下市") + "不可以购买!", the);
        return false; ;
    }
    var urlParam='?ppid=' + window.PRODUCT.PPID + '&zhppid=' + zhppid + '&qiang=' + window.PRODUCT.QIANG;
    if (window.PRODUCT.TAOCAN == 1) {
        window.location.href = '/UnicomPackagePick.aspx' + urlParam;
    } else if (window.PRODUCT.TAOCAN == 2) {
        window.location.href = '/TelecomPackagePick.aspx' + urlParam;
    } else {
        window.location.href = '/initcart.aspx' + urlParam;
    }
    return false;
}


/*详情页菜单浮动*/
$.fn.smartFloat = function () {
    var position = function (element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function () {
            var scrolls = $(window).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: 0
                    });
                } else {
                    element.css({
                        top: scrolls
                    });
                }
            } else {
                element.css({
                    position: pos,
                    top: top
                });
            }
        });
        /*$(window).keyup(function (e) {
            if (e.keyCode == 36 || e.keyCode == 35) {
               fl();
            }
        }, function () { $(window).scroll(function () { fl(); }); });*/
    };
    return $(this).each(function () {
        position($(this));
    });
};

/*函数调用*/
$(function () {
    AreaMin.Init();
    /*导航展开*/

    if (!window.ISINDEX) { $(".all_menu_h3").hover(function () { $(".all_menu_hd").show(); }, function () { $(".all_menu_hd").hide(); }); $("div[class='all_menu_hd menunone']").hover(function () { $(".all_menu_hd").show(); }, function () { $(".all_menu_hd").hide(); }) };
    /*回到顶部*/
    $("#scolltop").backToTop();
    $('#fudong').css("right", ($(window).width() - 1300) * 0.5 + 'px');
    /*分店滚动*/
    if ($("#gd_ul>li").length > 3) { $(".gundong").imageScroller({ next: "dz_left", prev: "dz_right", frame: "gd_ul", width: 350, child: "li", auto: true }); $("#dz_left,#dz_right").show() }
    /*切换城市*/
    $("#showcity span").click(function () { var pid = $(this).attr('pid'); if (pid) { AreaMin.LoadArea(pid); $('#zimu,#cityzimu').hide(); } else { AreaMin.LoadAreaAll(); $('#zimu').show(); $('#citymenuwrap').hide(); }; $(this).addClass("cthover").siblings().removeClass("cthover") });
    $("#showcity span#c1").click(function () { $("#cityzimu").show(); });
    /*切换电话号码*/
    if (Cookie.Get('zidc') != '39') {
        $("#qiehuanphone").attr("src", "/images/call2.png");
    }
    /*弹出所有规格价格*/
    var interval;
    $(".showallprice").hover(function () {
        clearTimeout(interval);

        var _self = $(this), proId = _self.attr("proid"), pos = _self.offset(), ajax = null;
        if ($("#showAllPriceBox").length == 0) {
            $("body").append('<div id="showAllPriceBox"><div class="showAllPriceBorder"><i style=""></i></div></div>');
        } 

        function dingWei() {
            var thisheight = $pBox.height();
            if (thisheight <= y_height) {
                $pBox.css({ "left": pos.left, "top": pos.top - thisheight - strongHeight - 14 });
                arrowimg.attr("style", "background-image: url(\"/images/allprdown.png\"); bottom: -22px;");
            } else {
                $pBox.css({ "left": pos.left, "top": pos.top + strongHeight + 14 });
                arrowimg.attr("style", "background-image: url(\"/images/allprup.png\"); top: -22px;");
            }
            $pBox.show();
        }
        var $pBox = $("#showAllPriceBox")
        var bor = $("#showAllPriceBox").find(".showAllPriceBorder");
        var arrowimg = $("#showAllPriceBox i")
        var thisTop = pos.top;
        var y_scroll = $(window).scrollTop();
        var y_height = thisTop - y_scroll;
        var strongHeight = _self.height();

        if ($pBox.find(".p_" + proId).length == 0) {
            if (ajax) {
                ajax.abort();
            }
            ajax = $.getJSON("/ajaxOperate.aspx?act=getprices&productid=" + proId, function (jsons) {
                if (jsons.length == 0) { $pBox.hide(); } else {
                    var html = "";
                    for (var i = 0; i < jsons.length; i++) {
                        var p = jsons[i];
                        html += '<li><a href="/product/' + p.ppriceid + '.html">' + p.product_color + '</a><span>￥' + p.memberprice + '</span><li>';
                    }
                    bor.append('<ul class="p_' + proId + '">' + html + '</ul>')
                    $pBox.find("ul").hide();
                    $pBox.find(".p_" + proId).show();
                    dingWei();
                    
                }
            });
        } else {
            $pBox.find("ul").hide();
            $pBox.find(".p_" + proId).show();
            dingWei();
        }
    }, function () {
        var Odiv = $("#showAllPriceBox");
        interval = setInterval(function () { Odiv.hide(); }, 500);
        Odiv.hover(function () {
            clearTimeout(interval);
            $(this).show();
        }, function () {
            $(this).hide();
        });
    });

    /*展开当前购物车*/
    var gwctime;
    $(".gwc").hover(function () {
        clearInterval(gwctime);
        loadCartInfo();
        $(".now_gwchas").show();
    }, function () {
        gwctime = setInterval(function () { $(".now_gwchas").hide(); }, 800);
    });
    $(".now_gwchas").hover(function () {
        clearInterval(gwctime);
        $(this).show();
    }, function () { $(this).hide(); });

    
});

function loadCartInfo() {
    $(".now_gwchas").html("<ul id='gwcTopInfo'><li><img src='http://img2.ch999img.com/images/loading.gif' width='16' height='16' />正在加载……</li></ul><p class='gwchas_pr'>总计：<strong id='allPriceTop'>￥0.00</strong></p><a href='/cart.aspx' class='mycar_btn'><img src='http://img2.ch999img.com/images/mycar_btn.png' width='170' height='40'></a>");
    $.ajax({
        url: '/cartHandler.aspx',
        type: 'post',
        dataType: 'json',
        data: { "act": "loadCarInfo" },
        success: function (txt) {
            if (txt.state == "1") {
                var info = txt.result;
                var html = "";
                var totalPrice = 0;
                var totalCount = 0;
                for (var i = 0; i < info.length; i++) {
                    if (info[i].giftid == "") {
                        html += "<li count='" + info[i].basket_count + "'><div class='gwc_left'><a href='/product/" + info[i].ppid + ".html' target='_blank'><img src='" + info[i].img + "' width='70' height='70' /></a></div>";
                        html += "<div class='gwc_right'> <h5><a href='/product/" + info[i].ppid + ".html' target='_blank'>" + info[i].name + "</a></h5>";
                        html += " <p><strong>￥" + info[i].cartPrice + "</strong>×" + info[i].basket_count + "</p>";
                        html += "<a href='javascript:;' onclick=delCar('" + info[i].id + "',this) class='del_nowgwc'>删除</a> </div></li>";
                    }

                    if (info[i].isServices) {
                        if (info[i].servicesInfo && info[i].servicesInfo.length > 0) {
                            var services = info[i].servicesInfo;
                            for (var mm = 0; mm < services.length; mm++) {
                                totalCount = parseInt(totalCount) + 1;
                                totalPrice = parseFloat(parseFloat(totalPrice) + parseFloat(services[mm].price)).toFixed(2);
                            }
                        }

                    }
                    totalCount = parseInt(totalCount) + parseInt(info[i].basket_count);
                    totalPrice = parseFloat(parseFloat(totalPrice) + parseInt(info[i].basket_count) * parseFloat(info[i].cartPrice)).toFixed(2);
                }
                $("#gwcTopInfo").html(html);
                $("#allPriceTop").html("￥" + totalPrice);
                $("#cartNumber").html(totalCount);
            }
            else { $(".now_gwchas").html("<div style='width:240px;height:80px;background:url(http://img2.ch999img.com/images/cart_kong.png) no-repeat;'></div>"); }
        }
    });
}

function delCar(id,the){
        $.ajax({
            url: "/cartHandler.aspx",
            type: "post",
            dataType: "html",
            async: false,
            cache: false,
            data: { "act": "delCar", 'id': id },
            success: function (result) {
                if (result == "1") {
                    $(the).parents("li").remove();
                }
            }
        });
        if ($("#gwcTopInfo li").length == 0) {
            $(".now_gwchas").html("<div style='width:240px;height:80px;background:url(http://img2.ch999img.com/images/cart_kong.png) no-repeat;'></div>");
            $("#cartNumber").html("0");
        } else {
            var i = parseInt($("#cartNumber").html());
            i = i - $(the).parents("li").attr("count");
            $("#cartNumber").html(i);
        }
}

/*提示更改*/
function ChangeTips(thechange, txt) {
    var pos = thechange.offset();
    if (Cookie.Get("changetip") != 1) {
        $("body").append("<div id='changetipdiv' style='background:url(/images/changetip_bg.png) no-repeat;width:140px;height:65px;position:absolute;'><p style='margin:10px 5px 5px;'>" + txt + "</p><a id='ikown' style='cursor:pointer;color:#43b20d;float:right;margin-right:10px;'>知道了</a></div>")
        $("#changetipdiv").css({ left: pos.left, top: pos.top - 70 });
    }
    $("#ikown").click(function () {
        $("#changetipdiv").remove();
        Cookie.Set("changetip", 1, 240);
    })
}

/*对比篮*/
function duibi(db) {
    if ($(".duibibox").size() <= 0) {
        $('body').append("<div class='duibibox'><h2>产品对比篮<a href='javascript:;' id='closedbl'>关闭</a></h2><ul></ul><div class='dbl_btn'><button id='btnduibi'>开始对比</button><a href='javascript:;' id='cleardbl'>清空对比篮</a></div></div>");
    } else {
        $(".duibibox").slideDown();
    }
    $(".duibibox").show().css("left", ($(window).width() - 1200) * 0.5 + 'px');
    var ppid = $(db).attr("ppid");
    var duibiStr = Cookie.Get("duibi") == null ? '' : unescape(Cookie.Get("duibi"));
    if (duibiStr.indexOf('id:' + ppid + ',') == -1) {
        var link = $(db).attr("link");
        var price = $(db).attr("price");
        var tit = $(db).attr("tit");
        var imgsrc = $(db).attr("imgsrc");
        var itemStr = "{id:" + ppid + ",h:'" + link + "',p:'" + price + "',n:'" + tit + "',pic:'" + imgsrc + "'}";
        if (duibiStr.length < 10) {
            duibiStr = itemStr;
        } else {
            duibiStr = itemStr + "@" + duibiStr;
        }
    } else {
        showtip('商品已经在对比篮了！', db, { top: 5, left: 10 }, 2000);
    }

    var arr = duibiStr.split('@');
    if (arr.length > 4) { arr.length = 4; showtip('最多可以对比4件商品', db, { top: 5, left: 20 }); /*if ($(".duibibox ul").find("li") != 0) { return false; }*/ }
    var cookieStr = "";
    var proliststr = '';
    for (var i = 0; i < arr.length; i++) {
        cookieStr += i == 0 ? escape(arr[i]) : escape('@' + arr[i]);
        var tpro = eval('(' + arr[i] + ')');
        proliststr += "<li><a href='" + tpro.h + "'><img src='/pic/product/70x70/" + tpro.pic + "' width='70' height='70' /></a><h4><a href='" + tpro.h + "' name='" + tpro.n + "'>" + tpro.n + "</a></h4><p>三九价：<strong>" + tpro.p + "</strong><a href='javascript:;' class='rethis' ppid='" + tpro.id + "'>移除</a></p></li>";
    }
    var na = $(db).attr("name");

    Cookie.Set("duibi", cookieStr);
    var na = $(db).attr("name");
    if ($(".duibibox ul li h4 a[name=" + na + "]").size() > 0) {
        return false;
    }
    $(".duibibox ul").html(proliststr);
    $(".rethis").unbind('click').click(function () {
        $(this).parents('li').remove();
        var duibiStr = Cookie.Get("duibi") == null ? '' : unescape(Cookie.Get("duibi"));
        if (duibiStr.length > 10) {
            var ppid = $(this).attr('ppid');
            var ex = new RegExp('{id:' + ppid + ',.*?}', 'ig');
            duibiStr = duibiStr.replace(ex, '').replace(/^@+|@+$/, '');
            if (duibiStr.length < 10) {
                Cookie.Clear("duibi");
            } else {
                var arr = duibiStr.split('@');
                var cookieStr = "";
                for (var i = 0; i < arr.length; i++) {
                    cookieStr += i == 0 ? escape(arr[i]) : escape('@' + arr[i]);
                }
                Cookie.Set("duibi", duibiStr);
            }
        }
        if ($(".duibibox ul li").size() == 0) {
            $(".duibibox").slideUp();
        }
    });
    $("#closedbl").unbind('click').click(function () { $(".duibibox").slideUp(); });
    $("#cleardbl").unbind('click').click(function () { $(".duibibox ul li").remove(); Cookie.Clear("duibi"); $(".duibibox").slideUp(); });
    $('#btnduibi').unbind('click').click(function () {
        var ppidArr = []; $('.duibibox a.rethis').each(function (index, element) {
            ppidArr.push($(this).attr('ppid'));
        });
        if (ppidArr.length > 0)
            window.location.href = '/ProductContrast.aspx?priIds=' + ppidArr.join(',');
    })
}
/*收藏事件*/
function myfav(ppid, obj) {
    var href=window.location.href
    if ($.trim(ppid).length > 0) {
        $.ajax({
            url: '../ajaxOperate.aspx',
            dataType: 'json',
            data: { 'act': 'addCollection', 'ppid': ppid },
            type: 'post',
            success: function (txt) {
                if (txt.stats == 1) {
                    showtip('添加成功！', obj, { left: 8 });
                } else if (txt.stats == 2) {
                    showtip('请先登录！', obj, { left: 8 });
                    window.location.href = "/login.aspx?url="+href+"";
                } else if (txt.stats == 3) {
                    showtip('您已收藏了该商品！', obj, { left: 8 });
                } else {
                    showtip('添加失败！', obj, { left: 8 });
                }
            }
        });
    }

}

function loginState() {
    $.ajax({
        url: '/ajaxOperate.aspx',
        dataType: 'json',
        data: { 'act': 'checkLoginState' },
        type: 'post',
        success: function (txt) {
            $(".loginbefore").html(txt.loginState);
            $('#cartNumber').html(txt.cartNum);
            if (txt.state == 1) {
                var ucenter = $('#usercenter');
                $(".wellcome").hide();
                if (ucenter.size() < 1) return;
                ucenter.ismenu = false;
                if (!ucenter.ismenu) {
                    var udiv = $('<div id="ucenterdiv"></div>').css({ 'left': ucenter.offset().left + 'px' }).appendTo(document.body);
                    var usermenustr = '<ul class="admin_center_btn">\n\
		                    <li class="grxx"><a href="/my/" title="个人信息"><strong>个人信息</strong></a></li>\n\
		                    <li class="wddd"><a href="/my/mydingdan.aspx" title="我的订单"><strong>我的订单</strong></a></li>\n\
		                    <li class="zitidian"><a href="/my/myzitidd.aspx" title="自提点订单"><strong>自提点订单</strong></a></li>\n\
		                    <li class="zitidian"><a href="/my/mypaimai.aspx" title="我拍到的宝贝"><strong>我拍到的宝贝</strong></a></li>\n\
		                    <li class="wdwxiu"><a href="/my/myweixiu.aspx" title="我的维修"><strong>我的维修</strong></a></li>\n\
		                    <li class="wdwxiu"><a href="/my/weixiushenqing.aspx" title="网上报修/退换货"><strong>网上报修/退换货</strong></a></li>\n\
		                    <li class="shdzhi"><a href="/my/myaddress.aspx" title="我的收货地址"><strong>我的收货地址</strong></a></li>\n\
		                    <li class="wdgwc"><a href="/my/myshoucang.aspx" title="我的收藏"><strong>我的收藏</strong></a></li>\n\
		                    <li class="wdyuer"><a href="/my/myyue.aspx" title="我的余额详情"><strong>我的余额详情</strong></a></li>\n\
                            <li class="tuodanzhi"><a href="/my/RedPackage.aspx" title="我的礼品"><strong>我的礼品</strong></a></li>\n\
		                    <li class="wdjifen"><a href="/my/myjifen.aspx" title="我的积分详情"><strong>我的积分详情</strong></a></li>\n\
		                    <li class="xxguanli"><a href="/my/myinfo.aspx" title="个人信息管理"><strong>个人信息管理</strong></a></li>\n\
		                    <li class="xiugaimima"><a href="/my/myxiugaimm.aspx" title="修改密码"><strong>修改密码</strong></a></li>\n\
		                    <li class="wdzixun"><a href="/my/myzixun.aspx" title="我的咨询"><strong>我的咨询</strong></a></li>\n\
                            <li class="wdzixun"><a href="/my/mySHComment.aspx" title="我的售后咨询"><strong>我的售后咨询</strong></a></li>\n\
		                    <li class="wdpingjia"><a href="/my/mypingjiaform.aspx" title="我的评价"><strong>我的评价</strong></a></li>\n\
		                    </ul>';
                    udiv.html(usermenustr);
                    ucenter.ismenu = true;
                    ucenter.itmer = null;
                    $('#usercenter').hover(
                    function () {
                        clearTimeout(ucenter.itmer);
                        $('#ucenterdiv').css({ 'left': ucenter.offset().left + 'px' }).show();
                        $(this).addClass("ucenter_cur");
                    }, function () {
                        ucenter.itmer = setTimeout(function () {
                            $('#ucenterdiv').hide();
                            $('#usercenter').removeClass("ucenter_cur");
                        }, 500)
                    });
                    udiv.find('.admin_center_btn').hover(function () { clearTimeout(ucenter.itmer) }, function () { $('#ucenterdiv').hide(); $('#usercenter').removeClass("ucenter_cur"); });
                };
            }
        }
    });
}

function logout() {
    $.ajax({
        url: '/ajaxOperate.aspx',
        dataType: 'html',
        data: { 'act': 'logout' },
        type: 'post',
        success: function (txt) {
            window.location.reload();
            //loginState();
        }
    });
}


function isLogin(Ophone,Oemail,OuserName) {
    $.getJSON("/ajaxOperate.aspx?act=loadUserInfo&r=" + Math.random(), function (jsons) {
        if (jsons.stats == 1) {
            var phone = jsons.phone;
            var email = jsons.email;
            var userName = jsons.userName;
            if (Ophone != null) { Ophone.val(phone); }
            if (Oemail != null) { Oemail.val(email); }
            if (OuserName != null) { OuserName.val(userName); }
        } 
    });
}


/*发送短信*/
function sendToPhone(sms) {
    $('body').append("<div id='markdiv'></div>")
    if ($("#cend_phone").size() <= 0) {
        $('body').append("<div id='cend_phone'><h3><b>免费短信发送</b><a href='javascript:;' id='closesend'>关闭</a><div class='clear'></div></h3><p><b>手机号码：</b><input name='sendPhoto' type='text' /><span>请输入您要发送的手机号码</span></p><p><b>短信内容：</b><textarea disabled='disabled'></textarea></p><p><b>验证码：</b><input name='inpYZM' type='text' /><img id='vCodeImg' src='/ImgCode.aspx' width='80' height='30' style='margin-right:5px;' onclick=\"this.src='/ImgCode.aspx?t='+Math.random()*100\" /><a href='javascript:void(0)' onclick=\"document.getElementById('vCodeImg').src='/ImgCode.aspx?t='+Math.random()*100\">看不清楚？换一张</a></p><button name='sendMSMS'>发送</button></div>");
        $("#cend_phone p textarea").val(sms)
        isLogin($("#cend_phone input[name='sendPhoto']"),null,null);
        $("#cend_phone").css("left", ($(window).width() - 440) * 0.5 + 'px');
        $("#closesend").click(function () { $("#cend_phone").remove(); $("#markdiv").remove(); });
        $("#cend_phone button[name=sendMSMS]").click(function () {
            //手机号
            var txtPhone = $("#cend_phone input[name=sendPhoto]");
            var mobile = $.trim(txtPhone.val())
            var ismobi = /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile);

            if (!ismobi || isNaN(mobile) || mobile.length != 11) {
                changeShowtip("请输入正确的手机号码", txtPhone);
                return;
            }
            //验证码
            var txtYzm = $("#cend_phone input[name=inpYZM]");
            var yzm = txtYzm.val();
            if ($.trim(yzm) == "") {
                changeShowtip("验证码不能为空！", txtYzm);
                return;
            }

            //消息验证
            if (sms == "") {
                changeShowtip("消息不能为空！", $("#cend_phone p textarea"));
                return;
            }
            $.post('/ajaxOperate.aspx', { 'act': 'SendMSMS', 'code': yzm, 'phone': mobile, 'msms': sms }, function (res) {
                if (res.stats == 1) {
                    changeShowtip("发送成功！", $("#cend_phone button"));
                    $("#cend_phone button[name=sendMSMS]").prop("disabled", "disabled");
                    $("#cend_phone").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                    $("#markdiv").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                } else if (res.stats == 0) {
                    changeShowtip("验证码错误！", txtYzm);
                } else if (res.stats == 3) {
                    changeShowtip(res.result, $("#cend_phone button"));
                } else {
                    changeShowtip("发送失败,再试试", $("#cend_phone p textarea"));
                }
            }, 'json');
        });



        $("#cend_phone input[name=inpYZM]").keydown(function (e) {
            if (e.keyCode == 13) {
                $("#cend_phone button[name=sendMSMS]").trigger("click");
            }
        });




    }

}

/*改变提示框为fixed*/
function changeShowtip(mes, obj) {
    showtip(mes, obj.get(0), { top: 8 });
    $("#tipdiv").css('position', 'fixed');
}

/*免费电话*/
function freePhone(obj) {
    $('body').append("<div id='markdiv'></div>")
    $('body').append("<div class='phoneinput'><h1><b>免费通话系统</b><a id='pclose'></a></h1><div class='phonebox'><h2><img src='/images/QA.gif' width='82' height='82' /></h2><ul><li>固定电话请加区号</li><li>手机请直接输入</li><li>请不要拨打骚扰电话</li></ul><div id='inputph'><input name='' type='text' value='请输入您的电话号码'  /></div><button name='btnFreeCall'></button></div></div>")
    $(".phoneinput").show();
    isLogin($("#inputph input"),null,null);
    var pos = $(obj).offset();
    $(".phoneinput").css({ 'left': pos.left - 74 + 'px', 'top': pos.top + 60 + 'px' });
    $("#pclose").click(function () { $(".phoneinput").remove(); $("#markdiv").remove(); });
    $("#inputph input").click(function () { if ($(this).val() == '请输入您的电话号码') { $(this).val(''); } });
    $("#inputph input").blur(function () { if ($.trim($(this).val()) == '') { $(this).val('请输入您的电话号码'); } });

    $(".phoneinput button[name=btnFreeCall]").click(function () {
        var phone = $("#inputph input");
        var phone_value = phone.val();
        var ismobile = /^(\d{11})|((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/.test(phone_value);
        if (!ismobile) {
            changeShowtip('请输入有效的电话号码！', phone);
            return;
        }
        var thisObj = $(this);
        thisObj.prop("disabled", true);
        $(this).css({ "background": "url(../images/freephoneloading.gif) center center" })
        $.post("/ajaxOperate.aspx", { 'act': 'FreeCall', 'mobile': phone_value }, function (res) {
            if (res.stats == 1) {
                changeShowtip(res.result, phone);
                $("#markdiv").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                $(".phoneinput").delay(2000).fadeOut(1000, function () { $(this).remove(); });
            } else if (res.stats == 0) {
                changeShowtip(res.result, phone);
                thisObj.prop("disabled", false);

                thisObj.css({ "background": "url(/images/free_button.png) center center" })
            }
        }, 'json');
    });

    $("#inputph input").keypress(function (e) { if (e.keyCode == 13) { $(".phoneinput button[name=btnFreeCall]").trigger('click') } });
}

/*投诉建议*/
function showTousu() {
    $('body').append("<div id='markdiv'></div>")
    $('body').append("<div id='tousujy'><a href='javascript:;' id='closets'>关闭</a><div id='ts_input'><p><b>您的称呼：</b><input name='ch' type='text' /></p><p><b>您的邮箱：</b><input name='yx' type='text' /></p><p><b>您的电话：</b><input name='dh' type='text' /></p><p><b>投诉建议：</b><textarea name='jy' cols='' rows=''></textarea></p><button name='btnSubmit'>提交</button></div></div>")
    $("#closets").click(function () { $("#tousujy").remove(); $("#markdiv").remove(); });
    isLogin($("#tousujy input[name='dh']"), $("#tousujy input[name='yx']"), $("#tousujy input[name='ch']"));
    $("#tousujy").css("left", ($(window).width() - 520) * 0.5 + 'px');

    $("#tousujy button[name=btnSubmit]").click(function () {
        var ch = $("#tousujy input[name=ch]");   //称呼
        var ch_value = ch.val();
        if (ch_value == '' || ch_value.length < 2) {
            changeShowtip('称呼应大于2位！', ch);
            return;
        }

        var yx = $("#tousujy input[name=yx]");   //邮箱
        var yx_value = yx.val();
        if (yx_value.length < 2) { changeShowtip('请输入常用的邮箱！', yx); return false; }
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!reg.test(yx_value)) {
            changeShowtip('请输入正确的邮箱！', yx);
            return;
        };


        var dh = $("#tousujy input[name=dh]");   //电话
        var dh_value = dh.val();

        var ismobi = /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(dh_value);
        if (!ismobi || isNaN(dh_value) || dh_value.length != 11) {
            changeShowtip("请输入正确的手机号码", dh);
            return;
        }


        var jy = $("#tousujy textarea[name=jy]");   //建议内容
        var jy_value = strFilter1($.trim(jy.val()));
        if (jy_value == "") {
            changeShowtip("请输入投诉建议内容！", jy);
            return;
        }

        if (jy_value.length > 150) {
            changeShowtip("内容不能超过150字！", jy);
            return;
        }

        var thisObj = $(this);
        thisObj.prop("disabled", true);
        $.post('/ajaxOperate.aspx', { 'act': 'ComProposal', 'ch': ch_value, 'yx': yx_value, 'dh': dh_value, 'jy': jy_value }, function (res) {
            if (res.stats == 1) {
                changeShowtip('提交成功！', $("#tousujy button[name=btnSubmit]"));
                ch.val('');
                yx.val('');
                dh.val('');
                jy.val('');
                thisObj.prop("disabled", false);
                $("#markdiv").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                $("#tousujy").delay(2000).fadeOut(1000, function () { $(this).remove(); });
            } else if (res.stats == 3) {
                changeShowtip(res.result, $("#tousujy button[name=btnSubmit]"));
                thisObj.prop("disabled", false);
            } else {
                changeShowtip('保存失败！', $("#tousujy button[name=btnSubmit]"));
                thisObj.prop("disabled", false);
            }
        }, 'json');


    });

}

/*过滤*/
function strFilter1(suc) {
    var re = /\b(and|or|exec|execute|insert|select|delete|update|alter|create|drop|count|\*|chr|char|asc|mid|substring|master|truncate|declare|xp_cmdshell|restore|backup|net +user|net +localgroup +administrators)\b/;
    return suc.replace(re, '').replace(/</gi, "＜").replace(/>/gi, "＞");
}

/*降价通知*/
function jiangjia(obj) {
    $('body').append("<div id='markdiv'></div>")
    $('body').append("<div id='jiangjiatz'><h3><b>降价通知</b><a href='javascript:;' id='closejj'>关闭</a><div class='clear'></div></h3><div style='border:dashed 1px #ff5a00;margin:0 20px 10px;padding:10px;background:#fffcf1;'><h2 id='proname' style='font-weight:bold;font-size:14px;color:#0048a3;line-height:25px;'></h2><span style='line-height:18px;color:#666;'>当商品价格低于您设定的价格我们将通知您，通知短信最多发送一次，不会对您造成干扰。</span></div><p><b>现价：</b><strong style='color:#f00;font-size:16px;' id='jj_nowprice'>￥<em style='font-weight:bold'>0.00</em></strong></p><p><b>价格低于：</b><input name='price' type='text' style='width:80px;' id='diyujg' value='' /><span>元的时候通知我！</span></p><p><b>手机号码：</b><input name='photo' type='text' /><span><font style='color:#f00;font-weight:bold;'>*</font>手机号码方便我们以短信通知您！</span></p><p><b>邮箱：</b><input name='mail' type='text' /><span>你还可以通过邮件接收！</span></p><button id='jjfasong'>发送</button></div>")
    $("#jiangjiatz").css("left", ($(window).width() - 440) * 0.5 + 'px');
    isLogin($("#jiangjiatz input[name='photo']"), $("#jiangjiatz input[name='mail']"), null);
    $("#closejj").click(function () { $("#jiangjiatz").remove(); $("#markdiv").remove(); });
    var ppid = $(obj).prev("strong").find("input").val();
    var temPrice = $(obj).siblings("strong").find("big").html();
    var parent = $(obj).parents(".jg_39");
    var proname = parent.siblings("h2.d_h2").find("strong").html();

   /* var tempstr = "";
    $(".yanse").each(function (index) {
        if (index < 2) {
            tempstr += "&nbsp;&nbsp;" + $(this).find("a.yansecur").html();
        } 
    });

    var allproname = proname + tempstr;*/


    $("#jj_nowprice em").html(temPrice);
    $("#proname").html(proname);
    var isclick = 0;
    $("#jjfasong").click(function () {
        if (isclick == 1) {
            return;
        }
        /*点击发送按钮*/
        var price = $.trim($("#jiangjiatz input[name=price]").val());
        var photo = $("#jiangjiatz input[name=photo]").val();
        var jyj = $("#jiangjiatz input[name=mail]");
        var em = jyj.val();
        /*var yzm = $("#jiangjiatz input[name=yzm]").val();*/

        /*金额验证*/
        if ($.trim(price) == "") {
            changeShowtip("请输入金额！", $("#jiangjiatz input[name=price]"));
            return;
        }

        if (!(/^[1-9][0-9]{0,5}(\.[0-9]{0,2})?$/.test(price))) {
            /*showtip(, $("#jiangjiatz input[name=price]").get(0), { left: 20 });*/
            changeShowtip("请输入正确的金额！,金额不能超过六位数！", $("#jiangjiatz input[name=price]"));
            return;
        }
        /*电话与邮箱必须一个不为空*/
        if ($.trim(photo) == "" && $.trim(em) == "") {
            changeShowtip("手机与邮箱必须填写一个！", $("#jiangjiatz input[name=photo]"));
            return;
        }
        /*电话验证*/
        if ($.trim(photo) != "") {
            var ismobi = /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(photo);   /*手机号码验证*/
            if (!ismobi || isNaN(photo) || photo.length != 11) {
                changeShowtip("请输入正确的手机号码！", $("#jiangjiatz input[name=photo]"));
                return;
            }
        }
       /*邮箱验证*/
        if ($.trim(em) != "") {
            if (em.length < 2) { showtip("请输入您常用的邮箱", jyj.get(0), { top: 8 }); return false; }    /*邮箱验证*/
            var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (!reg.test(em)) {
                changeShowtip("请输入正确的邮箱！", jyj);
                return;
            };
        }
        //        //验证码验证
        //        if ($.trim(yzm) == "") {
        //            //showtip("验证码不能为空！", $("#jiangjiatz input[name=yzm]").get(0), { left: 20 });
        //            changeShowtip("验证码不能为空！", $("#jiangjiatz input[name=yzm]"));
        //            return;
        //        }

        var cliThis = $(this);
        cliThis.prop("disabled", true);
        isclick = 1;
        $.post("/ajaxOperate.aspx", { 'act': 'addSaleNotify', 'pid': window.PRODUCT.ID, 'ppid': ppid, 'price': price, 'photo': photo, 'em': em }, function (res) {
            if (res.stats == 1) {
                $("#jiangjiatz").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                $("#markdiv").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                /*showtip(res.result, cliThis.get(0), { left: 20 });*/
                changeShowtip(res.result, cliThis);
            } else {
               /*showtip(res.result, cliThis.get(0), { left: 20 });*/
                changeShowtip(res.result, cliThis);
                cliThis.prop("disabled", false);
                isclick = 0;
            }

        }, 'json');

    });


    $("#jiangjiatz input[name=mail]").keydown(function (e) {
        if (e.keyCode == 13) {
            $("#jjfasong").trigger("click");
        }
    });


}

//到货通知
function daohuotz(obj, ppid) {
    if (ppid == 0 || ppid == "") {
        return;
    }
    $('body').append("<div id='markdiv'></div>")
    $('body').append("<div id='jiangjiatz'><h3><b>到货通知</b><a href='javascript:;' id='closejj'>关闭</a><div class='clear'></div></h3><div style='border:dashed 1px #ff5a00;margin:0 10px 10px;padding:10px;background:#ffeae2;'><h2 id='proname' style='font-weight:bold;font-size:14px;color:#0048a3;line-height:25px;'></h2><span style='line-height:18px;color:#666;'>当商品到货时我们将通知您，通知短信最多发送一次，不会对您造成干扰。</span></div><p><b>手机号码：</b><input name='photo' type='text' /><span><font style='color:#f00;font-weight:bold;'>*</font>手机号码方便我们以短信通知您！</span></p><p><b>邮箱：</b><input name='mail' type='text' /><span>你还可以通过邮件接收！</span></p><button id='jjfasong'>发送</button></div>")
    $("#jiangjiatz").css("left", ($(window).width() - 440) * 0.5 + 'px');
    isLogin($("#jiangjiatz input[name='photo']"), $("#jiangjiatz input[name='mail']"), null);
    $("#closejj").click(function () { $("#jiangjiatz").remove(); $("#markdiv").remove(); });

    var parent = $(obj).parents(".kucun");
    var proname = parent.siblings("h2.d_h2").find("strong").html();

   /* var tempstr = "";
    $(".yanse").each(function (index) {
        if (index < 2) {
            tempstr += "&nbsp;&nbsp;" + $(this).find("a.yansecur").html();
        } 
    });

    var allproname = proname + tempstr;*/
   /*var allproname = proname + "&nbsp;&nbsp;" + color + "&nbsp;&nbsp;" + taocan;
*/
    $("#proname").html(proname);

    var isclick = 0;
    $("#jjfasong").click(function () {
        if (isclick == 1) {
            return;
        }
        var cliThis = $(this);
        var objphoto = $("input[name=photo]");
        var objmail = $("input[name=mail]");

        var photo = $.trim(objphoto.val());
        var em = $.trim(objmail.val());
       /*alert(photo + "--" + mail);
*/

       /*电话验证
*/
        if (photo == "") {
            changeShowtip("请输入您的手机号码！", objphoto);
            return;
        }

        var ismobi = /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(photo);   /*手机号码验证
*/
        if (!ismobi || isNaN(photo) || photo.length != 11) {
            changeShowtip("请输入正确的手机号码！", objphoto);
            return;
        }

       /*邮箱验证
*/
        if ($.trim(em) == "") {
            changeShowtip("请输入您的邮箱！", objmail);
            return;
        }

        if (em.length < 2) { showtip("请输入您常用的邮箱", jyj.get(0), { top: 8 }); return false; }    /*邮箱验证
*/
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!reg.test(em)) {
            changeShowtip("请输入正确的邮箱！", objmail);
            return;
        };
        cliThis.prop("disabled", true);
        isclick = 1;
       /*alert(ppid);
*/

        $.post("/ajaxOperate.aspx", { 'act': 'daohuoNotify', 'ppid': ppid, 'photo': photo, 'em': em }, function (res) {
            if (res.stats == 1) {
                $("#jiangjiatz").delay(2000).fadeOut(1000, function () { $(this).remove(); });
                $("#markdiv").delay(2000).fadeOut(1000, function () { $(this).remove(); });
               /*showtip(res.result, cliThis.get(0), { left: 20 });
*/
                changeShowtip(res.result, cliThis);
            } else {
               /*showtip(res.result, cliThis.get(0), { left: 20 });
*/
                changeShowtip(res.result, cliThis);
                cliThis.prop("disabled", false);
                isclick = 0;
            }

        }, 'json');

         

    });

    $("#jiangjiatz input[name=mail],#jiangjiatz input[name=photo]").keydown(function (e) {
        if (e.keyCode == 13) {
            $("#jjfasong").trigger("click");
        }
    });


 }

 $(function () {
     $("img.lazy").lazyload({
         effect: "fadeIn",
         skip_invisible: false,
         threshold: 200
     });
 });

/*m站设置cookie
*/
 if (GetQueryString("pcsite") == "1") {
     Cookie.Set("pcsite", "1", 0);
 }

