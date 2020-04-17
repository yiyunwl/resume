var $=function(selector){
    var arr=document.querySelectorAll(selector);
    if(arr.length==1){
        return arr[0]
    }else{
        return arr
    }
}