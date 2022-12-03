SET NAMES utf8mb4;
DROP DATABASE IF EXISTS lostfound;
CREATE DATABASE lostfound;
ALTER DATABASE lostfound character set utf8mb4;

USE lostfound;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userid` varchar(30) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1 is admin /0 is not',
  `nickname` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `birthday` date NOT NULL,
  `profileimage` varchar(255) NULL DEFAULT NULL,
  PRIMARY KEY (`userid`)
);
INSERT INTO user (userid, is_admin, nickname, email, password) VALUES ('admin', 1 , 'Admin', 'abc@abc.com', '123456');

DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `msgid` int(11) NOT NULL AUTO_INCREMENT,
  `puserid` varchar(30) NOT NULL COMMENT 'post_id',
  `ruserid` varchar(30) NULL DEFAULT NULL COMMENT 'receive_id',
  `noticeid` int(11) NOT NULL,
  `content` text NOT NULL,
  `messagetime` datetime NOT NULL COMMENT 'time',
  PRIMARY KEY (`msgid`)
);

DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice`  (
  `noticeid` int(11) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(255) NOT NULL,
  `userid` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1 is completed /0 is not',
  `date` date NOT NULL,
  `venue` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `images` varchar(255) NULL DEFAULT NULL,
  `noticetime` datetime NOT NULL COMMENT 'update',
  PRIMARY KEY (`noticeid`)
);

