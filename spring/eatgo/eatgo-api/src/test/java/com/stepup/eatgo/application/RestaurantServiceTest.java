package com.stepup.eatgo.application;

import com.stepup.eatgo.domain.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class RestaurantServiceTest {

    private RestaurantService restaurantService;

    private RestaurantRepository restaurantRepository;

    private MenuItemRepository menuItemRepository;

    @BeforeEach
    public void setUp() {
        restaurantRepository = new RestaurantRepositoryImpl();
        menuItemRepository = new MenuItemRepositoryImpl();
        restaurantService = new RestaurantService(restaurantRepository, menuItemRepository);
    }

    @Test
    public void getRestaurants() {
        List<Restaurant> restaurants = restaurantService.getRestaurants();

        Restaurant restaurant = restaurants.get(0);
        assertEquals(1004L, restaurant.getId());
    }

    @Test
    public void getRestaurant() {
        Restaurant restaurant = restaurantService.getRestaurant(1004L);
        assertEquals(1004L, restaurant.getId());

        MenuItem menuItem = restaurant.getMenuItems().get(0);
        assertEquals("Kimchi", menuItem.getName());
    }

}
