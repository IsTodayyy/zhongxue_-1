package org.spring.springboot.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.spring.springboot.dao.ZhongXueGuanliDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ZhongxueGuanliService {
	
	@Autowired
	private ZhongXueGuanliDao dao;
	
	public int yonghuzhuce(Map yonghu,HttpServletRequest request) {
		if(dao.jianchachongfu(yonghu) > 0){
			return 0;
		}
		dao.zhuce(yonghu);
		request.getSession().setAttribute("user", yonghu.get("user_mingzi"));
		request.getSession().setAttribute("type", yonghu.get("user_type"));
		return 1;
	}

	public int guanlidenglu(Map guanli, HttpServletRequest request) {
		if(dao.gldenglu(guanli) > 0){
			request.getSession().setAttribute("admin",guanli.get("admin_name"));
			return 1;
		}
		return 0;
	}

	public List chaxungonglv(Map gl) {
		List res = new ArrayList<>();
		res.add(dao.chaxungonglv(gl));
		int count = dao.getCountGonglv(gl);
		int pagesize = (int) gl.get("pagesize");
		res.add(Math.ceil((float)count / pagesize));
		return res;
	}

	public int shangchuangonglv(Map gl) {
		if(dao.jianchagonglvchongfu(gl) > 0){
			return 0;
		}
		dao.shangchuangonglv(gl);
		return 1;
	}

	public List shanchugonglv(Map gl) {
		dao.shanchugonglv(gl);
		return null;
	}
	
	
	public Map chaxungonglvbyid(Map gl) {
		
		return dao.chaxungonglvbyid(gl);
	}

	public int xiugaigonglv(Map gl) {
		if(dao.xiugaigonglvcha(gl) > 0){
			return 0;
		}
		dao.xiugaigonglv(gl);
		return 1;
	}

	public int shangchuankecheng(Map kc) {
		// TODO 自动生成的方法存根
		if(dao.jianchachongfuke(kc) > 0){
			return 0;
		}
		dao.shangchuankecheng(kc);
		return 1;
	}

	public List chaxunkecheng(Map kc) {
		List res = new ArrayList<>();
		res.add(dao.chaxunkecheng(kc));
		int count = dao.getCountKC(kc);
		int pagesize = (int) kc.get("pagesize");
		res.add(Math.ceil((float)count / pagesize));
		return res;
	}

	public List shanchukecheng(Map kc) {
		dao.shanchukecheng(kc);
		return null;
	}
	
	
	public int xgkcmc(Map kc) {
		if(dao.jianchaxgkc(kc) > 0){
			return 0;
		}
		dao.xgkcmc(kc);
		return 1;
	}

	public List chaxunbanji(Map banji) {
		List res = new ArrayList<>();
		res.add(dao.chaxunbanji(banji));
		int count = dao.getCountBJ(banji);
		int pagesize = (int) banji.get("pagesize");
		res.add(Math.ceil((float)count / pagesize));
		return res;
	}

	public int cjbj(Map banji) {
		if(dao.jcbjcf(banji) > 0){
			return 0;
		}
		dao.cjbj(banji);
		return 1;
	}

	public List shanchubanji(Map banji) {
		dao.shanchubanji(banji);
		return null;
	}

	public int xgbanjimc(Map bj) {
		if(dao.jianchaxgbj(bj) > 0){
			return 0;
		}
		dao.xgbanjimc(bj);
		return 1;
	}

	public List xueshengguanli(Map xs) {
		List res = new ArrayList<>();
		res.add(dao.xueshengguanli(xs));
		int count = dao.getCountXS(xs);
		int pagesize = (int) xs.get("pagesize");
		res.add(Math.ceil((float)count / pagesize));
		return res;
	}

	public List jiaoshiguanli(Map js) {
		List res = new ArrayList<>();
		res.add(dao.jiaoshiguanli(js));
		int count = dao.getCountJS(js);
		int pagesize = (int) js.get("pagesize");
		res.add(Math.ceil((float)count / pagesize));
		return res;
	}

	public List shanchujs(Map js) {
		dao.shanchujs(js);
		return null;
	}

	public List hqkc() {
		
		return dao.hqkc();
	}

	public List hqbj() {
		
		return dao.hqbj();
	}
	
	
	public int apkc(Map kc) {
		if(dao.jckeap(kc) > 0){
			return 0;
		}
		dao.apkc(kc);
		return 1;
	}
	
	
	public List lskccx(Map kc) {
		// TODO 自动生成的方法存根
		return dao.lskccx(kc);
	}

	public List sckc(Map kc) {
		dao.sckc(kc);
		return null;
	}

	public int xiugaijsinfo(Map user) {
		if(dao.jcchongfuuser(user) > 0){
			return 0;
		}
		dao.xiugaijsinfo(user);
		return 1;
	}

	public int shanchuxuesheng(Map user) {
		dao.shanchuxuesheng(user);
		return 0;
	}

	public List chaxunchengji(Map user) {
		
		return dao.chaxunchengji(user);
	}

	public List tjcj(Map user) {
		dao.tjcj(user);
		return null;
	}

	public List shanchuchengji(Map cj) {
		dao.shanchuchengji(cj);
		return null;
	}

	public List xgcj(Map cj) {
		dao.xgcj(cj);
		return null;
	}

	public int yhdl(Map user,HttpServletRequest request) {
		if(dao.denglu(user) > 0){
			request.getSession().setAttribute("user", dao.getUser(user).get("user_mingzi"));
			request.getSession().setAttribute("type", dao.getUser(user).get("user_type"));
			return 1;
		}
		return 0;
	}

	public List chaxungonggao(Map gl) {
		List res = new ArrayList<>();
		res.add(dao.chaxungonggao(gl));
		int count = dao.getCountGL(gl);
		int pagesize = (int) gl.get("pagesize");
		res.add(Math.ceil((float)count / pagesize));
		return res;
	}
	
	
	public Map gscx(Map gl) {
		
		return dao.gscx(gl);
	}

	public List kecx(String ls_mingzi) {
		Map ls = new HashMap<String, String>();
		ls.put("ls_mingzi", ls_mingzi);
		
		return dao.kecx(ls);
	}
	
	
	public void ksap(Map ks) {
		
		dao.ksap(ks);
	}

	public List apks(Map ks) {
		
		return dao.apks(ks);
	}

	public void shanchukaoshi(Map ks) {
		dao.shanchukaoshi(ks);
	}

	public void xgkssj(Map ks) {
		dao.xgkssj(ks);
		
	}
	
	
	public List showlishi(Map cj) {
		// TODO 自动生成的方法存根
		return dao.showlishi(cj);
	}

	public List showkaoshi(Map cj) {
		String banji = dao.geuBanji(cj);
		
		Map pa = new HashMap<String, String>();
		pa.put("ks_bj", banji);
		
		return dao.showkaoshi(pa);
	}

	public int xiugaixueshengxinxi(Map xusheng) {
		dao.xiugaixueshengxinxi(xusheng);
		return 1;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
