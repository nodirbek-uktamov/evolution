export function format(number) {
    return (typeof number === 'number') ? number.toLocaleString('fr') : number
}

export function integersOnly(value) {
    return value.replace(/[^0-9]/gim, '')
}

export function range(start, end) {
    const number = []
    // eslint-disable-next-line no-plusplus
    for (let i = start; i <= end; i++) {
        number.push(i)
    }
    return number
}

const months = {
    1: 'Yanvar',
    2: 'Fevral',
    3: 'Mart',
    4: 'Aprel',
    5: 'May',
    6: 'Iyun',
    7: 'Iyul',
    8: 'Avgust',
    9: 'Sentabr',
    10: 'Oktabr',
    11: 'Noyabr',
    12: 'Dekabr',
}

export function getMonthName(month) {
    return months[month]
}
