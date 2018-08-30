package org.spring.springboot.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class YeMian {
	
	@RequestMapping("/html/{yemian}")
	public String YeMian(@PathVariable String yemian,HttpServletRequest request){
		HttpSession session = request.getSession();
		if("后台首页".equals(yemian)){
			if(session.getAttribute("admin") == null){
				return "后台登录" ;
			}
		}
		return yemian;
	}
}
