 Alpha Vantage API key: 701XT7HF8HCGIAJ5. Please record this API key at a safe place for future data access.



Database Schema 
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table stocks {
  id integer [primary key]
  name text
  price integer
  at_time timestamp 
}

Table users {
  id integer [primary key]
  username varchar
  password varchar
  role varchar
}

Table portfolio {
  id integer [primary key]
  user varchar
  stocks integer
  percentage integer ()
  profit integer
  created_at timestamp
}

Table buy {
  id integer [primary key]
  stock text
  price integer
  number_of integer
  at_time timestamp
}

Table sell {
  id integer [primary key]
  stock text
  price integer
  number_of integer
  at_time timestamp
}

Ref: portfolio.user > users.id 
Ref: stocks.price > sell.id
Ref: stocks.price > buy.id
Ref: stocks.id > portfolio.stocks
