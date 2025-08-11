export function isValidArray<T>(value: any): value is T[] {
    return Array.isArray(value) && value.length > 0;
}