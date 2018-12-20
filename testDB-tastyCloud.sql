-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 192.168.99.100    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Restaurant`
--

DROP TABLE IF EXISTS `Restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Restaurant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurant`
--

LOCK TABLES `Restaurant` WRITE;
/*!40000 ALTER TABLE `Restaurant` DISABLE KEYS */;
INSERT INTO `Restaurant` (`id`, `address`, `createdAt`, `updatedAt`) VALUES (1,'4 rue du Shah','2018-12-19 20:35:36','2018-12-19 20:35:36'),(2,'7 rue de la liberté','2018-12-19 20:35:37','2018-12-19 20:35:37');
/*!40000 ALTER TABLE `Restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visibility` tinyint(1) DEFAULT '1',
  `price` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `restaurantId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurantId` (`restaurantId`),
  CONSTRAINT `Product_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` (`id`, `visibility`, `price`, `createdAt`, `updatedAt`, `restaurantId`) VALUES (1,1,3.5,'2018-12-19 20:35:37','2018-12-19 20:35:37',1),(2,1,3.5,'2018-12-19 20:35:37','2018-12-19 20:35:37',1),(3,1,3.5,'2018-12-19 20:35:37','2018-12-19 20:35:37',1),(4,1,3.5,'2018-12-19 20:35:37','2018-12-19 20:35:37',1),(5,1,3.5,'2018-12-19 20:35:38','2018-12-19 20:35:38',2),(6,1,4,'2018-12-19 20:35:38','2018-12-19 20:35:38',2),(7,1,21,'2018-12-19 20:35:38','2018-12-19 20:35:38',2),(8,1,24,'2018-12-19 20:35:38','2018-12-19 20:35:38',2);
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Info`
--

DROP TABLE IF EXISTS `Info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `language` varchar(255) NOT NULL DEFAULT 'en',
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `restaurantId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurantId` (`restaurantId`),
  KEY `productId` (`productId`),
  CONSTRAINT `Info_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Info_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Info`
--

LOCK TABLES `Info` WRITE;
/*!40000 ALTER TABLE `Info` DISABLE KEYS */;
INSERT INTO `Info` (`id`, `language`, `name`, `description`, `createdAt`, `updatedAt`, `restaurantId`, `productId`) VALUES (1,'fr','Mazzeh','Brasserie','2018-12-19 20:35:37','2018-12-19 20:35:37',1,NULL),(2,'en','Mazzeh','Restaurant','2018-12-19 20:35:37','2018-12-19 20:35:37',1,NULL),(3,'fr','Shelroom L\'aïd','Traiteur','2018-12-19 20:35:37','2018-12-19 20:35:37',2,NULL),(4,'en','Shelroom L\'aïd','Catering','2018-12-19 20:35:37','2018-12-19 20:35:37',2,NULL),(5,'en','coffee','hot beverage','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,1),(6,'fr','cafe','boisson chaude','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,1),(7,'fr','Evian','boisson','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,2),(8,'en','Evian','drink','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,2),(9,'fr','Magret de canard','plat','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,3),(10,'en','Duck breast','food','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,3),(11,'fr','carpaccio de veau','plat','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,4),(12,'en','Lamb carpaccio','food','2018-12-19 20:35:37','2018-12-19 20:35:37',NULL,4),(13,'fr','cafe','boisson chaude','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,5),(14,'en','coffee','hot beverage','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,5),(15,'fr','Evian','boisson','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,6),(16,'en','Evian','drink','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,6),(17,'fr','Magret de canard','plat','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,7),(18,'en','Duck breast','food','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,7),(19,'fr','Carpaccio de veau','plat','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,8),(20,'en','Lamb carpaccio','food','2018-12-19 20:35:38','2018-12-19 20:35:38',NULL,8);
/*!40000 ALTER TABLE `Info` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-19 21:40:56
