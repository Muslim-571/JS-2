let elForm = document.querySelector('.hero__first');
let elInput = document.querySelector('.hero__input');
let elSelect = document.querySelector('.hero__main-select');
let elResult = document.querySelector('.hero__input-result');
let UZS_TO_USD = 11425.36;
let UZS_TO_RUB = 132.887;
let UZS_TO_EUR = 12592.7;

elForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (elSelect.value == 'USD') {
        let newInput = elInput.value.trim();
        let result = newInput / UZS_TO_USD
        let mainResult = result.toFixed(2);
        elResult.value = mainResult + '$'
    } else if (elSelect.value == 'RUB') {
        let newInput = elInput.value.trim();
        let result = newInput / UZS_TO_RUB
        let mainResult = result.toFixed(3);
        elResult.value = mainResult + '₽'
    } else if (elSelect.value == 'EUR') {
        let newInput = elInput.value.trim();
        let result = newInput / UZS_TO_EUR
        let mainResult = result.toFixed(1);
        elResult.value = mainResult + '€'
    }
})