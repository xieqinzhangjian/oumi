<script language="javascript"> 
<!--
/*屏蔽所有的js错误*/
function killerrors() { 
return true; 
} 
window.onerror = killerrors; 
//-->
</script>
<?php
function get_subcate_byurl($url)
{
	$rs = strpos($url,"category");
	if($rs!==false)
	{
		preg_match("/\d+/i",$url,$matches);
		$cid = $matches[0];
		$cat_arr = array();
		$sql = "select * from ".$GLOBALS['ecs']->table('category')." where parent_id=".$cid." and is_show=1 ORDER BY sort_order ASC, cat_id ASC";
		$res = $GLOBALS['db']->getAll($sql);
		
		foreach($res as $idx => $row)
		{
			$cat_arr[$idx]['id']   = $row['cat_id'];
            $cat_arr[$idx]['name'] = $row['cat_name'];
            $cat_arr[$idx]['url']  = build_uri('category', array('cid' => $row['cat_id']), $row['cat_name']);
			$cat_arr[$idx]['children'] = get_clild_list($row['cat_id']);
		}

		return $cat_arr;
	}
	else 
	{
		return false;
	}
}

function get_clild_list($pid)
{
    $sql_sub = "select * from ".$GLOBALS['ecs']->table('category')." where parent_id=".$pid." and is_show=1 ORDER BY sort_order ASC, cat_id ASC";

	$subres = $GLOBALS['db']->getAll($sql_sub);
	if($subres)
	{
		foreach ($subres as $sidx => $subrow)
		{
			$children[$sidx]['id']=$subrow['cat_id'];
			$children[$sidx]['name']=$subrow['cat_name'];
			$children[$sidx]['url']=build_uri('category', array('cid' => $subrow['cat_id']), $subrow['cat_name']);
		}
	}
	else 
	{
		$children = null;
	}
			
	return $children;
}
//
function get_brands1($url = 0, $app = 'brand')
{
	preg_match("/\d+/i",$url,$matches);
	$cat = $matches[0];
	$children = ($cat > 0) ? ' AND ' . get_children($cat) : '';

    $sql = "SELECT b.brand_id, b.brand_name, b.brand_logo, b.brand_desc, COUNT(*) AS goods_num, IF(b.brand_logo > '', '1', '0') AS tag ".
            "FROM " . $GLOBALS['ecs']->table('brand') . "AS b, ".
                $GLOBALS['ecs']->table('goods') . " AS g ".
            "WHERE g.brand_id = b.brand_id $children AND is_show = 1 " .
            " AND g.is_on_sale = 1 AND g.is_alone_sale = 1 AND g.is_delete = 0 ".
            "GROUP BY b.brand_id HAVING goods_num > 0 ORDER BY tag DESC, b.sort_order ASC";
    $row = $GLOBALS['db']->getAll($sql);

    foreach ($row AS $key => $val)
    {
        $row[$key]['url'] = build_uri($app, array('cid' => $cat, 'bid' => $val['brand_id']), $val['brand_name']);
        $row[$key]['brand_desc'] = htmlspecialchars($val['brand_desc'],ENT_QUOTES);
    }

    return $row;
}
//
function get_promotion_info1($goods_id = '')
{
    $snatch = array();
    $group = array();
    $auction = array();
    $package = array();
    $favourable = array();

    $gmtime = gmtime();
    $sql = 'SELECT act_id, act_name, act_type, start_time, end_time FROM ' . $GLOBALS['ecs']->table('goods_activity') . " WHERE is_finished=0 AND start_time <= '$gmtime' AND end_time >= '$gmtime'";
    if(!empty($goods_id))
    {
        $sql .= " AND goods_id = '$goods_id'";
    }
    $res = $GLOBALS['db']->getAll($sql);
    foreach ($res as $data)
    {
        switch ($data['act_type'])
        {
            case GAT_SNATCH: //夺宝奇兵
                $snatch[$data['act_id']]['act_name'] = $data['act_name'];
                $snatch[$data['act_id']]['url'] = build_uri('snatch', array('sid' => $data['act_id']));
                $snatch[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $snatch[$data['act_id']]['sort'] = $data['start_time'];
                $snatch[$data['act_id']]['type'] = 'snatch';
                break;

            case GAT_GROUP_BUY: //团购
                $group[$data['act_id']]['act_name'] = $data['act_name'];
                $group[$data['act_id']]['url'] = build_uri('group_buy', array('gbid' => $data['act_id']));
                $group[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $group[$data['act_id']]['sort'] = $data['start_time'];
                $group[$data['act_id']]['type'] = 'group_buy';
                break;

            case GAT_AUCTION: //拍卖
                $auction[$data['act_id']]['act_name'] = $data['act_name'];
                $auction[$data['act_id']]['url'] = build_uri('auction', array('auid' => $data['act_id']));
                $auction[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $auction[$data['act_id']]['sort'] = $data['start_time'];
                $auction[$data['act_id']]['type'] = 'auction';
                break;

            case GAT_PACKAGE: //礼包
                $package[$data['act_id']]['act_name'] = $data['act_name'];
                $package[$data['act_id']]['url'] = 'package.php#' . $data['act_id'];
                $package[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $package[$data['act_id']]['sort'] = $data['start_time'];
                $package[$data['act_id']]['type'] = 'package';
                break;
        }
    }

    $user_rank = ',' . $_SESSION['user_rank'] . ',';
    $favourable = array();
    $sql = 'SELECT act_id, act_range, act_range_ext, act_name, start_time, end_time FROM ' . $GLOBALS['ecs']->table('favourable_activity') . " WHERE start_time <= '$gmtime' AND end_time >= '$gmtime'";
    if(!empty($goods_id))
    {
        $sql .= " AND CONCAT(',', user_rank, ',') LIKE '%" . $user_rank . "%'";
    }
    $res = $GLOBALS['db']->getAll($sql);

    if(empty($goods_id))
    {
        foreach ($res as $rows)
        {
            $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
            $favourable[$rows['act_id']]['url'] = 'activity.php';
            $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
            $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
            $favourable[$rows['act_id']]['type'] = 'favourable';
        }
    }
    else
    {
        $sql = "SELECT cat_id, brand_id FROM " . $GLOBALS['ecs']->table('goods') .
           "WHERE goods_id = '$goods_id'";
        $row = $GLOBALS['db']->getRow($sql);
        $category_id = $row['cat_id'];
        $brand_id = $row['brand_id'];

        foreach ($res as $rows)
        {
            if ($rows['act_range'] == FAR_ALL)
            {
                $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                $favourable[$rows['act_id']]['url'] = 'activity.php';
                $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                $favourable[$rows['act_id']]['type'] = 'favourable';
            }
            elseif ($rows['act_range'] == FAR_CATEGORY)
            {
                /* 找出分类id的子分类id */
                $id_list = array();
                $raw_id_list = explode(',', $rows['act_range_ext']);
                foreach ($raw_id_list as $id)
                {
                    $id_list = array_merge($id_list, array_keys(cat_list($id, 0, false)));
                }
                $ids = join(',', array_unique($id_list));

                if (strpos(',' . $ids . ',', ',' . $category_id . ',') !== false)
                {
                    $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                    $favourable[$rows['act_id']]['url'] = 'activity.php';
                    $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                    $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                    $favourable[$rows['act_id']]['type'] = 'favourable';
                }
            }
            elseif ($rows['act_range'] == FAR_BRAND)
            {
                if (strpos(',' . $rows['act_range_ext'] . ',', ',' . $brand_id . ',') !== false)
                {
                    $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                    $favourable[$rows['act_id']]['url'] = 'activity.php';
                    $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                    $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                    $favourable[$rows['act_id']]['type'] = 'favourable';
                }
            }
            elseif ($rows['act_range'] == FAR_GOODS)
            {
                if (strpos(',' . $rows['act_range_ext'] . ',', ',' . $goods_id . ',') !== false)
                {
                    $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                    $favourable[$rows['act_id']]['url'] = 'activity.php';
                    $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                    $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                    $favourable[$rows['act_id']]['type'] = 'favourable';
                }
            }
        }
    }

    $sort_time = array();
    $arr = array_merge($snatch, $group, $auction, $package, $favourable);
    foreach($arr as $key => $value)
    {
        $sort_time[] = $value['sort'];
    }
    array_multisort($sort_time, SORT_NUMERIC, SORT_DESC, $arr);

    return $arr;
}
$this->assign('promotion_info1', get_promotion_info1());
?>

<?php echo $this->fetch('library/user_header.lbi'); ?>
<div class="ic_header">
  <div class="grid_c1">
    <div class="mod_fbanner" id="j_fbanner"> <?php 
$k = array (
  'name' => 'ads',
  'id' => '1',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?> <i class="mod_fbanner_close" id="j_fbanner_close">close</i> </div>
    <div class="mod_logo">
      <h1><a href="index.php"><img src="themes/68ecshopcom_360buy/images/icson/img/common/logo_2013_v1.png" alt="回到首页" /></a> </h1>
    </div>
    <div class="search_cart_wrap" id="j_search" >
      <script src="themes/68ecshopcom_360buy/images/page.js" type="text/javascript"></script>  
      <div class="mod_search">
      <div id="search_tips" style="display:none;"></div>
        <form id="searchForm" name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()">
          <input class="mod_search_con"  type="text"  name="keywords"  id="keyword" value="<?php echo htmlspecialchars($this->_var['search_keywords']); ?>"   value="<?php if ($this->_var['search_keywords']): ?><?php echo htmlspecialchars($this->_var['search_keywords']); ?><?php else: ?>请输入关键词<?php endif; ?>" onkeyup="STip(this.value, event);" autocomplete="off" onFocus="this.value=''"/>
          <input class="mod_search_btn" tabindex="9"  type="submit" />
        </form>
      </div>
      <div class="mod_minicart" id="j_minicart"> <?php 
$k = array (
  'name' => 'cart_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?> </div>
     <!--  <div class="mod_skey" id="page_sKey"> <?php $_from = $this->_var['searchkeywords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'val');$this->_foreach['kef'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['kef']['total'] > 0):
    foreach ($_from AS $this->_var['val']):
        $this->_foreach['kef']['iteration']++;
?> <a href="search.php?keywords=<?php echo urlencode($this->_var['val']); ?>" target="_blank"> <?php if (($this->_foreach['kef']['iteration'] <= 1)): ?> <font color='#fee602'><?php echo $this->_var['val']; ?></font> <?php else: ?>
        <?php echo $this->_var['val']; ?>
        <?php endif; ?> </a> <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> </div> -->
      <div class="mod_skey hide" id="j_skey"></div>
    </div>
  </div>
</div>
<div class="ic_nav" id="j_nav">
  <div class="grid_c1">
    <div class="mod_cate mod_cate_on" id="category_container">
      <div class="mod_cate_hd">
        <div class="mod_cate_hd_con">全部商品分类</div>
        
        <i style="display: none;" class="mod_cate_hd_arrow"></i> </div>
      <ul class="mod_cate_bd">
      <?php $_from = get_categories_tree(0); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');$this->_foreach['cat0'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['cat0']['total'] > 0):
    foreach ($_from AS $this->_var['cat']):
        $this->_foreach['cat0']['iteration']++;
?>
       <?php if ($this->_foreach['cat0']['iteration'] < 11): ?>
        <li id="cate<?php echo ($this->_foreach['cat0']['iteration'] - 1); ?>" index="<?php echo ($this->_foreach['cat0']['iteration'] - 1); ?>" class="mod_cate_li " >
       	<div class="mod_cate_r1">
        
          <h3><a target="_blank" href="<?php echo $this->_var['cat']['url']; ?>"><?php echo htmlspecialchars($this->_var['cat']['name']); ?></a></h3>
           <i class="mod_cate_arrow"></i></div>
        <div class="mod_cate_r2"><?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');$this->_foreach['name'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name']['total'] > 0):
    foreach ($_from AS $this->_var['child']):
        $this->_foreach['name']['iteration']++;
?>
           <?php if ($this->_foreach['name']['iteration'] < 5): ?>
          <a target="_blank" class="" href="<?php echo $this->_var['child']['url']; ?>"><?php echo $this->_var['child']['name']; ?></a>
          <?php endif; ?>
          <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
          </div>
     <div style="<?php if (($this->_foreach['cat0']['iteration'] <= 1)): ?>top: -2px;<?php elseif ($this->_foreach['cat0']['iteration'] == 2): ?>top:-65px;<?php else: ?>top:-100px;<?php endif; ?> height:auto; " class="mod_subcate">
     <div class="mod_subcate_item" >
          <div class="mod_subcate_main">
            
              <?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');$this->_foreach['name1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name1']['total'] > 0):
    foreach ($_from AS $this->_var['child']):
        $this->_foreach['name1']['iteration']++;
?>
            <dl>
              <dt><?php echo htmlspecialchars($this->_var['child']['name']); ?></dt>
              <dd>
              <?php $_from = $this->_var['child']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'childer');if (count($_from)):
    foreach ($_from AS $this->_var['childer']):
?>
              <a target="_blank" class="" href="<?php echo $this->_var['childer']['url']; ?>" ><?php echo htmlspecialchars($this->_var['childer']['name']); ?></a>
              <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
              </dd>
            </dl>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            
            
            <div class="mod_subcate_channel">
           <a target="_blank" class="mod_btn_arrow " href="<?php echo $this->_var['cat']['url']; ?>"><b><?php echo $this->_var['cat']['name']; ?>频道</b><i></i></a>
            </div>
          </div>
          <div class="mod_subcate_side">
            <div class="mod_subcate_side_hd">热门品牌</div>
            <ul class="mod_subcate_side_brand">
              <?php $_from = get_brands1($GLOBALS[smarty]->_var[cat][id]); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'bchilder');$this->_foreach['name1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name1']['total'] > 0):
    foreach ($_from AS $this->_var['bchilder']):
        $this->_foreach['name1']['iteration']++;
?>
              <li><a target="_blank" href="<?php echo $this->_var['bchilder']['url']; ?>" class="" ><img src="data/brandlogo/<?php echo $this->_var['bchilder']['brand_logo']; ?>" init_src="data/brandlogo/<?php echo $this->_var['bchilder']['brand_logo']; ?>" width="100" height="40"></a></li>
              <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            </ul>
            <div class="mod_subcate_side_hd">热门活动</div>
            <ul class="mod_subcate_side_postlist">
               <?php $_from = $this->_var['promotion_info1']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item1');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item1']):
