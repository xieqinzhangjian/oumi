<form id="formCart" name="formCart" method="post" action="flow.php" >
  <div class="mod_minicart_con"> <a href="flow.php" class="mod_minicart_lk" > <i class="mod_minicart_ico">&nbsp;</i> <span class="mod_minicart_tit">购物车</span> </a> <i class="mod_minicart_gap">|</i> <span class="mod_minicart_num"><?php echo $this->_var['str']; ?></span> <b class="mod_minicart_arrow"><i></i></b> </div>


  <?php if ($this->_var['goods']): ?>
  <div class="mod_minicart_pop" id="j_minicart_pop"> <i class="mod_minicart_pop_bod"></i>
    <div class="mod_minicart_pop_inner" id="j_minicart_layer">
      <ul class="mod_minicart_list" >
        <?php $_from = $this->_var['goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_57596100_1410625894');$this->_foreach['goods'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['goods']['total'] > 0):
    foreach ($_from AS $this->_var['goods_0_57596100_1410625894']):
        $this->_foreach['goods']['iteration']++;
?>
        <li>
          <div class="mod_goods mod_goods_w60">
            <div class="mod_goods_img"><a target="_blank" href="<?php echo $this->_var['goods_0_57596100_1410625894']['url']; ?>" title="<?php echo $this->_var['goods_0_57596100_1410625894']['goods_name']; ?>"><img src="<?php echo $this->_var['goods_0_57596100_1410625894']['goods_thumb']; ?>" alt="<?php echo $this->_var['goods_0_57596100_1410625894']['goods_name']; ?>" width="60" height="60"/></a></div>
            <div class="mod_goods_info">
              <p class="mod_goods_tit"><a target="_blank" href="<?php echo $this->_var['goods_0_57596100_1410625894']['url']; ?>"  title="<?php echo $this->_var['goods_0_57596100_1410625894']['goods_name']; ?>"><?php echo $this->_var['goods_0_57596100_1410625894']['short_name']; ?></a></p>
              <p class="mod_goods_price">
              <span style="float:left; width:110px; height:20px; line-height:20px;">
              <span class="mod_price"><span><?php echo $this->_var['goods_0_57596100_1410625894']['goods_price']; ?></span></span><b>x</b><?php echo $this->_var['goods_0_57596100_1410625894']['goods_number']; ?>
              </span>
              <a style="float:right;height:20px; line-height:20px; width:30px;" href="javascript:" onClick="deleteCartGoods(<?php echo $this->_var['goods_0_57596100_1410625894']['rec_id']; ?>)">删除</a>
              <div style="height:0px; line-height:0px; clear:both;"></div>
              </p>
              
            </div>
          </div>
        </li>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      </ul>
      
      <div class="mod_minicart_ft">
        <p>共<span class="c_tx1" id="cartNum"><?php echo $this->_var['zj']['goods_number']; ?></span>件商品总计：<span class="mod_price"><i>&yen;</i><span id="cartPrice"><?php echo $this->_var['zj']['goods_price']; ?></span></span></p>
        <a target="_blank" class="mod_btn_arrow" href="flow.php"><b style="color:#ffffff;">去购物车结算</b><i></i></a></div>
    </div>
  </div>
  <?php else: ?>
  <div class="mod_minicart_pop" id="j_minicart_pop"> <i class="mod_minicart_pop_bod"></i>
    <div class="mod_minicart_pop_inner" id="j_minicart_layer">
      <div class="mod_minicart_empty" >
        <p>您的购物车是空的<br />
          快挑选喜欢的商品加入购物车吧</p>
      </div>
    </div>
  </div>
  <?php endif; ?>
</form>

