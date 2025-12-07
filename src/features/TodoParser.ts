import { getCommentSymbol } from '../utils/language';
import { ParsedTodo } from '../types/ParsedTodo';

export function parseTodoLine(lineText: string, languageId: string): ParsedTodo | null {
    /*
    *  Arguments:
    *    lineText: The text of the line to parse.
    *    languageId: The language identifier of the document.
    *  Returns:
    *    ParsedTodo object if a TODO is found, otherwise null.    
    */
    const commentSymbol = getCommentSymbol(languageId);
    const regex = new RegExp(`^\\s*${commentSymbol}\\s*TODO(?:<([0-9]{8}-[0-9]{6})>)?:\\s*(.+)$`);
    const match = lineText.match(regex);

    if (!match) {
        return null;
    }

    const uid = match[1];
    const heading = match[2];

    return {
        heading: heading.trim(),
        hasUID: Boolean(uid),
        existingUID: uid
    };
}
