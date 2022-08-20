document.getElementById('calculator').addEventListener('click', function () {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }

    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('pin-print');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    // Pin submission message
    const pinSuccessMessege = document.getElementById('pin-success');
    const pinFailureMessege = document.getElementById('pin-failure');
    if (typedNumber === currentPin) {
        pinSuccessMessege.style.display = 'block';
        pinFailureMessege.style.display = 'none';
    }
    else {
        pinFailureMessege.style.display = 'block';
        pinSuccessMessege.style.display = 'none';
    }

})