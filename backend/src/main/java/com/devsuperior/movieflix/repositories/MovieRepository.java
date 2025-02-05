package com.devsuperior.movieflix.repositories;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long>{

    @Query(" SELECT m FROM Movie m " +
           " JOIN m.genre as g "     +
           " WHERE :genre IS NULL OR m.genre = :genre " +
           " ORDER BY m.title")
    Page<Movie> getPage(Genre genre,Pageable pageRequest);

    

}
