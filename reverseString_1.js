// const reverse = "Hello";
function ReverseString(s) {
    let out = s.split('').reverse().join('');
    return out;

}
console.log(ReverseString('Hello'))