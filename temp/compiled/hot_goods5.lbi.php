<?php
$GLOBALS['smarty']->assign('child_cat5',get_hot_cat_tree(2, 3));
$GLOBALS['smarty']->assign('child_cat5_index',get_hot_cat_tree(2, 1));
?>
<div class="sy_mod_f_bd grid_s5m25 " >
  <div class="grid_s">
    <div class="sy_mod_key"> 
      <?php $_from = $this->_var['child_cat5']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat5');if (count($_from)):
    foreach ($_from AS $this->_var['cat5']):
?>
      <dl class="sy_mod_key_dl">
      <dt><a href="<?php echo $this->_var['cat5']['url']; ?>" target="_blank"><?php echo htmlspecialchars($this->_var['cat5']['name']); ?></a></dt>
      <dd> 
       <?php $_from = $this->_var['cat5']['child']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat_child2_0_43790400_1410625894');if (count($_from)):
    foreach ($_from AS $this->_var['cat_child2_0_43790400_1410625894']):
?> 
       <a href="<?php echo $this->_var['cat_child2_0_43790400_1410625894']['url']; ?>"><?php echo htmlspecialchars($this->_var['cat_child2_0_43790400_1410625894']['name']); ?></a> 
       <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
       </dd>
      </dl>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
    </div>
  </div>
  <div class="grid_m"> <i class="sy_mod_rank_bod"></i>
    <div class="sy_mod_rank">
    <div class="sy_mod_rank_tit">热销排行榜</div>
      <dl class="sy_mod_rank_hd">
        
        <dt class="sy_mod_rank_ext">
          <?php $_from = $this->_var['child_cat5_index']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat5');$this->_foreach['name'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name']['total'] > 0):
    foreach ($_from AS $this->_var['cat5']):
        $this->_foreach['name']['iteration']++;
?> 
          <?php if ($this->_var['cat5']['name']): ?>
          <span <?php if (($this->_foreach['name']['iteration'] <= 1)): ?>class="on"<?php endif; ?> id="t<?php echo $this->_foreach['name']['iteration']; ?>"><a href="javascript:void(0)" ><?php echo htmlspecialchars($this->_var['cat5']['name']); ?></a></span>
          <?php if (! ($this->_foreach['name']['iteration'] == $this->_foreach['name']['total'])): ?>
          <span class="sy_mod_rank_gap">|</span>
          <?php endif; ?> 
          <?php endif; ?> 
          <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </dt>

<?php $_from = $this->_var['child_cat5_index']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat5');$this->_foreach['name'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name']['total'] > 0):
    foreach ($_from AS $this->_var['cat5']):
        $this->_foreach['name']['iteration']++;
?>
<?php
$children5 = get_children($GLOBALS['smarty']->_var['cat5']['id']);
$GLOBALS['smarty']->assign( 'bestGoods5',get_category_recommend_goods('hot', $children5));
?>
         <dd class="t<?php echo $this->_foreach['name']['iteration']; ?> <?php if (! ($this->_foreach['name']['iteration'] <= 1)): ?>hide<?php endif; ?>" style="clear:both; width:100%; padding-top:20px;">
        <?php $_from = $this->_var['bestGoods5']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_43837300_1410625894');$this->_foreach['name1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name1']['total'] > 0):
    foreach ($_from AS $this->_var['goods_0_43837300_1410625894']):
        $this->_foreach['name1']['iteration']++;
?>
          <?php if ($this->_foreach['name1']['iteration'] < 6): ?>
        <div><i class="sy_mod_rank_order sy_mod_rank_order_<?php echo $this->_foreach['name1']['iteration']; ?>"><?php echo $this->_foreach['name1']['iteration']; ?></i>
          <div class="mod_goods mod_goods_w80">
            <div class="mod_goods_img load_effect"><a target="_blank" href="<?php echo $this->_var['goods_0_43837300_1410625894']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_43837300_1410625894']['name']); ?>"><img src="<?php echo $this->_var['goods_0_43837300_1410625894']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods_0_43837300_1410625894']['name']); ?>" width="80" height="80"></a></div>
            <div class="mod_goods_info">
              <p class="mod_goods_promo"><a href="<?php echo $this->_var['goods_0_43837300_1410625894']['url']; ?>" target="_blank" title="已售<?php echo $this->_var['goods_0_43837300_1410625894']['count']; ?>件" >已售<?php echo $this->_var['goods_0_43837300_1410625894']['count']; ?>件</a></p>
              <p class="mod_goods_tit"><a target="_blank" href="<?php echo $this->_var['goods_0_43837300_1410625894']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_43837300_1410625894']['name']); ?>">
              <?php echo htmlspecialchars($this->_var['goods_0_43837300_1410625894']['name']); ?>
              </a></p><p class="mod_goods_price"><span class="mod_price"><span><?php if ($this->_var['goods_0_43837300_1410625894']['promote_price'] != ""): ?>
                <?php echo $this->_var['goods_0_43837300_1410625894']['promote_price']; ?>
                <?php else: ?>
                <?php echo $this->_var['goods_0_43837300_1410625894']['shop_price']; ?>
                <?php endif; ?></span></span></p>
            </div>
          </div>
        </div>
        <?php endif; ?>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
         <div style="height:0px; line-height:0px; clear:both;"></div>
      </dd>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
    </dl>
  </div>
</div>

</div>