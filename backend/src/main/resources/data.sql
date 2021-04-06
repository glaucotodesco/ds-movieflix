insert  into  tb_role (authority)  values ('ROLE_VISITOR');
insert  into  tb_role (authority)  values ('ROLE_MEMBER');

insert into tb_user (name, email, passaword, role_id) values ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG',1);
insert into tb_user (name, email, passaword, role_id) values ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG',2);

insert into  tb_genre (name) values ('ACTION');
insert into  tb_genre (name) values ('FICTION');
insert into  tb_genre (name) values ('DRAMA');

insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (1, 'Nova Ordem Espacial', '2092, the space sweep begins!', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg' , 'Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide.‎');
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (2, 'Código de Conduta', 'Law Abiding Citizen', 2009, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ganM82DDp4QQz2qa7Xjt0sq0uz5.jpgg' , 'Quando um dos suspeitos do assassinato de sua mulher e filha é solto, Clyde quer vingança e decide fazer justiça com as próprias mãos. Clyde é preso e dentro da cadeia organiza uma matança para desmascarar o sistema judicial corrupto.');
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (3,'Hacker', 'Blackhat', 2015, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1u7TuvR5mSUz2xRQhz01i75IwdT.jpg' , 'O hacker Hathaway (Chris Hemsworth) é um gênio da codificação que foi condenado a 15 anos de prisão. Para sair da cadeia antes da conclusão da pena, ele aceita identificar e capturar um hacker que tem feito danos virtuais terríveis com consequências catastróficas no mundo real.');
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (1,'Perigo na Montanha', 'Braven', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/oTXIEUqVqGTtdpaNEaC8cJwDtfs.jpg' , 'Joe Braven (Jason Momoa) é um madeireiro que mora na fronteira dos EUA com o Canadá. Ele será confrontado por um grupo de traficantes de drogas e fará o que for preciso para proteger sua família.');
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (2,'Autodestruição', 'Kill Switch', 2017, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8bYGpm2EqSibuaulyAzop0r2EWn.jpg' , 'A história se passa em um mundo futurista, onde o piloto esta lutando para salvar sua família após um experimento por energia ilimitada e controle de universos paralelos dar errado. A ficção científica é baseada no curta What’s in the Box?, de Tim Smit, e tem seu roteiro escrito por Charlie Kindinger e Omid Nooshin.');
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (3,'Tripla Ameaça', 'Triple Threat', 2019, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2f8fkWSWOVcTlWforoVpsuaCiwI.jpg' , 'A filha de um bilionário torna-se o alvo de um perigoso e eficiente cartel criminoso. O que eles não contavam, é que sua proteção passaria a ser três implacáveis mercenários - dois lutadores passando por dificuldades e um terceiro que jurou vingança contra os outros - lutando com unhas e dentes para impedir que os assassinos alcancem seu alvo.');
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (3,'Chapo: a Fuga do Século', 'Chapo: El Escape Del Siglo', 2016, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ngtFY7re3sKxb1sShP0vYC6SSCp.jpg' , 'Inspirado por fatos reais, este drama reconta o plano de fuga da prisão do chefe do trafico mexicano Joaquín Guzmán Loera, El Chapo');                   
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (2,'Um Homem Comum', 'An Ordinary Man', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pbhhpGswG3XmjZSmI0V3Ze9sER1.jpg' , 'A história segue um criminoso de guerra na clandestinidade (Kingsley), que inicia um relacionamento com sua empregada, uma atriz islandesa em ascensão. Quando as buscas para o encontrarem ficam mais intensas, ele percebe que ela é única pessoa em que pode confiar.');                   
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (2,'Mulher-Maravilha 1984', 'Wonder Woman 1984', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/egg7KFi18TSQc1s24RMmR9i2zO6.jpg' , 'Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.');                   
insert into  tb_movie (id_genre, title, sub_title, year, img_url, synoposis)  values (1,'Até o Céu', 'Hasta el cielo', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vx4bevtt3ZVgezPZsuiVxm90l5E.jpg' , 'Depois de se apaixonar por Estrela, o mecânico Ángel sai do subúrbio de Madri para um mundo de roubos e vira alvo de um detetive implacável.');                   


insert into  tb_review (movie_id, text, user_id) values (1,'Filme Muito Bom', 2);
insert into  tb_review (movie_id, text, user_id) values (4,'Melhor Filme do ano', 2);
insert into  tb_review (movie_id, text, user_id) values (7,'Não gostei, não recomendo', 2);






