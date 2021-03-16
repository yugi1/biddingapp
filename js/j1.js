let arrayBids = [];

function addToElement() {
    document.getElementById("bids").innerHTML = arrayBids.join(" | ");
} addToElement();
function inputBox1() {
    let input = document.getElementById('1input').value;
    arrayBids.push(input);
    document.getElementById("bids").innerHTML = arrayBids.join(" | ");
}

function inputBox2() {
    let input = document.getElementById('2input').value;
    arrayBids.push(input);
    document.getElementById("bids").innerHTML = arrayBids.join(" | ");
}

function save1() {
    let key1 =  `${arrayBids}`;
    localStorage.setItem("key1", key1);
}
function save2() {
    let key2 = `${arrayBids}`;
    localStorage.setItem("key2", key2);
}
    
function retrieve1() {
    document.getElementById("bids").innerHTML = localStorage.getItem("key1");
}
retrieve1();
function retrieve2() {
    document.getElementById("bids").innerHTML = localStorage.getItem("key2");
} retrieve2();