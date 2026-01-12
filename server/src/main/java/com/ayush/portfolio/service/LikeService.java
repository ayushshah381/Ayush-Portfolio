package com.ayush.portfolio.service;

import com.ayush.portfolio.model.Interaction;
import com.ayush.portfolio.repository.InteractionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LikeService {
    private final InteractionRepository repository;

    public LikeService(InteractionRepository repository) {
        this.repository = repository;
    }

    public void logLike() {
        // Create a new interaction with the current timestamp
        repository.save(new Interaction(LocalDateTime.now()));
    }

    public Long getTotalLikes() {
        return repository.count();
    }
}
