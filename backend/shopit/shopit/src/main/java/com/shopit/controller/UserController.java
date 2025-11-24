package com.shopit.controller;

import com.shopit.Repository.UserRepository;
import com.shopit.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {

        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("User");
        }

        userRepository.save(user);

        return ResponseEntity.ok("User registered Successfully");
    }

    @PostMapping("/login")

    public ResponseEntity<?> loginUSer(@RequestBody User loginRequest) {

        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            if (user.getPassword().equals(loginRequest.getPassword())) {
                User responseUser = new User();
                responseUser.setUsername(user.getUsername());
                responseUser.setId(user.getId());
                responseUser.setRole(user.getRole());
                responseUser.setEmail(user.getEmail());
                return ResponseEntity.ok(responseUser);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }

    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userRepository.findAll());
}
}
