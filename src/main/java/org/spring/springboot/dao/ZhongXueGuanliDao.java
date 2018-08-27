package org.spring.springboot.dao;

import java.util.List;
import java.util.Map;

public interface ZhongXueGuanliDao {

	int jianchachongfu(Map yonghu);

	void zhuce(Map yonghu);

	int gldenglu(Map guanli);

	List chaxungonglv(Map gl);

	int getCountGonglv(Map gl);

	int jianchagonglvchongfu(Map gl);

	void shangchuangonglv(Map gl);

	void shanchugonglv(Map gl);

	Map chaxungonglvbyid(Map gl);

	int xiugaigonglvcha(Map gl);

	void xiugaigonglv(Map gl);

	int jianchachongfuke(Map kc);

	void shangchuankecheng(Map kc);

	List chaxunkecheng(Map kc);

	int getCountKC(Map kc);

	void shanchukecheng(Map kc);

	int jianchaxgkc(Map kc);

	void xgkcmc(Map kc);

	

	int getCountBJ(Map banji);

	void cjbj(Map banji);

	int jcbjcf(Map banji);

	List chaxunbanji(Map banji);

	void shanchubanji(Map banji);

	int jianchaxgbj(Map bj);

	void xgbanjimc(Map bj);

	List xueshengguanli(Map xs);

	int getCountXS(Map xs);

	List jiaoshiguanli(Map js);

	int getCountJS(Map js);

	void shanchujs(Map js);

	List hqkc();

	List hqbj();

	int jckeap(Map kc);

	void apkc(Map kc);

	List lskccx(Map kc);

	void sckc(Map kc);

	int jcchongfuuser(Map user);

	void xiugaijsinfo(Map user);

	void shanchuxuesheng(Map user);

	void tjcj(Map user);

	List chaxunchengji(Map user);

	void shanchuchengji(Map cj);

	void xgcj(Map cj);

	int denglu(Map user);

	Map getUser(Map user);

	Map getAdmin(Map guanli);

	List chaxungonggao(Map gl);

	int getCountGL(Map gl);

	Map gscx(Map gl);

	List kecx(Map ls);

	void ksap(Map ks);

	List apks(Map ks);

	void shanchukaoshi(Map ks);

	void xgkssj(Map ks);

	List showlishi(Map cj);

	String geuBanji(Map cj);

	List showkaoshi(Map pa);

	void xiugaixueshengxinxi(Map xusheng);

}
