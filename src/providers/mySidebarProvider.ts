import * as vscode from 'vscode';
import { join } from 'path';

export class MySidebarProvider implements vscode.WebviewViewProvider {

    public static readonly viewType = 'myExtension.sidebarView';

    constructor(private readonly context: vscode.ExtensionContext) {}

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        // Set options for the webview
        webviewView.webview.options = {
            enableScripts: true,
        };

        // Get the URI of the script that Vite will bundle
        const scriptUri = webviewView.webview.asWebviewUri(
            vscode.Uri.file(
                join(this.context.extensionPath, 'out', 'sidebar.js')
            )
        );

        // Set the HTML content for the webview
        webviewView.webview.html = this.getHtmlForSidebar(scriptUri);
    }

    private getHtmlForSidebar(scriptUri: vscode.Uri): string {
        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sidebar View</title>
            </head>
            <body>
                <div id="root-sidebar"></div>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
    }
}
