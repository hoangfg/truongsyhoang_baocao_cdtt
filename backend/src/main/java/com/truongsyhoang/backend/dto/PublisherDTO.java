package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.domain.Status;

import jakarta.validation.constraints.Email;
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
	private Long id;
	// private long parentId;
	@NotBlank(message = "Tên không được để trống")
	@Size(max = 255, message = "Tên không được vượt quá 255 ký tự")
	private String name;
	private String slug;
	@Email(message = "Email không hợp lệ")
	@NotBlank(message = "Email không được để trống")
	@Size(max = 255, message = "Email không được vượt quá 255 ký tự")
	private String email;
	@NotBlank(message = "Số điện thoại không được để trống")
	@Size(max = 255, message = "Số điện thoại không được vượt quá 255 ký tự")
	private String phone;
	@NotBlank(message = "Địa chỉ không được để trống")
	@Size(max = 255, message = "Địa chỉ không được vượt quá 255 ký tự")
	private String address;
	private Status status;
	private LocalDate createdAt;
	private Long createdBy;
	private LocalDate updatedAt;
	private Long updatedBy;
	private Long parentId;

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

}
