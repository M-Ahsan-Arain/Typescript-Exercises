/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return 
a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city_names:string, country_names:string) {
    console.log(`"${city_names}, ${country_names}"`);
}

city_country("Lahore", "Pakistan");

city_country("Paris", "France");

city_country("Rome", "Italy");

