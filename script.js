document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("from-unit");
    const toUnitSelect = document.getElementById("to-unit");
    const convertedTemperatureInput = document.getElementById("converted-temperature");

    temperatureInput.addEventListener("input", convertTemperature);
    fromUnitSelect.addEventListener("change", convertTemperature);
    toUnitSelect.addEventListener("change", convertTemperature);

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        if (isNaN(temperature)) {
            convertedTemperatureInput.value = "";
            return;
        }

        let convertedTemperature;

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            convertedTemperature = (temperature + 459.67) * 5 / 9;
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) - 459.67;
        } else {
            convertedTemperature = temperature;
        }

        convertedTemperatureInput.value = convertedTemperature.toFixed(2);
    }
});
