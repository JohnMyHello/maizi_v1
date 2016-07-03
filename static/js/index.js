$(function(){
	//相关搜索
	$(".relative").jScrollPane({
		autoReinitialise:true
	});
	//3D旋转木马 幻灯片
	var carousel = $("#carousel").featureCarousel({
          topPadding:0,
          sidePadding:0,
          smallFeatureOffset:108,
          trackerSummation:false
        });
    //名师推荐
    $(".tc-scroll ul").carouFredSel({
    	auto:false,
    	items:{
    		visible:4,
    		minimum:1
    	},
    	scroll:{
    		items:1,
    		duration:1000
    	},
    	mousewheel:true,
    	prev:".t-prev",
    	next:".t-next"
    });  
    //顶部导航
    $(window).scroll(function(){
    	var sTop = $(this).scrollTop();
    	$("#header").stop();
    	$("#header .logo").stop();
    	if(sTop>64){
    		$("#header").css("backgroundColor","#1C6371");
    		$("#header .logo").css({"width":"0","height":"0"});
    	}else{
    		$("#header").css("backgroundColor","transparent");
    		$("#header .logo").css({"width":"45px","height":"44px"});
    	}
    });
    // 搜索框事件
    var flag = 0;
    var rs = true;
    $("#course").focusin(function(){
    	if(rs){
    		$(".suggestion").stop();
    		$(".suggestion").show().animate({"height":"158px"});
    	}
    	flag = 1;
    	$(this).keydown(function(e){
    		if(e.keyCode!=27&&e.keyCode!=123&&e.keyCode!=116){
    			suggestionDrop();
    			$(".search-result").show().animate({"height":"380px"},400);
    			rs = false;
    		}
    	});
    });
     $("#course").focusout(function(){
     	if(flag != 2){
     		flag = 0;
     	}
     });
    $(".suggestion").mouseenter(function(){
    	flag = 2;
    });
    $(".suggestion").mouseleave(function(){
    	flag = 0;
    });
    $(".search-result").mouseenter(function(){
    	flag = 2;
    });
    $(".search-result").mouseleave(function(){
    	flag = 0;
    });
    $(document).click(function(){
     	if(flag != 1 && flag != 2){
	     	suggestionDrop();
	     	$(".search-result").animate({"height":"0px"},function(){
	    		$(this).hide();
	    	});
    	}
     	if(flag != 1 && flag!=4){
     		$("#p-drop").hide();
     	}
    });
    function suggestionDrop(){
    	$(".suggestion").stop();
	    	$(".suggestion").animate({"height":"0px"},function(){
	    		$(this).hide();
	    	});
    }
    //个人中心
    $(".p-name").click(function(){
//  	alert($("#p-drop").position().top )
    	if($("#p-drop").position().top !=64){
    		flag = 1;
    		$("#p-drop").show().css({"top":"-300px","opacity":"0"}).animate({"top":"64px","opacity":"1"},800);
    	}else{
    		flag = 0;
    	}
    });
    $("#p-drop").mouseenter(function(){
    	flag = 4;
    });
    $("#p-drop").mouseleave(function(){
    	flag = 0;
    });
    
    //课程列表
    $("#maizi-course .com-top a").click(function(){
    	var num = $(this).index();
    	var cur = $(".single-c ul.on").index();
    	if(num != cur){
    		$("#maizi-course .com-top a").css({"color":"#333","borderBottom":"none"});
    		$(".single-c ul.on").animate({"opacity":"0"},200).removeClass("on");
    		$(".single-c ul").eq(num).addClass("on").animate({"opacity":"1"},200);
    		$(this).css({"color":"#1BBC9B","borderBottom":"1px solid #1BBC9B"});
    	}
    });
    $(".single-c ul li .c-title").mouseenter(function(){
    	$(this).animate({"opacity":"0"},200);
    });
    $(".single-c ul li .c-title").mouseleave(function(){
    	$(this).animate({"opacity":"1"},200);
    });
    
    //意见反馈
    $("#control").click(function(){
    	var cheight = $("#feedback").height();
    	if(cheight == 50){
    		$(this).attr("src","img/jian.png");
    		$("#feedback").animate({"height":"350px"},400);
    	}else{
    		$(this).attr("src","img/jia.png");
    		$("#feedback").animate({"height":"50px"},400);
    	}
    });
    
    
    
    
    
    
    
});
