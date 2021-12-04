const linearColors = [
    ['#A770EF', '#FDB99B'],
    ['#209cee', '#1f99eb'],
    ['#441DFC', '#4E81EB'],
    ['#FC67A7', '#F6815B'],
    ['#01d1b2', '#3173dc'],
    ['#13DEA0', '#06B782'],
]

const reversedColors = [
    ['#01d1b2', '#3173dc'],
    ['#13DEA0', '#06B782'],
    ['#A770EF', '#FDB99B'],
    ['#209cee', '#1f99eb'],
    ['#441DFC', '#4E81EB'],
    ['#FC67A7', '#F6815B'],
]

const courseColors = [
    ['#01d1b2', '#3173dc'],
    ['#FC67A7', '#F6815B'],
    ['#441DFC', '#4E81EB'],
    ['#209cee', '#1f99eb'],
    ['#A770EF', '#FDB99B'],
    ['#13DEA0', '#06B782'],
]

export function choiceLinear(index, reversed = false, course = false) {
    let array = reversed ? reversedColors : linearColors

    if (course) {
        array = courseColors
    }

    return array[index - Math.floor(index / array.length) * array.length]
}
