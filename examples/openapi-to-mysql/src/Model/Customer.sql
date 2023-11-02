--
-- Swagger Petstore - OpenAPI 3.0.
-- Prepared SQL queries for 'Customer' definition.
--


--
-- SELECT template for table `Customer`
--
SELECT `id`, `username`, `address` FROM `Customer` WHERE 1;

--
-- INSERT template for table `Customer`
--
INSERT INTO `Customer`(`id`, `username`, `address`) VALUES (?, ?, ?);

--
-- UPDATE template for table `Customer`
--
UPDATE `Customer` SET `id` = ?, `username` = ?, `address` = ? WHERE 1;

--
-- DELETE template for table `Customer`
--
DELETE FROM `Customer` WHERE 0;

