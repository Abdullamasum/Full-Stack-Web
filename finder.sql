DROP  database IF EXISTS finder;
CREATE  database finder;
use finder;

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `details` text NOT NULL,
  `seller` int(11) NOT NULL,
  `filename` text NOT NULL,
  `posting_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product` (`product_id`, `name`, `details`, `seller`, `filename`, `posting_date`) VALUES
(1, 'Frank', 'chair', 1, 'http://placekitten.com/400/300', '2022-08-04'),
(2, 'Jessie', 'table', 3, 'http://placekitten.com/400/302', '2022-11-03'),
(3, 'Garfield', 'blender', 2, 'http://placekitten.com/400/304', '2022-02-12');

CREATE TABLE `register` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `role` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `register` (`user_id`, `name`, `email`, `password`, `role`) VALUES
(1, 'admin', 'admin@metropolia.fi', 'asdf', 0),
(2, 'Jane Doez', 'jane@metropolia.fi', 'qwer', 1),
(3, 'John Doe', 'john@metropolia.fi', '1234', 1);

ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `seller` (`seller`);

ALTER TABLE `register`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `register`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`seller`) REFERENCES `register` (`user_id`) ON DELETE CASCADE;