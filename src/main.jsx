import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// רישום ה-Service Worker אחרי טעינת האפליקציה
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log("✅ Service Worker Registered", reg))
    .catch(err => console.log("❌ Service Worker Registration Failed", err));
}
