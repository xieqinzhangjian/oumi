G.footer={DOMAIN:/51buy\.com/.test(location.host)?"51buy.com":"#",VISIT_INFO_KEY:"vinfo",_visMap:["lastVisit"],_performance:!1,common:{checkNumber:function(a){return/^[1-9]\d*$/.test(a)},getLoginUid:function(){var a=G.footer.common.getCookie("uid");return G.footer.common.checkNumber(a)?a:!1},parseUrl:function(){var a=function(a){a=(a+"").replace(/(&amp;|\?)/g,"&").split("&");for(var b={},e=a.length,f=0;f<e;f++){var h=a[f].indexOf("=");-1!=h&&(b[a[f].substr(0,h).replace(/[^a-zA-Z0-9_]/g,"")]=
unescape(a[f].substr(h+1)))}return b},b=location.href.toString().indexOf("#"),b=0>b?"":location.href.toString().substring(b,location.href.toString().length);return{search:a(location.search.substr(1)),hash:a(b)}},getCookie:function(a){return(a=document.cookie.match(RegExp("(^| )"+a+"(?:=([^;]*))?(;|$)")))?a[2]?unescape(a[2]):"":""},addCookie:function(a,b,c,d,e){a=a+"="+escape(b)+"; path="+(c||"/")+(e?"; domain="+e:"");0<d&&(b=new Date,b.setTime(b.getTime()+1E3*d),a+=";expires="+b.toGMTString());document.cookie=
a},delCookie:function(a,b){document.cookie=a+"=;path=/;"+(b?"domain="+b+";":"")+"expires="+(new Date(0)).toGMTString()}},hideAreas:function(){0<location.href.indexOf("buy."+G.footer.DOMAIN)&&$("#j_market").hide()},locStrongCheck:function(){G.header&&$.isFunction(G.header.common.loc.strongCheck)&&G.header.common.loc.strongCheck();$(window).bind("load",function(){setTimeout(function(){if(locLog){for(var a="http://c.isdspeed.qq.com/code.cgi?domain=base.#&key=cgi,type,code,time,rate",b,c,d,e,
f,h=1,g=0;3>g;g++){c=d={type:2,code:0};if(b=locLog[g])(e=b.wsid)&&"0"!=e&&(d={type:1,code:e}),(f=b.loc)&&(f=f.split("_")[0])&&"0"!=f&&(c={type:1,code:f});a+="&"+h+"_1=locstage_"+(g+1);a+="&"+h+"_2="+c.type;a+="&"+h+"_3="+c.code;a+="&"+h+"_4=0";a+="&"+h++ +"_5=1";a+="&"+h+"_1=wsidstage_"+(g+1);a+="&"+h+"_2="+d.type;a+="&"+h+"_3="+d.code;a+="&"+h+"_4=0";a+="&"+h++ +"_5=1"}(new Image).src=a}},3E3)})},initBakTop:function(){var a=$("#j_backtop");if(0<a.length){var b=document.documentElement.clientHeight||
document.body.clientHeight,c=Math.min(b,500);$(window).bind("scroll resize",function(){var d=$(this).scrollTop();d<c?a.fadeOut():a.fadeIn();$.browser.msie&&("6.0"==$.browser.version&&!$.support.style)&&a.css({top:b-200+d})});a.click(function(){ 
$(window).scrollTop(0);return!1})}},showVerify:function(){(G.footer.common.getCookie("loc")||"").split("_");var a="https://ss.knet.cn/verifyseal.dll?sn=e13082944030042202gegd000000&ct=df&a=1&pa="+Math.random().toFixed(6).slice(2,8);$("#j_kx_verify").attr("href",
a)},fresherTip:function(){var a=window.location.href;-1<a.indexOf("base")||(-1<a.indexOf("event")||-1<a.indexOf("act")||-1<a.indexOf("tuan")||-1<a.indexOf("buy.yixun"))||G.header.login.getLoginUser(function(a){var c=G.footer.common.getCookie("fresherTipFlag")||0;if(a&&a.data&&0>=a.data.exp_point&&!c){G.footer.common.addCookie("fresherTipFlag",1,"/",31536E3,"."+G.footer.DOMAIN);var d=$("#j_fresher");d.css({top:200}).fadeIn().removeClass("hide");var e=$("#J_subEDM");e.click(function(){e.checked=e.checked?
!1:!0});$("#j_fresher_close").click(function(){d.fadeOut();(isSubEDM=e.is(":checked"))&&$.ajax({url:"http://my.paipai.com/cgi-bin/mailbook_setbook?option=1&bookitem=200",dataType:"jsonp",cache:!1,jsonpCallback:"ModifySaleMailInfo_CallBack",success:function(a){return!0}});return!1})}})},adjustToQplus:function(){""!=G.footer.common.getCookie("qplus_nick")&&(document.body.className="",document.body.style.overflowX="hidden")},pvReport:function(){(location.host=="search."+G.footer.DOMAIN||location.host==
"searchex."+G.footer.DOMAIN)&&YX.Search.ECCPVreport();var a={p:"51buy.com"};G.footer.common.getCookie("wsid")&&(a.userId=G.footer.common.getCookie("uid"),a.webId=G.footer.common.getCookie("wsid"),a.yx_uin=G.footer.common.getCookie("yx_uin"),a.yx_uid=G.footer.common.getCookie("yx_uid"),a.buy_uin=G.footer.common.getCookie("buy_uin"));"undefined"!=typeof yPageId&&"undefined"!=typeof yPageLevel&&(a.pageid=yPageId,a.plevel=yPageLevel);if("undefined"!=typeof locLog)for(var b=0,c=locLog.length;b<c;b++)a["prid_"+
b]=locLog[b].prid||0,a["wsid_"+b]=locLog[b].wsid||0,a["loc_"+b]=locLog[b].loc||0;"undefined"!=typeof locIsDefault&&(a.isDefLoc=locIsDefault);$(window).bind("load",function(){var b="category_id price bt_state supply_stock_id haveMP havedigestreview havereview have_wpa nonsense cooper_name new_cooper_id product_sale_model".split(" "),c;if("undefined"!=typeof itemInfo){a.productId=itemInfo.pid;a.bigCid=itemInfo.c1ids;a.midCid=itemInfo.c2ids;a.smallCid=itemInfo.c3ids;for(var f=0,h=b.length;f<h;f++)c=
b[f],a[c]=itemInfo[c];if(b=itemInfo.review_data)a.review_score=b.review_score,a.total_review=b.total_review}ECC.cloud.report.pv(a)})},clickReport:function(){ 
$("body").mousedown(function(a){if(0==a.button||1==a.button){for(var b=G.footer.getTarget(a),c="",d=a="",e="",f="",h="";b&&"BODY"!=b.tagName&&"HTML"!=b.tagName;){if(!("TBODY"==b.tagName||"THEAD"==b.tagName))if(d=b.name||"",b.getAttribute&&(!a&&(a=b.getAttribute("ytag")||b.ytag||""),!e&&(e=b.getAttribute("policy")||b.policy||""),!f&&(f=b.getAttribute("stuff")||
b.stuff||""),!h&&(h=b.getAttribute("material")||b.material||""),!c&&(c=b.getAttribute("tourl")||b.tourl||"")),"A"==b.tagName){!c&&(c=b.href);var g=c.toLowerCase().match(/ytag(=|,|%3d)(\d+)/);!a&&g&&(a=g[2])}b=b.parentNode}c=b="";"undefined"!=typeof yPageLevel&&(b=yPageLevel);"undefined"!=typeof yPageId&&(c=yPageId);g={p:"51buy.com"};a&&(g.ytag=b+"."+c+a);d&&(g.id=d);e&&(g.policy=e);f&&(g.stuff=f);h&&(g.material=h);G.footer.common.getCookie("wsid")&&(g.userId=G.footer.common.getCookie("uid"),g.webId=
G.footer.common.getCookie("wsid"),g.yx_uin=G.footer.common.getCookie("yx_uin"),g.yx_uid=G.footer.common.getCookie("yx_uid"),g.buy_uin=G.footer.common.getCookie("buy_uin"));"undefined"!=typeof yPageId&&"undefined"!=typeof yPageLevel&&(g.pageid=yPageId,g.plevel=yPageLevel);ECC.cloud.report.trace(g)}})},getVisitInfo:function(){var a=G.footer,b=G.footer.common.getCookie(a.VISIT_INFO_KEY),c={},b=b.split(",");$.each(a._visMap,function(a,e){c[e]=b[a]||""});return c},setVisitInfo:function(a,b){var c=G.footer,
d=c.getVisitInfo(),e={},f=[];2>arguments.length?e=a:e[a]=b;d=$.extend(d,a);$.each(c._visMap,function(a,b){f[a]=d[b]||""});G.footer.common.addCookie(c.VISIT_INFO_KEY,f.join(","),"/",31536E3,"."+G.footer.DOMAIN)},getPerformanceTiming:function(){var a=G.footer;if(!1===a._performance){var b=window.performance;if(!b||!b.timing)return[];for(var c="navigationStart unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
d=[],e=c.length-1;1<=e;e--)d[e]=b.timing[c[e]]-b.timing[c[0]];a._performance=d}return a._performance},timeStat:function(){return function(a,b,c,d){a=function(a,b,c,d){return function(){if(!("array"==$.type(a)&&0==a.length||$.isEmptyObject(a))){var k=["flag1=1470","flag2="+b,"flag3="+c],m=new Image;$.each(a,function(a,b){0!=a&&k.push(a+"="+(0>=b?0:b))});d=d||{};for(var l in d)k.push(l+"="+d[l]);m.src="http://isdspeed.qq.com/cgi-bin/r.cgi?"+k.join("&")}}}(a,b,c,d);setTimeout(a,2E3)}}(),reportPerformance:function(a,
b,c){var d=window.onload;window.onload=function(){ 
$.isFunction(d)&&d.apply(window);d=null;setTimeout(function(){G.footer.timeStat(G.footer.getPerformanceTiming(),a,b,c)},2E3)}},reportItemPicLoad:function(a,b){var c=(new Date).getTime()-a,d="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=1470&flag2=50&flag3="+(b?9:10)+"&1="+c;setTimeout(function(){(new Image).src=d},2E3)},getTarget:function(a,b,c){a=window.event||a;a=a.srcElement||a.target;if(b&&c&&a.nodeName.toLowerCase()!=c)for(;a=a.parentNode;){if(a==
b||a==document.body||a==document)return null;if(a.nodeName.toLowerCase()==c)break}return a},setVisitKey:function(a){ 
$.ajax({url:"http://service.paipai.com/cgi-bin/ping",dataType:"jsonp",jsonpCallback:"getPingDataCallBack",type:"get",cache:!1,success:function(b){G.footer.common.addCookie("visitkey",b.visitkey,"/",parseInt((new Date(2099,11,31)-new Date)/36E5),"."+G.footer.DOMAIN);a()}})},ping:function(a,b){var c=G.footer.getVisitInfo(),d=Math.round((new Date).getTime()/1E3);if(300<=d-(c.lastVisit||
0)&&G.footer.common.getLoginUid())(new Image).src="http://isdspeed.qq.com/cgi-bin/v.cgi?flag1=320001&flag2=1&flag3=600&1=1&2=0",c.lastVisit=d,G.footer.setVisitInfo(c);$(document).ready(function(){if(!b){var a=location.host.replace(/\.51buy\.com/,""),b=location.pathname;if("/index.php"==location.pathname||"/json.php"==location.pathname){var c=G.footer.common.parseUrl();c.search.mod&&(b=location.pathname.substr(0,location.pathname.length-4)+"_"+c.search.mod+"_"+(c.search.act||"page"))}}var d=G.footer.common.getCookie("wsid"),
b="/_site_"+d+"/"+a+b;$.ajax({url:"http://st.icson.com/static_v1/js/app/ping.js?v=1.7",dataType:"script",type:"get",cache:!0,success:function(){G.app.ping&&($("body").bind("mousedown",function(a){G.app.ping.stat&&G.app.ping.statClick(a&&a.target,{pageid:window.yPageId||0,plevel:window.yPageLevel||0})}),setTimeout(function(){G.app.ping.stat({pageid:window.yPageId||0,plevel:window.yPageLevel||0})},100))}});$.ajax({url:"http://pingjs.qq.com/tcss.ping.js",dataType:"script",type:"get",cache:!0,success:function(){pgvMain({repeatApplay:"true",
virtualDomain:"51buy.qq.com",virtualURL:"51buy.qq.com/site_"+d+".html"});window.pp_req_url=document.URL.replace(/^http:\/\/([^\/]+)(\/|$)/,"http://$1/_site_"+d+"/");"function"==typeof pgvMain&&setTimeout(function(){ 
$(document).click(function(a){if((a=a&&a.target)&&-1!=="a,img,button,input,textarea,select".indexOf(a.nodeName.toString().toLowerCase())&&$.isFunction(window.pgvSendClick))for(;a&&"BODY"!==a.nodeName.toString();){var c=$(a).attr("hotName")||$(a).attr("hotname");c&&(c+="",pgvSendClick({virtualDomain:"icson.qq.com",
virtualURL:b,hottag:c.replace(/^(I\.)?(.*)$/i,function(a,b,c){return d+"."+c})}),pgvSendClick({virtualDomain:"icson_"+d+".qq.com",virtualURL:b,hottag:c.replace(/^(I\.)?(.*)$/i,function(a,b,c){return d+"."+c})}));a=a.parentNode}})},1)}});/clickstream=false/.test(window.location.href)?G.footer.common.delCookie("clickstream","."+G.footer.DOMAIN):/clickstream=true/.test(window.location.href)&&G.footer.common.addCookie("clickstream","true","/",1800,"."+G.footer.DOMAIN);("true"==G.footer.common.getCookie("clickstream")||
window.sessionStorage&&"true"==window.sessionStorage.getItem("clickstream"))&&$.ajax({url:"http://st.icson.com/static_v1/statistic/js/stat.ui.js?v=1.3",dataType:"script",crossDomain:!0,cache:!0,scriptCharset:"utf-8",success:function(){}});/mediav_id/.test(window.location.href)&&(a=window.location.href.split("mediav_id"),2<=a.length&&(c=Math.round((new Date).getTime()/1E3),a=a[1].split("&")[0].split("=")[1]+"|"+c,G.footer.common.addCookie("mediav_data",a,"/",604800,"."+G.footer.DOMAIN)));/gsadid/.test(window.location.href)&&
(a=window.location.href.split("gsadid"),2<=a.length&&(c=Math.round((new Date).getTime()/1E3),a=a[1].split("&")[0].split("=")[1]+"|"+c,G.footer.common.addCookie("gsadid_data",a,"/",604800,"."+G.footer.DOMAIN)))})},init:function(a,b){this.fresherTip();this.adjustToQplus();this.hideAreas();$(document).ready(function(){var a=G.footer.common.getCookie("visitkey")||"";!a||4294967295>parseInt(a,10)?G.footer.setVisitKey(G.footer.pvReport):G.footer.pvReport();$.ajax({url:"http://tajs.qq.com/gdt.php?sId=26651287",
dataType:"script",scriptCharset:"utf-8",cache:!0})});this.clickReport();this.ping(a,b);this.showVerify();this.locStrongCheck()}};G.util.ping=G.util.ping||{};$.extend(G.util.ping,{init:function(){return!0},timeStat:G.footer.timeStat,reportPerformance:G.footer.reportPerformance,reportItemPicLoad:G.footer.reportItemPicLoad});G.footer.init();
/*  |xGv00|c60d09da793c216bec4d39717ae98c24 */