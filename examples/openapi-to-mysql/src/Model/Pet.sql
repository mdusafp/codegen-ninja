--
-- Swagger Petstore - OpenAPI 3.0.
-- Prepared SQL queries for 'Pet' definition.
--


--
-- SELECT template for table `Pet`
--
SELECT `id`, `name`, `category`, `photoUrls`, `tags`, `status` FROM `Pet` WHERE 1;

--
-- INSERT template for table `Pet`
--
INSERT INTO `Pet`(`id`, `name`, `category`, `photoUrls`, `tags`, `status`) VALUES (?, ?, ?, ?, ?, ?);

--
-- UPDATE template for table `Pet`
--
UPDATE `Pet` SET `id` = ?, `name` = ?, `category` = ?, `photoUrls` = ?, `tags` = ?, `status` = ? WHERE 1;

--
-- DELETE template for table `Pet`
--
DELETE FROM `Pet` WHERE 0;

