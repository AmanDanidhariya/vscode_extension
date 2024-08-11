import React from 'react'
import ReactDOM from 'react-dom/client';
import Sidebar from './components/Sidebar'

// ReactDOM.render(<Webview/>,document.getElementById("'root-webview"));
const rootElement = document.getElementById('root-webview');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Sidebar />)
}
