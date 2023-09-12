package com.truongsyhoang.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.repository.PublisherRepository;

@Service
public class PublisherService {
    @Autowired
    private PublisherRepository publisherRepository;

    public Publisher findById(Long id) {
        Optional<Publisher> found = publisherRepository.findById(id);
        if (found.isEmpty()) {
            throw new PublisherException("Publisher id: " + id + " không tồn tại");
        }
        return found.get();
    }

    public Publisher save(Publisher entity) {
        return publisherRepository.save(entity);
    }

    public Publisher update(Long id, Publisher entity) {
        Publisher existed = findById(id);
        if (existed.isEmpty()) {
            throw new PublisherException("Publisher id: " + id + " không tồn tại");
        }
        try {
            Publisher existedPublisher = existed.get();
            existedPublisher.setName(entity.getName());
            existedPublisher.setSlug(entity.getSlug());
            existedPublisher.setStatus(entity.getStatus());
            existedPublisher.setUpdatedAt(entity.getUpdatedAt());
            existedPublisher.setUpdatedBy(entity.getUpdatedBy());
            return publisherRepository.save(existedPublisher);
        } catch (Exception e) {
            throw new PublisherException("update thất bại");
        }
    }

    public List<Publisher> findAll() {
        return publisherRepository.findAll();
    }

    public Page<Publisher> findAll(Pageable pageable) {
        return publisherRepository.findAll(pageable);
    }

    public void deleteById(Long id) {
        Publisher existed = findById(id);
        publisherRepository.delete(existed);
    }
}
