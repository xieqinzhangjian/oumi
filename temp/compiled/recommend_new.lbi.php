<div class="grid_m">
  <div class="ftejia_goods_wrap">
    <ul class="ftejia_goods">
      <?php $_from = $this->_var['new_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_47663700_1410625894');if (count($_from)):
    foreach ($_from AS $this->_var['goods_0_47663700_1410625894']):
?>
      <li class="">
        <div class="mod_goods">
          <div class="mod_goods_img load_effect"> <a target="_blank" href="<?php echo $this->_var['goods_0_47663700_1410625894']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_47663700_1410625894']['name']); ?>"><img _src="<?php echo $this->_var['goods_0_47663700_1410625894']['thumb']; ?>" /></a> </div>
          <div class="mod_goods_info">
            <p class="mod_goods_price"><span class="mod_price"><span><?php if ($this->_var['goods_0_47663700_1410625894']['promote_price'] != ""): ?> 
              <?php echo $this->_var['goods_0_47663700_1410625894']['shop_price']; ?> 
              
              <?php else: ?> 
              <?php echo $this->_var['goods_0_47663700_1410625894']['shop_price']; ?> 
              
              <?php endif; ?></span></span></p>
            <p class="mod_goods_tit"><a target="_blank" href="<?php echo $this->_var['goods_0_47663700_1410625894']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_47663700_1410625894']['name']); ?>"><?php echo $this->_var['goods_0_47663700_1410625894']['short_style_name']; ?></a></p>
          </div>
        </div>
      </li>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      
    </ul>
  </div>
</div>
