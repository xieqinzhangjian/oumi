function get_gallery_attr(goods_id, goods_attr_id)
	{		
		Ajax.call('goods.php?act=get_gallery_attr', 'id=' + goods_id + '&goods_attr_id=' + goods_attr_id , get_gallery_attr_Response, 'GET', 'JSON');
	}

	function get_gallery_attr_Response(result)	
	{		
		var zoom = document.getElementById('zoom'); 
		zoom.href = result.bigimg; 
		zoom.rel = 'zoom-position: right; zoom-height:360px;zoom-width:400px;'; 
		zoom.firstChild.src = result.middimg; 		
		MagicZoom.refresh();
		
		/* 
		*   注意此处的 demo1 名字要与 library/goods_gallery.lbi里的 <div id="demo1" style="float:left"> 里的ID一致 
		*   By www.ecshop120.com
		*/		
		document.getElementById("demo1").style.marginLeft="0px";
		document.getElementById("demo2").style.marginLeft="0px";
		document.getElementById("demo1").innerHTML = result.thumblist;  
		document.getElementById("demo2").innerHTML = ''; 
		
	  var boxwidth=76;//跟图片的实际尺寸相符      
      var box=document.getElementById("demo");
      var obox=document.getElementById("demo1");
      var dulbox=document.getElementById("demo2");
      obox.style.width=obox.getElementsByTagName("li").length*boxwidth+'px';
      dulbox.style.width=obox.getElementsByTagName("li").length*boxwidth+'px';
      box.style.width=obox.getElementsByTagName("li").length*boxwidth*3+'px';
       canroll = false;
      if (obox.getElementsByTagName("li").length >= 4) {
        canroll = true;
        dulbox.innerHTML=obox.innerHTML;
      }
       step=5;temp=1;speed=50;
       awidth=obox.offsetWidth;
       mData=0;
       isStop = 1;
       dir = 1;
		
		
	}

	
function changeAtt(t,goods_id) {
t.lastChild.checked='checked';
for (var i = 0; i<t.parentNode.childNodes.length;i++) {
	if (t.parentNode.childNodes[i].className == 'cattsel') {
		t.parentNode.childNodes[i].className = '';
	}
}

t.className = "cattsel";
var formBuy = document.forms['ECS_FORMBUY'];
spec_arr = getSelectedAttributes(formBuy);
Ajax.call('goods.php?act=get_products_info', 'id=' + spec_arr+ '&goods_id=' + goods_id, shows_number, 'GET', 'JSON');
changePrice();
}

function shows_number(result)
{
if(result.product_number !=undefined)
{
	document.getElementById('shows_number').innerHTML = result.product_number;
}
else
{
	document.getElementById('shows_number').innerHTML = '无货'
}
}


function showMiddImage(t){		
		var demo=document.getElementById('demo');
		var demoa=demo.getElementsByTagName("a");
		for(var i=0;i<demoa.length;i++){
		 demoa[i].className='';
		}
		t.className="gallery_img_cur";
}		