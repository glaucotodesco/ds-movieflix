package com.devsuperior.movieflix.services;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GenreService {
    

    @Autowired
    private GenreRepository repo;

    @Transactional(readOnly = true)
    public List<GenreDTO> getGenres(){
        List<Genre> entities = repo.findAll();
        return entities.stream().map( e -> new GenreDTO(e)).collect(Collectors.toList());
    }
    

}
