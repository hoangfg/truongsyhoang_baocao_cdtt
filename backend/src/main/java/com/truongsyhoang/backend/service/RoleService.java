package com.truongsyhoang.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.Role;
import com.truongsyhoang.backend.dto.RoleDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.RoleReponsitory;

@Service
public class RoleService {
    @Autowired
    private RoleReponsitory roleReponsitory;

    public Role create(RoleDTO dto) {
        List<?> foundedList = roleReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("role name is existed");
        }
        Role entity = new Role();
        entity.setName(dto.getName());

        return roleReponsitory.save(entity);
    }

    public List<Role> findAll() {
        return roleReponsitory.findAll();
    }

    public Role update(Long id, RoleDTO dto) {
        var found = roleReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("role id not found");
        }
        Role entity = found.get();
        entity.setName(dto.getName());
        return roleReponsitory.save(entity);
    }

    public void delete(Long id) {
        var found = roleReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("role id not found");
        }
        roleReponsitory.delete(found.get());
    }

    public Role findById(Long id) {
        var found = roleReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("role id not found");
        }
        return found.get();
    }
}
