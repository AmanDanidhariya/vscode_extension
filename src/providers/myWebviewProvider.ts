import * as vscode from 'vscode';
import { join } from 'path';

export class MyWebviewProvider implements vscode.WebviewViewProvider {

    public static readonly viewType = 'myExtension.webviewView';

    constructor(private readonly context: vscode.ExtensionContext) {}

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        // Set options for the webview
        webviewView.webview.options = {
            enableScripts: true,
        };

        // Get the URI of the script that Vite will bundle
        const scriptUri = webviewView.webview.asWebviewUri(
            vscode.Uri.file(
                join(this.context.extensionPath, 'out', 'webview.js')
            )
        );

        // Set the HTML content for the webview
        webviewView.webview.html = this.getHtmlForWebview(scriptUri);
    }

    private getHtmlForWebview(scriptUri: vscode.Uri): string {
        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Main Webview</title>
            </head>
            <body>
                <div id="root-webview"></div>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
    }
}
