CREATE SCHEMA `test_db` ;


CREATE TABLE `test_db`.`transaction_information` (
  `transaction_description` VARCHAR(100) NOT NULL,
  `merchant_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`transaction_description`),
  UNIQUE INDEX `transaction_description_UNIQUE` (`transaction_description` ASC) VISIBLE);

INSERT INTO `test_db`.`transaction_information` (`transaction_description`, `merchant_name`) VALUES ('amazon prime amzn.co.uk/pm', 'Amazon Prime');
INSERT INTO `test_db`.`transaction_information` (`transaction_description`, `merchant_name`) VALUES ('dvla vehicle tax', 'DVLA');
INSERT INTO `test_db`.`transaction_information` (`transaction_description`, `merchant_name`) VALUES ('dvla vehicle tax - vis', 'DVLA');
