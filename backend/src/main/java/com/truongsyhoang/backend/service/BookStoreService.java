package com.truongsyhoang.backend.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.BookStore;
import com.truongsyhoang.backend.dto.BookStoreDTO;
import com.truongsyhoang.backend.repository.BookStoreReponsitory;

@Service
public class BookStoreService {
    @Autowired
    private BookStoreReponsitory bookStoreReponsitory;

    public BookStore insert(BookStoreDTO dto) {
        BookStore entity = new BookStore();
        BeanUtils.copyProperties(dto, entity);
        return bookStoreReponsitory.save(entity);
    }
}
