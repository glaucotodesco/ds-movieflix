package com.devsuperior.movieflix.repositories;

import java.util.Optional;
import com.devsuperior.movieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{
    Optional<User> findByEmail(String email);
}
