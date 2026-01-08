const number = [1, 2, 3, 4, 5, 6]
let evenNum = []
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        console.log('even');
        evenNum.push(number[i])
    }
}

console.log(evenNum)

//