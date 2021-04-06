package com.devsuperior.movieflix.resources;

import java.util.List;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.services.MovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("movies")
public class MovieResource {

    @Autowired
    private MovieService service;    

    @GetMapping
    public ResponseEntity<List<MovieDTO>> getMoviesPage() {
        return ResponseEntity.ok().body(service.getMoviesPage());
    }


}
