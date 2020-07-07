package com.stepup.eatgo.interfaces;

import com.stepup.eatgo.application.RestaurantService;
import com.stepup.eatgo.domain.MenuItem;
import com.stepup.eatgo.domain.MenuItemRepository;
import com.stepup.eatgo.domain.Restaurant;
import com.stepup.eatgo.domain.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/restaurants")
    public List<Restaurant> list() {
        List<Restaurant> restaurants = restaurantService.getRestaurants();
        return restaurants;
    }

    @GetMapping("/restaurants/{id}")
    public Restaurant detail(@PathVariable("id") Long id) {
        // 기본정보 + 메뉴정보
        Restaurant restaurant = restaurantService.getRestaurant(id);
        return restaurant;
    }
}
