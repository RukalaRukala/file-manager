export function createTwoVariables(str) {
    return str
        .replace(/^"|"$/g, '')
        .split('" "');
}