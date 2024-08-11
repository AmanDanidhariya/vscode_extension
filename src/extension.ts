// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MyWebviewProvider } from './providers/myWebviewProvider';
import { MySidebarProvider } from './providers/mySidebarProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            MyWebviewProvider.viewType,
            new MyWebviewProvider(context)
        )
    );

	context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            MySidebarProvider.viewType,
            new MySidebarProvider(context)
        )
    );
}

// This method is called when your extension is deactivated
export function deactivate() {}
