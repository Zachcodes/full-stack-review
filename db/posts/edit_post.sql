update posts
set title = $2, content = $3
where id = $1;

select * from posts 
where user_id = $4;