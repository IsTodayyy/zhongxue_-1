var locationUrl = "http://localhost:8080";

$(function () {

    tuichu = function () {
        $.ajax({
            type: "POST",
            url: locationUrl + "/tuichu",
            success: function (data) {
                if (data) {
                    window.location.reload();
                }
            }
        });
    }


    showPage = function (pageName) {

        $(".ppage").hide();
        $("#" + pageName).show();
    }


    $.ajax({
        type: "POST",
        url: locationUrl + "/huoquguanliyuan",
        success: function (data) {
            if (data) {
                $("#adminid").html(data);
            }
        }
    });


    $("#loginbtn").click(function () {
        var admin_name = $("#admin_name").val();
        var admin_password = $("#admin_password").val();

        if (admin_name.length > 10 || admin_name.length < 6) {
            alert("用户名长度应该在6至10位");
            return;
        }

        if (admin_password.length > 30 || admin_password.length < 6) {
            alert("密码长度应该在6至30位");
            return;
        }

        $.ajax({
            type: "POST",
            url: locationUrl + "/guanlidenglu",
            data: "admin_name=" + admin_name + "&admin_password=" + admin_password,
            success: function (data) {
                if (data > 0) {
                    alert("登录成功");
                    window.location.href = locationUrl + "/html/后台首页";

                } else {
                    alert("用户名或密码错误");
                }
            }
        });
    });


    /*会员管理初始化*/
    /**删除会员***/
    delete_xuesheng = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/shanchuxuesheng",
            data: 'id=' + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }
    var xiugaixueshengid;
    /**修改会员*/
    update_xuesheng = function (id, user_mingzi, user_name, user_password, user_banji) {
        showPage('xgxsyemian');
        xiugaixueshengid = id;

        $("#xg_xs_mingzi").val(user_mingzi);
        $("#xg_xs_name").val(user_name);
        $("#xg_xs_password").val(user_password);
        $("#xg_xs_banji").val(user_banji);
    }

    $("#mima_xg").click(function () {
        var user_password = $("#xg_user_password").val();

        if (!user_password) {
            alert("请输入密码");
            return;
        }

        $.ajax({
            type: "POST",
            url: locationUrl + "/xiugaixuesheng",
            data: "id=" + xiugaixueshengid + "&user_password=" + user_password,
            success: function (data) {
                if (data > 0) {
                    alert("修改成功");
                    $('#myModal').modal('hide')
                } else {
                    alert("修改失败");
                }
            }
        });
    });


    $("#xs_tjcj_btn").click(function () {
        var xs_cj = $("#tjcj").val();
        var xs_kc = $("#tjcj_kc").val();

        $.ajax({
            type: "POST",
            url: locationUrl + "/tjcj",
            data: "xs_cj=" + xs_cj + "&xs_kc=" + xs_kc + '&xs_mingzi=' + tjcjmingzi,
            success: function (data) {
                alert("添加成功");
            }
        });
    });

    var xgcjiid;
    xgcj = function (id) {
        xgcjiid = id;
        $("#xgcjmodal").modal('show');
    }

    $("#xgcjbtn").click(function () {
        var xs_cj = $("#xg_xs_cj").val();

        $.ajax({
            type: "POST",
            url: locationUrl + "/xgcj",
            data: "xs_cj=" + xs_cj + "&id=" + xgcjiid,
            success: function (data) {
                alert("修改成功");
                $("#xgcjmodal").modal('hide');
                shuaxincj();
            }
        });
    });

    shuaxincj = function () {
        $.ajax({
            type: "POST",
            url: locationUrl + "/chaxunchengji",
            data: "user_mingzi=" + tjcjmingzi,
            success: function (data) {
                console.log(data);
                $("#xs_cj_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#xs_cj_table").append(
                        '<tr>' +
                        '<td>' + data[i]['xs_kc'] + '</td>' +
                        '<td>' + data[i]['xs_cj'] + '</td>' +
                        '<td><button class="btn" onclick=delete_cj(' + data[i]['id'] + ')>删除</button><button class="btn" onclick=xgcj(' + data[i]['id'] + ')>修改成绩</button></td>' +
                        '</tr>'
                    );
                }
            }
        });
    }

    delete_cj = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/shanchuchengji",
            data: "id=" + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }

    var tjcjid;
    var tjcjmingzi;
    show_xuesheng = function (id, user_mingzi) {
        tjcjid = id;
        tjcjmingzi = user_mingzi;
        showPage('chaxunchengji');
        $("#xscj_name").html(user_mingzi);


        $.ajax({
            type: "POST",
            url: locationUrl + "/chaxunchengji",
            data: "user_mingzi=" + tjcjmingzi,
            success: function (data) {
                console.log(data);
                $("#xs_cj_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#xs_cj_table").append(
                        '<tr>' +
                        '<td>' + data[i]['xs_kc'] + '</td>' +
                        '<td>' + data[i]['xs_cj'] + '</td>' +
                        '<td><button class="btn" onclick=delete_cj(' + data[i]['id'] + ')>删除</button><button class="btn" onclick=xgcj(' + data[i]['id'] + ')>修改成绩</button></td>' +
                        '</tr>'
                    );
                }
            }
        });
    }


    /*******学生查询*********/
    chaxunxuesheng = function (index, pagesize) {
        var offset = (index - 1) * pagesize;
        var user_name = $('#ssxs_name').val();
        $.ajax({
            type: "POST",
            url: locationUrl + "/xueshengguanli",
            data: 'offset=' + offset + '&pagesize=' + pagesize + '&user_name=' + user_name,
            success: function (dataAll) {
                data = dataAll[0];
                $("#xuesheng_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#xuesheng_table").append(
                        '<tr>' +
                        '<td>' + data[i]['user_mingzi'] + '</td>' +
                        '<td>' + data[i]['user_name'] + '</td>' +
                        '<td>' + data[i]['user_password'] + '</td>' +
                        '<td>' + data[i]['user_banji'] + '</td>' +
                        '<td><div class="btn-group">' +
                        '<button type="button" class="btn btn-default" onclick="delete_xuesheng(' + data[i]['id'] + ')">删除</button>' +
                        '<button type="button" class="btn btn-default" onclick=update_xuesheng(' + data[i]['id'] + ',"' + data[i]['user_mingzi'] + '","' + data[i]['user_name'] + '","' + data[i]['user_password'] + '","' + data[i]['user_banji'] + '")>修改</button>' +
                        '<button type="button" class="btn btn-default" onclick=show_xuesheng(' + data[i]['id'] + ',"' + data[i]['user_mingzi'] + '")>查看成绩</button>' +
                        '</div></td>' +
                        '</tr>'
                    );
                }

                /*格式化分页按钮*/
                $("#xuesheng_fenye").html('');
                if (index >= 3) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunxuesheng(' + (index - 2) + ',5)">' + (index - 2) + '</a></li>' +
                        '<li><a onclick="chaxunxuesheng(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunxuesheng(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 2) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunxuesheng(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunxuesheng(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 1) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(1,5)">&laquo;</a></li>' +
                        '<li class="active"><a onclick="chaxunxuesheng(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (dataAll[1] - index >= 2) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunxuesheng(' + (index + 2) + ',5)">' + (index + 2) + '</a></li>' +
                        '<li><a onclick="chaxunxuesheng(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 1) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunxuesheng(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 0) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] == 0) {
                    $("#xuesheng_fenye").append(
                        '<li><a onclick="chaxunxuesheng(' + 1 + ',5)">&raquo;</a></li>'
                    )
                }
            }
        });
    }

    chaxunxuesheng(1, 5);


    $("#xsgl_btn").click(function () {
        chaxunxuesheng(1, 5);
    });


    delete_js = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/shanchujs",
            data: 'id=' + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }

    var jsxgid;
    update_js = function (id, user_mingzi, user_name, user_password) {
        jsxgid = id;
        showPage('xiugaijiaoshi');
        $("#xg_js_mingzi").val(user_mingzi);
        $("#xg_js_name").val(user_name);
        $("#xg_js_password").val(user_password);
    }

    $("#xg_js_btn").click(function () {
        var user_mingzi = $("#xg_js_mingzi").val();
        var user_name = $("#xg_js_name").val();
        var user_password = $("#xg_js_password").val();

        $.ajax({
            type: "POST",
            url: locationUrl + "/xiugaijsinfo",
            data: 'id=' + jsxgid + "&user_mingzi=" + user_mingzi + "&user_name=" + user_name + "&user_password=" + user_password,
            success: function (data) {
                if (data > 0) {
                    alert("修改成功");
                } else {
                    alert("账号已经存在 ");
                }

            }
        });
    });


    delete_lskc = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/sckc",
            data: 'id=' + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }


    shuaxinkc = function () {
        id = sxkcid
        mingzi = sxkcmz
        $("#jskc_name").html(mingzi);


        $.ajax({
            type: "POST",
            url: locationUrl + "/lskccx",
            data: 'ls_mingzi=' + mingzi,
            success: function (data) {
                console.log(data);
                $("#ls_kc_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#ls_kc_table").append(
                        '<tr>' +
                        '<td>' + data[i]['ls_kc'] + '</td>' +
                        '<td>' + data[i]['ls_kc_bj'] + '</td>' +
                        '<td>' + data[i]['ls_kc_sj'] + '</td>' +
                        '<td><button class="btn" onclick=delete_lskc(' + data[i]['id'] + ')>删除</button></td>' +
                        '</tr>'
                    );
                }
            }
        });
    }

    var sxkcid;
    var sxkcmz;
    keap_js = function (id, mingzi) {
        sxkcid = id;
        sxkcmz = mingzi;
        showPage('anpaikecheng');

        $("#jskc_name").html(mingzi);


        $.ajax({
            type: "POST",
            url: locationUrl + "/lskccx",
            data: 'ls_mingzi=' + mingzi,
            success: function (data) {
                console.log(data);
                $("#ls_kc_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#ls_kc_table").append(
                        '<tr>' +
                        '<td>' + data[i]['ls_kc'] + '</td>' +
                        '<td>' + data[i]['ls_kc_bj'] + '</td>' +
                        '<td>' + data[i]['ls_kc_sj'] + '</td>' +
                        '<td><button class="btn" onclick=delete_lskc(' + data[i]['id'] + ')>删除</button></td>' +
                        '</tr>'
                    );
                }
            }
        });
    }


    $("#js_tjkc_btn").click(function () {

        var ls_mingzi = $("#jskc_name").html();
        var ls_kc = $("#tjkc").val();
        var ls_kc_sj = $("#skxq").val() + $("#sksj").val();
        var ls_kc_bj = $("#tjbj").val();

        $.ajax({
            type: "POST",
            url: locationUrl + "/apkc",
            data: 'ls_mingzi=' + ls_mingzi + "&ls_kc=" + ls_kc + "&ls_kc_sj=" + ls_kc_sj + "&ls_kc_bj=" + ls_kc_bj,
            success: function (data) {
                if (data > 0) {
                    alert("课程安排成功");
                } else {
                    alert("该老师在这个时间段课程冲突");
                }
            }
        });
    });


    /*******教师查询*********/
    chaxunjiaoshi = function (index, pagesize) {
        var offset = (index - 1) * pagesize;
        var user_mingzi = $('#ssjs_name').val();
        $.ajax({
            type: "POST",
            url: locationUrl + "/jiaoshiguanli",
            data: 'offset=' + offset + '&pagesize=' + pagesize + '&user_mingzi=' + user_mingzi,
            success: function (dataAll) {
                console.log(dataAll);
                data = dataAll[0];
                $("#js_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#js_table").append(
                        '<tr>' +
                        '<td>' + data[i]['user_mingzi'] + '</td>' +
                        '<td>' + data[i]['user_name'] + '</td>' +
                        '<td>' + data[i]['user_password'] + '</td>' +
                        '<td><div class="btn-group">' +
                        '<button type="button" class="btn btn-default" onclick="delete_js(' + data[i]['id'] + ')">删除</button>' +
                        '<button type="button" class="btn btn-default" onclick=update_js(' + data[i]['id'] + ',"' + data[i]['user_mingzi'] + '","' + data[i]['user_name'] + '","' + data[i]['user_password'] + '")>修改信息</button>' +
                        '<button type="button" class="btn btn-default" onclick=keap_js(' + data[i]['id'] + ',"' + data[i]['user_mingzi'] + '")>安排课程</button>' +
                        '</div></td>' +
                        '</tr>'
                    );
                }

                /*格式化分页按钮*/
                $("#js_fenye").html('');
                if (index >= 3) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunjiaoshi(' + (index - 2) + ',5)">' + (index - 2) + '</a></li>' +
                        '<li><a onclick="chaxunjiaoshi(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunjiaoshi(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 2) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunjiaoshi(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunjiaoshi(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 1) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(1,5)">&laquo;</a></li>' +
                        '<li class="active"><a onclick="chaxunjiaoshi(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (dataAll[1] - index >= 2) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunjiaoshi(' + (index + 2) + ',5)">' + (index + 2) + '</a></li>' +
                        '<li><a onclick="chaxunjiaoshi(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 1) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunjiaoshi(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 0) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] == 0) {
                    $("#js_fenye").append(
                        '<li><a onclick="chaxunjiaoshi(' + 1 + ',5)">&raquo;</a></li>'
                    )
                }
            }
        });
    }

    chaxunjiaoshi(1, 5);


    $("#jsgl_btn").click(function () {
        chaxunjiaoshi(1, 5);
    });


    /*攻略管理初始化*/
    /**删除攻略***/
    delete_gl = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/shanchugonglv",
            data: 'id=' + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }
    var xiugaigonglvid;
    /**修改攻略*/
    update_gl = function (id) {
        showPage('xiugaigonglv');
        xiugaigonglvid = id;
        $.ajax({
            type: "POST",
            url: locationUrl + "/chaxungonglvbyid",
            data: 'id=' + id,
            success: function (data) {

                $("#xg_gl_biaoti").val(data['gl_biaoti']);
                xg_editor.setValue(data['gl_neirong']);
            }
        });
    }

    $("#xg_gl_btn").click(function () {
        var gl_biaoti = $("#xg_gl_biaoti").val();
        var gl_neirong = xg_editor.getValue();

        if (!gl_biaoti || !gl_neirong) {
            alert("请填写完整信息");
            return;
        }

        $.ajax({
            type: "POST",
            url: locationUrl + "/xiugaigonglv",
            data: "gl_biaoti=" + gl_biaoti + "&gl_neirong=" + gl_neirong + "&id=" + xiugaigonglvid,
            success: function (data) {
                if (data > 0) {
                    alert("修改成功");

                } else {
                    alert("公告名字重复");
                }
            }
        });
    });

    /*******攻略查询*********/
    chaxungonglv = function (index, pagesize) {
        var offset = (index - 1) * pagesize;
        var gl_biaoti = $('#gonglv_sousuocon').val();
        $.ajax({
            type: "POST",
            url: locationUrl + "/chaxungonglv",
            data: 'offset=' + offset + '&pagesize=' + pagesize + '&gl_biaoti=' + gl_biaoti,
            success: function (dataAll) {
                data = dataAll[0];
                $("#gonglv_table").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#gonglv_table").append(
                        '<tr>' +
                        '<td>' + data[i]['gl_biaoti'] + '</td>' +
                        '<td>' + data[i]['gl_scrq'] + '</td>' +
                        '<td><div class="btn-group">' +
                        '<button type="button" class="btn btn-default" onclick="delete_gl(' + data[i]['id'] + ')">删除</button>' +
                        '<button type="button" class="btn btn-default" onclick="update_gl(' + data[i]['id'] + ')">修改</button>' +
                        '</div></td>' +
                        '</tr>'
                    );
                }

                /*格式化分页按钮*/
                $("#gl-fenye").html('');
                if (index >= 3) {
                    $("#jd_fenye").append(
                        '<li><a onclick="chaxungonglv(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxungonglv(' + (index - 2) + ',5)">' + (index - 2) + '</a></li>' +
                        '<li><a onclick="chaxungonglv(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxungonglv(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 2) {
                    $("#gl-fenye").append(
                        '<li><a onclick="chaxungonglv(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxungonglv(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxungonglv(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 1) {
                    $("#gl-fenye").append(
                        '<li><a onclick="chaxungonglv(1,5)">&laquo;</a></li>' +
                        '<li class="active"><a onclick="chaxungonglv(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (dataAll[1] - index >= 2) {
                    $("#gl-fenye").append(
                        '<li><a onclick="chaxungonglv(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxungonglv(' + (index + 2) + ',5)">' + (index + 2) + '</a></li>' +
                        '<li><a onclick="chaxungonglv(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 1) {
                    $("#gl-fenye").append(
                        '<li><a onclick="chaxungonglv(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxungonglv(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 0) {
                    $("#gl-fenye").append(
                        '<li><a onclick="chaxungonglv(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] == 0) {
                    $("#gl-fenye").append(
                        '<li><a onclick="chaxungonglv(' + 1 + ',5)">&raquo;</a></li>'
                    )
                }
            }
        });
    }

    chaxungonglv(1, 5);
    $("#gonglv_btn").click(function () {
        chaxungonglv(1, 5);
    });


    //上传公告
    $("#gonglve-btn").click(function () {
        var gl_biaoti = $("#sc_gl_biaoti").val();
        var gl_neirong = gl_editor.getValue();

        if (!gl_biaoti || !gl_neirong) {
            alert("请填写完整信息");
            return;
        }
        $.ajax({
            type: "POST",
            url: locationUrl + "/shangchuangonglv",
            data: "gl_biaoti=" + gl_biaoti + "&gl_neirong=" + gl_neirong,
            success: function (data) {
                if (data > 0) {
                    alert("上传成功");
                } else {
                    alert("公告标题重复");
                }
            }
        });

        /*上传攻略图片*/
        $.ajaxFileUpload
        (
            {
                url: locationUrl + '/batchupload', //用于文件上传的服务器端请求地址
                enctype: "multipart/form-data",
                secureuri: false, //是否需要安全协议，一般设置为false
                fileElementId: ['gl_fengmian'], //文件上传域的ID
                dataType: 'json', //返回值类型 一般设置为json
                success: function (data, status)  //服务器成功响应处理函数
                {
                },
                error: function (data, status, e)//服务器响应失败处理函数
                {
                }
            }
        )
    });


    delete_kc = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/shanchukecheng",
            data: "id=" + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }
    var xgkcid;
    update_kc = function (id, kc_mc) {
        $("#xg_kc_mc").val(kc_mc);
        xgkcid = id;
        $("#kcxgmodal").modal('show');
    }


    $("#xgkcbtn").click(function () {
        var kc_mc = $("#xg_kc_mc").val();
        $.ajax({
            type: "POST",
            url: locationUrl + "/xgkcmc",
            data: "id=" + xgkcid + "&kc_mc=" + kc_mc,
            success: function (data) {
                if (data > 0) {
                    alert("修改成功");
                } else {
                    alert("课程名称已经存在");
                }
            }
        });
    });

    //课程查询初始化
    chaxunkecheng = function (index, pagesize) {
        var offset = (index - 1) * pagesize;
        var kc_mc = $('#kecheng_sousuocon').val();
        $.ajax({
            type: "POST",
            url: locationUrl + "/chaxunkecheng",
            data: 'offset=' + offset + '&pagesize=' + pagesize + '&kc_mc=' + kc_mc,
            success: function (dataAll) {
                console.log(dataAll);
                data = dataAll[0];
                $("#kc_body").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#kc_body").append(
                        '<tr>' +
                        '<td>' + data[i]['kc_mc'] + '</td>' +
                        '<td><div class="btn-group">' +
                        '<button type="button" class="btn btn-default" onclick="delete_kc(' + data[i]['id'] + ')">删除</button>' +
                        '<button type="button" class="btn btn-default" onclick=update_kc(' + data[i]['id'] + ',"' + data[i]['kc_mc'] + '")>修改</button>' +
                        '</div></td>' +
                        '</tr>'
                    );
                }

                /*格式化分页按钮*/
                $("#kc_fenye").html('');
                if (index >= 3) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunkecheng(' + (index - 2) + ',5)">' + (index - 2) + '</a></li>' +
                        '<li><a onclick="chaxunkecheng(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunkecheng(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 2) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunkecheng(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunkecheng(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 1) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(1,5)">&laquo;</a></li>' +
                        '<li class="active"><a onclick="chaxunkecheng(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (dataAll[1] - index >= 2) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunkecheng(' + (index + 2) + ',5)">' + (index + 2) + '</a></li>' +
                        '<li><a onclick="chaxunkecheng(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 1) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunkecheng(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 0) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] == 0) {
                    $("#kc_fenye").append(
                        '<li><a onclick="chaxunkecheng(' + 1 + ',5)">&raquo;</a></li>'
                    )
                }
            }
        });
    }

    chaxunkecheng(1, 5);

    $("#kecheng_btn").click(function () {
        chaxunkecheng(1, 5);
    });


    $("#shangchuankecheng").click(function () {
        var kc_mc = $("#tjkcinp").val();

        $.ajax({
            type: "POST",
            url: locationUrl + "/shangchuankecheng",
            data: "kc_mc=" + kc_mc,
            success: function (data) {
                if (data > 0) {
                    alert("上传成功");
                } else {
                    alert("课程已存在");
                }
            }
        });
    });


    //班级处理
    delete_bj = function (id) {
        $.ajax({
            type: "POST",
            url: locationUrl + "/shanchubanji",
            data: "id=" + id,
            success: function (data) {
                alert("删除成功");
            }
        });
    }

    var xgbjid;
    update_bj = function (id, banji_name) {
        $("#xg_bj_mc").val(banji_name);
        xgbjid = id;
        $("#bjxgmodal").modal('show');
    }


    $("#xgbjbtn").click(function () {
        var banji_name = $("#xg_bj_mc").val();
        $.ajax({
            type: "POST",
            url: locationUrl + "/xgbanjimc",
            data: "id=" + xgbjid + "&banji_name=" + banji_name,
            success: function (data) {
                if (data > 0) {
                    alert("修改成功");
                } else {
                    alert("班级已经存在");
                }
            }
        });
    });

    //班级查询初始化
    chaxunbanji = function (index, pagesize) {
        var offset = (index - 1) * pagesize;
        $.ajax({
            type: "POST",
            url: locationUrl + "/chaxunbanji",
            data: 'offset=' + offset + '&pagesize=' + pagesize,
            success: function (dataAll) {
                data = dataAll[0];
                $("#bj_body").html('');
                for (var i = 0; i < data.length; i++) {
                    $("#bj_body").append(
                        '<tr>' +
                        '<td>' + data[i]['banji_name'] + '</td>' +
                        '<td><div class="btn-group">' +
                        '<button type="button" class="btn btn-default" onclick="delete_bj(' + data[i]['id'] + ')">删除</button>' +
                        '<button type="button" class="btn btn-default" onclick=update_bj(' + data[i]['id'] + ',"' + data[i]['banji_name'] + '")>修改</button>' +
                        '</div></td>' +
                        '</tr>'
                    );
                }

                /*格式化分页按钮*/
                $("#bj_fenye").html('');
                if (index >= 3) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunbanji(' + (index - 2) + ',5)">' + (index - 2) + '</a></li>' +
                        '<li><a onclick="chaxunbanji(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunbanji(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 2) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(1,5)">&laquo;</a></li>' +
                        '<li><a onclick="chaxunbanji(' + (index - 1) + ',5)">' + (index - 1) + '</a></li>' +
                        '<li class="active"><a onclick="chaxunbanji(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (index == 1) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(1,5)">&laquo;</a></li>' +
                        '<li class="active"><a onclick="chaxunbanji(' + (index - 0) + ',5)">' + (index - 0) + '</a></li>'
                    )
                }
                if (dataAll[1] - index >= 2) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunbanji(' + (index + 2) + ',5)">' + (index + 2) + '</a></li>' +
                        '<li><a onclick="chaxunbanji(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 1) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(' + (index + 1) + ',5)">' + (index + 1) + '</a></li>' +
                        '<li><a onclick="chaxunbanji(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] - index == 0) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(' + dataAll[1] + ',5)">&raquo;</a></li>'
                    )
                }
                if (dataAll[1] == 0) {
                    $("#bj_fenye").append(
                        '<li><a onclick="chaxunbanji(' + 1 + ',5)">&raquo;</a></li>'
                    )
                }
            }
        });
    }

    chaxunbanji(1, 5);


    $("#cjbj").click(function () {
        var banji_name = $("#bj_name").val();

        $.ajax({
            type: "POST",
            url: locationUrl + "/cjbj",
            data: "banji_name=" + banji_name,
            success: function (data) {
                if (data > 0) {
                    alert("上传成功");
                } else {
                    alert("班级已存在");
                }
            }
        });
    });


    //课程填充
    $.ajax({
        type: "POST",
        url: locationUrl + "/hqkc",
        success: function (data) {
            $(".sykc").html('');
            for (var i = 0; i < data.length; i++) {
                $(".sykc").append(
                    '<option>' + data[i]['kc_mc'] + '</option>'
                );
            }
        }
    });


    //班级填充
    $.ajax({
        type: "POST",
        url: locationUrl + "/hqbj",
        success: function (data) {
            $(".sybanji").html('');
            for (var i = 0; i < data.length; i++) {
                $(".sybanji").append(
                    '<option value="' + data[i]['banji_name'] + '">' + data[i]['banji_name'] + '</option>'
                );
            }
        }
    });


})