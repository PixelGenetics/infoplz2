create database firstapi;

use firstapi;

create table contenido(
	content_id int auto_increment primary key,
    content_author text not null, 
    content_title text not null,
    content_summary text not null,
    content_parrafo text not null,
    content_date date not null,
    content_image varchar(500) not null
);

insert into contenido(content_author,content_title,content_summary,content_parrafo,content_date,content_image) values ('kevin','adasd','dasdasd','dasdasd','2019-01-01','asdasdsada');

select * from contenido;