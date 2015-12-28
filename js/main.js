require.config({
	paths:{
		jquery:'jquery-1.11.2.min',
		jqueryUI:'http://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min'
	}
});

require(['jquery','window'],function($,win){
	$("#a").click(function(){
		$(this).attr('disabled',true);
		var bounding=new win.window();
		bounding.alert({
			title:"欢迎登陆天猫旗舰店",
			content:"请输入你的用户名",
			width:400,
			height:250,
			y:50,
			skin:'maroon',
			hasCloseBtn:true,
			btnText:'完成 ',
			hasMask:true,
			isDraggable:true,
			dragHandle:'.title'
		});
		return false;
	})

});