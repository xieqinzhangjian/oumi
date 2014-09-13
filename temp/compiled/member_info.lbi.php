
<?php if ($this->_var['user_info']): ?>
<li class="mod_sitemap_li" ><?php echo $this->_var['lang']['welcome_return']; ?>，<a href="user.php" target="_blank"><?php echo $this->_var['user_info']['username']; ?> </a>&nbsp;&nbsp;</li>
<li class="mod_sitemap_li"><a  href="user.php?act=logout" target="_blank">退出</a> </li>
<li class="mod_sitemap_gap">|</li>
<?php else: ?>
<li class="mod_sitemap_li" ><a href="user.php" target="_blank">登录</a> </li>
<li class="mod_sitemap_gap">|</li>
<li class="mod_sitemap_li"><a  href="user.php?act=register" target="_blank">注册</a> </li>
<li class="mod_sitemap_gap">|</li>
<?php endif; ?>