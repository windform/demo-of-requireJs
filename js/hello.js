//创建构造函数
function hello(){
	this.cfg={
		//tips:"liaodong"
	}
};
hello.prototype={
	cli:function(cfg){
		var test=$.extend(this.cfg,cfg);
		var pos = $(".text").position();
		var h=$("<div class='mask'></div>");
		h.appendTo('body');
		h.css({
			width:$(".text").width()+22+'px',
			left:pos.left+"px",
			top:pos.top+$(".text").height()+10+"px",
			opacity:1
		});
	},
	del:function(){
		$(".mask").remove();
	}
}