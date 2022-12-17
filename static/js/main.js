$(function(){
   // 侧边栏操作按钮
	$(document).on('click', '#guide', function() {
		$(this).toggleClass('toggled');
		$('#sidebar').toggleClass('toggled');
	});
    // 左侧二级菜单
	$(document).on('click', '.sub-menu a', function() {
		$(this).next().slideToggle(200);
		$(this).parent().toggleClass('open');
	});
    // 左侧菜单滚动条
    $('#sidebar').mCustomScrollbar({
		theme: 'minimal-dark',
		scrollInertia: 100,
		axis: 'yx',
		mouseWheel: {
			enable: true,
			axis: 'y',
			preventDefault: true
		}
	});
});