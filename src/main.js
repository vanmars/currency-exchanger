import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';

// Write getElements function
function getElements(response, inputtedAmount, inputtedCurrency){
  if(response.conversion_rates){
    let rate = response.conversion_rates[inputtedCurrency];
    $(".showResult").text(`${inputtedAmount} USD is ${rate*inputtedAmount} ${inputtedCurrency}.`);
  } else {
    $(".showError").text(`An error occured: ${response.message}`);
  }
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    // Grab User Inputs and Store in Variables
    const inputtedAmount = $("#amount").val();
    const inputtedCurrency = $("#currency").val();
    // const inputtedCurrencyName = $("#currency").name();
    // Clear Input Fields
    $("#amount").val("");
    $("#currency").val("");
    // $("#currency").name("");
    // Run getCurrency Method that feeds into getElements funtion
    CurrencyService.getConvertedAmount()
      .then(function(response){
        getElements(response, inputtedAmount, inputtedCurrency);
      });
  });
});
