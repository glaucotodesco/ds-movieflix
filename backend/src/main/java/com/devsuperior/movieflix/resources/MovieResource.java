package com.devsuperior.movieflix.resources;


import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("movies")
public class MovieResource {

    @Autowired
    private MovieService service;

    
    @GetMapping
    public ResponseEntity<Page<MovieDTO>> getMoviesPage(
            @RequestParam(value = "page",  defaultValue = "0") Integer page,
            @RequestParam(value = "size",  defaultValue = "5") Integer size,
            @RequestParam(value = "genreId", defaultValue = "0") Long genreId
            ) {

        PageRequest pageRequest = PageRequest.of(page, size);

        Page<MovieDTO> movieDTOPage  = service.getMoviesPage(genreId, pageRequest);

        return ResponseEntity.ok().body(movieDTOPage);
    }

}
