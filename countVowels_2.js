// const vowels = "programming";

function CountVowels(vowels) {
    let count = 0;
    for (var i = 0; i < vowels.length; i++) {

        if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u') {
            count++
        }
    }
    return count
}

console.log(CountVowels('programming'))

//done