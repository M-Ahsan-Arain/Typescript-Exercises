/*Cars: Write a function that stores information about a car in a Object. The function should always receive a 
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the 
required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all 
the information was stored correctly. */

interface Car {
    manufacturer: string;
    modelName: string;
    color?: string;
    optionalFeatures?: string[];
}

function createCar(manufacturer: string, modelName: string, options: Partial<Car> = {}): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };

    if (options.color) {
        car.color = options.color;
    }

    if (options.optionalFeatures) {
        car.optionalFeatures = options.optionalFeatures;
    }

    return car;
}

// Call the function with required information and additional details
const myCar = createCar("Toyota", "Camry", {
    color: "Blue",
    optionalFeatures: ["Sunroof", "Navigation"],
});

// Print the car object
console.log("Car Information:");
console.log(myCar);
