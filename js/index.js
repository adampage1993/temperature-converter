// Assign temp inputs
const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function celsiusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = fTemp.toFixed(2);
  kelvinInput.value = kTemp.toFixed(2);
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * (5 / 9);
  celsiusInput.value = cTemp.toFixed(2);
  kelvinInput.value = kTemp.toFixed(2);
}

function kelvinToCelsiusAndFahrenheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  celsiusInput.value = cTemp.toFixed(2);
  fahrenheitInput.value = fTemp.toFixed(2);
}

function main() {
  celsiusInput.addEventListener("input", celsiusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener("input", fahrenheitToCelsiusAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelsiusAndFahrenheit);
}

main();
