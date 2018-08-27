/*
Navicat MySQL Data Transfer

Source Server         : bishe
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : zhongxue

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-05-31 00:57:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_info
-- ----------------------------
DROP TABLE IF EXISTS `admin_info`;
CREATE TABLE `admin_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(255) DEFAULT NULL,
  `admin_password` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_info
-- ----------------------------
INSERT INTO `admin_info` VALUES ('1', 'admin1', 'admin1');

-- ----------------------------
-- Table structure for banji_info
-- ----------------------------
DROP TABLE IF EXISTS `banji_info`;
CREATE TABLE `banji_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `banji_name` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banji_info
-- ----------------------------
INSERT INTO `banji_info` VALUES ('10', '高二（11）班');
INSERT INTO `banji_info` VALUES ('3', '高一（1）班');
INSERT INTO `banji_info` VALUES ('4', '高一（2）班');
INSERT INTO `banji_info` VALUES ('5', '高一（3）班');
INSERT INTO `banji_info` VALUES ('6', '高一（4）班');
INSERT INTO `banji_info` VALUES ('7', '高一（5）班');
INSERT INTO `banji_info` VALUES ('8', '高一（6）班');
INSERT INTO `banji_info` VALUES ('9', '高一（7）班');
INSERT INTO `banji_info` VALUES ('11', '高二（2）班');
INSERT INTO `banji_info` VALUES ('12', '高二（3）班');
INSERT INTO `banji_info` VALUES ('13', '高二（4）班');
INSERT INTO `banji_info` VALUES ('14', '高二（5）班');
INSERT INTO `banji_info` VALUES ('15', '高二（6）班');
INSERT INTO `banji_info` VALUES ('16', '高二7）班');
INSERT INTO `banji_info` VALUES ('17', '高三（1）班');
INSERT INTO `banji_info` VALUES ('18', '高三（2）班');
INSERT INTO `banji_info` VALUES ('19', '高三（3）班');
INSERT INTO `banji_info` VALUES ('20', '高三（4）班');
INSERT INTO `banji_info` VALUES ('21', '高三（5）班');
INSERT INTO `banji_info` VALUES ('22', '高三（6）班');
INSERT INTO `banji_info` VALUES ('23', '高三（7）班');

-- ----------------------------
-- Table structure for gl_info
-- ----------------------------
DROP TABLE IF EXISTS `gl_info`;
CREATE TABLE `gl_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `gl_biaoti` varchar(255) DEFAULT NULL,
  `gl_neirong` varchar(255) DEFAULT NULL,
  `gl_scrq` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gl_info
-- ----------------------------
INSERT INTO `gl_info` VALUES ('1', '元旦放假', '<p>明天放假，注意安全。</p>', '2018-04-01 23:38:04');
INSERT INTO `gl_info` VALUES ('2', '清明节放假', '<p>老师同学们好，清明节我校放假三天，假期之间，大家注意安全。</p>', '2018-04-07 17:30:15');
INSERT INTO `gl_info` VALUES ('3', '国庆节放假通知', '<p>国庆节放假通知<br></p>', '2018-04-12 14:48:04');
INSERT INTO `gl_info` VALUES ('4', '五一放假通知', '<p>五一放假通知<br></p>', '2018-04-12 14:48:27');
INSERT INTO `gl_info` VALUES ('5', '寒假放假通知', '<p>寒假放假通知<br></p>', '2018-04-12 14:48:44');
INSERT INTO `gl_info` VALUES ('6', '暑假放假通知', '<p>暑假放假通知<br></p>', '2018-04-12 14:49:03');

-- ----------------------------
-- Table structure for kc_info
-- ----------------------------
DROP TABLE IF EXISTS `kc_info`;
CREATE TABLE `kc_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `kc_mc` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kc_info
-- ----------------------------
INSERT INTO `kc_info` VALUES ('1', 'tiyu');
INSERT INTO `kc_info` VALUES ('2', '数学');
INSERT INTO `kc_info` VALUES ('3', '英语');
INSERT INTO `kc_info` VALUES ('4', '生物');
INSERT INTO `kc_info` VALUES ('5', '地理');
INSERT INTO `kc_info` VALUES ('6', '历史');
INSERT INTO `kc_info` VALUES ('7', '政治');

-- ----------------------------
-- Table structure for ks_info
-- ----------------------------
DROP TABLE IF EXISTS `ks_info`;
CREATE TABLE `ks_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ks_bj` varchar(255) DEFAULT NULL,
  `ks_kc` varchar(255) DEFAULT NULL,
  `ks_ls` varchar(255) DEFAULT NULL,
  `ks_sj` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ks_info
-- ----------------------------
INSERT INTO `ks_info` VALUES ('1', '三年级一班', '语文', '段老师', '2018/4/4');
INSERT INTO `ks_info` VALUES ('2', '高一（1）班', '语文', '李老师', '4月19号');
INSERT INTO `ks_info` VALUES ('3', '高一（5）班', '英语', '李老师', '4月19号');
INSERT INTO `ks_info` VALUES ('4', '高二（1）班', '英语', '何老师', '2018.4.12');
INSERT INTO `ks_info` VALUES ('5', '高二（11）班', '政治', '余老师', '30');

-- ----------------------------
-- Table structure for ls_kc_info
-- ----------------------------
DROP TABLE IF EXISTS `ls_kc_info`;
CREATE TABLE `ls_kc_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ls_mingzi` varchar(255) DEFAULT NULL,
  `ls_kc_sj` varchar(255) DEFAULT NULL,
  `ls_kc` varchar(255) DEFAULT NULL,
  `ls_kc_bj` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ls_kc_info
-- ----------------------------
INSERT INTO `ls_kc_info` VALUES ('6', '李老师', '周四五六节', '地理', '高一（1）班');
INSERT INTO `ls_kc_info` VALUES ('5', '李老师', '周三一二节', '英语', '高一（1）班');
INSERT INTO `ls_kc_info` VALUES ('3', '段老师', '周一一二节', '英语', '高一（1）班');
INSERT INTO `ls_kc_info` VALUES ('4', '段老师', '周一三四节', '生物', '高一（1）班');
INSERT INTO `ls_kc_info` VALUES ('7', '余老师', '周一一二节', '数学', '高二（1）班');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `user_mingzi` varchar(255) DEFAULT NULL,
  `user_banji` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('5', '201403', '201403', '教师', '何老师', '高一（1）班');
INSERT INTO `user_info` VALUES ('4', '201402', '123456', '教师', '李老师', '三年级一班');
INSERT INTO `user_info` VALUES ('6', '201801', '20141043023', '学生', '符雷', '高一（2）班');
INSERT INTO `user_info` VALUES ('7', '201802', '201802', '学生', '余闽霞', '高一（2）班');
INSERT INTO `user_info` VALUES ('8', '20180101', '20180101', '学生', '蓝春燕', '高一（3）班');
INSERT INTO `user_info` VALUES ('9', '20180102', '20180102', '学生', '李春丽', '高一（7）班');
INSERT INTO `user_info` VALUES ('10', '20180142', '20180142', '学生', '刘成凤', '高一（7）班');
INSERT INTO `user_info` VALUES ('12', '20140102', '20140102', '教师', '王燕', '高一（1）班');
INSERT INTO `user_info` VALUES ('13', '201404', '201404', '教师', '余老师', '高二（1）班');

-- ----------------------------
-- Table structure for xscj_info
-- ----------------------------
DROP TABLE IF EXISTS `xscj_info`;
CREATE TABLE `xscj_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `xs_cj` varchar(255) DEFAULT NULL,
  `xs_kc` varchar(255) DEFAULT NULL,
  `xs_mingzi` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xscj_info
-- ----------------------------
INSERT INTO `xscj_info` VALUES ('15', '不及格', 'tiyu', '符雷');
INSERT INTO `xscj_info` VALUES ('3', '99', '生物', '符雷');
INSERT INTO `xscj_info` VALUES ('4', '99', '地理', '符雷');
INSERT INTO `xscj_info` VALUES ('5', '99', '历史', '符雷');
INSERT INTO `xscj_info` VALUES ('6', '99', '政治', '符雷');
INSERT INTO `xscj_info` VALUES ('8', '34', '数学', '余闽霞');
INSERT INTO `xscj_info` VALUES ('9', '89', '英语', '余闽霞');
INSERT INTO `xscj_info` VALUES ('10', '89', '生物', '余闽霞');
INSERT INTO `xscj_info` VALUES ('11', '89', '政治', '余闽霞');
INSERT INTO `xscj_info` VALUES ('12', '89', '历史', '余闽霞');
INSERT INTO `xscj_info` VALUES ('17', '99', '数学', '符雷');
