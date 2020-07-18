package com.stepup.eatgo.domain;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RestaurantRepositoryImplTest {

    @Test
    public void save() {
        RestaurantRepository repository = new RestaurantRepositoryImpl();

        int previousSize = repository.findAll().size();

        Restaurant restaurant = new Restaurant("BeRyong", "Seoul");
        repository.save(restaurant);

        assertEquals(1234L, restaurant.getId());

        int currentSize = repository.findAll().size();

        assertEquals(1, currentSize - previousSize);
    }

}
