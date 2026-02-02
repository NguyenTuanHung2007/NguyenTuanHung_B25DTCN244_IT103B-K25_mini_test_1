// Câu 1
// let n = +prompt("Nhập số nguyên n");

// if(n % 2 === 0){
//     console.log(`Số ${n} là số chẵn`);
// }
// else{
//     console.log(`Số ${n} là số lẻ`)
// }

// if(n > 0){
//     console.log(`Số ${n} là số dương`);
// }
// else if (n < 0){
//     console.log(`Số ${n} là số âm`);
// }
// else{
//     console.log(`Số ${n} là số 0`)
// }

// if (n > 0){
//      for (let i = 1; i <= n; i++){
//         console.log(i)
//     }
// }

// else if (n <= 0){
//     console.log("Giá trị n không hợp lệ để tạo dãy số");
// }

// Câu 2
let totalSum = 0;
for(let num = 1; num <= 50; num++){
    if (num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
        continue;
    }
    if (num % 3 === 0){
        totalSum += num;
        console.log("Fizz")
    }
    else if (num % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
}

console.log(`Tổng của tất cả các số đã in ra chữ Fizz là ${totalSum}`);