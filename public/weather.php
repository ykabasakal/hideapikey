<?php
// public/weather.php

// Your Meteoblue API key
$meteoblueApiKey = 'TEST1';

// Construct the URL for the Meteoblue API request
$apiUrl = "https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=$meteoblueApiKey&lat=40.1555&lon=26.4127&asl=12&format=json";
//https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=1&lat=40.1555&lon=26.4127&asl=12&format=json
// Make a request to the Meteoblue API
$weatherData = file_get_contents($apiUrl);

// Return the weather data
echo $weatherData;
?>
