//页面加载完成触发计时器更换背景并且播放音乐
$(document).ready((e) => {
	var a = 0;
	console.log($("#banner>li:first"));
	$("#banner>li:first").css("background", "url(images/bg" + a + ".jpg) no-repeat 0 0");
	$("#banner>li:first").css("backgroundSize", "cover");
	var order = setInterval(function () {
		if (a < 3) {
			a++;
		} else {
			a = 0;
		}
		$("#banner>li:first").css("background", " url(images/bg" + a + ".jpg) no-repeat 0 0");
		$("#banner>li:first").css("backgroundSize", "cover");
	}, 6000);
	//let  Music = $("#uploadMusic")[0];
	// var Music=document.getElementById("uploadMusic");
	// console.log(Music.play);
	// Music.play();/*播放*/
})
//鼠标移入#bg触发.bg_info的样式改变事件
$("#banner>li:first").mouseover((e) => {
	$(".bg_info").addClass("active");
})

$("#banner>li:first").mouseout((e) => {
	$(".bg_info").removeClass("active");
})


//第三页的元素设置入场动画效果
$("#skill").mouseover((e) => {
	var j = $("#skill_box").children().length;
	//console.log($("#skill_box:nth-child(1)"))
	var t = 1000;
	for (var i = 1; i <= j; i++) {
		$("#skill_box>div:nth-child(" + i + ")").show(t);
		t += 500;
	}
})

/* 分页按钮的点击事件 */
$("#button").click((e) => {
	if (e.target.nodeName == "LI" || e.target.nodeName == "SPAN") {
		//console.log(e.target.nodeName)
		if (e.target.nodeName == "LI") {
			$(e.target).children().addClass("active");
			$(e.target).siblings().children().removeClass("active");
			var i = $("#button>li").index($(e.target));
		} else {
			$(e.target).addClass("active");
			$(e.target).parent().siblings().children().removeClass("active");
			var i = $("#button>li").index($(e.target).parent());
		}
		//console.log(i)
		var li = $("#banner>li")[i];
		$(li).siblings().fadeOut(1000);
		$(li).slideDown(1000);
	}
})

//鼠标滚动事件
window.onload = function () {
	function test() {
		var e = e || window.event;
		var elem = $("#button>li>.active")[0];
		setTimeout(function () {
			if (e.wheelDelta > 0) {
				//console.log(elem.parentElement.previousElementSibling)
				if (elem.parentElement.previousElementSibling) {
					$(elem).removeClass("active");
					//console.log($(elem).parent().prev().children())
					$(elem).parent().prev().children().addClass("active");
				}
			} else {
				if (elem.parentElement.nextElementSibling) {
					$(elem).removeClass("active");
					$(elem).parent().next().children().addClass("active");
				}
			}
			var elem2 = $("#button>li>.active")[0];
			var i = $("#button>li").index($(elem2).parent());
			var elem3 = $("#banner>li")[i];

			$(elem3).siblings().fadeOut(1000);
			$(elem3).slideDown(1000);
		}, 300);
	};
	document.DOMMouseScroll = function () {
		test();
	}
	document.onmousewheel = function () {
		test();
	}
}



$("body").on("touchstart", function (e) {
	startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").on("touchmove", function (e) {
	var elem = $("#button>li>.active")[0];
	moveEndY = e.originalEvent.changedTouches[0].pageY;
	Y = moveEndY - startY;
	console.log(Y);
	setTimeout(function () {
		if (Y < 0) {
			if (elem.parentElement.nextElementSibling) {
				console.log(elem.parentElement.nextElementSibling);
				$(elem).removeClass("active");
				$(elem).parent().next().children().addClass("active");
			}
		} else if (Y > 0) {
			if (elem.parentElement.previousElementSibling) {
				console.log(elem.parentElement.previousElementSibling);
				$(elem).removeClass("active");
				$(elem).parent().prev().children().addClass("active");
			}
		}
		var elem2 = $("#button>li>.active")[0];
		var i = $("#button>li").index($(elem2).parent());
		var elem3 = $("#banner>li")[i];
		$(elem3).siblings().fadeOut(1000);
		$(elem3).slideDown(1000);
	}, 300);
});

$("#player").bind("click", function () {
	let uploadMusic = $("#uploadMusic")[0]; /*jquery对象转换成js对象*/
	if (uploadMusic.paused) {
		/*如果已经暂停*/
		uploadMusic.play();/*播放*/
		$("#open").css("display", "inline-block");
		$("#close").css("display", "none");
	} else {
		uploadMusic.pause();/*暂停*/
		$("#open").css("display", "none");
		$("#close").css("display", "inline-block");
	}
});