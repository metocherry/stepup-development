package com.stepup.eatgo.domain;

import java.util.List;

public interface MenuItemRepository {
    List<MenuItem> findAllByRestaurantId(Long id);
}
