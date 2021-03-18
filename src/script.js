function increase() {
    var counter = document.querySelector("#val")
    var value = counter.innerHTML;
    value++;
    counter.innerHTML = value;
}

function decrease() {
    var counter = document.querySelector("#val")
    var value = counter.innerHTML;
    value--;
    counter.innerHTML = value;
}

function reset() {
    document.querySelector("#val").innerHTML = 0;
}