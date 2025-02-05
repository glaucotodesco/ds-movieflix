package com.devsuperior.movieflix.services;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {
    
    @Autowired
    private MovieRepository movieRepo;

    @Autowired
    private GenreRepository genreRepo;

    @Transactional(readOnly = true)
    public Page<MovieDTO> getMoviesPage(Long genreId, Pageable pageRequest){

        Genre genre = genreId == 0 ? null : genreRepo.getOne(genreId);
        Page<Movie> entites = movieRepo.getPage(genre, pageRequest);

        return entites.map( m -> new MovieDTO(m, false));
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Optional<Movie> op = movieRepo.findById(id);

		Movie entity = op
				.orElseThrow(() -> new EntityNotFoundException("Entity Not Found " + id));
		
        return new MovieDTO(entity,true);
    }

}
