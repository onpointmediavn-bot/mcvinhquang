import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Dynamically ensure absolute URLs for OpenGraph tags based on current domain (Vercel, custom domain, etc.)
if (typeof window !== 'undefined') {
  const origin = window.location.origin;
  const updateMetaUrl = (selector, attr, path) => {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute(attr, `${origin}${path}`);
    }
  };
  updateMetaUrl('meta[property="og:url"]', 'content', window.location.pathname);
  updateMetaUrl('meta[property="og:image"]', 'content', '/images/og-share.jpg');
  updateMetaUrl('meta[property="og:image:secure_url"]', 'content', '/images/og-share.jpg');
  updateMetaUrl('meta[name="twitter:image"]', 'content', '/images/og-share.jpg');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
