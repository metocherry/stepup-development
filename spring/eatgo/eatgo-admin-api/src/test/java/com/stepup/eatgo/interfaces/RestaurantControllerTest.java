package com.stepup.eatgo.interfaces;

import com.stepup.eatgo.application.RestaurantService;
import com.stepup.eatgo.domain.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.core.StringContains.containsString;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// @ExtendWith(SpringExtension.class)
// -> 요청에 대해서 스프링을 이용하여 테스트할 수 있게 해준다.
// @WebMvcTest
// -> 특정 컨트롤러를 테스트한다는 것을 명시한다.

@ExtendWith(SpringExtension.class)
@WebMvcTest(RestaurantController.class)
class RestaurantControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private RestaurantService restaurantService;

    @Test
    public void list() throws Exception {
        List<Restaurant> restaurants = new ArrayList<>();
        restaurants.add(
            Restaurant.builder()
            .id(1004L)
            .name("Bob zip")
            .address("Seoul")
            .build()
        );
        restaurants.add(
            Restaurant.builder()
                .id(2020L)
                .name("Cyber Food")
                .address("Seoul")
                .build()
        );

        given(restaurantService.getRestaurants()).willReturn(restaurants);

        mvc.perform(get("/restaurants"))
            .andExpect(status().isOk())
            .andExpect(content().string(
                containsString("\"id\":1004")
            ))
            .andExpect(content().string(
                containsString("\"name\":\"Bob zip\"")
            ));
    }

    @Test
    public void detail() throws Exception {
        Restaurant restaurant1 = Restaurant.builder()
            .id(1004L)
            .name("Bob zip")
            .address("Seoul")
            .build();

        List<MenuItem> menuItems1 = new ArrayList<>();
        menuItems1.add(MenuItem.builder()
            .name("Kimchi")
            .build());

        restaurant1.setMenuItems(menuItems1);

        given(restaurantService.getRestaurant(anyLong())).willReturn(restaurant1);

        mvc.perform(get("/restaurants/1004"))
            .andExpect(status().isOk())
            .andExpect(content().string(
                containsString("\"id\":1004")
            ))
            .andExpect(content().string(
                containsString("\"name\":\"Bob zip\"")
            ))
            .andExpect(content().string(
                containsString("Kimchi")
            ));


        Restaurant restaurant2 = Restaurant.builder()
            .id(2020L)
            .name("Cyber Food")
            .address("Seoul")
            .build();

        List<MenuItem> menuItems2 = new ArrayList<>();
        menuItems2.add(MenuItem.builder()
            .name("Cyber Food")
            .build());

        restaurant2.setMenuItems(menuItems2);

        given(restaurantService.getRestaurant(anyLong())).willReturn(restaurant2);

        mvc.perform(get("/restaurants/2020"))
            .andExpect(status().isOk())
            .andExpect(content().string(
                containsString("\"id\":2020")
            ))
            .andExpect(content().string(
                containsString("\"name\":\"Cyber Food\"")
            ));
    }


    @Test
    public void create() throws Exception {
        given(restaurantService.addRestaurant(any())).will(invocation -> {
            Restaurant restaurant = invocation.getArgument(0);
            return Restaurant.builder()
                .id(1234L)
                .name(restaurant.getName())
                .address(restaurant.getAddress())
                .build();
        });

        mvc.perform(
            post("/restaurants")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"BeRyong\",\"address\":\"Busan\"}")
            )
            .andExpect(status().isCreated())
            .andExpect(header().string("location", "/restaurants/1234"))
            .andExpect(content().string("{}"));

        verify(restaurantService).addRestaurant(any());
    }

    @Test
    public void update() throws Exception {
        mvc.perform(patch("/restaurants/1004")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"name\":\"JOKER Bar\", \"address\": \"Busan\"}"))
            .andExpect(status().isOk());

        verify(restaurantService).updateRestaurant(1004L, "JOKER Bar", "Busan");
    }
}
