package com.devsuperior.movieflix.entities;

/**
 * Movie
 */

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TB_MOVIE")
public class Movie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String subTitle;

    private Integer year;

    private String imgUrl;

    @Column(columnDefinition = "TEXT")
    private String synoposis;

    @OneToMany(mappedBy = "movie")
    private List<Review> reviews = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "ID_GENRE")
    private Genre genre;
     

    public Movie() {

    }

    public Movie(String title, String subTitle, Integer year, String imgUrl, String synoposis) {
        this.title = title;
        this.subTitle = subTitle;
        this.year = year;
        this.imgUrl = imgUrl;
        this.synoposis = synoposis;
    }

    public Movie(Long id, String title, String subTitle, Integer year, String imgUrl, String synoposis) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.year = year;
        this.imgUrl = imgUrl;
        this.synoposis = synoposis;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
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

    
    public List<Review> getReviews() {
        return reviews;
    }

    public void addReview(Review review) {
        reviews.add(review);
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Movie other = (Movie) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Movie [id=" + id + ", imgUrl=" + imgUrl + ", subTitle=" + subTitle + ", synoposis=" + synoposis
                + ", title=" + title + ", year=" + year + "]";
    }



    
}