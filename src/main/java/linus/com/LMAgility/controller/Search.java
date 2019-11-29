package linus.com.LMAgility.controller;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Search {
    private String activity, location, orderBy, tutor;
    private int price;
    private LocalDateTime date;
}
