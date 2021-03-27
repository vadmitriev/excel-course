export function parse(value = '') {
    if (typeof value !== 'string') {
        return
    }
    if (value.startsWith('=')) {
        try {
            return eval(value.slice(1))
        } catch (e) {
            return value
        }
    }
    return value
}
