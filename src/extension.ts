import * as vscode from 'vscode';
import { processTodoLine } from './features/TodoProcessor';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('todos.createTodo', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {return;}
		processTodoLine(editor);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
