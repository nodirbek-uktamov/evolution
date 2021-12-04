export function maxLength(value, max) {
    if (value.length > max) {
        return `${value.slice(0, max)} ...`
    }
    return value
}

export function getFirstLetter(value) {
    let name = ''
    value.split(' ').map((item) => {
        name += item.substr(0, 1)
        return name
    })
    return name
}

export function getQueryVariable(url, variable) {
    const vars = url.split('&')

    for (let i = 0; i < vars.length; i += 1) {
        const pair = vars[i].split('=')

        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1])
        }
    }

    console.log('Query variable %s not found', variable)
}
