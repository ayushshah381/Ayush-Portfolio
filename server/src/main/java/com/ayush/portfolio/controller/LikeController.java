package com.ayush.portfolio.controller;

import com.ayush.portfolio.service.LikeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/likes")
@CrossOrigin(origins = "*", allowCredentials = "false")
public class LikeController {
    
    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping
    public ResponseEntity<Map<String, Long>> getLikeCount() {
        Long count = likeService.getTotalLikes();
        return ResponseEntity.ok(Collections.singletonMap("count", count));
    }

    @PostMapping
    public ResponseEntity<Map<String, Long>> addLike() {
        likeService.logLike();
        Long newCount = likeService.getTotalLikes();
        return new ResponseEntity<>(Collections.singletonMap("count", newCount), HttpStatus.CREATED);
    }
}