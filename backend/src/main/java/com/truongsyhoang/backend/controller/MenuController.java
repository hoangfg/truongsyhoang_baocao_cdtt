package com.truongsyhoang.backend.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.BookGenres;
import com.truongsyhoang.backend.domain.Menu;
import com.truongsyhoang.backend.domain.Slider;
import com.truongsyhoang.backend.dto.BookDTO;
import com.truongsyhoang.backend.dto.BookGenresDTO;
import com.truongsyhoang.backend.dto.MenuDTO;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.service.MapValidationErrorService;
import com.truongsyhoang.backend.service.MenuService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/menus")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    @Autowired
    private MenuService menuService;
    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping
    public ResponseEntity<MenuDTO> createMenu(@Valid @RequestBody MenuDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        // if (responseEntity != null) {
        // return responseEntity;
        // }
        var saveDto = menuService.insert(dto);
        return new ResponseEntity<>(saveDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @ModelAttribute MenuDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        Menu entity = menuService.update(id, dto);
        dto.setId(entity.getId());

        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(menuService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMenu(@PathVariable long id) {
        var entity = menuService.findById(id);
        MenuDTO dto = new MenuDTO();
        BeanUtils.copyProperties(entity, dto);

        return new ResponseEntity<>(entity, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMenu(@PathVariable long id) {
        menuService.deleteById(id);
        return new ResponseEntity<>("Menu có id: " + id + " đã xóa thành công", HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id, @RequestBody MenuDTO dto) {
        try {

            Menu entity = menuService.status(id, dto);
            return new ResponseEntity<>(entity, HttpStatus.OK);
        } catch (PublisherException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
