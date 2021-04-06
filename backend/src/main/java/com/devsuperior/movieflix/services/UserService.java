package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository repository;

       
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //@formatter:off
		User user = repository
                        .findByEmail(username)
                        .orElseThrow( () ->
                            {
                                return new UsernameNotFoundException("Email not found");
                            }
                        );
        //@formatter:on	  

        return user;
    }

}
