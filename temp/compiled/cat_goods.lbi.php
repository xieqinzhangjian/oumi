<?php $_from = $this->_var['cat_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_27619800_1410625894');if (count($_from)):
    foreach ($_from AS $this->_var['goods_0_27619800_1410625894']):
?>
<li class="sy_mod_fgoods_low">
  <div class="mod_goods mod_goods_w80" >
    <div class="mod_goods_img load_effect"> <a target="_blank" href="<?php echo $this->_var['goods_0_27619800_1410625894']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_27619800_1410625894']['name']); ?>"><img src="<?php echo $this->_var['goods_0_27619800_1410625894']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods_0_27619800_1410625894']['name']); ?>" width="80" height="80"></a> </div>
    <div class="mod_goods_info">
      <p <?php if ($this->_var['goods_0_27619800_1410625894']['promote_price'] != ""): ?>class="mod_goods_promo"<?php else: ?>class="mod_goods_tit"<?php endif; ?>><a href="<?php echo $this->_var['goods_0_27619800_1410625894']['url']; ?>" target="_blank" title="<?php echo htmlspecialchars($this->_var['goods_0_27619800_1410625894']['name']); ?>" ><?php echo htmlspecialchars($this->_var['goods_0_27619800_1410625894']['short_name']); ?></a></p>
      <p class="mod_goods_price"><span class="mod_price"><span><?php if ($this->_var['goods_0_27619800_1410625894']['promote_price'] != ""): ?>
         <?php echo $this->_var['goods_0_27619800_1410625894']['promote_price']; ?>
          <?php else: ?>
          <?php echo $this->_var['goods_0_27619800_1410625894']['shop_price']; ?>
          <?php endif; ?></span></span></p>
    </div>
  </div>
</li>

<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
