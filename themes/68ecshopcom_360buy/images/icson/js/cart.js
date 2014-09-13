(function(win) {
    
    var lockProduct = null; // 被锁定的商品
    var lockProductCount = -1;// 锁定次数
    var lockProductTimer = 0;// 锁定时间 单位ms
    var oLock = -1; // 定时器对象
    var locked = false;
    var count = 0;
    
    var CartBanner = {
        isLocked: function(_param){
            var lockFlag =  _param.pid || _param.pkgid || _param.ids;
            if(lockProduct != lockFlag){
                this.unlock();
                return false;
            }
            return count == lockProductCount;
        },
        dolock: function(lock){
            //记下被锁定的商品
            var lockFlag =  this.param.pid || this.param.pkgid || this.param.ids;
            if(lockProduct != lockFlag){
                this.unlock();
                lockProduct = lockFlag;
                lockProductCount = lock.count||1;
                lockProductTimer = lock.timer||1000;
                clearTimeout(oLock);
                var self = this;
                oLock = setTimeout(function(){
                    self.unlock();
                }, lockProductTimer);
                count++;
            }else if(count < lockProductCount){
                count++;
            }
        },
        unlock: function(){
            count = 0;
            lockProduct = null;
        },
        loading: function (_target, _param){
            var tempParam = _param;
            if(tempParam.ids){
                var ids = _param.ids.split(',')[0];
                var mainPrdt = ids.split('|');
                tempParam.pid = mainPrdt[0];
                tempParam.mid = mainPrdt.length > 3?mainPrdt[2]:0;
            }else if(tempParam.pkgpids){
                tempParam.pid = tempParam.pkgpids.split('@')[0];
                tempParam.mid = 0;
            }
            if($(_target).attr("data-loading") || this.isLocked(_param)){
                return false;
            }else{
                $(_target).attr("data-loading","true");
            }
            if(this.wrapper){
                this.close();
            }
            
            var t = $(_target).offset().top; 
            var x = $(_target).offset().left;
            var y = t+$(_target).height()+8;
            var w = $(window).width();
            var h = $(window).height();
            
            if(x+470 > w && x > 470){
                x = x+$(_target).width()-180;//靠右
                this.resetX = x; //记下有重定位过
            }
            
            var stop = $(window).scrollTop();
            // 当前位置加上浮层高度会超出屏幕下方 并且需要点击位置在半屏以下时才把浮层放在上面
            if(t + 367 > stop+h && h/2 < t - stop){
                this.resetY = y = y-($(_target).height()+8)-8-50;
            }
            
            var loadingHtml = '<div class="mod_carttip mod_carttip4" style="position:absolute;top:'+y+'px;left:'+x+'px;z-index:29;display:none;">'
                              +'<div class="mod_carttip_inner"><div class="mod_carttip_bd clearfix">'
                              +'<div class="mod_carttip_ico mod_carttip_loading"><img src="http://static.gtimg.com/icson/img/common/loading.gif" alt="正在添加..."></div>'
                              +'<div class="mod_carttip_con"><p>努力添加中，请稍候</p></div></div></div>'
                              +'<i class="mod_carttip_arr '+(this.resetX?(this.resetY?"mod_carttip_arr3a":"mod_carttip_arr1a"):(this.resetY?"mod_carttip_arr3":"mod_carttip_arr1"))+'">&nbsp;</i><a ytag="71001" class="mod_carttip_close" style="display:none;" href="javascript:void(0)" title="关闭">&times;</a></div>'; 
            
            this.wrapper = $(loadingHtml).appendTo($("body"));
            this.param = _param?_param:{};
            this.target = _target;
            this.param.recommend = (_param.recommend === "false" || _param.recommend === false)?false:true;
            
            var lock = this.param.lock;
            if(lock){
                this.dolock(lock);
            }else{
                this.dolock({count:1,timer:1000}); //默认1s1次
            }
            
            if(this.param.recommend){
                this.getBIData();
            }
            
            var self = this;
            setTimeout(function(){
                $(self.wrapper).show();
            },100);
            
            var resizeFn = function(){
                if(self.wrapper){
                    self.close();
                }
            };
            $(window).bind("resize", resizeFn);
            
            var clickFn = function(event){
                var jCartTip = $(event.target).closest(".mod_carttip");
                //点击地方不在浮层上且浮层不在loading状态 
                if(jCartTip.length == 0 && self.wrapper && !self.wrapper.hasClass("mod_carttip4")){
                    self.close();
                }
                
            };
            $(window).bind("click", clickFn);
            
            var closeFn = this.param.onClose || function(){};
            this.param.onClose = function(arg){
                $(window).unbind("click", clickFn).unbind("resize", resizeFn);
                clickFn = null;
                resizeFn = null;
                $(self.target).removeAttr("data-loading");
                closeFn(arg);
            }
            
            $(".mod_carttip_close", this.wrapper).unbind("click").bind("click", function(e){
                self.close();
                e.preventDefault();
            });
            if(this.param.onLoading)this.param.onLoading(this.wrapper.get(0));
            var onComplete = this.param.onComplete || function(){};
            this.param.onComplete = function(){
                $(self.target).removeAttr("data-loading");
                onComplete();
            };
            return true;
        },
        success: function(_msg, isPartSuc){
            
            if(!this.wrapper) return;
            
            var suc_html = '<div class="mod_carttip_ico"><i class="mod_carttip_ico_success"></i></div>'
                            +'<div class="mod_carttip_con">'
                            +'<h4>'+(isPartSuc?"部分商品":"")+'添加成功!</h4>'+(_msg?'<span style="font-size:12px;">'+_msg+'</span>':'')
                            +'<div class="mod_carttip_action">'
                            +'<a ytag="71002" href="http://buy./showcart.html" target="_blank" class="mod_carttip_btn mod_carttip_btn_bg2 mod_carttip_btn1" onclick="$(\'.mod_carttip_close\').click()"><span>去结算</span></a>'
                            +'<a ytag="71003" href="javascript:void(0)" onclick="$(\'.mod_carttip_close\').click()" class="mod_carttip_btn mod_carttip_btn_bg1 mod_carttip_btn2" style="margin-left: 5px;">继续购物</a>'
                            +'</div></div>';
        
            //添加成功后等待BI数据1s
            if(this.biHtml){
                this.wrapper.attr("class","mod_carttip mod_carttip2").find(".mod_carttip_bd").html(suc_html);
                this.wrapper.find(".mod_carttip_close").show();
                if(this.resetX){
                    this.wrapper.css("left",(this.resetX-(470-180))+"px");//.find(".mod_carttip_arr").css("left",(470-45)+"px");
                }
            }
            
            var self = this;
            var parseSuc = function(){
                if(!self.wrapper) return;
                if(self.biHtml){
                    self.wrapper.attr("class","mod_carttip mod_carttip1").find(".mod_carttip_bd").html(suc_html);
                    self.wrapper.find(".mod_carttip_inner").append(self.biHtml);
                    self.wrapper.find(".mod_carttip_close").show();
                    if(self.resetX){
                        self.wrapper.css("left",(self.resetX-(470-180))+"px");//.find(".mod_carttip_arr").css("left",(470-45)+"px");
                    }
                    
                    if(self.resetY){
                        self.wrapper.css("top",self.resetY-self.wrapper.height()+50+"px");
                    }
                    
                    self.biHtml = null;
                }else{
                    self.wrapper.attr("class","mod_carttip mod_carttip2").find(".mod_carttip_bd").html(suc_html);
                    self.wrapper.find(".mod_carttip_close").show();
                    if(self.resetX){
                        self.wrapper.css("left",(self.resetX-(300-180))+"px");//.find(".mod_carttip_arr").css("left",(300-45)+"px");
                    }
                    if(self.resetY){
                        self.wrapper.css("top",self.resetY-self.wrapper.height()+50+"px");
                    }
                }
                
                if(self.param.onComplete)self.param.onComplete(self.wrapper.get(0));
            }
            
            if(this.param.recommend && !this.biHtml){
                var timer = 0;
                self.biTimer = setInterval(function(){
                    if(timer > 200 || self.biHtml){
                        clearInterval(self.biTimer);
                        parseSuc();
                        self.biTimer = null;
                        timer = null;
                    }
                    timer += 20;
                }, 20);
            }else{
                parseSuc();
            }
            
            if(this.param.onSuccess)this.param.onSuccess(this.wrapper.get(0));
            try{
                if(G.header && G.header.cart)setTimeout(G.header.cart.getShoppingCart,0);
            }catch(e){}
        },
        error: function(_msg){
            if(!this.wrapper) return;
            var error_html = '<div class="mod_carttip_ico"><i class="mod_carttip_ico_error"></i></div>'
                                +'<div class="mod_carttip_con">'
                                +'<h4>添加失败!</h4><p>'+_msg+'</p>'
                                +'</div>';
            
            this.wrapper.attr("class","mod_carttip mod_carttip3").find(".mod_carttip_bd").html(error_html);
            this.wrapper.find(".mod_carttip_close").show();
            // 如果是靠右浮层重定位 上方的箭头需要居右
            if(this.resetX){
                this.wrapper.css("left",(this.resetX-(370-180))+"px");//.find(".mod_carttip_arr").css("left",(370-45)+"px");
            }
            if(this.resetY){
                this.wrapper.css("top",this.resetY-this.wrapper.height()+50+"px");
            }
            
            if(this.param.onError)this.param.onError(this.wrapper.get(0));
            if(this.param.onComplete)this.param.onComplete(this.wrapper.get(0));
            
            this.report(1);
        },
        close: function(){
            this.wrapper.remove();
            if(this.param.onClose)this.param.onClose();
            this.wrapper = null;
            this.resetX = null;
            this.resetY = null;
            this.param = null;
            this.target = null;
            if(this.biTimer){
                clearInterval(this.biTimer);
            }
            return false;
        },
        /** 
         * js截取字符串，中英文都能用 
         * @param str：需要截取的字符串 
         * @param len: 需要截取的长度 
         */  
        cutstr: function(str,len){
            var str_length = 0;  
            var str_len = 0;  
            str_cut = new String();  
            str_len = str.length;  
            for(var i = 0; i < str_len; i++)  
            {  
                a = str.charAt(i);  
                str_length++;  
                if(escape(a).length > 4)  
                {  
                    //中文字符的长度经编码之后大于4  
                    str_length++;  
                }  
                str_cut = str_cut.concat(a);  
                if(str_length>=len)  
                {  
                    //str_cut = str_cut.concat("...");  
                    return str_cut;  
                }  
            }  
            //如果给定字符串小于指定长度，则返回源字符串；  
            if(str_length < len){  
                return  str;  
            }  
        },
        getBIData: function(){
            // 拉取BI数据
            /*0:4046-521667:398,3001
              4046的易迅区id，2626是上海 prid
              521667是商品id
              398是类目id
              3001是仓id   wsid 上海仓
             */
            var wsid = G.util.cookie.get("wsid"),
                prid = G.util.cookie.get("prid"),
                pid = this.param.pid,
                mid = this.param.mid;
                wsid = wsid == ""?"":wsid;
                prid = prid == ""?"2626":prid.substr(0, prid.indexOf("_"));
            
            var self = this,
                biReserved = "0:"+ prid+"-"+(pid?pid:0)+":"+(mid?mid:0); 
            self.biHtml = null;
            //请求开始时间
            var bTime = (new Date()).getTime();
            $.ajax({
                url: "http://s7.smart./w/tf/gettfx?tfid=100005&type=jsonp&biReserved="+biReserved,
                dataType: "jsonp",
                cache: true,
                report:{
                    key: "iRet",
                    url: "http://s7.smart./w/tf/gettfx?tfid=100005",
                    formatUrl: false
                },
                success: function(_json){
                    var eTime = (new Date()).getTime();
                    if(_json && _json.iRet == 0){
                        var data = _json.data?_json.data.POS_BUY:[];
                        var length = data.length?data.length:0;
                        if(length > 0){ //至少4个 后台有保证
                            var shtml = ['<div class="mod_carttip_ext"><div class="mod_carttip_promo mod_carttip_promo1">买过该商品的用户还买了</div><div class="mod_carttip_recom"><ul class="mod_carttip_glist clearfix">'];
                            var temp = null;
                            
                            for(var i = 0;i < length&&i<4;i++){
                                temp = data[i];
                                shtml.push('<li title="'+temp.TITLE+'"><div class="mod_carttip_gitem">');
                                shtml.push('<div class="mod_carttip_gpic"><a href="'+temp.URL+'" target="_blank" ytag="'+(71020+i)+'"><img src="'+temp.IMG+'" alt="'+temp.TITLE+'"/></a></div>');
                                var nameStr = temp.TITLE;
                                if($.browser.msie && $.browser.version == 6.0){
                                    nameStr = self.cutstr(nameStr, 32);
                                }
                                shtml.push('<div class="mod_carttip_gtit"><a href="'+temp.URL+'" target="_blank" ytag="'+(71050+i)+'" title="'+temp.TITLE+'">'+nameStr+'</a></div>');
                                shtml.push('<div class="mod_carttip_gprice mod_carttip_gprice2">易迅价<span>&yen;'+temp.PRICE+'</span></div>');
                                shtml.push('</div></li>');
                            }
                            shtml.push("</div></div></ul>");
                            //self.wrapper.attr("class","mod_carttip mod_carttip1").find(".mod_carttip_inner").append(shtml.join(""));
                            //if(self.resetX){
                            //    self.wrapper.css("left",(self.resetX-(470-180))+"px").find(".mod_carttip_arr").css("left",(470-45)+"px");
                            //}
                            self.biHtml = shtml.join("");
                            self.report(3);
                        }else{
                           self.report(2); 
                        }
                    }else{
                        self.report(2);
                    }
                    Cart.reportCgi("3="+(eTime-bTime));
                },
                error: function(){
                    //setTimeout(function(){
                    //    self.close();
                    //}, 3000);
                    this.report(2);
                }
            });
        },
        report: function(_reportcode){
            if(!this.wrapper) return;
            var img = new Image();
            var uid = G.util.cookie.get("uin"); //当前强登录态的易迅用户UID
            var guid = G.util.cookie.get("y_guid"); 
            var wsid = G.util.cookie.get("wsid"); 
            var pid = this.param.pid; 
            var ext = "pnum:"+ this.param.pnum+"|errcode:"+_reportcode+"|"+wsid;
            var area = G.util.cookie.get("areasInfo");
            var vk = G.util.cookie.get("visitkey");
            
            img.src = "http://stat.51buy.com/stat.fcg?type=1&uid="+uid+"&pageid="+window.yPageId+"&plevel=3&url="+encodeURIComponent(location.href)+"&guid="+guid+"&whid=1971&pid="+pid+"&ext="+ext+"&area="+area+"&vk="+vk;
        }
    };
    
    var Cart = {
        //NORMAL_CART_KEY : 'shoppingcart',
        TYPE_PDT : 0, //商品
        TYPE_PKG : 1, //套餐
        showTopWarning : function(str, level, isPartSuc) {
            var str = typeof str == "string" ? str : str.join("");
            if(level == 0){
                CartBanner.success(str, isPartSuc);
            }else{
                CartBanner.error(str+"(错误码:"+level+")");
            }
            
            if(level == 19743){ // 区分无库存的场景
                var bu = location.host.replace(".","");
                switch(bu){
                    case "item":
                        level = 1974301;
                        break;
                    case "searchex":
                        level = 1974302;
                        break;
                    case "jiadian":
                        level = 1974303;
                        break;
                    case "sale":
                        level = 1974304;
                        break;
                    case "event":
                        level = 1974305;
                        break;
                }
            }
            
            var time = (new Date()).getTime() - this.startTime;
            (new Image).src = "http://c.isdspeed.qq.com/code.cgi?domain=cart.buy.&cgi="+encodeURIComponent("http://cart.buy./addcart")+"&type="+(level==0?1:2)+"&code="+level+"&time="+time+"&rate=1";
        },

        //点击流计算
        getYTrack : function() {
            return G.util.cookie.get("y_track") || "";
        },

        /**
         * 添加单个商品到购物车
         * @param int pid 商品id
         * @param int pnum 商品数量
         * @param int mid 主商品id
         * @param int price_id 价格id
         * @param object clickBtn
         */
        addToCart : function(pid, pnum, mid, price_id, chid, repair, pkgpids, type) {
            var self = Cart, y_track = Cart.getYTrack();
            //添加订单来源
            type = type || self.TYPE_PDT;
            chid = ( typeof chid != 'undefined') ? chid.toString() : "0";
            self.addToCartMulti([{
                pid : pid,
                pnum : pnum,
                main_product_id : mid || 0,
                price_id : price_id || 0,
                y_track : y_track || '',
                type : type,
                chid : chid,
                repair : repair || 0,
                pkgpids : pkgpids || 0
            }]);
        },

        /**
         * 编码投递到后台的“商品信息”成字符串
         * format = 0 || NULL 为字符串，兼容老格式。
         * format = 1 为JSON字符串格式
         */
        _encodeMultiCartStr : function(productParam, format) {
            var self = Cart, tmp = [];
            $.each(productParam || [], function(k, v) {
                if(v && v.pid) {
                    tmp.push(v);
                }
            });
            tmp.sort(function(a, b) {
                return a.time == b.time ? 0 : (a.time > b.time ? -1 : 1);
            });

            var ids = [];
            $.each(tmp || [], function(k, v) {
                v.chid = ( typeof v.chid != 'undefined') ? v.chid.toString() : "0";
                if(v.pid) {
                    if(format) {
                        ids.push('"' + v.pid 
                        + '":{"product_id":' + v.pid 
                        + ',"buy_count":' + v.pnum 
                        + ',"main_product_id":' + v.main_product_id 
                        + ',"price_id":' + v.price_id 
                        + ',"type":' + (v.type || self.TYPE_PDT) 
                        + ',"OTag":"' + v.y_track 
                        + '","chid":"' + (v.chid)
                        +'","yanbao":'+ (v.repair||0) 
                        +'","pkgpids":'+ (v.pkgpids||0) 
                        +'","time":'+ (v.time||0) 
                        +'","promotion_rule_id":'+ (v.promotion_rule_id||0) 
                        + '"}');
                    } else {
                        v.chid = ( typeof v.chid != 'undefined') ? v.chid.toString() : "0";
                        ids.push((v.pid - 0) 
                        + '|' + ((v.pnum || 1) - 0) 
                        + '|' + (v.main_product_id - 0) 
                        + '|' + (v.price_id - 0) 
                        + '|' + (v.y_track || '') 
                        + '|' + (v.type || self.TYPE_PDT) 
                        + '|' + (v.chid) 
                        + '|'+(v.repair||0)// 延保id 暂未对接 默认先填个0
                        + '|' + (v.pkgpids? ((typeof v.pkgpids == 'string') ? v.pkgpids: v.pkgpids.join("@")):"0")// pkgpids
                        + (v.time ? '|' + v.time : '')
                        + '|'+(v.promotion_rule_id||0));
                    }
                }
            });
            return ids;
        },
        //添加到非登录态购物车 rou
        _addToCartMultiNotLogin : function(productParam) {
            var self = Cart;
            var newCallback = function(o) {
                switch(o.errno) {
                    case 0:
                        break;
                    case 19970://用户没有登录.  19970
                    case 19972://要求用户登录  19972
                        window.location.href = 'https://base./login.html?url='+encodeURIComponent(location.href);
                        break;
                    case 19973:
                        self._addToCartMultiLogin(productParam);
                        break;
                }
            }

            this.checkByServer("http://cart.buy./shoppingcart/addproductnotloginunp", productParam, newCallback);
        },

        /**
         * 添加到购物车, 具体操作函数
         * @param object productParam 参数
         * @param function callback 回调函数
         */
        _addToCartMultiLogin : function(productParam, callback) {
            var uid = G.logic.login.getLoginUid();
            if(!uid){return;}
            var self = this;
            var newCallback = function(o) {
                //if ((o.isClean == 1)) {  
                    //Cart.getNormalShoppingCart().clear();  
                //}
                switch(o.errno){
                    case 0:
                        //Cart.getNormalShoppingCart().clear();
                        break;
                    case 19970:
                    case 19972:// 未登录 重启离线购物车流程
                        return self._addToCartMultiNotLogin(productParam);
                }
                    
            };
            
            this.checkByServer("http://cart.buy./shoppingcart/addproductunp", productParam, newCallback);
            
        },
        /**
         * @param {Object} _url
         * @param {Object} ids
         * @param {Object} callback
         */
        checkByServer: function(_url, productParam, callback){
            var self = this;
            //Cart.getNormalShoppingCart().getAll(function(cart, cache) {
                var ids = self._encodeMultiCartStr(productParam);
                //var offline = self._encodeMultiCartStr(cart);
                var data = {
                    p: ids.join(',')
                };
                /*
                if(offline.length > 0){
                    data.offline = offline.join(',');
                }*/
                
                var ajaxCallBack = function(o){
                    if(!o) return;
                    
                    // 前面处理相同逻辑
                    var o_fail = o.fail;
                    var mainFail = null;
                    var mainFailStr = o.message;
                    var isPartSuc = false;
                    var o_data = o.data;
                    if(o_fail){ //主商品失败原因
                        
                        // 为方便后面对fail的解析 这里对后台传过来的结构进行改造
                        var fail_length = o_fail.length;
                        var temp_fail = {};
                        for(var i = 0; i < fail_length; i++){
                            var currFail = o_fail[i];
                            for(var n in currFail){
                                temp_fail[n] = currFail[n];
                            }
                        }
                        
                        /**
                         * 5)   全为特殊商品
                            a)  抱歉，这些商品不能批量添加，请分别购买。
                         */
                        if(!o_data && fail_length > 1){
                            var flag = false;
                            for(var n in temp_fail){
                                flag = (temp_fail[n].errorCode ==19721 ||temp_fail[n].errorCode ==19722); 
                                if(!flag){
                                    break;
                                }
                            }
                            if(flag){
                                return self.showTopWarning("抱歉，这些商品不能批量添加，请分别购买。", o.errno);
                            }
                        }
                        
                        for(var n in temp_fail){ // 如果主商品失败 将主商品失败信息提到结构上面
                            if(n == productParam[0].pid && productParam.length==1){ // 适用单品添加时才提示主商品信息
                                mainFailStr = temp_fail[n].errorMessage;
                                o.errno = temp_fail[n].errorCode;
                                break;
                            }
                        }
                        
                        if(o_data){ // 这里处理部分商品添加成功的提示 
                            
                            for(var n in temp_fail){
                                var flag = true;
                                for(var v = 0; v < o_data.length; v++){
                                    if(n == [o_data[v].pid]){
                                        flag = false;
                                        break;
                                    }
                                }
                                if(flag){
                                    isPartSuc = true;
                                    break;
                                }
                            }
                            
                        }
                           
                    }
                    if(o_data){ // o.data说明成功了 检查下是否主商品在内
                        /*
                        for(var j = 0; j < o.data.length;j++){
                            if(productParam[0].pid == o.data[j].pid){
                                o.errno = 0; // fail里面且data里面有 视为成功
                                break;
                            }
                        }*/
                        o.errno = 0; // 只要有data 就显示成功 可以显示部分成功
                    }
                    
                    switch(o.errno){
                        case 0:
                            self.showTopWarning(mainFailStr?mainFailStr:'', 0, isPartSuc);
                            break;
                        case 19721://合约机
                            window.location.href = 'http://buy./stepone-'+productParam[0].pid+'.html?chid='+productParam[0].chid;
                            break;
                        case 19722://节能补贴商品
                            window.location.href = 'http://buy./cart.html?pid='+productParam[0].pid+"&pnum="+productParam[0].pnum+"&chid="+productParam[0].chid;
                            break;
                        case 19970:
                        case 19972:
                            break;
                        default: 
                            self.showTopWarning(mainFailStr, o.errno);
                            break;
                    }
                    
                    // 回调里面处理登录非登录的特殊处理
                    callback(o);
                };
                /*
                var wg_skey = G.util.cookie.get("wg_skey"); // 登录态验证token
                if(wg_skey){
                    var hash = 5381;
                    for(var i = 0, len = wg_skey.length; i < len; ++i){
                       hash += (hash << 5) + wg_skey.charAt(i).charCodeAt();
                    };
                    data.token = hash & 0x7fffffff; 
                }*/
                // 请求开始时间
                var bTime = (new Date()).getTime();
                var point = null;
                if(_url.indexOf("addproductnotlogin")>-1){
                    point = "4";
                }else{
                    point = "5"; 
                }
                
                $.ajax({
                    url : _url,
                    dataType : 'jsonp',
                    data : data,
                    timeout: 6000,
                    cache:true,
                    report: "errno",
                    success: function(o){
                        var eTime = (new Date()).getTime();
                        ajaxCallBack(o);
                        self.reportCgi(point+"="+(eTime-bTime));
                    },
                    error: function(xhr, textStates, errorThrown){
                        var ec = 2000000;
                        switch(textStates){
                            case "timeout":
                                ec = 2010000;
                                break;
                            case "parsererror":
                                ec = 2020000;
                                break;
                            case "notmodified":
                                ec = 2030000;
                                break;
                            case "error":
                                ec = 2040000;
                                break;
                                 
                        }
                        if(xhr && xhr.status && !isNaN(xhr.status)){
                            ec += parseInt(xhr.status, 10);
                        }
                        self.showTopWarning("抱歉，系统繁忙，请重新添加。", ec);
                    }
                });
                
            //});
        },
        reportCgi: function(_str){
            var _img = new Image();
            setTimeout(function(){
                _img.src ="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=1470&flag2=31&flag3=7&"+_str;
            }, 500);
        },

        addToCartMulti : function(productParam) {
            var self = this;
            if(!productParam || productParam.length < 1)
                return;
            var uid = G.logic.login.getLoginUid();
            if(!uid) {//添加到未登录态购物车，前端存储部分 
                self._addToCartMultiNotLogin(productParam);
            } else {//添加到登录态购物车
                self._addToCartMultiLogin(productParam);
            }
        },
        init: function(_param,obj) {

            var self = this;
    
            var paras = {hash:{},search: _param};
    
            if (paras.search.pid > 0) { //添加单个商品
                Cart.addToCart( //addToCart 内计算 y_track
                    paras.search.pid-0,
                    (paras.search.pnum || 1) - 0,
                    paras.search.mid || 0,
                    paras.search.price_id || 0,
                    paras.search.chid || 0,
                    paras.search.repair || 0
                );
            }
            else if (paras.search.ids) { //添加多个商品
                var ids = paras.search.ids.split(','),
                    y_track = Cart.getYTrack(); //添加订单来源
                $.each(ids, function(k, val) {
                    val = val.split('|');
                    if (val.length < 1) {
                        return; //参数错误
                    }
    
                    ids[k] = {
                        pid : val[0],
                        pnum    : val.length >= 2 ? val[1] : 1,
                        main_product_id : val.length >= 3 ? val[2] : 0,
                        price_id    : val.length >= 4 ? val[3] : 0,
                        y_track : y_track,
                        chid : paras.search.chid,
                        repair: val.length >= 5 ? val[4] : 0
                    };
                });
                Cart.addToCartMulti(ids);
            }
            else if (paras.search.pkgid > 0) { //添加单个套餐
                
                Cart.addToCart( //addToCart 内计算 y_track
                    parseInt(paras.search.pkgid), // 套餐id
                    parseInt(paras.search.pnum) || 1, // pnum
                    0,// mid
                    0, // price_id
                    paras.search.chid || 0,
                    paras.search.repair,
                    paras.search.pkgpids||"0",
                    self.TYPE_PKG
                );
            }else{
                this.showTopWarning("抱歉，该商品暂无法添加购物车。",2100001);
            }
        },
        
        add: function(_param, _dom){
            this.startTime = (new Date()).getTime();// 记录开始时间 统计整个过程消耗时间 
            try{
                if(window.G && G.app && G.app.ping && G.app.ping.orderTrack){
                    G.app.ping.orderTrack(_dom);
                }
                var param = _param;
                if(typeof _param == "string"){
                    var temp_str = _param;
                    if(temp_str.indexOf("?") > -1){
                        temp_str = temp_str.substr(temp_str.indexOf("?")+1);
                    }
                    var temp_arr = temp_str.split("&");
                    var temp_param = {};
                    for(var i = 0; i < temp_arr.length;i++){
                        var temp = temp_arr[i].split("=");
                        temp_param[temp[0]] = temp[1];
                    }
                    param = temp_param;
                }
                
                // 是否有另外的添加流程正在继续
                var loadingParam = {};
                for(var n in param){
                    loadingParam[n] = param[n];
                }
                if(!CartBanner.loading(_dom, loadingParam)){
                    return;
                }
                if(document.domain != ""){ // 本地存储无法使用  在第一次使用前检测有无设置
                    return this.showTopWarning("抱歉，系统繁忙，重新添加或刷新重试。",2100004);
                }
                
                this.init(param, _dom);
                
            }catch(e){
                this.showTopWarning("抱歉，该商品暂无法添加购物车。",2100011);
            }
        },
        close: function(){
            CartBanner.close();
        }
    }
    var obj = win||window;
    obj.Cart = Cart;
})(window);
/*  |xGv00|39dfe71d8dade484af5908db18b6cc7f */