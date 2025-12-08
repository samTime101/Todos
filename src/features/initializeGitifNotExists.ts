import * as vscode from 'vscode';

export async function initializeGitifNotExists(repo: any) {
        if (!repo) {
        const choice = await vscode.window.showInformationMessage("No Git repo found. Initialize a Git repository?", "Yes", "No");
        if (choice === "Yes") {
            await vscode.commands.executeCommand('git.init');
            vscode.window.showInformationMessage("Git repository initialized. Please try adding the TODO again.");
        }
        else{
            vscode.window.showErrorMessage("Cannot proceed without a Git repository.");
        }
        return;
    }
} 