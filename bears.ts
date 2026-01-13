const bears = [
    { name: 'Baloo', hunger: 6 },
    { name: 'Yogi', hunger: 9 },
    { name: 'Paddington', hunger: 4 },
    { name: 'Winnie', hunger: 10 },
    { name: 'Chicago', hunger: 20 },
]

interface Bear {
    name: string
    hunger: number
}

const hungryBears = (bears: Bear[]) => {
    var avgHunger = bears.reduce((a, b) => a + b.hunger, 0) / bears.length
    return bears.filter((bear) => bear.hunger > avgHunger)
}

console.log(hungryBears(bears))
