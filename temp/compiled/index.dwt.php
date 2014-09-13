<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="Generator" content="ECSHOP v2.7.3" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="<?php echo $this->_var['keywords']; ?>" />
<meta name="Description" content="<?php echo $this->_var['description']; ?>" />

<title><?php echo $this->_var['page_title']; ?></title>



<link rel="shortcut icon" href="favicon.ico" />
<link rel="icon" href="animated_favicon.gif" type="image/gif" />
<link rel="alternate" type="application/rss+xml"
	title="RSS|<?php echo $this->_var['page_title']; ?>" href="<?php echo $this->_var['feed_url']; ?>" />

<script language="javascript">
<!--
	/*屏蔽所有的js错误*/
	function killerrors() {
		return true;
	}
	window.onerror = killerrors;
//-->
</script>
<script type="text/javascript">
	timeStat = [];
	timeStat[0] = new Date();
	window.fstfs = [ 300020, 300033 ];
	document.domain = '';
</script>
<link rel="stylesheet"
	href="themes/68ecshopcom_360buy/images/icson/css/common/gb.css"
	type="text/css" media="screen" />
<link rel="stylesheet"
	href="themes/68ecshopcom_360buy/images/icson/css/index/index.css"
	type="text/css" media="screen" />
</head>
<body class="ic_rwd">
	<style type="text/css" media="screen">
.ic_header {
	background:
		url(themes/68ecshopcom_360buy/images/icson/img/event/140102_newyear/bg1.png)
		no-repeat 50% bottom #FFFFFF;
	_background-image: none;
}

.ic_nav {
	border-top: none;
	background:
		url(themes/68ecshopcom_360buy/images/icson/img/event/140102_newyear/bg2.png)
		no-repeat 50% 0 #1369c0;
	_border-top: 1px solid #135dbc;
	_background-image: none;
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
}

.core {
	background:
		url(themes/68ecshopcom_360buy/images/icson/img/event/140102_newyear/bg2.png)
		no-repeat 50% -39px;
	_background-image: none;
}

.ic_nav .grid_c1 {
	position: relative;
}

