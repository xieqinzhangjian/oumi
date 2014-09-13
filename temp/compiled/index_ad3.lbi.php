<div class="slider" id="slider" style="position:relative;">
  <ul style="LEFT: 0px; OVERFLOW: hidden; POSITION: absolute; TOP: 0px; HEIGHT: 330px">
  <?php $_from = $this->_var['flash']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'flash_0_24718300_1410625894');$this->_foreach['myflash'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['myflash']['total'] > 0):
    foreach ($_from AS $this->_var['flash_0_24718300_1410625894']):
        $this->_foreach['myflash']['iteration']++;
?> 
    <li style="FLOAT: left; WIDTH: 800px; HEIGHT: 330px"><a target="_blank" href="<?php echo $this->_var['flash_0_24718300_1410625894']['url']; ?>" title="<?php echo $this->_var['flash_0_24718300_1410625894']['name']; ?>" ><img src="<?php echo $this->_var['flash_0_24718300_1410625894']['src']; ?>" alt="<?php echo $this->_var['flash_0_24718300_1410625894']['name']; ?>"></a></li>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
 </ul>
  </div>



