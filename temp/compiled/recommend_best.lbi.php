     <?php $_from = $this->_var['best_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');$this->_foreach['name'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name']['total'] > 0):
    foreach ($_from AS $this->_var['goods']):
        $this->_foreach['name']['iteration']++;
?>
      <li <?php if (($this->_foreach['name']['iteration'] <= 1)): ?>class="ulike_r1_narrow"<?php endif; ?> 
      <?php if ($this->_foreach['name']['iteration'] > 1 && $this->_foreach['name']['iteration'] < 4): ?>class="ulike_r1_mark_wrap"<?php endif; ?>
     >
        <div class="mod_goods mod_goods_w80" _loaded="true">
          <div class="mod_goods_img load_effect"> <a target="_blank" href="<?php echo $this->_var['goods']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>"><img src="<?php echo $this->_var['goods']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>"  width="80" height="80"/></a> </div>
          <div class="mod_goods_info">
            <p <?php if ($this->_var['goods']['promote_price'] != ""): ?>class="mod_goods_promo"<?php else: ?>class="mod_goods_tit"<?php endif; ?>><a href="<?php echo $this->_var['goods']['url']; ?>" target="_blank" title="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>"><a href="<?php echo $this->_var['goods']['url']; ?>" target="_blank" title="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>" ><?php echo $this->_var['goods']['short_style_name']; ?></a></p>
            <p class="mod_goods_price"><span class="mod_price"><span><?php if ($this->_var['goods']['promote_price'] != ""): ?>
          <?php echo $this->_var['goods']['promote_price']; ?>
          <?php else: ?>
          <?php echo $this->_var['goods']['shop_price']; ?>
          <?php endif; ?></span></span></p>
          </div>
        </div>
      </li>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      
    