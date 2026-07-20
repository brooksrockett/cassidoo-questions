function countBlinks(input) {
    const re = /_.*?_/g
    const arr = input.match(re)
    if (arr !== null) {
        return arr.reduce((a, b) => (a.length > b.length ? a : b)).length - 2
    }
    return 0
}

const inputs = ['_..._', '_._.._...._', '....._', '._._..']
console.log(countBlinks(inputs[0]))
console.log(countBlinks(inputs[1]))
console.log(countBlinks(inputs[2]))
console.log(countBlinks(inputs[3]))
