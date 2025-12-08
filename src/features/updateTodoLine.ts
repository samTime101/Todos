import * as vscode from 'vscode';
import { getCommentSymbol } from '../utils/language';

export async function updateTodoLine(
    editor: vscode.TextEditor,
    huid: string,
    heading: string,
    languageId: string
) {
    const comment = getCommentSymbol(languageId);
    const newLine = `${comment} TODO<${huid}>: ${heading}`;

    const doc = editor.document;
    const lineNum = editor.selection.active.line;

    await editor.edit(edit => {
        edit.replace(doc.lineAt(lineNum).range, newLine);
    });

    vscode.window.showInformationMessage(`TODO created with HUID: ${huid}`);
}
