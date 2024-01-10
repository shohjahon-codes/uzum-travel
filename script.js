// // yettinchi masaladan boshladim
// function tekshiruv(son) {
//     if (son % 2 === 0) {
//         return "Juft";
//     } else {
//         return "Toq";
//     }
// }

// var son = prompt("Iltimos, bir son kiriting:");
// son = parseInt(son);

// if (!isNaN(son)) {
//     var natija = tekshiruv(son);
//     console.log(son + " soni " + natija + " son.");
// } else {
//     console.log("Noto'g'ri kiritim. Iltimos, son kiriting.");
// }
// console.log(2+"11"+"1")

let enteredNumber = prompt("Enter your number: ")
let sep = Number(enteredNumber[0] + enteredNumber[1])
// console.log(sep)
switch(sep){
    case 97:
    case 88:
        alert('mobiuz')
        break
    case 99:
    case 77:
        alert("uzmobile")
        break
    case 93:
    case 94:
        alert("ucell")
        break
    case 91:
    case 90:
        alert("beeline")
        break
    default:
        alert("bunday raqam mavjud emas")
}
// console.log(enteredNumber)

// let a = 23;
// console.log(a)