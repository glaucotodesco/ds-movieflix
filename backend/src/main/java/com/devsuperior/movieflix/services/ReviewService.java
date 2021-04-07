package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReviewService {

    @Autowired
    private MovieRepository movieRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ReviewRepository reviewRepo;

    @Autowired
    private AuthService authService;

    @Transactional
    public ReviewDTO saveReview(ReviewDTO dto) {

        User userAuth = authService.getAuthenticatedUser().get();
        User   user  = userRepo.getOne(userAuth.getId());
        Movie  movie = movieRepo.getOne(dto.getMovieId());
        
        Review review = new Review(dto);
        review.setMovie(movie);
        review.setUser(user);

        review = reviewRepo.save(review);

        return new ReviewDTO(review);
    }

   


}
