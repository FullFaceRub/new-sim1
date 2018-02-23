create table bins
(bin_id serial primary key
, bin_name varchar(180)
, bin_content varchar(180)
, bin_price numeric(10,2)
, shelf_id varchar(1))