.ic_mini .ic_header,.ic_mini .ic_nav,.ic_mini .core {
	background-image: none;
	border-top: 1px solid #135dbc;
}
</style>

	<?php echo $this->fetch('library/page_headerindex.lbi'); ?>
	<script type="text/javascript"
		src="themes/68ecshopcom_360buy/js/main.js" charset="utf-8"></script>

	<div class="ic_content">
		<div class="core">
			<div class="grid_c1">
				<div class="grid_s"></div>
				<div class="grid_m">
					<?php echo $this->fetch('library/index_ad3.lbi'); ?>
					<script type="text/javascript"
						src="themes/68ecshopcom_360buy/images/icson/js/index/script.js"
						charset="utf-8"></script>
					<i class="daily_bod"></i>
				

				</div>

				<div class="grid_e" style="float: left;margin-left: 1200px;margin-top: -370px;">
					<div class="serv">
						<i class="serv_bod"></i>
						<div class="serv_bd">
							<div class="serv_glide">
								<ul class="serv_glide_img" id="j_serv_glide">
									<li class="">
										 <?php $this->assign('ads_id','2'); ?><?php $this->assign('ads_num','1'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
										
									</li>
									<li class="hide">
										 <?php $this->assign('ads_id','3'); ?><?php $this->assign('ads_num','1'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
										
									</li>
									<li class="hide">
										 <?php $this->assign('ads_id','4'); ?><?php $this->assign('ads_num','1'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
										
									</li>
									<li class="hide">
										 <?php $this->assign('ads_id','5'); ?><?php $this->assign('ads_num','1'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
										
									</li>
								</ul>
								<div class="serv_glide_trig hide" id="j_glide_trig">
									<p>&bull;</p>
									<p>&bull;</p>
									<p>&bull;</p>
									<p>&bull;</p>
								</div>
							</div>
						</div>
						<div class="serv_ft">
							<?php echo $this->fetch('library/morefuwu.lbi'); ?>
						</div>
					</div>
					
					<?php $this->assign('articles',$this->_var['articles_13']); ?><?php $this->assign('articles_cat',$this->_var['articles_cat_13']); ?><?php echo $this->fetch('library/cat_articles.lbi'); ?>
					

					<?php echo $this->fetch('library/shouji.lbi'); ?>

					<div class="chong_frm">
						
						<?php $this->assign('ads_id','61'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
						
					</div>

				</div>
			</div>
		</div>
		<script type="text/javascript"
			src="themes/68ecshopcom_360buy/images/icson/js/indexok.js"
			charset="utf-8"></script>
		<div id="tfs_1"></div>
		<div class="grid_c1 ulike ">
			<div class="ulike_hd">
				<div class="ulike_tit">猜你喜欢</div>
				<a target="_blank" id="j_ulike_gg" class="ulike_gg"
					href="search.php?intro=best">点击查看更多精彩！&gt;&gt;</a>
			</div>
			<div class="ulike_bd" id="ulikeS1">
				<ul class="ulike_r1">
					<?php echo $this->fetch('library/recommend_best.lbi'); ?>
					<li class="ulike_r1_narrow">
						<div class="ulike_r1_brand">
							
							<?php $this->assign('ads_id','6'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>
					<li class="ulike_r1_mark_wrap">
						<div class="ulike_r1_brand">
							
							<?php $this->assign('ads_id','7'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>
					<li class="ulike_r1_mark_wrap">
						<div class="ulike_r1_brand">
							
							<?php $this->assign('ads_id','8'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>
					<li>
						<div class="ulike_r1_brand">
							
							<?php $this->assign('ads_id','9'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>
					<li>
						<div class="ulike_r1_brand">
							
							<?php $this->assign('ads_id','10'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>
					<li>
						<div class="ulike_r1_brand">
							
							<?php $this->assign('ads_id','11'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>

				</ul>
				<ul class="ulike_r2">
					<li class="ulike_r2_narrow">
						<div class="ulike_r2_item">
							
							<?php $this->assign('ads_id','12'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div>
					</li>
					<li><div class="ulike_r2_item">
							
							<?php $this->assign('ads_id','13'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div></li>
					<li><div class="ulike_r2_item">
							
							<?php $this->assign('ads_id','14'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
							
						</div></li>
				</ul>
			</div>
		</div>

		<div class="grid_c1 sy_mod_f f1">
			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title1.lbi'); ?>
			</div>
			<div class="sy_mod_f_bd">
				<div class="grid_s MMSlides">
					<div class="sy_mod_glide slide-pic_index">
						<ul class="sy_mod_glide_img slide-pic">
							<?php
		 $GLOBALS['smarty']->assign('index_image1',get_advlist('首页-1f-左侧广告', 4));
	  ?>
							<?php $_from = $this->_var['index_image1']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?>
							<li><a href="<?php echo $this->_var['ad']['url']; ?>" target="_blank"><img
									src="<?php echo $this->_var['ad']['image']; ?>" width="190" height="400"></a></li> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</ul>
						<div class="sy_mod_glide_trigger slide-txt">
							<?php $_from = $this->_var['index_image1']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?><i>•</i><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</div>
					</div>

				</div>

				<div class="grid_m">
					<div class="sy_mod_fgoods_wrap">
						<ul class="sy_mod_fgoods">
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','16'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','17'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','18'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','19'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>

							
							<?php $this->assign('cat_goods',$this->_var['cat_goods_2']); ?><?php $this->assign('goods_cat',$this->_var['goods_cat_2']); ?><?php echo $this->fetch('library/cat_goods.lbi'); ?>
							

						</ul>
					</div>
				</div>
				<div class="grid_e">
					<div class="sy_mod_extimg">
						
						<?php $this->assign('ads_id','15'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
						
					</div>
				</div>
			</div>
			<?php echo $this->fetch('library/hot_goods1.lbi'); ?>
		</div>
		<div class="grid_c1 sy_mod_f f2">

			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title2.lbi'); ?>
			</div>
			<div class="sy_mod_f_bd">
				<div class="grid_s MMSlides">
					<div class="sy_mod_glide slide-pic_index">
						<ul class="sy_mod_glide_img slide-pic">
							<?php
		 $GLOBALS['smarty']->assign('index_image2',get_advlist('首页-2f-左侧广告', 4));
	  ?>
							<?php $_from = $this->_var['index_image2']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?>
							<li><a href="<?php echo $this->_var['ad']['url']; ?>" target="_blank"><img
									src="<?php echo $this->_var['ad']['image']; ?>" width="190" height="520"></a></li> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</ul>
						<div class="sy_mod_glide_trigger slide-txt">
							<?php $_from = $this->_var['index_image2']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?><i>•</i><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</div>
					</div>
				</div>
				<div class="grid_m">
					<div class="sy_mod_fgoods_wrap">
						<ul class="sy_mod_fgoods">
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','26'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','27'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','28'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','29'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>

							
							<?php $this->assign('cat_goods',$this->_var['cat_goods_3']); ?><?php $this->assign('goods_cat',$this->_var['goods_cat_3']); ?><?php echo $this->fetch('library/cat_goods.lbi'); ?>
							

						</ul>
					</div>
				</div>
				<div class="grid_e">
					<div class="sy_mod_extimg">
						<div class="flider">
							<div class="flider_img" id="j_fslider">
								<?php
		 $GLOBALS['smarty']->assign('index_image',get_advlist('首页-2f-右侧广告', 3));
	  ?>
								<?php $_from = $this->_var['index_image']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?> <a
									class="<?php if (! ($this->_foreach['index_image']['iteration'] <= 1)): ?>hide<?php endif; ?>"
									target="_blank" href="<?php echo $this->_var['ad']['url']; ?>" title="<?php echo $this->_var['ad']['title']; ?>"><img
									src="<?php echo $this->_var['ad']['image']; ?>" alt="<?php echo $this->_var['ad']['name']; ?>"></a> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>


							</div>
							<div class="flider_trigger" id="j_fslider_trigger">
								<?php $_from = $this->_var['index_image']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?> <a
									class="flider_trigger_lk <?php if (($this->_foreach['index_image']['iteration'] <= 1)): ?>flider_trigger_lk_on<?php endif; ?>"
									href="<?php echo $this->_var['ad']['url']; ?>" target="_blank"><b><?php echo $this->_var['ad']['name']; ?></b><i>&gt;</i></a>
								<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>

							</div>
						</div>
					</div>
				</div>
			</div>
			<?php echo $this->fetch('library/hot_goods2.lbi'); ?>
		</div>
		<div class="grid_c1 sy_mod_f f3">
			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title3.lbi'); ?>
			</div>
			<div class="sy_mod_f_bd">
				<div class="grid_s MMSlides">
					<div class="sy_mod_glide slide-pic_index">
						<ul class="sy_mod_glide_img slide-pic">
							<?php
		 $GLOBALS['smarty']->assign('index_image3',get_advlist('首页-3f-左侧广告', 4));
	  ?>
							<?php $_from = $this->_var['index_image3']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?>
							<li><a href="<?php echo $this->_var['ad']['url']; ?>" target="_blank"><img
									src="<?php echo $this->_var['ad']['image']; ?>" width="190" height="400"></a></li> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</ul>
						<div class="sy_mod_glide_trigger slide-txt">
							<?php $_from = $this->_var['index_image3']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?><i>•</i><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</div>
					</div>
				</div>
				<div class="grid_m">
					<div class="sy_mod_fgoods_wrap">
						<ul class="sy_mod_fgoods">
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','35'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','36'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','37'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','38'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>

							
							<?php $this->assign('cat_goods',$this->_var['cat_goods_4']); ?><?php $this->assign('goods_cat',$this->_var['goods_cat_4']); ?><?php echo $this->fetch('library/cat_goods.lbi'); ?>
							

						</ul>
					</div>
				</div>
				<div class="grid_e">
					<div class="sy_mod_extimg">
						
						<?php $this->assign('ads_id','39'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
						
					</div>
				</div>
			</div>
			<?php echo $this->fetch('library/hot_goods3.lbi'); ?>
		</div>

		<div class="grid_c1 sy_mod_f fgeneral">

			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title4.lbi'); ?>
			</div>
			<div class="sy_mod_f_bd">
				<div class="grid_s MMSlides">
					<div class="sy_mod_glide slide-pic_index">
						<ul class="sy_mod_glide_img slide-pic">
							<?php
		 $GLOBALS['smarty']->assign('index_image4',get_advlist('首页-4f-左侧广告', 4));
	  ?>
							<?php $_from = $this->_var['index_image4']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?>
							<li><a href="<?php echo $this->_var['ad']['url']; ?>" target="_blank"><img
									src="<?php echo $this->_var['ad']['image']; ?>" width="190" height="400"></a></li> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</ul>
						<div class="sy_mod_glide_trigger slide-txt">
							<?php $_from = $this->_var['index_image4']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?><i>•</i><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</div>
					</div>
				</div>

				<div class="grid_m">
					<div class="sy_mod_fgoods_wrap">
						<ul class="sy_mod_fgoods">

							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','41'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','42'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','43'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','44'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','45'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','46'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','47'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','48'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
						</ul>
					</div>
				</div>
				<div class="grid_e">
					<div class="sy_mod_extimg">
						
						<?php $this->assign('ads_id','40'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
						
					</div>
				</div>
			</div>
			<?php echo $this->fetch('library/hot_goods4.lbi'); ?>

		</div>
		<div class="grid_c1 sy_mod_f fpopular">

			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title5.lbi'); ?>

			</div>
			<div class="sy_mod_f_bd">
				<div class="grid_s MMSlides">
					<div class="sy_mod_glide">
						<ul class="sy_mod_glide_img slide-pic">
							<?php
		 $GLOBALS['smarty']->assign('index_image5',get_advlist('首页-5f-左侧广告', 4));
	  ?>
							<?php $_from = $this->_var['index_image5']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?>
							<li><a href="<?php echo $this->_var['ad']['url']; ?>" target="_blank"><img
									src="<?php echo $this->_var['ad']['image']; ?>" width="190" height="400"></a></li> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</ul>
						<div class="sy_mod_glide_trigger slide-txt">
							<?php $_from = $this->_var['index_image5']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?><i>•</i><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
						</div>
					</div>
				</div>
				<div class="grid_m">
					<div class="sy_mod_fgoods_wrap">
						<ul class="sy_mod_fgoods">
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','53'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','54'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','55'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>
							<li class="sy_mod_fgoods_high">
								 <?php $this->assign('ads_id','56'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
								
							</li>

							
							<?php $this->assign('cat_goods',$this->_var['cat_goods_5']); ?><?php $this->assign('goods_cat',$this->_var['goods_cat_5']); ?><?php echo $this->fetch('library/cat_goods.lbi'); ?>
							

						</ul>
					</div>
				</div>
				<div class="grid_e">
					<div class="sy_mod_extimg">
						
						<?php $this->assign('ads_id','52'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
						
					</div>
				</div>
			</div>
			<?php echo $this->fetch('library/hot_goods5.lbi'); ?>

		</div>
		<div class="grid_c1 sy_mod_f ftwin">
			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title6.lbi'); ?>

			</div>
			<div class="sy_mod_f_bd grid_s5m10 ">
				<div class="grid_s MMSlides">
					<div class="ftwin_side">
						<div class="sy_mod_glide">
							<ul class="sy_mod_glide_img">
								<li>
									 <?php $this->assign('ads_id','58'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
									
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="grid_m_1">
					<div class="ftwin_goods_wrap">
						<ul class="ftwin_goods">
							
							<?php $this->assign('cat_goods',$this->_var['cat_goods_6']); ?><?php $this->assign('goods_cat',$this->_var['goods_cat_6']); ?><?php echo $this->fetch('library/cat_goods.lbi'); ?>
							
						</ul>
					</div>
				</div>
				<i class="grid_g1"></i>
				<div class="grid_s">
					<div class="ftwin_side">
						<div class="sy_mod_glide">
							<ul class="sy_mod_glide_img">
								<li>
									 <?php $this->assign('ads_id','59'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
									
								</li>
							</ul>

						</div>
					</div>
				</div>
				<div class="grid_m_2">
					<div class="ftwin_goods_wrap">
						<ul class="ftwin_goods">
							
							<?php $this->assign('cat_goods',$this->_var['cat_goods_5']); ?><?php $this->assign('goods_cat',$this->_var['goods_cat_5']); ?><?php echo $this->fetch('library/cat_goods.lbi'); ?>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="grid_c1 sy_mod_f ftejia">
			<div class="sy_mod_f_hd">
				<?php echo $this->fetch('library/title7.lbi'); ?>

			</div>
			<div class="sy_mod_f_bd grid_s5m25">
				<div class="grid_s">
					<div class="ftejia_side">
						
						<?php $this->assign('ads_id','60'); ?><?php $this->assign('ads_num','0'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>
						
					</div>
				</div>
				<?php echo $this->fetch('library/recommend_new.lbi'); ?>
			</div>
		</div>
	</div>
	<?php echo $this->fetch('library/page_footer.lbi'); ?>

	<script type="text/javascript">
		timeStat[2] = new Date() - timeStat[0];
		window.tfList = [ {
			'tfId' : '300034',
			'lazyDo' : 'qbTomorrow'
		}, {
			'tfId' : '300021',
			'lazyDo' : ''
		}, {
			'tfId' : '300022',
			'lazyDo' : ''
		}, {
			'tfId' : '300023',
			'lazyDo' : ''
		}, {
			'tfId' : '300024',
			'lazyDo' : ''
		}, {
			'tfId' : '300025',
			'lazyDo' : ''
		}, {
			'tfId' : '300027',
			'lazyDo' : 'hsTabs'
		}, {
			'tfId' : '300028',
			'lazyDo' : 'hsTabs'
		}, {
			'tfId' : '300029',
			'lazyDo' : 'hsTabs'
		}, {
			'tfId' : '300030',
			'lazyDo' : 'hsTabs'
		}, {
			'tfId' : '300031',
			'lazyDo' : ''
		}, {
			'tfId' : '300032',
			'lazyDo' : 'hsTabs'
		} ];
		window.tfsList = {
			'1' : {
				'tfId' : [ 100001, 300036, 300035 ],
				'groupId' : '1',
				'cb' : 'G.index.dealIntrest'
			}
		};
	</script>


	</script>
	<script>
		serverTime = '';
	</script>
<!-- 	<script type="text/javascript"
		src="themes/68ecshopcom_360buy/images/icson/js/index/index.js"
		charset="utf-8"></script> -->

	<script>
		var LOCGRAY = true;
		serverTime = '';
	</script>

	<script type="text/javascript"
		src="themes/68ecshopcom_360buy/images/icson/js/v1/footer.js"></script>
	<!--[if !IE]><!-->
	<script type="text/javascript">
		(function(a) {
			a.fn.snow = function(b) {
				var d = a('<div class="christmas_flake" id="flake" />').css({
					position : "absolute",
					top : "-50px",
					"z-index" : 9999
				}).html("&#10053;");
				a(document).height();
				var e = a(document).width();
				b = a.extend({}, {
					minSize : 10,
					maxSize : 20,
					newOn : 500,
					flakeColor : "#FFFFFF"
				}, b);
				setInterval(
						function() {
							var c = Math.random() * e - 100, f = 0.5 + Math
									.random(), g = b.minSize + Math.random()
									* b.maxSize, h = c - 100 + 200
									* Math.random(), k = 2E3 + 5E3 * Math
									.random();
							d.clone().appendTo("body").css({
								left : c,
								opacity : f,
								"font-size" : g,
								color : b.flakeColor
							}).animate({
								top : 200,
								left : h,
								opacity : 0.1
							}, k, "linear", function() {
								a(this).remove()
							})
						}, b.newOn)
			}
		})(jQuery);
		var isIE10 = /MSIE\s+10.0/i.test(navigator.userAgent) && function() {
			return void 0 === this
		}();
		isIE10 || $.fn.snow({
			minSize : 5,
			maxSize : 30,
			newOn : 1E3,
			flakeColor : "#FFF"
		});
	</script>
	<!--<![endif]-->
	<script>
		G.index.getServiceMsg();
		G.footer.initBakTop();
		timeStat[7] = new Date() - timeStat[0];
		$(window).bind('load', function() {
			G.util.ping.timeStat(timeStat, 50, 47);
			G.util.ping.reportPerformance(50, 8);
		});
		window.yPageId = '1000';
		window.yPageLevel = '1';
	</script>
	<script>
		$(".sy_mod_rank_ext span").mouseover(
				function() {
					$(this).addClass("on").siblings().removeClass("on")
							.parent().siblings().hide().siblings(
									"." + $(this).attr("id")).show();
				});
	</script>

</body>
</html>
