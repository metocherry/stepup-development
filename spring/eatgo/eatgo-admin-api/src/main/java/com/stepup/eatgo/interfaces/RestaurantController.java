package com.stepup.eatgo.interfaces;

import com.stepup.eatgo.application.RestaurantService;
import com.stepup.eatgo.domain.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin
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

    @PostMapping("/restaurants")
    public ResponseEntity<?> create(@RequestBody Restaurant resource) throws URISyntaxException {
        String name = resource.getName();
        String address = resource.getAddress();

        Restaurant restaurant = restaurantService.addRestaurant(
            Restaurant.builder()
                .name(name)
                .address(address)
                .build()
        );

        URI location = new URI("/restaurants/" + restaurant.getId());
        return ResponseEntity.created(location).body("{}");
    }

    @PatchMapping("/restaurants/{id}")
    public String update(@PathVariable("id") Long id, @RequestBody Restaurant resource) {
        restaurantService.updateRestaurant(id, resource.getName(), resource.getAddress());

        return "{}";
    }
}
