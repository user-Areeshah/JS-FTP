
window.onload = function() {

    const amountBox = document.getElementById('amount'); 
    const fromDropdown = document.getElementById('fromCurrency'); 
    const toDropdown = document.getElementById('toCurrency'); 
    const convertButton = document.getElementById('convertBtn'); 
    const resultDisplay = document.getElementById('convertedAmount');
    
    const exchangeRates = {
        USD: {
            EUR: 0.92,
            GBP: 0.79,
            JPY: 156.70,
            PKR: 278.40,
            USD: 1 
        },
        EUR: {
            USD: 1.09,
            GBP: 0.86,
            JPY: 170.80,
            PKR: 303.45,
            EUR: 1
        },
        GBP: {
            USD: 1.27,
            EUR: 1.16,
            JPY: 198.80,
            PKR: 353.40,
            GBP: 1
        },
        JPY: {
            USD: 0.0064,
            EUR: 0.0058,
            GBP: 0.0050,
            PKR: 1.77,
            JPY: 1
        },
        PKR: {
            USD: 0.0036,
            EUR: 0.0033,
            GBP: 0.0028,
            JPY: 0.56,
            PKR: 1
        }
    };

    function calculateMoney() {
        
        const amount = parseFloat(amountBox.value);

        // finding courrency in dropdowns.
        const fromCurrency = fromDropdown.value; 
        const toCurrency = toDropdown.value;   

          //logic for invalid amount
        if (isNaN(amount) || amount <= 0) {
            resultDisplay.textContent = "Please type a valid amount!";
            return; 
        }

        //logic for exchange dollar vgera
        if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
            resultDisplay.textContent = "Sorry no exchange rate for this:(";
            return; 
        }


        const rate = exchangeRates[fromCurrency][toCurrency];

        // logic of converted amount
        const convertedAmount = amount * rate;
        resultDisplay.textContent = convertedAmount.toFixed(2);
    }

   
    convertButton.addEventListener('click', calculateMoney);
    amountBox.addEventListener('input', calculateMoney);
    fromDropdown.addEventListener('change', calculateMoney);
    toDropdown.addEventListener('change', calculateMoney);


    calculateMoney();
}; 
