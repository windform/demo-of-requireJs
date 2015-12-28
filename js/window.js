define(['jquery','jqueryUI'],function($,$UI){
	function window(){
		this.cfg={
			title:"提示消息",
			content:"hello Require.js",
			handler:null,
			width:500,
			height:350,
			skin:"#0088cc",
			hasCloseBtn:false,
			btnText:"确定",
			hasMask:true,
			isDraggable:true,
			dragHandle:null
		};
	};
	window.prototype={
		alert:function(cfg){
			var CFG=$.extend(this.cfg,cfg);
			var boundingBox=$('<div class="window_boundingBox">'+
					'<div class="title">'+CFG.title+'</div>'+
					'<div class="neirong">'+CFG.content+'</div>'+
					'<div class="bottom"><input type="button" value="'+CFG.btnText+'" /></div>'
				+'</div>');
			boundingBox.appendTo("body");
			if(CFG.hasMask){
				var mask = $('<div class="mask"></div>');
				mask.appendTo("body");
			};
			var btn=boundingBox.find('input[type="button"]');
			btn.click(function(){
				CFG.handler && CFG.handler();
				boundingBox.remove();
				mask && mask.remove();
			});
			if(CFG.hasCloseBtn){
				var close=$('<span class="window_close">X</span>');
				close.appendTo(boundingBox);
				close.click(function(){
					boundingBox.remove();
					mask && mask.remove();
				})
			};
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle})
				}else{
					boundingBox.draggable();
				}
			};
			boundingBox.css({
				width:this.cfg.width+"px",
				height:this.cfg.height+"px",
				background:this.cfg.background,
				left:(this.cfg.x || ($(window).width()-this.cfg.width)/2)+"px",
				top:(this.cfg.y || ($(window).height()-this.cfg.height)/2)+"px"
			});
			boundingBox.find(".title").css('background',this.cfg.skin);
			boundingBox.css('border-color',this.cfg.skin);
			boundingBox.find("input").css('background',this.cfg.skin);
		},
		confirm:function(){},
		prompt:function(){}
	}
	return {
		window:window
	}

})