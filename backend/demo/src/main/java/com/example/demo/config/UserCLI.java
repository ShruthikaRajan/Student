package com.example.demo.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.demo.enumerated.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor

public class UserCLI  implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    
    public void run(String... args) throws Exception {
        if(userRepository.count() > 0)
           return;
        var user = User.builder()
                   .name("Admin")
                   .email("admin@gmail.com")
                   .password(passwordEncoder.encode("Admin@123"))
                   .role(Role.ADMIN)
                   .build();
                    userRepository.save(user);
        
    }

}
