CREATE DATABASE IF NOT EXISTS football;
USE football;


CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `team` (
  `team_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `league_id` int DEFAULT NULL,
  `coach_id` int DEFAULT NULL,
  PRIMARY KEY (`team_id`),
  KEY `league_id` (`league_id`),
  KEY `coach_id` (`coach_id`),
  CONSTRAINT `team_ibfk_1` FOREIGN KEY (`league_id`) REFERENCES `league` (`league_id`),
  CONSTRAINT `team_ibfk_2` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`coach_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `coach` (
  `coach_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `previous_team` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`coach_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `league` (
  `league_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`league_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; 

CREATE TABLE IF NOT EXISTS `match1` (
  `match_id` int NOT NULL,
  `stadium_id` int DEFAULT NULL,
  `home_team_id` int DEFAULT NULL,
  `away_team_id` int DEFAULT NULL,
  `result` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`match_id`),
  KEY `stadium_id` (`stadium_id`),
  KEY `home_team_id` (`home_team_id`),
  KEY `away_team_id` (`away_team_id`),
  CONSTRAINT `match1_ibfk_1` FOREIGN KEY (`stadium_id`) REFERENCES `stadium` (`stadium_id`),
  CONSTRAINT `match1_ibfk_2` FOREIGN KEY (`home_team_id`) REFERENCES `team` (`team_id`),
  CONSTRAINT `match1_ibfk_3` FOREIGN KEY (`away_team_id`) REFERENCES `team` (`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `matchdetails` (
  `MatchID` varchar(10) DEFAULT NULL,
  `MatchDate` date DEFAULT NULL,
  `HomeTeamID` varchar(10) DEFAULT NULL,
  `HomeTeamName` varchar(100) DEFAULT NULL,
  `HomeCoachName` varchar(100) DEFAULT NULL,
  `AwayTeamID` varchar(10) DEFAULT NULL,
  `AwayTeamName` varchar(100) DEFAULT NULL,
  `AwayCoachName` varchar(100) DEFAULT NULL,
  `Result` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `player` (
  `player_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`player_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `player_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `playerstats` (
  `player_id` int NOT NULL,
  `matches_played` int DEFAULT NULL,
  `goals` int DEFAULT NULL,
  `assists` int DEFAULT NULL,
  PRIMARY KEY (`player_id`),
  CONSTRAINT `playerstats_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `player` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `stadium` (
  `stadium_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  PRIMARY KEY (`stadium_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `stadium_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `team` (
  `team_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `league_id` int DEFAULT NULL,
  `coach_id` int DEFAULT NULL,
  PRIMARY KEY (`team_id`),
  KEY `league_id` (`league_id`),
  KEY `coach_id` (`coach_id`),
  CONSTRAINT `team_ibfk_1` FOREIGN KEY (`league_id`) REFERENCES `league` (`league_id`),
  CONSTRAINT `team_ibfk_2` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`coach_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; 
