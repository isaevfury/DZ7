const input1 = document.getElementById('num_one');
const input2 = document.getElementById('num_two');
const span = document.getElementById('span');
const plus = document.getElementById('button_calculator_1');
const minus = document.getElementById('button_calculator_2');
const del = document.getElementById('button_calculator_3');
const umn = document.getElementById('button_calculator_4');
const restart = document.getElementById('restart');
plus.addEventListener('click', function (){
    let sumPlus = Number(input1.value) + Number(input2.value);
    span.innerHTML = sumPlus;
});
minus.addEventListener('click', function (){
    let sumMinus = Number(input1.value) - Number(input2.value);
    span.innerHTML = sumMinus;
});
del.addEventListener('click', function (){
    let sumDel = Number(input1.value) / Number(input2.value);
    span.innerHTML = sumDel;
});
umn.addEventListener('click', function (){
    let sumUmn = Number(input1.value) * Number(input2.value);
    span.innerHTML = sumUmn;
});
restart.addEventListener('click', function (){
    span.innerHTML = '0';
    input1.value = '';
    input2.value = '';
})
