package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {
    
    @Autowired
    private MovieRepository repo;

    @Transactional(readOnly = true)
    public List<MovieDTO> getMoviesPage(){
        List<Movie> entites = repo.findAll();
        return entites.stream().map( m -> new MovieDTO(m)).collect(Collectors.toList());
    }

}
