package com.truongsyhoang.backend.service;

import java.text.Normalizer;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.BookSale;
import com.truongsyhoang.backend.dto.BookSaleDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.BookSaleReponsitory;

@Service
public class BookSaleService {
    @Autowired
    private BookSaleReponsitory bookSaleReponsitory;

    public BookSale insert(BookSaleDTO dto) {
        BookSale entity = new BookSale();
        BeanUtils.copyProperties(dto, entity);
        return bookSaleReponsitory.save(entity);
    }

}
