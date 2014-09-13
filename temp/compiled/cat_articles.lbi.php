<div class="notice">
                <div class="notice_hd">
                    <div class="notice_tit">公告</div>
                    <div class="notice_go hide" id="j_nbtn">
                        <i class="notice_go_prev" id="j_nprev">&lt;</i>
                        <i class="notice_go_next" id="j_nnext">&gt;</i>
                    </div>
                </div>
                <div class="notice_bd">
				
<?php $_from = $this->_var['articles']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'article_item');$this->_foreach['name'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name']['total'] > 0):
    foreach ($_from AS $this->_var['article_item']):
        $this->_foreach['name']['iteration']++;
?>
<?php if (($this->_foreach['name']['iteration'] <= 1)): ?>
	<ul class="notice_list" id="j_notice">
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] < 3): ?>
                        <li><a target="_blank" href="<?php echo $this->_var['article_item']['url']; ?>" title="<?php echo $this->_var['article_item']['title']; ?>" ><?php echo $this->_var['article_item']['short_title']; ?></a></li>
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] == 2): ?>                    
</ul>
<?php endif; ?>

<?php if ($this->_foreach['name']['iteration'] == 3): ?>
<ul class="notice_list hide" id="j_notice">
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] > 2 && $this->_foreach['name']['iteration'] < 5): ?>
<li><a target="_blank" href="<?php echo $this->_var['article_item']['url']; ?>" title="<?php echo $this->_var['article_item']['title']; ?>" ><?php echo $this->_var['article_item']['short_title']; ?></a></li>
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] == 4): ?>                    
</ul>
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] == 5): ?>
<ul class="notice_list hide" id="j_notice">
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] > 4 && $this->_foreach['name']['iteration'] < 7): ?>
<li><a target="_blank" href="<?php echo $this->_var['article_item']['url']; ?>" title="<?php echo $this->_var['article_item']['title']; ?>" ><?php echo $this->_var['article_item']['short_title']; ?></a></li>
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] == 6): ?>                    
</ul>
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] == 7): ?>
<ul class="notice_list hide" id="j_notice">
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] > 6 && $this->_foreach['name']['iteration'] < 9): ?>
<li><a target="_blank" href="<?php echo $this->_var['article_item']['url']; ?>" title="<?php echo $this->_var['article_item']['title']; ?>" ><?php echo $this->_var['article_item']['short_title']; ?></a></li>
<?php endif; ?>
<?php if ($this->_foreach['name']['iteration'] == 8): ?>                    
</ul>
<?php endif; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>

				</div>
            </div>


