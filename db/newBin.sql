insert into bins
(bin_name, bin_content, bin_price, shelf_id)
values ($1,$2,$3,$4)
returning *