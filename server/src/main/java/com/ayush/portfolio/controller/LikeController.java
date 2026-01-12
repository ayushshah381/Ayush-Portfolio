package com.ayush.portfolio.controller;

import com.ayush.portfolio.service.LikeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/likes")
@CrossOrigin(origins = "*") // Allows React on port 3000 to access this on port 8081
public class LikeController {

    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    // GET /api/likes
    @GetMapping
    public ResponseEntity<Map<String, Long>> getLikeCount() {
        Long count = likeService.getTotalLikes();
        // Returns JSON: { "count": 123 }
        return ResponseEntity.ok(Collections.singletonMap("count", count));
    }

    // POST /api/likes
    @PostMapping
    public ResponseEntity<Map<String, Long>> addLike() {
        likeService.logLike();
        Long newCount = likeService.getTotalLikes();
        // Returns JSON: { "count": 124 }
        return new ResponseEntity<>(Collections.singletonMap("count", newCount), HttpStatus.CREATED);
    }
}