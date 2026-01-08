// const word = "madam"

function Palindrom(word) {
    let start = word[0]

    if (word.startsWith(start) && word.endsWith(start)) {
        console.log('true')
    }
    else {
        console.log('false')
    }
    return 0
}
console.log(Palindrom("hello"))
//done