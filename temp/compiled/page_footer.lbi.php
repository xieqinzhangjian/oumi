<div class="ic_market" id="j_market">
<div class="grid_c1">
<a target="_blank" class="market_link" title="15期：林志炫" href="#" ><img src="themes/68ecshopcom_360buy/images/icson/img/common/footerimg.jpg" class="market_img_1" /></a>
</div>
</div>
<div class="ic_footer">
	<div class="ic_footer_inner">
		<div class="mod_agree">
			<ul class="mod_agree_con">
            <li class="mod_agree_item mod_agree_item1">
					<i></i>
					<a target="_blank" href="#" rel="nofollow"><strong>正品保障</strong><span>全场正品，行货保障</span></a>
				</li>
							<li class="mod_agree_item mod_agree_item2">
					<i></i>
					<a target="_blank" href="#"  rel="nofollow"><strong>一日三送</strong><span>闪电配送，谁比我快</span></a>
				</li>
							<li class="mod_agree_item mod_agree_item3">
					<i></i>
					<a target="_blank" href="#" rel="nofollow"><strong>货到付款</strong><span>货到付款，安心便捷</span></a>
				</li>
							<li class="mod_agree_item mod_agree_item4">
					<i></i>
					<a target="_blank" href="#" rel="nofollow"><strong>维修保障</strong><span>服务保证，全国联保</span></a>
				</li>
							<li class="mod_agree_item mod_agree_item5">
					<i></i>
					<a target="_blank" href="#" rel="nofollow"><strong>无忧退货</strong><span>无忧退货，7日尊享</span></a>
				</li>
							<li class="mod_agree_item mod_agree_item6">
					<i></i>
					<a target="_blank" href="#"  rel="nofollow"><strong>贵就赔</strong><span>质优价低，买贵就赔</span></a>
				</li>
						</ul>
		</div>
		<div class="mod_help">
        <?php $_from = $this->_var['helps']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'help_cat');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['help_cat']):
        $this->_foreach['no']['iteration']++;
?>
        <div class="mod_help_item">
				<h5><?php echo $this->_var['help_cat']['cat_name']; ?></h5>
				<ul>
                <?php $_from = $this->_var['help_cat']['article']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['item']):
?>
				<li><a target="_blank" href="help.php?id=<?php echo $this->_var['item']['article_id']; ?>" rel="nofollow"><?php echo $this->_var['item']['short_title']; ?></a></li><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?></ul>
			</div>																									
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </div>
		<div class="mod_way"><div class="mod_way_item mod_way_mb">
				<i class="mod_way_mb_img"></i>
				<div class="mod_way_mb_info">
					<h5>手机易迅</h5>
					<p>轻松易点，迅速到家！</p>
					<p><a href="#" class="mod_way_mb_iphone">app store下载</a><a href="#"  class="mod_way_mb_android">android下载</a></p>
				</div>
			</div>
			<div class="mod_way_item mod_way_wx">
				<i class="mod_way_wx_img"></i>
				<div class="mod_way_wx_info">
					<h5>易迅官方微信</h5>
					<p>扫描二维码，即刻与小易亲密互动，还有劲爆优惠等你来拿！</p>
				</div>
			</div>
			<div class="mod_way_item mod_way_em">
				<i class="mod_way_em_img"></i>
				<div class="mod_way_em_info">
					<h5>订阅QQ邮件</h5>
					<p><a target="_blank" href="#" rel="nofollow">第一手促销资讯，尊享邮件特惠商品，优惠不错过！</a></p>
				</div>
			</div>

			<div class="mod_way_item mod_way_wb">
				<ul>
					<li><span class="mod_way_wb_sina">易迅网官方新浪微博</span><a target="_blank" href="#" >立即关注</a></li>
					<li><span class="mod_way_wb_tc">易迅网官方腾讯微博</span><a target="_blank" href="#">立即关注</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="ic_subfooter"> <div class="grid_c1">
        <div class="sf_p1"> <?php if ($this->_var['navigator_list']['bottom']): ?>
      <?php $_from = $this->_var['navigator_list']['bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_49089700_1410625894');$this->_foreach['nav_bottom_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_bottom_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_49089700_1410625894']):
        $this->_foreach['nav_bottom_list']['iteration']++;
?>
      <a href="<?php echo $this->_var['nav_0_49089700_1410625894']['url']; ?>" 
      <?php if ($this->_var['nav_0_49089700_1410625894']['opennew'] == 1): ?>
      target="_blank"
      <?php endif; ?>
      ><?php echo $this->_var['nav_0_49089700_1410625894']['name']; ?></a>|<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php endif; ?><span>客服热线：400-828-1878</span>
        </div>
        <p class="sf_p2"><?php echo $this->_var['copyright']; ?><br />
      <?php echo $this->_var['shop_address']; ?> <?php echo $this->_var['shop_postcode']; ?>
      <?php if ($this->_var['service_phone']): ?>
      Tel: <?php echo $this->_var['service_phone']; ?>
      <?php endif; ?>
      <?php if ($this->_var['service_email']): ?>
      E-mail: <?php echo $this->_var['service_email']; ?><br />
      <?php endif; ?>
      <?php $_from = $this->_var['qq']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <a href="http://wpa.qq.com/msgrd?V=1&amp;Uin=<?php echo $this->_var['im']; ?>&amp;Site=<?php echo $this->_var['shop_name']; ?>&amp;Menu=yes" target="_blank"><img src="http://wpa.qq.com/pa?p=1:<?php echo $this->_var['im']; ?>:4" height="16" border="0" alt="QQ" /> <?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['ww']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <a href="http://amos1.taobao.com/msg.ww?v=2&uid=<?php echo urlencode($this->_var['im']); ?>&s=2" target="_blank"><img src="http://amos1.taobao.com/online.ww?v=2&uid=<?php echo urlencode($this->_var['im']); ?>&s=2" width="16" height="16" border="0" alt="淘宝旺旺" /><?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['ym']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <a href="http://edit.yahoo.com/config/send_webmesg?.target=<?php echo $this->_var['im']; ?>n&.src=pg" target="_blank"><img src="themes/68ecshopcom_360buy/images/yahoo.gif" width="18" height="17" border="0" alt="Yahoo Messenger" /> <?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['msn']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <img src="themes/68ecshopcom_360buy/images/msn.gif" width="18" height="17" border="0" alt="MSN" /> <a href="msnim:chat?contact=<?php echo $this->_var['im']; ?>"><?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['skype']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <img src="http://mystatus.skype.com/smallclassic/<?php echo urlencode($this->_var['im']); ?>" alt="Skype" /><a href="skype:<?php echo urlencode($this->_var['im']); ?>?call"><?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <br />
      <?php if ($this->_var['icp_number']): ?>
      <?php echo $this->_var['lang']['icp_number']; ?>:<a href="http://www.miibeian.gov.cn/" target="_blank"><?php echo $this->_var['icp_number']; ?></a><br />
      <?php endif; ?>
</p>
        <div class="sf_verify" id="j_sf_verify">
			<a target="_blank" class="sf_verify_lk_1" id="j_kx_verify" href="#">可信网站</a>
            <a target="_blank" id="j_sh_verify" class="sf_verify_lk_2" href="#">上海工商</a>
        </div>
    </div>
</div>

