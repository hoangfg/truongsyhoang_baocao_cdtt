package com.truongsyhoang.backend.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.Book;
import com.truongsyhoang.backend.domain.BookGenres;
import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.BookSale;
import com.truongsyhoang.backend.domain.BookStore;
import com.truongsyhoang.backend.domain.BookStore;
import com.truongsyhoang.backend.dto.BookBriefDTO;
import com.truongsyhoang.backend.dto.BookLanguageDTO;
import com.truongsyhoang.backend.dto.BookStoreBriefDTO;
import com.truongsyhoang.backend.dto.BookStoreDTO;
import com.truongsyhoang.backend.dto.BookStoreDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.BookReponsitory;
import com.truongsyhoang.backend.repository.BookSaleReponsitory;
import com.truongsyhoang.backend.repository.BookStoreReponsitory;
import com.truongsyhoang.backend.repository.BookStoreReponsitory;

@Service
public class BookStoreService {
    @Autowired
    private BookStoreReponsitory bookStoreReponsitory;
    @Autowired
    private BookSaleReponsitory bookSaleReponsitory;
    @Autowired
    private BookReponsitory bookReponsitory;
    @Autowired
    private FileStorageService fileStorageService;

    public BookStoreDTO insert(BookStoreDTO dto) {
        BookStore entity = new BookStore();
        BeanUtils.copyProperties(dto, entity);

        Optional<Book> optionalBook = bookReponsitory.findById(dto.getBookId());
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            entity.setBook(book);

            entity.setCreatedAt(LocalDate.now());
            entity.setCreatedBy(1L);
            BookStore store = bookStoreReponsitory.save(entity);

            // Check if store is saved successfully before adding BookSale
            if (store.getId() != null) {
                if (dto.getBeginSale() != null && dto.getEndSale() != null && dto.getPriceSale() != 0) {
                    BookSale saleEntity = new BookSale();
                    saleEntity.setBeginSale(dto.getBeginSale());
                    saleEntity.setEndSale(dto.getEndSale());
                    saleEntity.setPriceSale(dto.getPriceSale());
                    saleEntity.setStore(store);
                    bookSaleReponsitory.save(saleEntity);
                }

                BookStoreDTO createdStoreDTO = new BookStoreDTO();
                BeanUtils.copyProperties(store, createdStoreDTO);
                return createdStoreDTO;
            } else {
                throw new AuthorException("Failed to save BookStore.");
            }
        } else {
            throw new AuthorException("Book with id " + dto.getBookId() + " not found.");
        }
    }

    public Optional<BookStore> getById(Long id) {
        return bookStoreReponsitory.findById(id);
    }

    public BookStoreDTO update(Long id, BookStoreDTO dto) {
        Optional<BookStore> optionalStore = bookStoreReponsitory.findById(id);
        if (optionalStore.isPresent()) {
            BookStore store = optionalStore.get();
            BeanUtils.copyProperties(dto, store, "createdAt", "createdBy", "book", "bookId");

            if (dto.getBeginSale() != null && dto.getEndSale() != null && dto.getPriceSale() != 0) {
                BookSale saleEntity = store.getSale();
                if (saleEntity == null) {
                    saleEntity = new BookSale();
                    saleEntity.setStore(store);
                    store.setSale(saleEntity);
                }
                saleEntity.setBeginSale(dto.getBeginSale());
                saleEntity.setEndSale(dto.getEndSale());
                saleEntity.setPriceSale(dto.getPriceSale());
            } else {
                store.setSale(null); // Xóa thông tin sale nếu không cung cấp
            }

            BookStore updatedStore = bookStoreReponsitory.save(store);
            BookStoreDTO updatedStoreDTO = new BookStoreDTO();
            BeanUtils.copyProperties(updatedStore, updatedStoreDTO);
            return updatedStoreDTO;
        } else {
            throw new AuthorException("BookStore with id " + id + " not found.");
        }
    }

    public void delete(Long id) {
        Optional<BookStore> optionalStore = bookStoreReponsitory.findById(id);
        if (optionalStore.isPresent()) {
            bookStoreReponsitory.deleteById(id);
        } else {
            throw new AuthorException("BookStore with id " + id + " not found.");
        }
    }

    public List<BookStoreBriefDTO> findAll() {
        List<BookStore> list = bookStoreReponsitory.findAll();

        List<BookStoreBriefDTO> newList = list.stream().map(item -> {
            BookStoreBriefDTO dto = new BookStoreBriefDTO();
            BeanUtils.copyProperties(item, dto);

            // Lấy thông tin từ BookStore
            if (item.getBook() != null) {
                dto.setBookName(item.getBook().getName());
            }

            // Lấy thông tin sale
            if (item.getSale() != null) {
                BookSale sale = item.getSale();
                dto.setBeginSale(sale.getBeginSale());
                dto.setEndSale(sale.getEndSale());
                dto.setPriceSale(sale.getPriceSale());
            }

            return dto;
        }).collect(Collectors.toList());

        return newList;
    }

}
