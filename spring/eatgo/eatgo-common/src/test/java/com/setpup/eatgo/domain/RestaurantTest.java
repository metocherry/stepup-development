package com.setpup.eatgo.domain;

import com.stepup.eatgo.domain.Restaurant;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RestaurantTest {

    @Test
    public void creation() {
        Restaurant restaurant = new Restaurant(1004L, "Bob zip", "Seoul");

        assertEquals(1004L, restaurant.getId());
        assertEquals("Bob zip", restaurant.getName());
        assertEquals("Seoul", restaurant.getAddress());
    }

    @Test
    public void information() {
        Restaurant restaurant = new Restaurant(1004L, "Bob zip", "Seoul");
        assertEquals("Bob zip in Seoul", restaurant.getInformation());
    }
}
