
function CapitalFirstLetter(n) {
    let newStr = ""
    for (let i = 0; i < n.length; i++) {
        if (n[i] === ' ') {
            newStr = n.split(' ')
        }
    }
    newStr[0][0] = newStr[0].charAt(0).toUpperCase()
    console.log(newStr[0][0])
    // console.log(newStr[1])
}

CapitalFirstLetter("hello world")