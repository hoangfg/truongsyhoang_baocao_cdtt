package com.truongsyhoang.backend.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.domain.BookGenres;
import com.truongsyhoang.backend.domain.BookImages;
import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.Menu;
import com.truongsyhoang.backend.domain.PageTopic;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.domain.Slider;
import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.dto.AuthorDTO;
import com.truongsyhoang.backend.dto.BookDTO;
import com.truongsyhoang.backend.dto.MenuDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.AuthorReponsitory;
import com.truongsyhoang.backend.repository.MenuReponsitory;
import com.truongsyhoang.backend.repository.PublisherRepository;

@Service
public class MenuService {
    @Autowired
    private MenuReponsitory menuReponsitory;
    @Autowired
    private PublisherService publisherService;
    @Autowired
    private AuthorService authorService;
    @Autowired
    private BookGenresService genresService;
    @Autowired
    private BookLanguageService bookLanguageService;
    @Autowired
    private TopicService topicService;
    @Autowired
    private PageTopicService pageTopicService;

    @Transactional(rollbackFor = Exception.class)
    public MenuDTO insert(MenuDTO dto) {

        Menu entity = new Menu();

        if (dto.getTable_id() != 0) {
            if ("publisher".equals(dto.getType())) {
                Publisher publisher = publisherService.findById(dto.getTable_id());
                System.out.println(publisher);
                if (publisher != null) {
                    dto.setName(publisher.getName());
                    dto.setLink(publisher.getSlug());
                } else {
                    throw new AuthorException("publisher is not");
                }

            }
            if ("author".equals(dto.getType())) {
                Author author = authorService.findById(dto.getTable_id());
                if (author != null) {
                    dto.setName(author.getName());
                    dto.setLink(author.getSlug());
                } else {
                    throw new AuthorException("author is not");
                }

            }
            if ("genre".equals(dto.getType())) {
                BookGenres genre = genresService.findById(dto.getTable_id());
                if (genre != null) {
                    dto.setName(genre.getName());
                    dto.setLink(genre.getSlug());
                } else {
                    throw new AuthorException("genre is not");
                }

            }
            if ("language".equals(dto.getType())) {
                BookLanguage language = bookLanguageService.findById(dto.getTable_id());
                if (language != null) {
                    dto.setName(language.getName());
                    dto.setLink(language.getSlug());
                } else {
                    throw new AuthorException("language is not");
                }

            }
            if ("topic".equals(dto.getType())) {
                Topic topic = topicService.findById(dto.getTable_id());
                if (topic != null) {
                    dto.setName(topic.getName());
                    dto.setLink(topic.getSlug());
                } else {
                    throw new AuthorException("topic is not");
                }

            }
            if ("page".equals(dto.getType())) {
                PageTopic page = pageTopicService.findById(dto.getTable_id());
                if (page != null) {
                    dto.setName(page.getTitle());
                    dto.setLink(page.getSlug());
                } else {
                    throw new AuthorException("page is not");
                }

            }

        }
        List<?> foundedList = menuReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("menu name is existed");
        }
        BeanUtils.copyProperties(dto, entity, "sort_order", "parent_id");
        var save = menuReponsitory.save(entity);

        dto.setId(save.getId());

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public Menu update(Long id, MenuDTO dto) {
        var found = menuReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Slider id not found");
        }

        Menu entity = found.get();

        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();

        Long originalSortOrder = entity.getSort_order();
        if (originalSortOrder == null) {
            originalSortOrder = 0L;
        }
        Menu menuWithSortOrder = menuReponsitory.findById(dto.getIdToUseForSortOrder())
                .orElse(new Menu());
        Long sortOrder = menuWithSortOrder.getSort_order();
        Long newSortOrder = (sortOrder != null) ? sortOrder + 1 : originalSortOrder;
        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy", "type", "table_id");
        entity.setSort_order(newSortOrder);

        // Restore original values
        entity.setCreatedAt(originalCreatedAt);
        entity.setCreatedBy(originalCreatedBy);

        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return menuReponsitory.save(entity);
    }

    public List<Menu> findAll() {
        return menuReponsitory.findAll();
    }

    public Menu findById(Long id) {
        Optional<Menu> found = menuReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Menu id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        Menu existed = findById(id);

        menuReponsitory.delete(existed);
    }

    public Menu status(Long id, MenuDTO dto) {
        Menu entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return menuReponsitory.save(entity);
    }

}
