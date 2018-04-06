-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema passwordsApp
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `passwordsApp` ;

-- -----------------------------------------------------
-- Schema passwordsApp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `passwordsApp` DEFAULT CHARACTER SET utf8 ;
USE `passwordsApp` ;

-- -----------------------------------------------------
-- Table `passwordsApp`.`Account`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `passwordsApp`.`Account` ;

CREATE TABLE IF NOT EXISTS `passwordsApp`.`Account` (
  `accountID` INT NOT NULL AUTO_INCREMENT,
  `masterUsername` VARCHAR(20) NOT NULL,
  `masterPassword` VARCHAR(20) NOT NULL,
  `recoveryQ1` VARCHAR(20) NULL,
  `recoveryAnswer1` VARCHAR(20) NULL,
  `recoveryQuestion2` VARCHAR(20) NULL,
  `recoveryAnswer2` VARCHAR(20) NULL,
  `recoveryQuestion3` VARCHAR(20) NULL,
  `recoveryAnswer3` VARCHAR(20) NULL,
  `accountEmail` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`accountID`),
  UNIQUE INDEX `recoveryQ1_UNIQUE` (`recoveryQ1` ASC),
  UNIQUE INDEX `recoveryQuestion2_UNIQUE` (`recoveryQuestion2` ASC),
  UNIQUE INDEX `recoveryQuestion3_UNIQUE` (`recoveryQuestion3` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `passwordsApp`.`Profiles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `passwordsApp`.`Profiles` ;

CREATE TABLE IF NOT EXISTS `passwordsApp`.`Profiles` (
  `ProfileID` INT NOT NULL AUTO_INCREMENT,
  `Profile Name` VARCHAR(20) NOT NULL,
  `Username` VARCHAR(20) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(20) NULL,
  `Notes` VARCHAR(20) NULL,
  `Account_accountID` INT NOT NULL,
  PRIMARY KEY (`ProfileID`),
  INDEX `fk_Profiles_Account_idx` (`Account_accountID` ASC),
  CONSTRAINT `fk_Profiles_Account`
    FOREIGN KEY (`Account_accountID`)
    REFERENCES `passwordsApp`.`Account` (`accountID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
