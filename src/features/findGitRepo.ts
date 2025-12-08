import * as vscode from 'vscode';

export async function findGitRepo(workspaceFolder: vscode.WorkspaceFolder | undefined) {
    if (!workspaceFolder){
         return null;
        }

    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const git = gitExtension?.getAPI(1);
    if (!git) {
         return null; 
        }

    return git.repositories.find(
        (r: { rootUri: vscode.Uri }) =>
            workspaceFolder.uri.fsPath.startsWith(r.rootUri.fsPath)
    );
}