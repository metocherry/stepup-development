(async () => {
    const url = "http://localhost:8080/restaurants";
    const response = await fetch(url);
    const restaurants = await response.json();

    console.log(restaurants);

    document.getElementById("app").innerHTML = restaurants
        .map((restaurant) => `
            <p>${restaurant.id} ${restaurant.name} ${restaurant.address}</p>
        `)
        .join("");
})();

