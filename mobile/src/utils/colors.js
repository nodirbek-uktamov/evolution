const linearColors = [
    ['#441DFC', '#4E81EB'],
    ['#13DEA0', '#06B782'],
    ['#FC67A7', '#F6815B'],
    ['#209cee', '#1f99eb'],
    ['#01d1b2', '#3173dc'],
    ['#A770EF', '#FDB99B'],
]

export function choiceLinear(index, reversed) {
    const array = reversed ? linearColors.reverse() : linearColors
    return array[index - Math.floor(index / array.length) * array.length]
}
