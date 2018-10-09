
DROP TABLE IF EXISTS Comment;

CREATE TABLE Comment
(
  comment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment varchar(140) NOT NULL
);

INSERT INTO Comment (comment) VALUES ('You eat out too much. -MOM'),
('You eat out too much. -DAD'), ('You should try out this new restaurant. -ME');

SELECT * FROM Comment;
