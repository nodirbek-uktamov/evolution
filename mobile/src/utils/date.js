import moment from 'moment'

export const DATE_FORMAT = 'yyyy-MM-DD'

export function monthAgoDate() {
    return moment().subtract(1, 'months').format(DATE_FORMAT)
}

export function getDate() {
    return moment().format(DATE_FORMAT)
}
