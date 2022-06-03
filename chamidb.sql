-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: chamidb
-- ------------------------------------------------------
-- Server version	5.7.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `challenge`
--

DROP TABLE IF EXISTS `challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge` (
  `challenge_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `reward` int(20) DEFAULT NULL,
  `due_date` varchar(40) NOT NULL,
  PRIMARY KEY (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge`
--

LOCK TABLES `challenge` WRITE;
/*!40000 ALTER TABLE `challenge` DISABLE KEYS */;
INSERT INTO `challenge` VALUES (32,'membuat cust senang','ini test',50,'2017-08-09'),(33,'membuat cust senang','ini test',50,'2017-08-08'),(34,'hallo','test',5000,'2020-08-08'),(35,'ini judul','ini deskripsi',1000,'2022-09-05'),(36,'Tugas pertama','membuat suatu program',5000,'Monday, Agustus 8, 2022'),(37,'judul','ini deskripsi',5000,'6/1/2020'),(38,'judul','ini deskripsi',5000,'6/1/2020');
/*!40000 ALTER TABLE `challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history_challenge`
--

DROP TABLE IF EXISTS `history_challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history_challenge` (
  `challenge_id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pegawai` varchar(20) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `reward` int(20) DEFAULT NULL,
  `due_date` varchar(30) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `is_winners` tinyint(10) DEFAULT NULL,
  `winners` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`challenge_id`),
  KEY `id_pegawai_idx` (`id_pegawai`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history_challenge`
--

LOCK TABLES `history_challenge` WRITE;
/*!40000 ALTER TABLE `history_challenge` DISABLE KEYS */;
INSERT INTO `history_challenge` VALUES (1,'user123','test','deskrip',5000,'5-10-2021','SELESAI',1,'me');
/*!40000 ALTER TABLE `history_challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_challenge`
--

DROP TABLE IF EXISTS `list_challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list_challenge` (
  `challenge_id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pegawai` varchar(20) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `reward` int(30) DEFAULT NULL,
  `due_date` varchar(30) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `is_winners` tinyint(4) DEFAULT NULL,
  `winners` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_challenge`
--

LOCK TABLES `list_challenge` WRITE;
/*!40000 ALTER TABLE `list_challenge` DISABLE KEYS */;
INSERT INTO `list_challenge` VALUES (1,'user234','ini judul','ini deskripsi',1000,'2022-09-05 03:00:00','Sedang Mengikuti',1,'user'),(2,'user234','ini judul','ini deskripsi',1000,'2022-09-05 03:00:00','Sedang Mengikuti',0,'user');
/*!40000 ALTER TABLE `list_challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant` (
  `participant_id` int(11) NOT NULL AUTO_INCREMENT,
  `file_type` varchar(20) DEFAULT NULL,
  `submit_date` datetime DEFAULT NULL,
  `file_url` varchar(100) DEFAULT NULL,
  `message` varchar(100) DEFAULT NULL,
  `file_size` varchar(20) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`participant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant`
--

LOCK TABLES `participant` WRITE;
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule_meeting`
--

DROP TABLE IF EXISTS `schedule_meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule_meeting` (
  `schedule_meeting_id` varchar(45) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `participant` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `reminder` varchar(100) DEFAULT NULL,
  `start_date` varchar(100) DEFAULT NULL,
  `end_date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`schedule_meeting_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule_meeting`
--

LOCK TABLES `schedule_meeting` WRITE;
/*!40000 ALTER TABLE `schedule_meeting` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule_meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_schedule_meeting`
--

DROP TABLE IF EXISTS `user_schedule_meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_schedule_meeting` (
  `user_id` varchar(100) NOT NULL,
  `schedule_meeting_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_schedule_meeting`
--

LOCK TABLES `user_schedule_meeting` WRITE;
/*!40000 ALTER TABLE `user_schedule_meeting` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_schedule_meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_pegawai` varchar(50) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `posisi` varchar(255) DEFAULT NULL,
  `divisi` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `registered_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pegawai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1000015','Iwan','tukuklambi','bangkit2021@ioh.co.id','Super Agent','L2','http://cc2020','2022-05-31 05:43:35'),('1000017','Iwan','tukuklambi','bangkit2021@ioh.co.id','Super Agent','L2','http://cc2020','2022-05-31 05:42:57'),('1000019','Ahmad','tukutuku','bangkit2022@ioh.co.id','Agent','L1','http://cc2022','2022-05-30 17:29:01'),('1000020','Iwan','tukuklambi','bangkit2021@ioh.co.id','Super Agent','L2','http://cc2020','2022-05-30 17:33:58'),('1000090','Jono','tukuklambi','bangkit2021@ioh.co.id','Super Agent','L2','http://cc2020','2022-05-31 15:07:10'),('1291003','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 09:34:38'),('129273','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 09:51:07'),('129280','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 09:40:36'),('1292usu','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 09:50:13'),('1297371','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 10:37:28'),('1297372','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 10:39:25'),('2892210','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 11:05:57'),('373892','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 10:51:34'),('381837','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 11:50:29'),('928392','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 11:47:01'),('9392382','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 10:54:37'),('939328','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 10:58:24'),('9398493','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 11:04:15'),('ioh','ren','pass123','ren@mail.com','Agent','L1',NULL,'2022-06-03 07:36:40'),('teywuuw','testtets','djjakd72','bangkit@gamil.com','Agent','L1',NULL,'2022-06-01 10:56:21'),('user1234','ren','pass123','ren@mail.com','Agent','L1',NULL,'2022-06-02 16:18:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-03 19:52:53
