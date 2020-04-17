//搜索区
var search_ipt=$("#search .search-text>input");
var search_right=$("#search .search-right")
var search_text=$("#search .search-text");
var top_search=$("#search .top-search");
var search_as=$("#search .search-right>a");
search_ipt.onfocus=function(){
	top_search.style.display="block";
	search_right.style.borderColor="#FF6700";
	search_text.style.borderColor="#FF6700";
	for(var i=0;i<search_as.length;i++){
		search_as[i].style.display="none";
	}
}
search_ipt.onblur=function(){
	top_search.style.display="none";
	search_right.style.borderColor="#E0E0E0";
	search_text.style.borderColor="#E0E0E0";
	for(var i=0;i<search_as.length;i++){
		search_as[i].style.display="block";
	}
} 