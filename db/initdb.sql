USE nodedb;

CREATE TABLE IF NOT EXISTS people (
  id int auto_increment,
  name VARCHAR(255),
  primary key(id)
)