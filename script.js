const botao = document.querySelector('.botao');
botao.addEventListener('click', function() {
    let numberstr1 = document.getElementById('number1').value;
    let numberstr2 = document.getElementById('number2').value;
    let number1 = Number(numberstr1);
    let number2 = Number(numberstr2);
    document.querySelector('.resposta-errada').innerHTML = ''
    document.querySelector('.resposta-correta').innerHTML = ''
    if (number1 > number2) {
    document.querySelector('.resposta-errada').innerHTML = 'O número que você digitou no primeiro campo é maior do que o segundo!';
    } else if (number1 < number2) {
    document.querySelector('.resposta-correta').innerHTML = 'Tudo certo, os valores estão corretos!';
    }
});
