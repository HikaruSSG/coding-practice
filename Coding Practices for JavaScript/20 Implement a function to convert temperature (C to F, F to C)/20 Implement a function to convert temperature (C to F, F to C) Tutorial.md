# 20 Implement a function to convert temperature (C to F, F to C) Tutorial

## Prerequisites

*   Understanding of the formulas for converting between Celsius and Fahrenheit.
*   Basic knowledge of conditional statements (if/else).

## Approach

### Approach 1: Using separate functions for each conversion

This approach defines two separate functions, one for converting Celsius to Fahrenheit and another for converting Fahrenheit to Celsius.

### Procedure

1. Define a function `celsiusToFahrenheit(celsius)` that:
    *   Takes a temperature in Celsius as input.
    *   Applies the formula: `fahrenheit = (celsius * 9/5) + 32`.
    *   Returns the converted temperature in Fahrenheit.
2. Define a function `fahrenheitToCelsius(fahrenheit)` that:
    *   Takes a temperature in Fahrenheit as input.
    *   Applies the formula: `celsius = (fahrenheit - 32) * 5/9`.
    *   Returns the converted temperature in Celsius.
3. (Optional) Create a main function or user interface that:
    *   Asks the user to choose the conversion direction (C to F or F to C).
    *   Asks the user to enter the temperature value.
    *   Calls the appropriate conversion function based on the user's choice.
    *   Prints the converted temperature.

### Approach 2: Using a single function with a parameter to specify the direction

This approach defines a single function that takes the temperature and a parameter indicating the conversion direction.

### Procedure

1. Define a function `convertTemperature(temperature, direction)` that:
    *   Takes a temperature value as input.
    *   Takes a direction parameter (e.g., 'CtoF' or 'FtoC') as input.
    *   Uses an `if` statement to check the direction:
        *   If `direction` is 'CtoF', apply the Celsius to Fahrenheit formula.
        *   If `direction` is 'FtoC', apply the Fahrenheit to Celsius formula.
    *   Returns the converted temperature.
2. (Optional) Create a main function or user interface that:
    *   Asks the user to choose the conversion direction.
    *   Asks the user to enter the temperature value.
    *   Calls the `convertTemperature` function with the appropriate arguments.
    *   Prints the converted temperature.

### Approach 3: Using a dictionary to map conversion functions

This approach uses a dictionary to store the conversion functions and selects the appropriate function based on the user's choice.

### Procedure

1. Define the `celsiusToFahrenheit` and `fahrenheitToCelsius` functions as in Approach 1.
2. Create a dictionary `conversions` where:
    *   Keys are the conversion directions (e.g., 'CtoF', 'FtoC').
    *   Values are the corresponding conversion functions.
3. Define a function `convertTemperature(temperature, direction)` that:
    *   Takes a temperature value as input.
    *   Takes a direction parameter as input.
    *   Uses the `direction` to look up the appropriate conversion function in the `conversions` dictionary.
    *   Calls the selected conversion function with the temperature value.
    *   Returns the converted temperature.
4. (Optional) Create a main function or user interface as in Approach 2.

### Approach 4: Using a class with methods for each conversion

This approach defines a class with methods for each conversion type.

### Procedure

1. Define a class `TemperatureConverter`.
2. Inside the class, define a method `celsiusToFahrenheit(self, celsius)` that converts Celsius to Fahrenheit.
3. Inside the class, define a method `fahrenheitToCelsius(self, fahrenheit)` that converts Fahrenheit to Celsius.
4. (Optional) Create a main function or user interface that:
    *   Creates an instance of the `TemperatureConverter` class.
    *   Asks the user to choose the conversion direction.
    *   Asks the user to enter the temperature value.
    *   Calls the appropriate method on the instance based on the user's choice.
    *   Prints the converted temperature.

### Approach 5: Using lambda functions for concise conversion

This approach uses lambda functions for a more compact representation of the conversion formulas.

### Procedure

1. Define a lambda function `celsiusToFahrenheit` that takes Celsius and returns Fahrenheit.
2. Define a lambda function `fahrenheitToCelsius` that takes Fahrenheit and returns Celsius.
3. Create a dictionary or use conditional statements to select the appropriate lambda function based on the desired conversion.
4. (Optional) Create a main function or user interface that:
    *   Asks the user to choose the conversion direction.
    *   Asks the user to enter the temperature value.
    *   Calls the appropriate lambda function based on the user's choice.
    *   Prints the converted temperature.
