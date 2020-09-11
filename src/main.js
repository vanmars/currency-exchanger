import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';

function getElements(response, inputtedAmount, inputtedCurrency){
  if(response.conversion_rates){
    let rate = response.conversion_rates[inputtedCurrency];
    if (inputtedCurrency === "MAL"){
      $(".showResult").text("Sorry, the Malawian Kwacha is not supported at this time.");
    } else {
      $(".showResult").text(`${inputtedAmount} USD is ${rate*inputtedAmount} ${inputtedCurrency}.`);
    }
  } else {
    $(".showError").text(`An error occured: ${response.message}`);
  }
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const inputtedAmount = $("#amount").val();
    const inputtedCurrency = $("#currency").val();
    $("#amount").val("");
    CurrencyService.getConvertedAmount()
      .then(function(response){
        getElements(response, inputtedAmount, inputtedCurrency);
      });
  });
});
