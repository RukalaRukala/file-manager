export function createTwoVariables(str) {
    const result = str
        .replace(/^"|"$/g, '')
        .split('" "');
    if (result.length === 2) {
        return result;
    } else {
        throw new Error('Operation failed');
    }
}