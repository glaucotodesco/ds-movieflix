package com.devsuperior.movieflix.devoptions;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.Role;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.RoleRepository;
import com.devsuperior.movieflix.repositories.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner{


    private final Logger logger = LoggerFactory.getLogger(DataLoader.class);
    
    @Value("${loader}")
    private Boolean dataLoader;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public void run(String... args) throws Exception {
        

            logger.info("Load status: " + dataLoader);

            if(dataLoader){

                    Role roleVisitor = new Role("ROLE_VISITOR");
                    Role roleMember  = new Role("ROLER_MEMBER");

                    roleRepository.save(roleMember);
                    roleRepository.save(roleVisitor);

                    User userBob = new User("Bob", "bob@gmail.com", "$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG");
                    userBob.setRole(roleVisitor);

                    User userAna = new User("Ana", "ana@gmail.com", "$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG");
                    userAna.setRole(roleMember);
                    
                    userRepository.save(userBob);
                    userRepository.save(userAna);



                    Genre genreAction  = new Genre("Action");
                    Genre genreDrama   = new Genre("Drama");
                    Genre genreFiction = new Genre("Fiction");

                    genreRepository.save(genreAction);
                    genreRepository.save(genreDrama);
                    genreRepository.save(genreFiction);

                    
                    Movie m1  = new Movie("Nova Ordem Espacial", "2092, the space sweep begins!", 2021, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg" , "Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide.‎");
                    Movie m2  = new Movie("Código de Conduta", "Law Abiding Citizen", 2009, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ganM82DDp4QQz2qa7Xjt0sq0uz5.jpgg" , "Quando um dos suspeitos do assassinato de sua mulher e filha é solto, Clyde quer vingança e decide fazer justiça com as próprias mãos. Clyde é preso e dentro da cadeia organiza uma matança para desmascarar o sistema judicial corrupto.");
                    Movie m3  = new Movie("Hacker", "Blackhat", 2015, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1u7TuvR5mSUz2xRQhz01i75IwdT.jpg" , "O hacker Hathaway (Chris Hemsworth) é um gênio da codificação que foi condenado a 15 anos de prisão. Para sair da cadeia antes da conclusão da pena, ele aceita identificar e capturar um hacker que tem feito danos virtuais terríveis com consequências catastróficas no mundo real.");
                    Movie m4  = new Movie("Perigo na Montanha", "Braven", 2018, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/oTXIEUqVqGTtdpaNEaC8cJwDtfs.jpg" , "Joe Braven (Jason Momoa) é um madeireiro que mora na fronteira dos EUA com o Canadá. Ele será confrontado por um grupo de traficantes de drogas e fará o que for preciso para proteger sua família.");
                    Movie m5  = new Movie("Autodestruição", "Kill Switch", 2017, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8bYGpm2EqSibuaulyAzop0r2EWn.jpg" , "A história se passa em um mundo futurista, onde o piloto esta lutando para salvar sua família após um experimento por energia ilimitada e controle de universos paralelos dar errado. A ficção científica é baseada no curta 'What’s in the Box?', de Tim Smit, e tem seu roteiro escrito por Charlie Kindinger e Omid Nooshin.");
                    Movie m6  = new Movie("Tripla Ameaça", "Triple Threat", 2019, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2f8fkWSWOVcTlWforoVpsuaCiwI.jpg" , "A filha de um bilionário torna-se o alvo de um perigoso e eficiente cartel criminoso. O que eles não contavam, é que sua proteção passaria a ser três implacáveis mercenários - dois lutadores passando por dificuldades e um terceiro que jurou vingança contra os outros - lutando com unhas e dentes para impedir que os assassinos alcancem seu alvo.");
                    Movie m7  = new Movie("Chapo: a Fuga do Século", "Chapo: El Escape Del Siglo", 2016, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ngtFY7re3sKxb1sShP0vYC6SSCp.jpg" , "Inspirado por fatos reais, este drama reconta o plano de fuga da prisão do chefe do trafico mexicano Joaquín Guzmán Loera, El Chapo");                   
                    Movie m8  = new Movie("Um Homem Comum", "An Ordinary Man", 2018, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pbhhpGswG3XmjZSmI0V3Ze9sER1.jpg" , "A história segue um criminoso de guerra na clandestinidade (Kingsley), que inicia um relacionamento com sua empregada, uma atriz islandesa em ascensão. Quando as buscas para o encontrarem ficam mais intensas, ele percebe que ela é única pessoa em que pode confiar.");                   
                    Movie m9  = new Movie("Mulher-Maravilha 1984", "Wonder Woman 1984", 2020, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/egg7KFi18TSQc1s24RMmR9i2zO6.jpg" , "Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.");                   
                    Movie m10 = new Movie("Até o Céu", "Hasta el cielo", 2020, "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vx4bevtt3ZVgezPZsuiVxm90l5E.jpg" , "Depois de se apaixonar por Estrela, o mecânico Ángel sai do subúrbio de Madri para um mundo de roubos e vira alvo de um detetive implacável.");                   

                    m1.setGenre(genreDrama);
                    m2.setGenre(genreAction);
                    m3.setGenre(genreFiction);
                    m4.setGenre(genreDrama);
                    m5.setGenre(genreAction);
                    m6.setGenre(genreFiction);
                    m7.setGenre(genreDrama);
                    m8.setGenre(genreAction);
                    m9.setGenre(genreFiction);
                    m10.setGenre(genreDrama);
                    


                    movieRepository.save(m1);
                    movieRepository.save(m2);
                    movieRepository.save(m3);
                    movieRepository.save(m4);
                    movieRepository.save(m5);
                    movieRepository.save(m6);
                    movieRepository.save(m7);
                    movieRepository.save(m8);
                    movieRepository.save(m9);
                    movieRepository.save(m10);
                    

                    Review r1 = new Review("Excelente filme, recomendo");
                    Review r2 = new Review("Melhor filme do ano");
                    Review r3 = new Review("Não gostei");

                    r1.setUser(userAna);
                    r1.setMovie(m1);

                    r2.setUser(userAna);
                    r2.setMovie(m4);

                    r3.setUser(userAna);
                    r3.setMovie(m6);

                    reviewRepository.save(r1);
                    reviewRepository.save(r2);
                    reviewRepository.save(r3);
            }


        
    }
    
}