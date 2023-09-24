package com.truongsyhoang.backend.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.truongsyhoang.backend.config.FileStorageProperties;
import com.truongsyhoang.backend.exception.FileStorageException;
import com.truongsyhoang.backend.exception.FileNotFoundException;

@Service
public class FileStorageService {
    private final Path fileAuthorImageStorageLocation;

    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileAuthorImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadAuthorImageDir())
                .toAbsolutePath()
                .normalize();
        try {
            Files.createDirectories(fileAuthorImageStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Counld not create the directory where the upload files will be stored", ex);
        }
    }

    public String storeAuthorImageFile(MultipartFile file) {
        return storeFile(fileAuthorImageStorageLocation, file);
    }

    private String storeFile(Path location, MultipartFile file) {
        UUID uuid = UUID.randomUUID();
        String ext = StringUtils.getFilenameExtension(file.getOriginalFilename());
        String filename = uuid.toString() + "." + ext;

        try {
            if (filename.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains ivalid path sequence " + filename);
            }
            Path targetLocation = location.resolve(filename);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return filename;
        } catch (Exception e) {
            throw new FileStorageException("Could not store file" + filename + " .Please try again!", e);
        }
    }

    public Resource loadAuthorFileAResource(String fileName) {
        return loadFileAsResourse(fileAuthorImageStorageLocation, fileName);
    }

    public void deleteImageFile(String fileName) {
        deleteFile(fileAuthorImageStorageLocation, fileName);
    }

    private Resource loadFileAsResourse(Path location, String fileName) {
        try {
            Path filePath = location.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new FileNotFoundException("File not found " + fileName);
            }

        } catch (Exception e) {

            throw new FileNotFoundException("File not found " + fileName, e);
        }

    }

    private void deleteFile(Path location, String fileName) {
        try {
            Path filePath = location.resolve(fileName);
            // if(!Files.exists(filePath)) {
            // throw new FileNotFoundException("File not found " + fileName);
            // }
            // Files.delete(filePath);

            if (Files.exists(filePath)) {
                Files.delete(filePath);
            }
        } catch (Exception e) {

            throw new FileNotFoundException("File not found " + fileName, e);
        }
    }
}
