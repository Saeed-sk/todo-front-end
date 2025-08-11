/**
 * Cuts a text to a specified number of arguments (words).
 * @param text - The input string to cut.
 * @param argCount - The number of words (args) to keep.
 * @param suffix - Optional suffix like "..." to indicate truncation.
 * @returns The truncated string.
 */
export function textSlice(text: string, argCount: number, suffix = '...'): string {
    const words = text.trim().split(/\s+/);
    if (words.length <= argCount) return text;
    return words.slice(0, argCount).join(' ') + suffix;
}