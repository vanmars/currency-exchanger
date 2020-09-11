import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';

function getCurrencyElements(response, inputtedAmount, inputtedCurrency){
  if(response.conversion_rates){
    let rate = response.conversion_rates[inputtedCurrency];
    if (inputtedCurrency === "MAL"){
      $(".showCurrencyResult").text("Sorry, the Malawian Kwacha is not supported at this time.");
    } else {
      $(".showCurrencyResult").html(`${inputtedAmount} USD = <span class='text-info'>${rate*inputtedAmount}</span> ${inputtedCurrency}`);
    }
  } else {
    $(".showCurrencyError").text(`An error occured: ${response.message}`);
  }
}

function getUSDElements(response, inputtedAmount, inputtedCurrency){
  if(response.conversion_rates){
    let rate = response.conversion_rates[inputtedCurrency];
    if (inputtedCurrency === "MAL"){
      $(".showUSDResult").text("Sorry, the Malawian Kwacha is not supported at this time.");
    } else {
      $(".showUSDResult").html(`${inputtedAmount} ${inputtedCurrency} = <span class='text-info'>${inputtedAmount/rate}</span> USD`);
    }
  } else {
    $(".showUSDError").text(`An error occured: ${response.message}`);
  }
}

$(document).ready(function(){
  CurrencyService.getConvertedAmount()
    .then(function(data){
      let stringifiedResponse = JSON.stringify(data);
      sessionStorage.setItem("response", stringifiedResponse);
      let response = JSON.parse(sessionStorage.getItem("response"));
      $("form#fromUSD").submit(function(event){
        event.preventDefault();
        const inputtedAmount = $("#amountFromUSD").val();
        const inputtedCurrency = $("#currencyFromUSD").val();
        getCurrencyElements(response, inputtedAmount, inputtedCurrency);
      });
      $("form#toUSD").submit(function(event){
        event.preventDefault();
        const inputtedAmount = $("#amountToUSD").val();
        const inputtedCurrency = $("#currencyToUSD").val();
        getUSDElements(response, inputtedAmount, inputtedCurrency);
      });
    });
});
