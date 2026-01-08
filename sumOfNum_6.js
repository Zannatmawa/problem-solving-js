// const number = [1, 2, 3, 4]


function SumOfAll(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        count += number[i]
    }
    return count
}
console.log(SumOfAll([1, 2, 3, 4]))
//done
//1