CREATE TABLE IF NOT EXISTS `people` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL
);

INSERT INTO `people` (`name`) VALUES ('John');
INSERT INTO `people` (`name`) VALUES ('Jane');
INSERT INTO `people` (`name`) VALUES ('Doe');
