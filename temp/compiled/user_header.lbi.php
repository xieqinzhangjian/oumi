<script type="text/javascript">
var process_request = "<?php echo $this->_var['lang']['process_request']; ?>";
</script>

<div class="ic_toolbar">
    <div class="grid_c1">
        <div class="mod_entry">
				            <a target="_blank" ytag="00100" class="mod_entry_mix" href="http://www.maizw.com"><i class="mod_entry_icson"></i><b>
				   <a href="javascript:void(0);" onclick="AddFavorite('我的网站',location.href)">收藏本站&nbsp;</a>      
				            
				            </b></a>
            <i class="mod_entry_gap">|</i>		            <a target="_blank"  href="http://www.maizw.com">公告</a>
            <i class="mod_entry_gap">|</i>		       
            		        </div>
        <div class="mod_sitemap">
            <ul class="mod_sitemap_ul" id="j_sitemap">
               <font id="ECS_MEMBERZONE"><?php 
$k = array (
  'name' => 'member_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?> </font>
                <li class="mod_sitemap_li " >
                  
                   <a href="user.php?act=order_list" target="_blank" class="mod_dropmenu_tit" rel="nofollow">我的订单&nbsp;</a>
                
                
                    
                </li>
     <!--            <li class="mod_sitemap_gap">|</li>
                <li class="mod_sitemap_li">
                    <a target="_blank" href="user.php" ytag="00208" rel="nofollow">我的易迅&nbsp;</a>
                </li>
                <li class="mod_sitemap_gap">|</li>
                <li class="mod_sitemap_li">
                    <a target="_blank" href="help.php?id=9" ytag="00209" rel="nofollow">服务中心&nbsp;</a>
                </li>
                <li class="mod_sitemap_gap">|</li>
                <li class="mod_sitemap_li mod_sitemap_gg">
                    <a target="_blank" href="index.php" ytag="00210" rel="nofollow">我要逛<i> &gt;&gt;</i></a>
                </li> -->
            </ul>
        </div>
    </div>
</div>
<script type="text/javascript">
function SetHome(obj,url){

    try{

        obj.style.behavior='url(#default#homepage)';

       obj.setHomePage(url);

   }catch(e){

       if(window.netscape){

          try{

              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

         }catch(e){

              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");

          }

       }else{

        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");

       }

  }

}

 

//收藏本站 bbs.ecmoban.com

function AddFavorite(title, url) {

  try {

      window.external.addFavorite(url, title);

  }

catch (e) {

     try {

       window.sidebar.addPanel(title, url, "");

    }

     catch (e) {

         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");

     }

  }

}

</script>

</script>