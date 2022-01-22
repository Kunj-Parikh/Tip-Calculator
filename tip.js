let tip = document.getElementById('tip-display');
window.addEventListener('load', () => {
    let tax = prompt('What is the tax?');
    let bill = prompt('What is the total bill?');
    tax = parseFloat(tax);
    bill = parseFloat(bill);
    let totalTip = tax*bill*2;
    tip.innerText = `You should tip: $${totalTip}`;
});
document.querySelector('#DIA').addEventListener('click', () => {
    let tax = prompt('What is the tax?');
    let bill = prompt('What is the total bill?');
    tax = parseFloat(tax);
    bill = parseFloat(bill);
    let totalTip = tax*bill*2;
    tip.innerText = `You should tip: $${totalTip}`;
});