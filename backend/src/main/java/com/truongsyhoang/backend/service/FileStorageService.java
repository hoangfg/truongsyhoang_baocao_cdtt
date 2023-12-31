package com.truongsyhoang.backend.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.truongsyhoang.backend.config.FileStorageProperties;
import com.truongsyhoang.backend.dto.UploadedFileInfo;
import com.truongsyhoang.backend.exception.FileStorageException;
import com.truongsyhoang.backend.exception.FileNotFoundException;

@Service
public class FileStorageService {
    private final Path fileConfigImageStorageLocation;
    private final Path fileAuthorImageStorageLocation;
    private final Path fileBookImageStorageLocation;
    private final Path filePostImageStorageLocation;
    private final Path fileSliderImageStorageLocation;
    private final Path fileUserImageStorageLocation;

    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileConfigImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadConfigImageDir())
                .toAbsolutePath()
                .normalize();
        this.fileAuthorImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadAuthorImageDir())
                .toAbsolutePath()
                .normalize();
        this.filePostImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadPostImageDir())
                .toAbsolutePath()
                .normalize();
        this.fileBookImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadBookImageDir())
                .toAbsolutePath()
                .normalize();
        this.fileSliderImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadSliderImageDir())
                .toAbsolutePath()
                .normalize();
        this.fileUserImageStorageLocation = Paths.get(fileStorageProperties
                .getUploadUserImageDir())
                .toAbsolutePath()
                .normalize();
        try {
            Files.createDirectories(fileConfigImageStorageLocation);
            Files.createDirectories(fileAuthorImageStorageLocation);
            Files.createDirectories(filePostImageStorageLocation);
            Files.createDirectories(fileSliderImageStorageLocation);
            Files.createDirectories(fileUserImageStorageLocation);
            Files.createDirectories(fileBookImageStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Counld not create the directory where the upload files will be stored", ex);
        }
    }

    public String storeConfigImageFile(MultipartFile file) {
        return storeFile(fileConfigImageStorageLocation, file);
    }

    public String storeAuthorImageFile(MultipartFile file) {
        return storeFile(fileAuthorImageStorageLocation, file);
    }

    public String storePostImageFile(MultipartFile file) {
        return storeFile(filePostImageStorageLocation, file);
    }

    public String storeSliderImageFile(MultipartFile file) {
        return storeFile(fileSliderImageStorageLocation, file);
    }

    public String storeUserImageFile(MultipartFile file) {
        return storeFile(fileUserImageStorageLocation, file);
    }

    public String storeBookImageFile(MultipartFile file) {
        return storeFile(fileBookImageStorageLocation, file);
    }

    public UploadedFileInfo storeUploadBookImageFile(MultipartFile file) {
        return storeUploadedFile(fileBookImageStorageLocation, file);
    }

    private String storeFile(Path location, MultipartFile file) {
        String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            if (originalFilename.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + originalFilename);
            }
            Path targetLocation = location.resolve(originalFilename);
            Files.copy(file.getInputStream(), targetLocation,
                    StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Đường dẫn lưu file: " + targetLocation.toAbsolutePath());

            return originalFilename;
        } catch (Exception e) {
            throw new FileStorageException("Could not store file " + originalFilename +
                    ". Please try again!", e);
        }
    }

    private UploadedFileInfo storeUploadedFile(Path location, MultipartFile file) {
        String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            if (originalFilename.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + originalFilename);
            }
            Path targetLocation = location.resolve(originalFilename);
            Files.copy(file.getInputStream(), targetLocation,
                    StandardCopyOption.REPLACE_EXISTING);

            UploadedFileInfo info = new UploadedFileInfo();
            info.setFileName(originalFilename);
            info.setUri(originalFilename);
            info.setName(StringUtils.getFilename(originalFilename));
            return info;
        } catch (Exception e) {
            throw new FileStorageException("Could not store file " + originalFilename +
                    ". Please try again!", e);
        }
    }

    public Resource loadConfigFileAResource(String fileName) {
        return loadFileAsResourse(fileConfigImageStorageLocation, fileName);
    }

    public Resource loadAuthorFileAResource(String fileName) {
        return loadFileAsResourse(fileAuthorImageStorageLocation, fileName);
    }

    public Resource loadPostFileAResource(String fileName) {
        return loadFileAsResourse(filePostImageStorageLocation, fileName);
    }

    public Resource loadSliderFileAResource(String fileName) {
        return loadFileAsResourse(fileSliderImageStorageLocation, fileName);
    }

    public Resource loadUserFileAResource(String fileName) {
        return loadFileAsResourse(fileUserImageStorageLocation, fileName);
    }

    public Resource loadBookFileAResource(String fileName) {
        return loadFileAsResourse(fileBookImageStorageLocation, fileName);
    }

    public void deleteConfigImageFile(String fileName) {
        deleteFile(fileConfigImageStorageLocation, fileName);
    }

    public void deleteImageFile(String fileName) {
        deleteFile(fileAuthorImageStorageLocation, fileName);
    }

    public void deletePostImageFile(String fileName) {
        deleteFile(filePostImageStorageLocation, fileName);
    }

    public void deleteSliderImageFile(String fileName) {
        deleteFile(fileSliderImageStorageLocation, fileName);
    }

    public void deleteUserImageFile(String fileName) {
        deleteFile(fileUserImageStorageLocation, fileName);
    }

    public void deleteBookImageFile(String fileName) {
        deleteFile(fileBookImageStorageLocation, fileName);
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