?>
                          <LI>
                            <?php if ($this->_var['item1']['type'] == "snatch"): ?>
                            <a href="snatch.php" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?>" target="_blank"><?php echo $this->_var['lang']['snatch_promotion']; ?></a>
                            <?php elseif ($this->_var['item1']['type'] == "group_buy"): ?>
                            <a href="group_buy.php" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?>"  target="_blank"><?php echo $this->_var['lang']['group_promotion']; ?></a>
                            <?php elseif ($this->_var['item1']['type'] == "auction"): ?>
                            <a href="auction.php" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?>"  target="_blank"><?php echo $this->_var['lang']['auction_promotion']; ?></a>
                            <?php elseif ($this->_var['item1']['type'] == "favourable"): ?>
                            <a href="activity.php" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?>"  target="_blank"><?php echo $this->_var['lang']['favourable_promotion']; ?></a>
                            <?php elseif ($this->_var['item1']['type'] == "package"): ?>
                            <a href="package.php" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?>"  target="_blank"><?php echo $this->_var['lang']['package_promotion']; ?></a>
                            <?php endif; ?>
                            <a href="<?php echo $this->_var['item1']['url']; ?>" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?> <?php echo $this->_var['item1']['act_name']; ?><?php echo $this->_var['item1']['time']; ?>"  target="_blank"><?php echo $this->_var['item1']['act_name']; ?></a></LI>
                          <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            </ul>
            <i class="mod_subcate_gg_ph"></i></div>
             <?php
	 $cat_info = get_cat_info_ex($GLOBALS['smarty']->_var['cat']['id']);

	$GLOBALS['smarty']->assign('index_image',get_advlist('导航菜单-'.$cat_info['cat_id'].'-右侧-图片', 1));
	  ?>
       <?php if ($this->_var['index_image']): ?>
           <?php $_from = $this->_var['index_image']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['index_image'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_image']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['index_image']['iteration']++;
?>
                        <a target="_blank" class="mod_subcate_gg " href="<?php echo $this->_var['ad']['url']; ?>" ><img src="<?php echo $this->_var['ad']['image']; ?>" init_src="<?php echo $this->_var['ad']['image']; ?>"></a>
                        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
         
                  <?php endif; ?>
                  
          
          </div>
      </div>
          
          
        </li>
         <?php endif; ?>
          <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
       
      </ul>
      
    </div>
    <div class="mod_nav">
      <ul class="mod_nav_ul" id="j_hornav">
        <li class="mod_nav_li"><a target="_blank" href="index.php"><?php echo $this->_var['lang']['home']; ?></a></li>
        <li class="mod_nav_gap">|</li>
        <?php $_from = $this->_var['navigator_list']['middle']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_middle_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_middle_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_middle_list']['iteration']++;
?>
        <li class="mod_nav_li"><a target="_blank" href="<?php echo $this->_var['nav']['url']; ?>" <?php if ($this->_var['nav']['opennew'] == 1): ?>target="_blank" <?php endif; ?>><?php echo $this->_var['nav']['name']; ?></a> <?php if (($this->_foreach['nav_middle_list']['iteration'] <= 1) || $this->_foreach['nav_middle_list']['iteration'] == 6): ?> <i class="mod_nav_ico mod_nav_hot"></i> <?php endif; ?> </li>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      </ul>
    </div>
  </div>
</div>
<script type="text/javascript">
//<![CDATA[

window.onload = function()
{
  fixpng();
}
function checkSearchForm()
{
    if(document.getElementById('keyword').value)
    {
        return true;
    }
    else
    {
		    alert("请输入关键词！");
        return false;
    }
}

function myValue1()
{
	document.getElementById('keyword').value = "请输入商品名称或编号...";
}

function myValue2()
{
	document.getElementById('keyword').value = "";
}




//document.oncontextmenu=function(e){return false;} 

var myul = document.getElementById('my_main_nav');
var myli = myul.getElementsByTagName('li');
for(var i = 0;i<myli.length;i++){
	
	if(myli[i].className !='cp'){
		myli[i].onmouseover = function(){this.className = 'nav_hover';}
		myli[i].onmouseout  = function(){this.className ='';}
	}
}


//]]>

function deleteCartGoods(rec_id)
{
Ajax.call('delete_cart_goods.php', 'id='+rec_id, deleteCartGoodsResponse, 'POST', 'JSON');
}

/**
 * 接收返回的信息
 */
function deleteCartGoodsResponse(res)
{
  if (res.error)
  {
    alert(res.err_msg);
  }
  else
  {
      document.getElementById('j_minicart').innerHTML = res.content;
  }
}
</script>
<div class="blank10"></div>
<script>
/* *
 * 清除购物车购买商品数量
 */
function delet(rec_id)
{
	var formBuy      = document.forms['formCart'];
	var domname='goods_number_'+rec_id;
	var attr = getSelectedAttributes(document.forms['formCart']);
	var qty = parseInt(document.getElementById(domname).innerHTML)==0;
	Ajax.call('flow.php', 'step=price&rec_id=' + rec_id + '&number=' + qty, changecartPriceResponse, 'GET', 'JSON');
}			
/* *
 * 增加购物车购买商品数量
 */
function addcartnum(rec_id)
{
  var attr = getSelectedAttributes(document.forms['formCart']);
  var domname='goods_number_'+rec_id;
  var qty = parseInt(document.getElementById(domname).innerHTML)+1;
  Ajax.call('flow.php', 'step=price&rec_id=' + rec_id + '&number=' + qty, changecartPriceResponse, 'GET', 'JSON');
}
/* *
 * 减少购买商品数量
 */
function lesscartnum(rec_id)
{
    var formBuy      = document.forms['formCart'];
	var domname='goods_number_'+rec_id;
	var attr = getSelectedAttributes(document.forms['formCart']);
	var qty = parseInt(document.getElementById(domname).innerHTML)-1;
	Ajax.call('flow.php', 'step=price&rec_id=' + rec_id + '&number=' + qty, changecartPriceResponse, 'GET', 'JSON');
}
/**
 * 接收返回的信息
 */
function changecartPriceResponse(res)
{
  if (res.err_msg.length > 0 )
  {
    alert(res.err_msg);
  }
  else
  {
	var domnum='goods_number_'+res.rec_id;
	if(res.qty <= 0){
    	document.getElementById('j_minicart').innerHTML = res.content1;
	}else{
    	document.getElementById(domnum).innerHTML = res.qty;
	}
    document.getElementById('j_minicart').innerHTML = res.result;
  }
}


function changallser(allser)
{
	document.getElementById(allser).className='item fore';
}
</script> 
<?php echo $this->smarty_insert_scripts(array('files'=>'jquery-1.5.1.min.js')); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'jquery.json.js,transport.js')); ?> 
<script>
        	$(".mod_cate_bd li.mod_cate_li").hover(
		function(){
			$(this).find(".mod_subcate").show();
			$(this).addClass('mod_cate_li_on');
		},
		function(){
			$(this).find(".mod_subcate").hide();
			$(this).removeClass('mod_cate_li_on');
		}
	);
    </script>
    <script>
	var $prompt_shopcart = $('#j_minicart_pop');
	var timerShopCart = null;
	$("#j_minicart").hover(function(){
			if(timerShopCart != null){
				clearTimeout(timerShopCart);
			}else{
			$('.mod_minicart_con').addClass('mod_minicart_on');
			$prompt_shopcart.show();
			}
		},function(){
			timerShopCart = setTimeout(function(){
				$prompt_shopcart.hide();
				$('.mod_minicart_con').removeClass('mod_minicart_on');
				timerShopCart = null;
			},500);
			
		}
	);
</script>