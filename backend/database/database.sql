CREATE TABLE `candidacy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `candidate_id` int(11) NOT NULL,
  `job_offer_id` int(11) NOT NULL,
  `candidacy_date` date NOT NULL,
  `received_by_company` tinyint(1) NOT NULL,
  `read_by_company` tinyint(1) NOT NULL,
  `company_responded` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_candidacy_candidate_id` (`candidate_id`),
  KEY `fk_candidacy_job_offer_id` (`job_offer_id`),
  CONSTRAINT `fk_candidacy_candidate_id` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`),
  CONSTRAINT `fk_candidacy_job_offer_id` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `candidate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cv` varchar(255) DEFAULT '',
  `age` int(11) NOT NULL,
  `gender` varchar(25) NOT NULL,
  `github` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `soft_skills` text NOT NULL,
  `consultant_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_candidate_consultant_id` (`consultant_id`),
  KEY `fk_candidate_user_id` (`user_id`),
  CONSTRAINT `fk_candidate_consultant_id` FOREIGN KEY (`consultant_id`) REFERENCES `consultant` (`id`),
  CONSTRAINT `fk_candidate_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `candidate_has_notification` (
  `candidate_id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  PRIMARY KEY (`candidate_id`,`notification_id`),
  KEY `fk_candidate_has_notification_notification1` (`notification_id`),
  CONSTRAINT `fk_candidate_has_notification_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_notification_notification1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `candidate_has_technology` (
  `candidate_id` int(11) NOT NULL,
  `technology_id` int(11) NOT NULL,
  PRIMARY KEY (`candidate_id`,`technology_id`),
  KEY `fk_candidate_has_technology_technology1` (`technology_id`),
  CONSTRAINT `fk_candidate_has_technology_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_technology_technology1` FOREIGN KEY (`technology_id`) REFERENCES `technology` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `number_of_employee` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `field` varchar(150) NOT NULL,
  `siret` varchar(14) NOT NULL,
  `company_type` varchar(150) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_company_user_id` (`user_id`),
  CONSTRAINT `fk_company_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `company_has_field` (
  `company_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  PRIMARY KEY (`company_id`,`field_id`),
  KEY `fk_company_has_field_field1` (`field_id`),
  CONSTRAINT `fk_company_has_field_company1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_field_field1` FOREIGN KEY (`field_id`) REFERENCES `field` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `company_has_notification` (
  `company_id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  PRIMARY KEY (`company_id`,`notification_id`),
  KEY `fk_company_has_notification_notification1` (`notification_id`),
  CONSTRAINT `fk_company_has_notification_company1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_notification_notification1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `consultant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gender` varchar(25) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_consultant_user_id` (`user_id`),
  CONSTRAINT `fk_consultant_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `consultant_has_notification` (
  `consultant_id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  PRIMARY KEY (`consultant_id`,`notification_id`),
  KEY `fk_consultant_has_notification_notification1` (`notification_id`),
  CONSTRAINT `fk_consultant_has_notification_consultant1` FOREIGN KEY (`consultant_id`) REFERENCES `consultant` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultant_has_notification_notification1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `contract` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `favorite` (
  `candidate_id` int(11) NOT NULL,
  `job_offer_id` int(11) NOT NULL,
  PRIMARY KEY (`candidate_id`,`job_offer_id`),
  KEY `fk_candidate_has_job_offer_job_offer1` (`job_offer_id`),
  CONSTRAINT `fk_candidate_has_job_offer_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_job_offer_job_offer1` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `handled_offer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_offer_id` int(11) NOT NULL,
  `consultant_id` int(11) NOT NULL,
  `number_of_candidates` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_handled_offer_consultant_id` (`consultant_id`),
  KEY `fk_handled_offer_job_offer_id` (`job_offer_id`),
  CONSTRAINT `fk_handled_offer_consultant_id` FOREIGN KEY (`consultant_id`) REFERENCES `CONSULTANT` (`id`),
  CONSTRAINT `fk_handled_offer_job_offer_id` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `job_offer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `salary` int(11) DEFAULT NULL,
  `title` varchar(180) NOT NULL,
  `lower_salary` int(11) NOT NULL,
  `higher_salary` int(11) NOT NULL,
  `description` text NOT NULL,
  `experience` varchar(50) DEFAULT NULL,
  `location` varchar(150) NOT NULL,
  `contract_id` int(11) DEFAULT NULL,
  `debut_date` date DEFAULT NULL,
  `mission` text NOT NULL,
  `profile_needed` text DEFAULT NULL,
  `interview_run` text NOT NULL,
  `remote` tinyint(1) DEFAULT NULL,
  `bonuses` text DEFAULT NULL,
  `work_hours` int(11) DEFAULT NULL,
  `date_of_creation` date DEFAULT NULL,
  `number_of_candidates` int(11) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_job_offer_contract_id` (`contract_id`),
  KEY `fk_job_offer_company_id` (`company_id`),
  CONSTRAINT `fk_job_offer_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `fk_job_offer_contract_id` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `job_offer_has_technology` (
  `job_offer_id` int(11) NOT NULL,
  `technology_id` int(11) NOT NULL,
  PRIMARY KEY (`job_offer_id`,`technology_id`),
  KEY `fk_job_offer_has_technology_technology1` (`technology_id`),
  CONSTRAINT `fk_job_offer_has_technology_job_offer1` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_offer_has_technology_technology1` FOREIGN KEY (`technology_id`) REFERENCES `technology` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_offer_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `message` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_notification_job_offer_id` (`job_offer_id`),
  CONSTRAINT `fk_notification_job_offer_id` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `technology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `mail` varchar(255) NOT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `location` varchar(150) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `roles` varchar(255) NOT NULL DEFAULT '["user"]',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci