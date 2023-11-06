//Two Implementations - Basic JS & JQuery

var value = 0;
document.addEventListener("DOMContentLoaded",function() {
    const inputEle = document.getElementById('changeBy');
    value = parseInt(inputEle.value);

    inputEle.addEventListener('input', function(){
        value = inputEle.value;
    })
});

function updateValue(direction){
    let currValue =  parseInt(document.getElementById('counter-val').innerHTML);
    var updatedValue = currValue + (direction * value);
    document.getElementById('counter-val').innerHTML = updatedValue;
}

function resetValue(){
    document.getElementById('counter-val').innerHTML = 0;
    document.getElementById('changeBy').value = 1;
}