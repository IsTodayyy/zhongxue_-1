var locationUrl = "http://localhost:8080";

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

var gongshiid = GetQueryString ('gongshiid');

$(function(){
	
	$.ajax({
        type: "POST",
        url: locationUrl + "/huoquyonghu",
        success: function(data){
        	if(data){
        		$(".hasUser").show();
        		$(".noUser").hide();
        		/*$("#gbtns").hide();
        		$("#lguser").show();
        		$("#userid").html(data);*/
        		$("#userid").html(data);
        	}else{
        		$(".noUser").show();
        		$(".hasUser").hide();
        		/*$("#gbtns").show();
        		$("#lguser").hide();
        		$("#userid").html(data);*/
        		$("#userid").html(data);
        	}
           }
     });
	
    toPage = function(pageName) {
    	if(pageName == 'denglu'){
    		window.location.href = locationUrl + '/html/登陆';
    	}
    	if(pageName == 'zhuce'){
    		window.location.href = locationUrl + '/html/注册';
    	}
    	if(pageName == 'shouye'){
    		window.location.href = locationUrl + '/html/首页';
    	}
    	if(pageName == 'gongshichakan'){
    		window.location.href = locationUrl + '/html/通知公告';
    	}
    	if(pageName == 'xueshengzhongxin'){
    		window.location.href = locationUrl + '/html/学生个人中心';
    	}
    	if(pageName == 'jiaoshizhongxin'){
    		window.location.href = locationUrl + '/html/教师个人中心';
    	}
    	if(pageName == 'gongshixiangqing'){
    		window.location.href = locationUrl + '/html/公示详情';
    	}
	}
    
    
    $("#zhuce").click(function() {
    	var user_mingzi = $("#zc_mingzi").val();
    	var user_banji = $("#zc_bj").val();
		var user_name = $("#zc_name").val();
		var user_password = $("#zc_password").val();
		var user_repassword = $("#zc_repassword").val();
		var user_type = $("input[name='zc_type']:checked").val();
		
		
		if(!user_mingzi){
			alert("请输入名字 ");
			return;
		}
		if(user_name.length > 10 || user_name.length < 6){
			alert("用户名长度应该在6至10位");
			return;
		}
		
		if(user_password.length > 30 || user_password.length < 6){
			alert("密码长度应该在6至30位");
			return;
		}
		
		if(user_password != user_repassword){
			alert("两次密码不一致");
			return;
		}
		
		$.ajax({
            type: "POST",
            url: locationUrl + "/yonghuzhuce",
            data: "user_name="+ user_name + "&user_password=" + user_password+"&user_type=" + user_type + "&user_mingzi=" +user_mingzi + "&user_banji=" + user_banji,
            success: function(data){
            	if(data > 0){
            		alert("注册成功");
            		window.location.href = locationUrl + "/html/首页";
            		
            	}else{
            		alert("用户名已存在");
                }
               }
         });
	});
    
    
    
    
    
    
    
    
    //班级填充
    $.ajax({
        type: "POST",
        url: locationUrl + "/hqbj",
        success: function(data){
        	$(".sybanji").html('');
        	for(var i=0;i < data.length;i++){
        		$(".sybanji").append(
        				'<option value="'+ data[i]['banji_name'] +'">'+ data[i]['banji_name'] +'</option>'
        		);
        	}
           }
     });
    
    
    
    
    $(".zc_type").click(function(){
        var opt=$("input[name='zc_type']:checked").val();
        if(opt == '学生'){
        	$("#zc_bj_div").show();
        }else{
        	$("#zc_bj_div").hide();
        }
    });
    
    
    
    $("#yhdl").click(function() {
		var user_name = $("#dl_name").val();
		var user_password = $("#dl_password").val();
		
		$.ajax({
            type: "POST",
            url: locationUrl + "/yhdl",
            data: "user_name="+ user_name + "&user_password=" + user_password,
            success: function(data){
            	if(data > 0){
            		alert("登录成功");
            		window.location.href = locationUrl + "/html/首页";
            	}else{
            		alert("用户名或密码错误");
                }
               }
         });
	});
    
    
    
    
    
    
    showxiangq = function(id) {
    	window.location.href = locationUrl + '/html/公示详情?gongshiid=' + id;
	}
    
    if(gongshiid){
    	$.ajax({
            type: "POST",
            url: locationUrl + "/gscx",
            data: "id="+ gongshiid,
            success: function(data){
            	console.log(data);
            	$("#gonggaobiaoti").html(data['gl_biaoti']);
            	$("#gonggaoneirong").html(data['gl_neirong']);
            	$("#gonggaoshijian").html(data['gl_scrq']);
               }
         });
    }
    
    
    /*******公告查询*********/
    chaxungonggao = function(index,pagesize) {
    	var offset = (index - 1) * pagesize;
    	var gl_biaoti = $('#gonggao_bt').val();
    	$.ajax({
            type: "POST",
            url: locationUrl + "/chaxungonggao",
            data:'offset=' + offset + '&pagesize=' + pagesize + '&gl_biaoti=' + gl_biaoti,
            success: function(dataAll){
            	data = dataAll[0];
            	$("#gg_div").html('');
            	for(var i = 0; i < data.length; i++){
            		$("#gg_div").append(
            				'<div class="alert alert-success" role="alert"><a onclick=showxiangq('+ data[i]['id'] +')>'+ data[i]['gl_biaoti'] +'</a>('+ data[i]['gl_scrq'] +')</div>'
                       );
            	}
            	
            	/*格式化分页按钮*/
            	$("#gl_fenye").html('');
            	if(index >= 3){
            		$("#gl_fenye").append(
            				'<li><a onclick="chaxungonggao(1,5)">&laquo;</a></li>'+
            				'<li><a onclick="chaxungonggao('+ (index - 2) +',5)">'+(index - 2)+'</a></li>'+
            				'<li><a onclick="chaxungonggao('+ (index - 1) +',5)">'+(index - 1)+'</a></li>'+
            				'<li class="active"><a onclick="chaxungonggao('+ (index - 0) +',5)">'+(index - 0)+'</a></li>'
                		)
            	}
            	if(index == 2){
            		$("#gl_fenye").append(
                			'<li><a onclick="chaxungonggao(1,5)">&laquo;</a></li>'+
                			'<li><a onclick="chaxungonggao('+ (index - 1) +',5)">'+(index - 1)+'</a></li>'+
                			'<li class="active"><a onclick="chaxungonggao('+ (index - 0) +',5)">'+(index - 0)+'</a></li>'
                	)
            	}
            	if(index == 1){
            		$("#gl_fenye").append(
                			'<li><a onclick="chaxungonggao(1,5)">&laquo;</a></li>'+
                			'<li class="active"><a onclick="chaxungonggao('+ (index - 0) +',5)">'+(index - 0)+'</a></li>'
                		)
            	}
            	if(dataAll[1] - index >= 2){
            		$("#gl_fenye").append(
            				'<li><a onclick="chaxungonggao('+ (index + 1) +',5)">'+(index + 1)+'</a></li>'+
            				'<li><a onclick="chaxungonggao('+ (index + 2) +',5)">'+(index + 2)+'</a></li>'+
            				'<li><a onclick="chaxungonggao('+ dataAll[1] +',5)">&raquo;</a></li>'
                		)
            	}
            	if(dataAll[1] - index == 1){
            		$("#gl_fenye").append(
                			'<li><a onclick="chaxungonggao('+ (index + 1) +',5)">'+(index + 1)+'</a></li>'+
                			'<li><a onclick="chaxungonggao('+ dataAll[1] +',5)">&raquo;</a></li>'
                		)
            	}
            	if(dataAll[1] - index == 0){
            		$("#gl_fenye").append(
                			'<li><a onclick="chaxungonggao('+ dataAll[1] +',5)">&raquo;</a></li>'
                	)
            	}
            	if(dataAll[1] == 0){
            		$("#gl_fenye").append(
            				'<li><a onclick="chaxungonggao('+ 1 +',5)">&raquo;</a></li>'
                	)
            	}
               }
         });
	}
    
    chaxungonggao(1,5);
    
    
    $("#cxgl_btn").click(function() {
    	chaxungonggao(1,5);
	});
    
    
    
    
    
    kecx = function() {
    	$.ajax({
            type: "POST",
            url: locationUrl + "/kecx",
            success: function(data){
            	if(!data){
            		alert("请登录教师账号");
            		return;
            	}
            	$(".ppage").hide();
            	$("#jskc").show();
            	$("#jskc_table").html('');
            	for(var i=0;i<data.length;i++){
            		$("#jskc_table").append(
            			  '<tr>'+
            		        '<td>'+ data[i]['ls_kc'] +'</td>'+
            		        '<td>'+ data[i]['ls_kc_bj'] +'</td>'+
            		        '<td>'+ data[i]['ls_kc_sj'] +'</td>'+
            		      '</tr>'
            		);
            	}
               }
         });
	}
    
    delete_ks = function(id) {
    	$.ajax({
            type: "POST",
            url: locationUrl + "/shanchukaoshi",
            data:"id=" + id,
            success: function(data){
            	if(!data){
            		alert("删除成功");
            	}
               }
         });
	}
    
    var xgksid;
    update_ks = function(id,sj) {
    	xgksid = id;
    	$("#xg_ks_sj").val(sj);
		$("#xgkssj").modal('show');
	}
    
    $("#xgkssjbtn").click(function() {
    	var ks_sj = $("#xg_ks_sj").val();
    	$.ajax({
            type: "POST",
            url: locationUrl + "/xgkssj",
            data:'id=' + xgksid + "&ks_sj=" +ks_sj,
            success: function(data){
            	alert("修改成功");
               }
         });
	});
    
    apks = function() {
    	$(".ppage").hide();
    	$("#apks").show();
    	$.ajax({
            type: "POST",
            url: locationUrl + "/apks",
            success: function(data){
            	if(!data){
            		alert("请登录教师账号");
            		return;
            	}
            	$("#jsks_table").html('');
            	for(var i=0;i<data.length;i++){
            		$("#jsks_table").append(
            			  '<tr>'+
            		        '<td>'+ data[i]['ks_kc'] +'</td>'+
            		        '<td>'+ data[i]['ks_bj'] +'</td>'+
            		        '<td>'+ data[i]['ks_sj'] +'</td>'+
            		        '<td><button class="btn" onclick=delete_ks('+ data[i]['id'] +')>删除</button><button class="btn" onclick=update_ks('+ data[i]['id'] +',"'+ data[i]['ks_sj'] +'")>修改时间</button></td>'+
            		      '</tr>'
            		);
            	}
               }
         });
	}
    
    
    
    
  //课程填充
    $.ajax({
        type: "POST",
        url: locationUrl + "/hqkc",
        success: function(data){
        	$(".sykc").html('');
        	for(var i=0;i < data.length;i++){
        		$(".sykc").append(
        				'<option>'+ data[i]['kc_mc'] +'</option>'
        		);
        	}
           }
     });
    
    
    
    $("#js_tjkc_btn").click(function() {
		var ks_kc = $("#apks_kc").val();
		var ks_bj = $("#apks_bj").val();
		var ks_sj = $("#apks_sj").val();
		
		$.ajax({
	        type: "POST",
	        url: locationUrl + "/ksap",
	        data:'ks_kc=' + ks_kc + "&ks_bj=" +ks_bj + "&ks_sj=" + ks_sj,
	        success: function(data){
	        	if(data > 0){
	        		alert("安排成功");
	        	}else{
	        		alert("请登录教师账号");
	        	}
	           }
	     });
	});
    
    
    showlishi = function() {
    	$(".ppage").hide();
    	$("#xscj").show();
    	
    	$.ajax({
	        type: "POST",
	        url: locationUrl + "/showlishi",
	        success: function(data){
	        	if(!data){
	        		alert("请登录学生账号");
	        		return;
	        	}
	        	$("#xscj_table").html('');
	        	for(var i=0;i < data.length;i++){
	        		$("#xscj_table").append(
	        			 '<tr>'+
	        		        '<td>'+ data[i]['xs_kc'] +'</td>'+
	        		        '<td>'+ data[i]['xs_cj'] +'</td>'+
	        		      '</tr>'
	        		);
	        	}
	           }
	     });
	}
    
    
    
    
    showkaoshi = function() {
    	$(".ppage").hide();
    	$("#kksap").show();
    	
    	$.ajax({
	        type: "POST",
	        url: locationUrl + "/showkaoshi",
	        success: function(data){
	        	if(!data){
	        		alert("请登录学生账号");
	        		return;
	        	}
	        	$("#xsks_table").html('');
	        	for(var i=0;i < data.length;i++){
	        		$("#xsks_table").append(
	        			 '<tr>'+
	        		        '<td>'+ data[i]['ks_kc'] +'</td>'+
	        		        '<td>'+ data[i]['ks_sj'] +'</td>'+
	        		      '</tr>'
	        		);
	        	}
	           }
	     });
    	
	}
    
    
    
    
    tuichu = function() {
    	$.ajax({
	        type: "POST",
	        url: locationUrl + "/tuichu",
	        success: function(data){
	        	alert("退出成功");
	        	window.location.reload();
	        }
	     });
	}
    
    
    
    
    
    
    
    
    
    
})