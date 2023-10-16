package com.truongsyhoang.backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class MenuDTO {
    private Long id;
    private String name;
    private String link;
    private String position;
    private Long idToUseForSortOrder;
    private Long sort_order;
    private Long parent_id;
    private String type;
    private Long table_id;
    private Long status;
}
