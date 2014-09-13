<?php
define('IN_ECS', true);
require(dirname(__FILE__) . '/includes/init.php');
require_once(ROOT_PATH . '/' . ADMIN_PATH . '/includes/lib_goods.php');
include_once(ROOT_PATH . '/includes/cls_image.php');
$image = new cls_image($_CFG['bgcolor']);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>上传</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style>
body{font-size:12px;}
.gallery_box{width:100%;height:auto;}
.gallery_img_box{float:left;width:120px;border:1px solid #eeeeee;margin-right:5px;text-align:center;}
.gallery_img{width:100px;height:100px;}
.blank{height:10px; line-height:10px; clear:both; visibility:hidden;}
</style>
<body>
<div class="gallery_box">
<?php
$goods_id = $_REQUEST['goods_id'] ? $_REQUEST['goods_id'] : 0;
$goods_attr_id = isset($_REQUEST['goods_attr_id']) ? intval($_REQUEST['goods_attr_id']) : '-1';
if(!$goods_id or $goods_attr_id=='-1' )
{
	echo '<center><br>错误操作！</center>';
	exit;
}
//echo $goods_attr_id;

/* 上传属性相册 */
if($_REQUEST['act']=="upload")
{
	 handle_gallery_image_attr($goods_id, $goods_attr_id, $_FILES['img_url'], $_POST['img_desc'], $_POST['img_file']);
}
/*------------------------------------------------------ */
//-- 删除图片
/*------------------------------------------------------ */
elseif ($_REQUEST['act'] == 'drop_image')
{

    $img_id = empty($_REQUEST['img_id']) ? 0 : intval($_REQUEST['img_id']);

    /* 删除图片文件 */
    $sql = "SELECT img_url, thumb_url, img_original " .
            " FROM " . $GLOBALS['ecs']->table('goods_gallery') .
            " WHERE img_id = '$img_id'";
    $row = $GLOBALS['db']->getRow($sql);

    if ($row['img_url'] != '' && is_file('../' . $row['img_url']))
    {
        @unlink('../' . $row['img_url']);
    }
    if ($row['thumb_url'] != '' && is_file('../' . $row['thumb_url']))
    {
        @unlink('../' . $row['thumb_url']);
    }
    if ($row['img_original'] != '' && is_file('../' . $row['img_original']))
    {
        @unlink('../' . $row['img_original']);
    }

    /* 删除数据 */
    $sql = "DELETE FROM " . $GLOBALS['ecs']->table('goods_gallery') . " WHERE img_id = '$img_id' LIMIT 1";
    $GLOBALS['db']->query($sql);

    clear_cache_files();
}



$img_list =array();
$sql = "SELECT * FROM " . $ecs->table('goods_gallery') . " WHERE goods_attr_id= '$goods_attr_id' and goods_id = '$goods_id' order by img_id ";
$img_list = $db->getAll($sql);
if ($img_list)
{
	foreach($img_list as $img)
	{
		echo '<div class="gallery_img_box">';
		echo '<a href="?act=drop_image&goods_id=' . $goods_id . '&goods_attr_id=' . $goods_attr_id . '&img_id='. $img['img_id'] .'" onclick="javascript: return  (confirm(\'确认删除此图片吗\'))">[-]</a><br>';
		echo '<img src="../'.$img['thumb_url'].'"  class="gallery_img">';
		echo '</div>';
	}
}
else
{
		echo '<br>对不起，该属性下还未上传任何图片！';
}
?>
</div>

<div class="blank"></div>
<div class="gallery_box" style="text-align:left;">
<form enctype="multipart/form-data" action="" method="post" >
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上传图片：
<input type="file" name="img_url[]" />
<input type="hidden" name="img_desc[]" value="">
图片显示顺序：<input type="text" name="order_sort[]" value="0" size=1>
<input type="hidden" name="goods_id" value="<?php echo $goods_id;?>">
<input type="hidden" name="goods_attr_id" value="<?php echo $goods_attr_id;?>">
<input type="hidden" name="act" value="upload">
<input type="submit" value="提交">
</form>
</div>
</body>
</html>

<?php
/**
 * 保存某商品的相册图片
 * @param   int     $goods_id
 * @param   array   $image_files
 * @param   array   $image_descs
 * @return  void
 */
function handle_gallery_image_attr($goods_id, $goods_attr_id, $image_files, $image_descs, $image_urls)
{
    /* 是否处理缩略图 */
    $proc_thumb = (isset($GLOBALS['shop_id']) && $GLOBALS['shop_id'] > 0)? false : true;
    foreach ($image_descs AS $key => $img_desc)
    {
        /* 是否成功上传 */
        $flag = false;
        if (isset($image_files['error']))
        {
            if ($image_files['error'][$key] == 0)
            {
                $flag = true;
            }
        }
        else
        {
            if ($image_files['tmp_name'][$key] != 'none')
            {
                $flag = true;
            }
        }

        if ($flag)
        {
            // 生成缩略图
            if ($proc_thumb)
            {
                $thumb_url = $GLOBALS['image']->make_thumb($image_files['tmp_name'][$key], $GLOBALS['_CFG']['thumb_width'],  $GLOBALS['_CFG']['thumb_height']);
                $thumb_url = is_string($thumb_url) ? $thumb_url : '';
            }

			//生成商品详情页图片
           $img_url = $GLOBALS['image']->make_thumb($image_files['tmp_name'][$key] , $GLOBALS['_CFG']['image_width'],  $GLOBALS['_CFG']['image_height']);


            $upload = array(
                'name' => $image_files['name'][$key],
                'type' => $image_files['type'][$key],
                'tmp_name' => $image_files['tmp_name'][$key],
                'size' => $image_files['size'][$key],
            );
            if (isset($image_files['error']))
            {
                $upload['error'] = $image_files['error'][$key];
            }
            $img_original = $GLOBALS['image']->upload_image($upload);
            if ($img_original === false)
            {
                sys_msg($GLOBALS['image']->error_msg(), 1, array(), false);
            }


            if (!$proc_thumb)
            {
                $thumb_url = $img_original;
            }


            /* 重新格式化图片名称 */
            $img_original = reformat_image_name('gallery', $goods_id, $img_original, 'source');
            $img_url = reformat_image_name('gallery', $goods_id, $img_url, 'goods');
            $thumb_url = reformat_image_name('gallery_thumb', $goods_id, $thumb_url, 'thumb');
            $sql = "INSERT INTO " . $GLOBALS['ecs']->table('goods_gallery') . " (goods_id, img_url, img_desc, thumb_url, img_original, goods_attr_id) " .
                    "VALUES ('$goods_id', '$img_url', '$img_desc', '$thumb_url', '$img_original', '$goods_attr_id')";
            $GLOBALS['db']->query($sql);
            /* 不保留商品原图的时候删除原图 */
            if ($proc_thumb && !$GLOBALS['_CFG']['retain_original_img'] && !empty($img_original))
            {
                $GLOBALS['db']->query("UPDATE " . $GLOBALS['ecs']->table('goods_gallery') . " SET img_original='' WHERE `goods_id`='{$goods_id}'");
                @unlink('../' . $img_original);
            }
        }
        elseif (!empty($image_urls[$key]) && ($image_urls[$key] != $GLOBALS['_LANG']['img_file']) && ($image_urls[$key] != 'http://') && copy(trim($image_urls[$key]), ROOT_PATH . 'temp/' . basename($image_urls[$key])))
        {
            $image_url = trim($image_urls[$key]);

            //定义原图路径
            $down_img = ROOT_PATH . 'temp/' . basename($image_url);

            // 生成缩略图
            if ($proc_thumb)
            {
                $thumb_url = $GLOBALS['image']->make_thumb($down_img, $GLOBALS['_CFG']['thumb_width'],  $GLOBALS['_CFG']['thumb_height']);
                $thumb_url = is_string($thumb_url) ? $thumb_url : '';
                $thumb_url = reformat_image_name('gallery_thumb', $goods_id, $thumb_url, 'thumb');
            }

            if (!$proc_thumb)
            {
                $thumb_url = htmlspecialchars($image_url);
            }

            /* 重新格式化图片名称 */
            $img_original = htmlspecialchars($image_url);
            $sql = "INSERT INTO " . $GLOBALS['ecs']->table('goods_gallery') . " (goods_id, img_url, img_desc, thumb_url, img_original, goods_attr_id) " .
                    "VALUES ('$goods_id', '$img_url', '$img_desc', '$thumb_url', '$img_original', '$goods_attr_id')";
            $GLOBALS['db']->query($sql);

            @unlink($down_img);
        }
    }
}

?>