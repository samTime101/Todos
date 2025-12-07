import * as vscode from 'vscode';
import { parseTodoLine } from './TodoParser';
import { generateHUID } from '../utils/huid';
import { getCommentSymbol } from '../utils/language';
import { ParsedTodo } from '../types/ParsedTodo';

export async function processTodoLine(editor: vscode.TextEditor) {
    /*
     *  Arguments:
     *    editor: The active text editor where the TODO line is located.
     *  Returns:
     *   void 
     */
    const doc = editor.document;
    const lineNum = editor.selection.active.line;
    const lineText = doc.lineAt(lineNum).text;

    const parsed: ParsedTodo | null = parseTodoLine(lineText, doc.languageId);

    if (!parsed) {
        vscode.window.showErrorMessage("No TODO found on this line!");
        return;
    }
    
    const { heading, hasUID, existingUID } = parsed;
    if (hasUID) {
        vscode.window.showInformationMessage(`TODO already has HUID: ${existingUID}`);
        return;
    }
    const huid = generateHUID();

    const newLine = `${getCommentSymbol(doc.languageId)} TODO<${huid}>: ${heading}`;
    await editor.edit(editBuilder => {
        editBuilder.replace(doc.lineAt(lineNum).range, newLine);
    }
    );

    vscode.window.showInformationMessage(`TODO created with HUID: ${huid}`);
}