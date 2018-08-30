package org.spring.springboot.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.spring.springboot.domain.City;
import org.spring.springboot.service.CityService;
import org.spring.springboot.service.ZhongxueGuanliService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class ZhongxueGuanliController {

    @Autowired
    private ZhongxueGuanliService service;
    
    @RequestMapping("/yonghuzhuce")
    public int yonghuzhuce(String user_name,String user_password,String user_type,HttpServletRequest request,String user_mingzi,String user_banji) {
    	Map yonghu = new HashMap<>();
    	yonghu.put("user_name", user_name);
    	yonghu.put("user_password", user_password);
    	yonghu.put("user_type", user_type);
    	yonghu.put("user_banji", user_banji);
    	yonghu.put("user_mingzi", user_mingzi);
    	
        return service.yonghuzhuce(yonghu,request);
    }
    
    @RequestMapping("/huoquyonghu")
    public String huoquyonghu(HttpServletRequest request) {
    	
        return (String) request.getSession().getAttribute("user");
    }
    
    
    @RequestMapping("/huoquguanliyuan")
    public String huoquguanliyuan(HttpServletRequest request) {
    	
        return (String) request.getSession().getAttribute("admin");
    }
    
    @RequestMapping("/guanlidenglu")
    public int guanlidenglu(String admin_name,String admin_password,HttpServletRequest request) {
    	Map guanli = new HashMap<>();
    	guanli.put("admin_name", admin_name);
    	guanli.put("admin_password", admin_password);
    	
        return service.guanlidenglu(guanli,request);
    }
    
    @RequestMapping("/chaxungonglv")
    public List chaxungonglv(int offset,int pagesize,String gl_biaoti) {
    	Map gl = new HashMap<>();
    	gl.put("offset", offset);
    	gl.put("pagesize", pagesize);
    	gl.put("gl_biaoti", gl_biaoti);
        return service.chaxungonglv(gl);
    }
    
    @RequestMapping("/shangchuangonglv")
    public int shangchuangonglv(String gl_biaoti,String gl_fengmian,String gl_neirong) {
    	Map gl = new HashMap<>();
    	gl.put("gl_biaoti", gl_biaoti);
    	gl.put("gl_fengmian", gl_fengmian);
    	gl.put("gl_neirong", gl_neirong);
        return service.shangchuangonglv(gl);
    }
    
    @RequestMapping("/shanchugonglv")
    public List shanchugonglv(String id) {
    	Map gl = new HashMap<>();
    	gl.put("id", id);
        return service.shanchugonglv(gl);
    }
    
    
    @RequestMapping("/chaxungonglvbyid")
    public Map chaxungonglvbyid(String id) {
    	Map gl = new HashMap<>();
    	gl.put("id", id);
        return service.chaxungonglvbyid(gl);
    }
    
    @RequestMapping("/xiugaigonglv")
    public int xiugaigonglv(String gl_biaoti,String gl_neirong,String id) {
    	Map gl = new HashMap<>();
    	gl.put("id", id);
    	gl.put("gl_neirong", gl_neirong);
    	gl.put("gl_biaoti", gl_biaoti);
        return service.xiugaigonglv(gl);
    }
    
    @RequestMapping("/xiugaixueshengxinxi")
    public int xiugaixueshengxinxi(String xg_xs_mingzi,String xg_xs_name,String id,String xg_xs_password,String xg_xs_banji) {
    	Map xusheng = new HashMap<>();
    	xusheng.put("id", id);
    	xusheng.put("user_mingzi", xg_xs_mingzi);
    	xusheng.put("user_name", xg_xs_name);
    	xusheng.put("user_password", xg_xs_password);
    	xusheng.put("user_banji", xg_xs_banji);
        return service.xiugaixueshengxinxi(xusheng);
    }
    
    @RequestMapping("/shangchuankecheng")
    public int shangchuankecheng(String kc_mc) {
    	Map kc = new HashMap<>();
    	kc.put("kc_mc", kc_mc);
        return service.shangchuankecheng(kc);
    }
    
    @RequestMapping("/chaxunkecheng")
    public List chaxunkecheng(int offset,int pagesize,String kc_mc) {
    	Map kc = new HashMap<>();
    	kc.put("kc_mc", kc_mc);
    	kc.put("offset", offset);
    	kc.put("pagesize", pagesize);
        return service.chaxunkecheng(kc);
    }
    
    
    @RequestMapping("/shanchukecheng")
    public List shanchukecheng(String id) {
    	Map kc = new HashMap<>();
    	kc.put("id", id);
        return service.shanchukecheng(kc);
    }
    
    @RequestMapping("/xgkcmc")
    public int xgkcmc(String id,String kc_mc) {
    	Map kc = new HashMap<>();
    	kc.put("id", id);
    	kc.put("kc_mc", kc_mc);
        return service.xgkcmc(kc);
    }
    
    
    @RequestMapping("/chaxunbanji")
    public List chaxunbanji(int offset,int pagesize) {
    	Map banji = new HashMap<>();
    	banji.put("offset", offset);
    	banji.put("pagesize", pagesize);
    	
        return service.chaxunbanji(banji);
    }
    
    @RequestMapping("/cjbj")
    public int cjbj(String banji_name) {
    	Map banji = new HashMap<>();
    	banji.put("banji_name", banji_name);
        return service.cjbj(banji);
    }
    
    
    @RequestMapping("/shanchubanji")
    public List shanchubanji(String id) {
    	Map banji = new HashMap<>();
    	banji.put("id", id);
    	
        return service.shanchubanji(banji);
    }
    
    
    
    @RequestMapping("/xgbanjimc")
    public int xgbanjimc(String id,String banji_name) {
    	Map bj = new HashMap<>();
    	bj.put("id", id);
    	bj.put("banji_name", banji_name);
        return service.xgbanjimc(bj);
    }
    
    
    @RequestMapping("/xueshengguanli")
    public List xueshengguanli(int offset,int pagesize,String user_name) {
    	Map xs = new HashMap<>();
    	xs.put("user_name", user_name);
    	xs.put("offset", offset);
    	xs.put("pagesize", pagesize);
        return service.xueshengguanli(xs);
    }
    
    
    @RequestMapping("/jiaoshiguanli")
    public List jiaoshiguanli(int offset,int pagesize,String user_mingzi) {
    	Map js = new HashMap<>();
    	js.put("user_mingzi", user_mingzi);
    	js.put("offset", offset);
    	js.put("pagesize", pagesize);
        return service.jiaoshiguanli(js);
    }
    
    
    @RequestMapping("/shanchujs")
    public List shanchujs(String id) {
    	Map js = new HashMap<>();
    	js.put("id", id);
        return service.shanchujs(js);
    }
    
    @RequestMapping("/hqkc")
    public List hqkc() {
        return service.hqkc();
    }
    
    
    
    @RequestMapping("/hqbj")
    public List hqbj() {
        return service.hqbj();
    }
    
    @RequestMapping("/apkc")
    public int apkc(String ls_mingzi,String ls_kc,String ls_kc_sj,String ls_kc_bj){
    	Map kc = new HashMap<String, String>();
    	kc.put("ls_mingzi", ls_mingzi);
    	kc.put("ls_kc", ls_kc);
    	kc.put("ls_kc_sj", ls_kc_sj);
    	kc.put("ls_kc_bj", ls_kc_bj);
        return service.apkc(kc);
    }
    
    @RequestMapping("/lskccx")
    public List lskccx(String ls_mingzi){
    	Map kc = new HashMap<String, String>();
    	kc.put("ls_mingzi", ls_mingzi);
        return service.lskccx(kc);
    }
    
    
    @RequestMapping("/sckc")
    public List sckc(String id){
    	Map kc = new HashMap<String, String>();
    	kc.put("id", id);
        return service.sckc(kc);
    }
    
    
    @RequestMapping("/xiugaijsinfo")
    public int xiugaijsinfo(String id,String user_mingzi,String user_name,String user_password){
    	Map user = new HashMap<String, String>();
    	user.put("id", id);
    	user.put("user_mingzi", user_mingzi);
    	user.put("user_name", user_name);
    	user.put("user_password", user_password);
        return service.xiugaijsinfo(user);
    }
    
    
    @RequestMapping("/shanchuxuesheng")
    public int shanchuxuesheng(String id){
    	Map user = new HashMap<String, String>();
    	user.put("id", id);
        return service.shanchuxuesheng(user);
    }
    
    
    
    @RequestMapping("/chaxunchengji")
    public List chaxunchengji(String user_mingzi){
    	Map user = new HashMap<String, String>();
    	user.put("user_mingzi", user_mingzi);
        return service.chaxunchengji(user);
    }
    
    
    @RequestMapping("/tjcj")
    public List tjcj(String xs_cj,String xs_kc,String xs_mingzi){
    	Map user = new HashMap<String, String>();
    	user.put("xs_cj", xs_cj);
    	user.put("xs_kc", xs_kc);
    	user.put("xs_mingzi", xs_mingzi);
        return service.tjcj(user);
    }
    
    @RequestMapping("/shanchuchengji")
    public List shanchuchengji(String id){
    	Map cj = new HashMap<String, String>();
    	cj.put("id", id);
        return service.shanchuchengji(cj);
    }
    
    
    @RequestMapping("/xgcj")
    public List xgcj(String id,String xs_cj){
    	Map cj = new HashMap<String, String>();
    	cj.put("id", id);
    	cj.put("xs_cj", xs_cj);
        return service.xgcj(cj);
    }
    
    
    @RequestMapping("/yhdl")
    public int yhdl(String user_name,String user_password,HttpServletRequest request){
    	Map user = new HashMap<String, String>();
    	user.put("user_name", user_name);
    	user.put("user_password", user_password);
        return service.yhdl(user,request);
    }
    
    
    
    @RequestMapping("/chaxungonggao")
    public List chaxungonggao(int offset,int pagesize,String gl_biaoti) {
    	Map gl = new HashMap<>();
    	gl.put("gl_biaoti", gl_biaoti);
    	gl.put("offset", offset);
    	gl.put("pagesize", pagesize);
        return service.chaxungonggao(gl);
    }
    
    @RequestMapping("/gscx")
    public Map gscx(String id) {
    	Map gl = new HashMap<>();
    	gl.put("id", id);
        return service.gscx(gl);
    }
    
    
    @RequestMapping("/kecx")
    public List kecx(HttpServletRequest request) {
    	if("教师".equals(request.getSession().getAttribute("type"))){
    		return service.kecx((String) request.getSession().getAttribute("user"));
    	}
        return null;
    }
    
    
    @RequestMapping("/ksap")
    public int ksap(HttpServletRequest request,String ks_kc,String ks_bj,String ks_sj) {
    	if("教师".equals(request.getSession().getAttribute("type"))){
    		Map ks = new HashMap<String, String>();
        	
        	ks.put("ks_kc", ks_kc);
        	ks.put("ks_bj", ks_bj);
        	ks.put("ks_sj", ks_sj);
        	ks.put("ks_ls", (String) request.getSession().getAttribute("user"));
    		service.ksap(ks);
    		return 1;
    	}
    	return 0;
    }
    
    
    
    @RequestMapping("/apks")
    public List apks(HttpServletRequest request,String ks_kc,String ks_bj,String ks_sj) {
    	if("教师".equals(request.getSession().getAttribute("type"))){
    		Map ks = new HashMap<String, String>();
        	ks.put("ks_ls", (String) request.getSession().getAttribute("user"));
    		return service.apks(ks);
    	}
    	return null;
    }
    
    
    @RequestMapping("/shanchukaoshi")
    public List shanchukaoshi(String id) {
    	Map ks = new HashMap<String, String>();
    	ks.put("id", id);
    	service.shanchukaoshi(ks);
    	return null;
    }
    
    @RequestMapping("/xgkssj")
    public List xgkssj(String id,String ks_sj) {
    	Map ks = new HashMap<String, String>();
    	ks.put("id", id);
    	ks.put("ks_sj", ks_sj);
    	service.xgkssj(ks);
    	return null;
    }
    
    
    @RequestMapping("/showlishi")
    public List showlishi(String id,String ks_sj,HttpServletRequest request) {
    	if("学生".equals(request.getSession().getAttribute("type"))){
    		Map cj = new HashMap<String, String>();
        	cj.put("xs_mingzi", (String) request.getSession().getAttribute("user"));
    		return service.showlishi(cj);
    	}
    	
    	
    	return null;
    }
    
    
    @RequestMapping("/showkaoshi")
    public List showkaoshi(String id,String ks_sj,HttpServletRequest request) {
    	if("学生".equals(request.getSession().getAttribute("type"))){
    		Map cj = new HashMap<String, String>();
        	cj.put("xs_mingzi", (String) request.getSession().getAttribute("user"));
    		return service.showkaoshi(cj);
    	}
    	
    	
    	return null;
    }
    
    
    
    
    
    @RequestMapping("/tuichu")
    public int tuichu(HttpServletRequest request) {
    	request.getSession().invalidate();
    	
    	
    	return 1;
    }
    
    
    
    
    
    
    
    
    
    
}
