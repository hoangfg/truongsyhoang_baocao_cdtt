package com.truongsyhoang.backend.service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.management.relation.RoleNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.User;
import com.truongsyhoang.backend.domain.Role;
import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.domain.User;
import com.truongsyhoang.backend.dto.UserDTO;
import com.truongsyhoang.backend.dto.RoleDTO;
import com.truongsyhoang.backend.dto.UserDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.RoleReponsitory;
import com.truongsyhoang.backend.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    private RoleReponsitory roleReponsitory;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User create(UserDTO dto) {
        List<?> foundedList = userRepository.findByUsernameContainsIgnoreCase(dto.getUsername());
        if (foundedList.size() > 0) {
            throw new AuthorException("Username is existed");
        }

        User entity = new User();
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setPhone(dto.getPhone());
        entity.setUsername(dto.getUsername());
        var password = hashPasswordSHA1(dto.getPassword());
        entity.setPassword(password);
        entity.setAddress(dto.getAddress());
        entity.setGender(dto.getGender());
        entity.setStatus(dto.getStatus());
        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storeUserImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }
        if (dto.getRoleId() != 0) {
            var role = new Role();
            role.setId(dto.getRoleId());
            entity.setRole(role);
        }
        return userRepository.save(entity);
    }

    public User update(Long id, UserDTO dto) {
        var found = userRepository.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Author id not found");
        }

        User entity = found.get();
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setPhone(dto.getPhone());
        // entity.setUsername(dto.getUsername());
        var password = hashPasswordSHA1(dto.getPassword());
        entity.setPassword(password);
        entity.setAddress(dto.getAddress());
        entity.setGender(dto.getGender());
        entity.setStatus(dto.getStatus());
        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storeUserImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }
        if (dto.getRoleId() != 0) {
            var role = new Role();
            role.setId(dto.getRoleId());
            entity.setRole(role);
        }

        return userRepository.save(entity);
    }

    public User findById(Long id) {
        Optional<User> found = userRepository.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("User id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        User existed = findById(id);
        String fileName = existed.getImage();
        fileStorageService.deleteImageFile(fileName);

        userRepository.delete(existed);
    }

    public User status(Long id, UserDTO dto) {
        User entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return userRepository.save(entity);
    }
    // public boolean authenticate(String username, String password) {
    // User user = userRepository.findByUsername(username);

    // if (user != null && user.getPassword().equals(password)) {
    // return true; // Đăng nhập thành công
    // }
    // return false; // Đăng nhập thất bại
    // }
    public static String hashPasswordSHA1(String password) {
        try {
            // Create a SHA-1 MessageDigest instance
            MessageDigest sha1 = MessageDigest.getInstance("SHA-1");

            // Convert the password to bytes and hash it
            byte[] hashedBytes = sha1.digest(password.getBytes(StandardCharsets.UTF_8));

            // Convert the hashed bytes to a hexadecimal representation
            StringBuilder hexStringBuilder = new StringBuilder();
            for (byte hashedByte : hashedBytes) {
                hexStringBuilder.append(String.format("%02x", hashedByte));
            }

            return hexStringBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            // Handle the exception (e.g., log it or throw a custom exception)
            return null;
        }
    }

}
