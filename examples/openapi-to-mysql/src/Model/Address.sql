--
-- Swagger Petstore - OpenAPI 3.0.
-- Prepared SQL queries for 'Address' definition.
--


--
-- SELECT template for table `Address`
--
SELECT `street`, `city`, `state`, `zip` FROM `Address` WHERE 1;

--
-- INSERT template for table `Address`
--
INSERT INTO `Address`(`street`, `city`, `state`, `zip`) VALUES (?, ?, ?, ?);

--
-- UPDATE template for table `Address`
--
UPDATE `Address` SET `street` = ?, `city` = ?, `state` = ?, `zip` = ? WHERE 1;

--
-- DELETE template for table `Address`
--
DELETE FROM `Address` WHERE 0;

