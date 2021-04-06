package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import com.devsuperior.movieflix.entities.Movie;

public class MovieDTO implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    private Long id;

    private String title;

    private String subTitle;

    private Integer year;

    private String imgUrl;

    private String synoposis;

    private Long genreId;
    
    private List<ReviewDTO> reviews = new ArrayList<>();
   
    public MovieDTO() { }

    public MovieDTO(Movie entity, boolean loadReviews) {
         id         = entity.getId();
         title      = entity.getTitle();
         subTitle   = entity.getSubTitle();
         year       = entity.getYear();
         imgUrl     = entity.getImgUrl();
         synoposis  = entity.getSynoposis();

         genreId    = entity.getGenre().getId();

        if(loadReviews){
            reviews.addAll(entity.getReviews()
                              .stream()
                              .map(r -> new ReviewDTO(r)).collect(Collectors.toList()));
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getSynoposis() {
        return synoposis;
    }

    public void setSynoposis(String synoposis) {
        this.synoposis = synoposis;
    }

    public List<ReviewDTO> getReviews() {
        return reviews;
    }

    public void setReviews(List<ReviewDTO> reviews) {
        this.reviews = reviews;
    }

    public Long getGenreId() {
        return genreId;
    }

    public void setGenreId(Long genreId) {
        this.genreId = genreId;
    }






}
