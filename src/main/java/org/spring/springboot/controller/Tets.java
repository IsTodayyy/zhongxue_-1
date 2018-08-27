package org.spring.springboot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Tets {
	@RequestMapping("/ddd")
	public String getTest(){
		return "辅车唇齿错";
	};
}
