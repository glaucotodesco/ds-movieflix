package com.devsuperior.movieflix.services;

import java.util.Optional;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository repo;


    @Transactional(readOnly = true)
    public Optional<User> getAuthenticatedUser() {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        return repo.findByEmail(userEmail);
    }    

    public Optional<Boolean> validadeSelf(User userAuth, Long userId) {
        if(!userAuth.getId().equals(userId)){
            return Optional.empty();
        }
        else{
            return Optional.of(true);
        }
    }
    
}
