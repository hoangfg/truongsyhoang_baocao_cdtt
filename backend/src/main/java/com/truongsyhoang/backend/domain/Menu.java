package com.truongsyhoang.backend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "menu")
public class Menu extends AbtractEntity {
    @Column(name = "name", nullable = false, length = 100)
    private String name;
    @Column(name = "link", nullable = false, length = 255)
    private String link;
    @Column(name = "position", nullable = false, length = 255)
    private String position;
    @Column(name = "sort_order", columnDefinition = "int default 0")
    private Long sort_order;
    @Column(name = "parent_id", nullable = true)
    private Long parent_id;
    @Column(name = "type", nullable = false, length = 100)
    private String type;
    @Column(name = "table_id", nullable = true)
    private Long table_id;
    @Column(name = "status", columnDefinition = "bigint default 0")
    private Long status;

    @PrePersist
    @Override
    public void prePersist() {
        super.prePersist();

        setSort_order(0L);
        setParent_id(0L);
        setStatus(1L);

    }
}
