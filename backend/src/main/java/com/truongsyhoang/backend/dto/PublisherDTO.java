package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.truongsyhoang.backend.domain.Status;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Data
public class PublisherDTO implements Serializable {
	private long id;
    private long parentId;
    @NotBlank(message = "Tên không được để trống")
    @Size(max = 255, message = "Tên không được vượt quá 255 ký tự")
    private String name;
    private String slug;
    private Status status;
    private LocalDate createdAt;
    private Long createdBy;
    private LocalDate updatedAt;
    private Long updatedBy;
		
    
}
