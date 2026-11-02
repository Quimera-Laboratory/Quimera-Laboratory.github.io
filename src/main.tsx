import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const staleModuleReloadKey = 'quimera:stale-module-reload'

function recoverFromStaleModule(event: Event) {
  event.preventDefault()

  const lastReload = Number(sessionStorage.getItem(staleModuleReloadKey) || 0)
  if (Date.now() - lastReload < 5000) return

  sessionStorage.setItem(staleModuleReloadKey, String(Date.now()))
  window.location.reload()
}

// Recover when a cached preview requests an HMR module from before Vite restarted.
window.addEventListener('vite:preloadError', recoverFromStaleModule)
window.addEventListener('unhandledrejection', (event) => {
  const message =
    event.reason instanceof Error ? event.reason.message : String(event.reason)

  if (/dynamically imported module|importing a module script failed/i.test(message)) {
    recoverFromStaleModule(event)
  }
})
window.addEventListener('load', () => {
  window.setTimeout(() => sessionStorage.removeItem(staleModuleReloadKey), 6000)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
