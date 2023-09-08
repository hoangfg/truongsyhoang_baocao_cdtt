package com.truongsyhoang.backend.dto;

import java.io.Serializable;

import com.truongsyhoang.backend.domain.Status;

import lombok.Data;

@Data
public class PublisherDTO implements Serializable {
	 private long id;
	 private String name;
	 private Status status;
		
}
