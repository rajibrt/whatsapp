document.getElementById('btn-call').addEventListener('click', function () {
    const numberFieldElement = document.getElementById('typed-numbers')
    const numberFieldString = numberFieldElement.value;
    const numberField = parseInt(numberFieldString);

    const whatsappLinkElement = document.getElementById('w-link');
    const whatsappLink = whatsappLinkElement.innerText;

    const callNow = 'https://wa.me/' + numberField;
    window.open(callNow, '_blank')


})