import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService.js';

// function getCurrencyElements(response, inputtedAmount, inputtedCurrency){
//   if(response.conversion_rates){
//     let rate = response.conversion_rates[inputtedCurrency];
//     if (inputtedCurrency === "MAL"){
//       $(".showCurrencyResult").text("Sorry, the Malawian Kwacha is not supported at this time.");
//     } else {
//       $(".showCurrencyResult").html(`${inputtedAmount} USD = <span class='text-info'>${rate*inputtedAmount}</span> ${inputtedCurrency}`);
//     }
//   } else {
//     $(".showCurrencyError").text(`An error occured: ${response.message}`);
//   }
// }

// function getUSDElements(response, inputtedAmount, inputtedCurrency){
//   if(response.conversion_rates){
//     let rate = response.conversion_rates[inputtedCurrency];
//     if (inputtedCurrency === "MAL"){
//       $(".showUSDResult").text("Sorry, the Malawian Kwacha is not supported at this time.");
//     } else {
//       $(".showUSDResult").html(`${inputtedAmount} ${inputtedCurrency} = <span class='text-info'>${inputtedAmount/rate}</span> USD`);
//     }
//   } else {
//     $(".showUSDError").text(`An error occured: ${response.message}`);
//   }
// }

function getElements(response, inputtedAmount, inputtedBase, inputtedTarget){
  if(response.conversion_rates){
    let baseRate = response.conversion_rates[inputtedBase];
    let targetRate = response.conversion_rates[inputtedTarget];
    if (inputtedBase === "MAL" || inputtedTarget === "MAL"){
      $(".showResult").text("Sorry, the Malawian Kwacha is not supported at this time.");
    } else {
      $(".showResult").html(`${inputtedAmount} ${inputtedBase} = <span class='text-info'>${inputtedAmount * (targetRate/baseRate)}</span> ${inputtedTarget}`);
    }
  } else {
    $(".showError").text(`An error occured: ${response.message}`);
  }
}

var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

$(document).ready(function(){
  CurrencyService.getConvertedAmount()
    .then(function(data){
      let stringifiedResponse = JSON.stringify(data);
      sessionStorage.setItem("response", stringifiedResponse);
      let response = JSON.parse(sessionStorage.getItem("response"));

      $("form#converter").submit(function(event){
        event.preventDefault();
        event.preventDefault();
        const inputtedAmount = $("#amount").val();
        const inputtedBase = $("#baseCurrency").val();
        const inputtedTarget = $("#targetCurrency").val();
        getElements(response, inputtedAmount, inputtedBase, inputtedTarget);
      });
      // $("form#fromUSD").submit(function(event){
      //   event.preventDefault();
      //   const inputtedAmount = $("#amountFromUSD").val();
      //   const inputtedCurrency = $("#currencyFromUSD").val();
      //   getCurrencyElements(response, inputtedAmount, inputtedCurrency);
      // });
      // $("form#toUSD").submit(function(event){
      //   event.preventDefault();
      //   const inputtedAmount = $("#amountToUSD").val();
      //   const inputtedCurrency = $("#currencyToUSD").val();
      //   getUSDElements(response, inputtedAmount, inputtedCurrency);
      // });
    });
});
