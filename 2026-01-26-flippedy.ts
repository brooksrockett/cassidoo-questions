const str1 = 'cat and mice'
const str2 = 'banana healthy'
const str3 = 'book park meet tail yellow rusty'

const flippedy = (phrase: string) => {
    const words = phrase.split(' ')
    const vowelTarget = countVowels(words[0])
    for (let [i, word] of words.entries()) {
        if (i > 0 && vowelTarget == countVowels(word)) {
            words[i] = word.split('').reverse().join('')
        }
    }
    return words
}

const countVowels = (word: string) => {
    const vowelCount = word.match(/[aeiou]/gi)?.length ?? 0
    const yCount = Math.round(Math.random() * (word.match(/y/gi)?.length ?? 0)) // sometimes Y
    return vowelCount + yCount
}

console.log(flippedy(str1))
console.log(flippedy(str2))
console.log(flippedy(str3))
