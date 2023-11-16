package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.truongsyhoang.backend.domain.User;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class RoleDTO implements Serializable {
   
    private Long id;
    @NotBlank(message = "Tên không được để trống")
	@Size(max = 255, message = "Tên không được vượt quá 255 ký tự")
    private String name;
    private List<User> users;
}
