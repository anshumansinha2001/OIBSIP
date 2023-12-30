function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");

  if (temperatureInput === "") {
    alert("Please enter a number for temperature.");
    return;
  }

  // Convert temperature
  var convertedTemperature;
  var unitSymbol;
  switch (unit) {
    case "celsius":
      convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
      unitSymbol = "C";
      break;
    case "fahrenheit":
      convertedTemperature = parseFloat(temperatureInput) * (9 / 5) + 32;
      unitSymbol = "F";
      break;
    case "kelvin":
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      unitSymbol = "K";
      break;
    default:
      alert("Invalid unit selection");
      return;
  }

  // Set the result in the "result" input field
  resultElement.value =
    convertedTemperature.toFixed(2) +
    " \u00B0" + // Degree symbol
    unitSymbol;
}
