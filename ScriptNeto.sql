-- MySQL Script generated by MySQL Workbench
-- Tue May 14 19:50:24 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dados191n
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dados191n
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET utf8 ;
USE `dados191n` ;

-- -----------------------------------------------------
-- Table `dados191n`.`Filme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dados191n`.`Filme` (
  `fil_codigo` INT NOT NULL AUTO_INCREMENT,
  `fil_nome` VARCHAR(150) NOT NULL,
  `fil_dtProducao` DATE NOT NULL,
  `fil_estudio` VARCHAR(150) NOT NULL,
  `fil_genero` VARCHAR(45) NOT NULL,
  `fil_duracao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`fil_codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dados191n`.`Ator`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dados191n`.`Ator` (
  `atr_codigo` INT NOT NULL AUTO_INCREMENT,
  `atr_codigo_filme` INT NULL,
  `atr_nome` VARCHAR(200) NOT NULL,
  `atr_nascimento` DATE NOT NULL,
  `atr_nomeArtistico` VARCHAR(200) NULL,
  `atr_dtCadastro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`atr_codigo`),
  INDEX `fk_atr_filme_idx` (`atr_codigo_filme` ASC) VISIBLE,
  CONSTRAINT `fk_atr_filme`
    FOREIGN KEY (`atr_codigo_filme`)
    REFERENCES `dados191n`.`Filme` (`fil_codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `dados191n`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dados191n`.`Pais` (
  `pais_codigo` INT NOT NULL AUTO_INCREMENT,
  `pais_nome` VARCHAR(100) NOT NULL,
  `pais_capital` VARCHAR(100) NOT NULL,
  `pais_hemisferio` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`pais_codigo`));

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `dados191n`.`Filme` (`fil_codigo`, `fil_nome`, `fil_dtProducao`, `fil_estudio`, `fil_genero`, `fil_duracao`) VALUES (DEFAULT, 'Avengers: Endgame', '2019-01-01', 'Marvel', 'Ação', '250');
INSERT INTO `dados191n`.`Filme` (`fil_codigo`, `fil_nome`, `fil_dtProducao`, `fil_estudio`, `fil_genero`, `fil_duracao`) VALUES (DEFAULT, 'Nasce uma Estrela', '2018-01-01', 'Warner Bros.', 'Drama', '180');
INSERT INTO `dados191n`.`Filme` (`fil_codigo`, `fil_nome`, `fil_dtProducao`, `fil_estudio`, `fil_genero`, `fil_duracao`) VALUES (DEFAULT, 'Shazam!', '2019-01-01', 'Warner Bros', 'Ação', '202');
INSERT INTO `dados191n`.`Filme` (`fil_codigo`, `fil_nome`, `fil_dtProducao`, `fil_estudio`, `fil_genero`, `fil_duracao`) VALUES (DEFAULT, 'Mulher Maravilha', '2017-01-01', 'Warner Bros.', 'Ação', '129');



INSERT INTO `dados191n`.`Ator` (`atr_codigo`, `atr_codigo_filme`, `atr_nome`, `atr_nascimento`, `atr_nomeArtistico`, `atr_dtCadastro`) VALUES (DEFAULT, 1, 'Robert John Downey Jr.', '1965-04-04', 'Robert Downey Jr.', DEFAULT);
INSERT INTO `dados191n`.`Ator` (`atr_codigo`, `atr_codigo_filme`, `atr_nome`, `atr_nascimento`, `atr_nomeArtistico`, `atr_dtCadastro`) VALUES (DEFAULT, 2, 'Stefani Joanne A. Germanotta ', '1986-03-28', 'Lady Gaga', DEFAULT);
INSERT INTO `dados191n`.`Ator` (`atr_codigo`, `atr_codigo_filme`, `atr_nome`, `atr_nascimento`, `atr_nomeArtistico`, `atr_dtCadastro`) VALUES (DEFAULT, 3, 'Zachary Levi', '1980-09-29', 'Zachary Levi', DEFAULT);
INSERT INTO `dados191n`.`Ator` (`atr_codigo`, `atr_codigo_filme`, `atr_nome`, `atr_nascimento`, `atr_nomeArtistico`, `atr_dtCadastro`) VALUES (DEFAULT, 4, 'Gal Gadot Varsano', '1985-04-30', 'Gal Gadot', DEFAULT);


INSERT INTO `dados191n`.`Pais` (`pais_codigo`, `pais_nome`, `pais_capital`, `pais_hemisferio`) VALUES (DEFAULT, 'Brasil', 'Brasília', 'Sul');
INSERT INTO `dados191n`.`Pais` (`pais_codigo`, `pais_nome`, `pais_capital`, `pais_hemisferio`) VALUES (DEFAULT, 'Estados Unidos', 'Washington', 'Norte');
INSERT INTO `dados191n`.`Pais` (`pais_codigo`, `pais_nome`, `pais_capital`, `pais_hemisferio`) VALUES (DEFAULT, 'Rússia', 'Moscou', 'Norte');
INSERT INTO `dados191n`.`Pais` (`pais_codigo`, `pais_nome`, `pais_capital`, `pais_hemisferio`) VALUES (DEFAULT, 'China', 'Pequim', 'Norte');



select A.atr_codigo, A.atr_nomeArtistico, A.atr_nascimento, F.fil_nome from ator A left join filme F on A.atr_codigo_filme = F.fil_codigo