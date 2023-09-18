package com.truongsyhoang.backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.truongsyhoang.backend.domain.User;
import com.truongsyhoang.backend.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User entity) {
        // this.passwordEncoder.encode(entity.getPassword());
        return userRepository.save(entity);
    }

    // public boolean authenticate(String username, String password) {
    // User user = userRepository.findByUsername(username);

    // if (user != null && user.getPassword().equals(password)) {
    // return true; // Đăng nhập thành công
    // }
    // return false; // Đăng nhập thất bại
    // }

}