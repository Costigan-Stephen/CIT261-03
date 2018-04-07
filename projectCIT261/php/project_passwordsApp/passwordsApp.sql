-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 13, 2017 at 03:31 PM
-- Server version: 5.6.32-78.1-log
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `misstyle_passwordsApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `Account`
--

CREATE TABLE IF NOT EXISTS `Account` (
  `accountID` INT NOT NULL AUTO_INCREMENT,
  `masterUsername` VARCHAR(20) NOT NULL,
  `masterPassword` VARCHAR(20) NOT NULL,
  `recoveryQuestion1` VARCHAR(20) NULL,
  `recoveryAnswer1` VARCHAR(20) NULL,
  `recoveryQuestion2` VARCHAR(20) NULL,
  `recoveryAnswer2` VARCHAR(20) NULL,
  `recoveryQuestion3` VARCHAR(20) NULL,
  `recoveryAnswer3` VARCHAR(20) NULL,
  `accountEmail` VARCHAR(20) NOT NULL,
  `deleted` bit(1) NOT NULL,
  PRIMARY KEY (`accountID`),
  UNIQUE INDEX `recoveryQuestion1_UNIQUE` (`recoveryQuestion1` ASC),
  UNIQUE INDEX `recoveryQuestion2_UNIQUE` (`recoveryQuestion2` ASC),
  UNIQUE INDEX `recoveryQuestion3_UNIQUE` (`recoveryQuestion3` ASC))
ENGINE = InnoDB;

--
-- Table structure for table `Profiles`
--
CREATE TABLE IF NOT EXISTS `Profiles` (
  `ProfileID` INT NOT NULL AUTO_INCREMENT,
  `ProfileName` VARCHAR(20) NOT NULL,
  `Username` VARCHAR(20) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(20) NULL,
  `Notes` VARCHAR(20) NULL,
  `Account_accountID` INT NOT NULL,
  `deleted` bit(1) NOT NULL,
  PRIMARY KEY (`ProfileID`),
  INDEX `fk_Profiles_Account_idx` (`Account_accountID` ASC),
  CONSTRAINT `fk_Profiles_Account`
    FOREIGN KEY (`Account_accountID`)
    REFERENCES `Account` (`accountID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

--
-- Dumping data for table `Profiles`
--

INSERT INTO `Profiles` (`ProfileID`, `ProfileName`, `Username`, `Password`, `Email`, `Notes`, `Account_accountID`, `deleted`) VALUES
(2, 'grocery shopping', 'remember list on fridge', '2 Hour', b'0'),
(3, 'laundry', 'sort colors', '30 min.', b'0'),
(5, 'homework', 'math', '40 min.', b'0'),
(6, 'dishes', 'scrub sink', '30 min.', b'0'),
(7, 'bank run', 'remember check', '45 min.', b'0'),
(8, 'sweep & mop', 'kitchen', '30 min.', b'0');


--
-- Dumping data for table `Account`
--

INSERT INTO `Account` (`accountID`, `masterUsername`, `masterPassword`, `recoveryQuestion1`, `recoveryAnswer1`, `recoveryQuestion2`, `recoveryAnswer2`, `recoveryQuestion3`, `recoveryAnswer3`, `accountEmail`, `deleted`) VALUES
(2, 'grocery shopping', 'remember list on fridge', '2 Hour', b'0'),
(3, 'laundry', 'sort colors', '30 min.', b'0'),
(5, 'homework', 'math', '40 min.', b'0'),
(6, 'dishes', 'scrub sink', '30 min.', b'0'),
(7, 'bank run', 'remember check', '45 min.', b'0'),
(8, 'sweep & mop', 'kitchen', '30 min.', b'0'),
(9, 'workout', 'abs & legs', '2 Hours', b'0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Profiles`
--
ALTER TABLE `Profiles`
  ADD PRIMARY KEY (`ProfileID`);
  
--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`accountID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Profiles`
--
ALTER TABLE `Profiles`
  MODIFY `ProfileID` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
  
--
-- AUTO_INCREMENT for table `Profiles`
--
ALTER TABLE `Account`
  MODIFY `accountID` int(30) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
  
--
-- Constraints for dumped tables
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;