//轮播图左侧导航
var bn_hovers=$("#banner .banner-hover");
for(var i=0;i<bn_hovers.length;i++){
	bn_hovers[i].style.width=bn_hovers[i].children.length*247+"px";
}

//轮播图：
	//获取轮播图左侧按钮
var btn_left=$("#banner>.banner>.back");
	//获取轮播图右侧按钮
var btn_right=$("#banner>.banner>.next");
	//获取轮播图的ul
var bn_ul=$("#banner .banner-img");
	//获取所有的分页按钮的最近的共同父元素
var bn_pagbox=$("#banner .paging-button");
	//获取所有的分页按钮
var bn_pags=$("#banner .paging-button b");

var num=0;
	//创建一个函数绑定在左按钮上
var bn_move1=function(){
	num=num+1226;
	if(num>0){
		num=-4904;
	}
	bn_ul.style.left=num+"px";
	for(var j=0;j<bn_pags.length;j++){
		bn_pags[j].className=j;
	}
	bn_pags[num/-1226].className="active";
}
btn_left.addEventListener("click",bn_move1);
	//创建一个函数绑定在右按钮上
var bn_move2=function(){
	num=num-1226;
	if(num==-6130){
		num=0;
	}
	bn_ul.style.left=num+"px";
	for(var j=0;j<bn_pags.length;j++){
		bn_pags[j].className=j;
	}
	bn_pags[num/-1226].className="active";
}
btn_right.addEventListener("click",bn_move2);

	//所有的分页按钮的最近的共同父元素绑定事件，利用冒泡
bn_pagbox.onclick=function(e){
	if(e.target.nodeName=="B"){
		for(var j=0;j<bn_pags.length;j++){
			bn_pags[j].className=j;
		}
		bn_ul.style.left=e.target.className*(-1226)+"px";
		e.target.className="active";
	}
}


//楼层
	//楼层标题右上角是ul的加上轮播效果
var plc_tops=$(".public-top>ul");
for(var i=0;i<plc_tops.length;i++){
	plc_tops[i].onclick=function(e){
		var plc_lis=this.children;
		var item_uls=this.parentNode.nextElementSibling.getElementsByTagName("ul");
		var x=plc_lis.length;
		var y=item_uls.length;
		if(e.target.nodeName=="LI"){
			for(var i=0;i<x;i++){
				plc_lis[i].className=i;
			}
			for(var j=0;j<y;j++){
				item_uls[j].style.display="none";
			}
			item_uls[e.target.className].style.display="block";
			e.target.className="active";
		}
	} 
}

	//为你推荐的轮播效果
	//获取轮播的左按钮
var rcm_left=$("#recommend .recommend-icon-left");
	//获取轮播的右按钮
var rcm_right=$("#recommend .recommend-icon-right");
	//获取轮播的ul
var rcm_ul=$("#recommend .recommend-item");
	//创建一个变量保存轮播的ul的所有样式属性
var styleList=getComputedStyle(rcm_ul),a=0;
	//创建一个函数绑定在左按钮上
var rcm_move1=function(){
	//获取轮播ul的left属性的值转化为数字保存在a中
	a=parseInt(styleList.left);
	//判断如果a<0的话，左按钮的样式，并且设置轮播的left属性值
	if(a<0){
		rcm_left.className="recommend-icon-left fl action";
		a+=1226;
		rcm_ul.style.left=a+"px";
		//判断轮播left属性更改后的情况下左右按钮的三种样式
		if(a==0){
			rcm_left.className="recommend-icon-left fl not-allowed";
			rcm_right.className="recommend-icon-right fr action";
		}else if(a<0 && a>-3678){
			rcm_left.className="recommend-icon-left fl action";
			rcm_right.className="recommend-icon-right fr action";
		}else if(a==-3678){
			rcm_right.className="recommend-icon-right fr not-allowed";
			rcm_left.className="recommend-icon-left fl action";
		}
	}
}
rcm_left.addEventListener("click",rcm_move1);
	//创建一个函数绑定在右按钮上
var rcm_move2=function(){
	//获取轮播ul的left属性的值转化为数字保存在a中
	a=parseInt(styleList.left);
	//判断如果a>-3678的话，右按钮的样式，并且设置轮播的left属性值
	if(a>-3678){
		rcm_right.className="recommend-icon-right fr action";
		a-=1226;
		rcm_ul.style.left=a+"px";
		//判断轮播left属性更改后的情况下左右按钮的三种样式
		if(a==0){
			rcm_left.className="recommend-icon-left fl not-allowed";
			rcm_right.className="recommend-icon-right fr action";
		}else if(a<0 && a>-3678){
			rcm_left.className="recommend-icon-left fl action";
			rcm_right.className="recommend-icon-right fr action";
		}else if(a==-3678){
			rcm_right.className="recommend-icon-right fr not-allowed";
			rcm_left.className="recommend-icon-left fl action";
		}
	}	
}
rcm_right.addEventListener("click",rcm_move2);

//内容
