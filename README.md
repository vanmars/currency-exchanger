# _Currency Exchanger_

_11 September 2020_

#### _A currency converter from US dollars to other currencies using the most recent exchange rate_

#### By _**Vanessa Stewart**_

## Description

This is a project for Epicodus meant to practice making API calls and separating buisness/service logic from user interface logic. the original directions for the assignment were as follows:

_For this week's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API._

_Here are the following things your application must do._

- _A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won._
- _Users should be able to convert U.S. currency into at least 5 other types of currency._
- _If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is._
- _If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)_

_Further Exploration: If you have completed basic objectives with time to spare, consider adding additional features, such as:_

* Allow users to convert currency between all available currency types.
* Allow users to convert currency both to and from U.S. dollars.
* Cache the API's results - so you only need to make the call once as long as a user is on the site. Try using session storage for this. If exchange rates are successfully being stored in session storage, an API call shouldn't be made. Instead, the rates can be grabbed directly from session storage.
* Use a dropdown menu for currencies.

## Specifications
| Test | Behavior | Input    | Output   |
| -------- | -------- | -------- | -------- |
| 1 | The program takes an inputted USD amount and an inputted currency and returns the converted amount. | USD: $100.00; Currency: Chinese Renminbi | 683.44 Chines Renminbi |
| 2 | The program accepts at least five currencies. | USD: $100.00; Currencies: Chinese Renminbi, Norwegian Krone, Croatian Kuna, New Zealand Dollar, Argentine Peso  | 683.44 Chines Renminbi, 906.36 Norwegian Krone, 636.73 Croatian Kuna, 150.02 New Zealand Dollar, 7489.59 Argentine Peso |
| 3 | The program displays API call failures | * plant mistake in API call url * | An error has occured: 400. |
| 4 | If currency query not supported by API, the program returns a notification, stating the currency in question does not exist. | Malawian Kwacha | Sorry, the Malawian Kwacha is not supported at this time. |

## Further Exploration Specifications
| Test | Behavior | Input    | Output   |
| -------- | -------- | -------- | -------- |
| 5 | The program includes all available currency type in dropdown menu form. | * user clicks on dropdown menu * | 	UAE Dirham, Argentine Peso, Australian Dollar, Bulgarian Lev, Brazilian Real, Bahamian Dollar, Canadian Dollar, Swiss Franc, Chilean Peso, 	Chinese Renminbi, Colombian Peso, Czech Koruna, Danish Krone, Dominican Peso, Egyptian Pound, Euro, Fiji Dollar, 	Pound Sterling, 	Guatemalan Quetzal, Hong Kong Dollar, Croatian Kuna, Hungarian Forint, Indonesian Rupiah, Israeli New Shekel, 	Indian Rupee, 	Icelandic Krona, 	Japanese Yen, 	South Korean Won, 	Kazakhstani Tenge,  Maldivian Rufiyaa, Mexican Peso, Malaysian Ringgit, 	Norwegian Krone, 	New Zealand Dollar, Panamanian Balboa, 	Peruvian Sol, Philippine Peso, 	Pakistani Rupee, 	Polish Zloty, Paraguayan Guarani,	Romanian Leu, Russian Ruble, Saudi Riyal, Swedish Krona, 	Singapore Dollar, Thai Baht, Turkish Lira, New Taiwan Dollar,	Ukrainian Hryvnia, Uruguayan Peso, South African Rand |
| 6 | The program allows users to convert from and to US dollars. | Currency: Chinese Renminbi; Amount: 100 | 100 Chinese Renminbi is 14.63 USD |

## Setup/Installation Requirements

To View Project:
* Open a web browser of your choice and navigate to the following page:

To Extend This Project:
* Clone this project using the 'git clone https://github.com/vanmars/currency-exchanger.git' command in terminal/command line.
* Navigate to the cloned folder and run 'npm install' in your terminal to download all dependencies.
* Open the cloned folder in a text editor of your choice.
* Create an '.env' FILE in your project root directory.
* Register for a free API key: Navigate to ExchangeRate-API in your browser: https://www.exchangerate-api.com/. Enter your email and click the blue 'Get Free Key' button.* 
* Complete registration for a key, then copy the generated key and place in your .env file.
* In your .env file, add your API key using this template: "API_KEY=[Your API KEY]" (No brackets around the key.)
* Have fun tinkering!

When you are ready to view your project: 
* Run 'npm run start' in your terminal. This command will bundle your code and start a live server, which will open automatically in your browser.

OR

* Run 'npm run build' to bundle your code, and then right click on the dist/index.html. Select 'Reveal in Finder' from the dropdown menu, and a window in your browser will open to the page.


## Known Bugs

_There are no known bugs at this time._

Items to Improve
* Error message should be more specific than 'undefined'

## Support and Contact Details

_Connect with me at vamariestewart@gmail.com with ideas to improve this project._

## Technologies Used
* HTML5
* CSS/Bootstrap
* JavaScript/jQuery
* Webpack
* Node Package Manager
* Exchange Rate API 

### License

Copyright (c) 2020 **_Vanessa Stewart_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
