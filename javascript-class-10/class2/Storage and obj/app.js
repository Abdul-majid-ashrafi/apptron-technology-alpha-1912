// var text = "hello_Apptron-1234567";
var message = document.getElementById("message")//.value
var heading = document.getElementById("demo")//.innerHTML
message.value = "DEfualt value"
function add() {
    var value = message.value;
    localStorage.setItem('data', value)
}

function getData() {
    var getStorage = localStorage.getItem('data')
    document.getElementById('demo').innerHTML = getStorage;
}

function removed() {
    localStorage.removeItem('data')
}













// var myObj = {
//     userName: "Majid",
//     age: 25,
//     // num : ['03083232332','03083234342']
// }
// function add() {
//     myObj.email = "majid@gmail.com"
// console.log(myObj)
// }




// function add() {
//     var getInputVal = document.getElementById('demo').value
//     var obj = {
//         userName: getInputVal,
//         age: 12345
//     }
//     localStorage.setItem('data', JSON.stringify(obj))
// }

// function getData() {
//     var getData = localStorage.getItem('data')
//     console.log(JSON.parse(getData))
// }































