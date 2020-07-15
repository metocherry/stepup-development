package com.stepup.eatgo.interfaces;

import com.stepup.eatgo.application.RestaurantService;
import com.stepup.eatgo.domain.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.core.StringContains.containsString;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
        restaurants.add(new Restaurant(1004L, "Bob zip", "Seoul"));
        restaurants.add(new Restaurant(2020L, "Cyber Food", "Seoul"));

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
        Restaurant restaurant1 = new Restaurant(1004L, "Bob zip", "Seoul");
        restaurant1.addMenuItem(new MenuItem("Kimchi"));

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


        Restaurant restaurant2 = new Restaurant(2020L, "Cyber Food", "Seoul");
        restaurant2.addMenuItem(new MenuItem("Cyber Food"));

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
}