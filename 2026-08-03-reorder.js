function reorder(strings, indexes) {
    let arr = []
    for (const [index, element] of indexes.entries()) {
        arr[element] = strings[index]
    }
    return arr
}
let a = ['C', 'D', 'E', 'F', 'G', 'H']
let b = [3, 0, 4, 1, 2, 5]
console.log(reorder(a, b))
