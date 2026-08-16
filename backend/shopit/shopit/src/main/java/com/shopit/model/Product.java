package com.shopit.model;


import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String name;
    private String description;
    private BigDecimal price;
    private int stockQuantity ;
    private String brand;
    private boolean productAvailable;
    private String category;
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyy")
    private String releaseDate;
    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;


}
