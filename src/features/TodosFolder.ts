import * as vscode from 'vscode';

export async function ensureTodosFolder(repo: any): Promise<vscode.Uri> {
    const todosUri = vscode.Uri.joinPath(repo.rootUri, '.todos');

    try {
        await vscode.workspace.fs.stat(todosUri);
    } catch {
        await vscode.workspace.fs.createDirectory(todosUri);
    }

    return todosUri;
}