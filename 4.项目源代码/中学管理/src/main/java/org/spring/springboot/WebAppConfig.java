package org.spring.springboot;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @ClassName: WebAppConfig
 * @Description: TODO(这里用一句话描述这个类的作用)
 * @author Administrator
 * @date 2017年7月11日
 */
@Configuration
public class WebAppConfig extends WebMvcConfigurerAdapter {
         //获取配置文件中图片的路径
    @Value("${auction.imagesPath}")
    private String mImagesPath;
    //访问图片方法
    @Override
    //图片配置文件  配置完成后访问地址 localhost:8888/images/123.png 可以访问图片
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        if(mImagesPath.equals("") || mImagesPath.equals("${cbs.imagesPath}")){
            String imagesPath = WebAppConfig.class.getClassLoader().getResource("").getPath();
            if(imagesPath.indexOf(".jar")>0){
                imagesPath = imagesPath.substring(0, imagesPath.indexOf(".jar"));
            }else if(imagesPath.indexOf("classes")>0){
                imagesPath = "file:"+imagesPath.substring(0, imagesPath.indexOf("classes"));
            }
            imagesPath = imagesPath.substring(0, imagesPath.lastIndexOf("/"))+"/images/";
            mImagesPath = imagesPath;
        }
        LoggerFactory.getLogger(WebAppConfig.class).info("imagesPath="+mImagesPath);
        registry.addResourceHandler("/images/**").addResourceLocations(mImagesPath);
        super.addResourceHandlers(registry);
    }
}