import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <!-- Animated background -->
  <div class="bg-gradient"></div>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <!-- Main Content -->
  <main class="hero">
    <div class="card">
      <div class="badge">
        <span class="badge-dot"></span>
        Running on Vite + Docker
      </div>

      <h1 class="title">Hello, World! 👋</h1>

      <p class="subtitle">
        Project Vite vanilla JS siap jalan — dikemas dengan Docker Compose
        untuk deployment yang mudah dan reproducible.
      </p>

      <div class="stack">
        <span class="pill"><span class="pill-icon">⚡</span> Vite 8</span>
        <span class="pill"><span class="pill-icon">🐳</span> Docker</span>
        <span class="pill"><span class="pill-icon">🎨</span> Vanilla JS</span>
        <span class="pill"><span class="pill-icon">🚀</span> Nginx</span>
      </div>

      <div class="divider"></div>

      <div class="stats">
        <div class="stat">
          <span class="stat-value" id="counter-ms">0ms</span>
          <span class="stat-label">Load Time</span>
        </div>
        <div class="stat">
          <span class="stat-value">100%</span>
          <span class="stat-label">Lightweight</span>
        </div>
        <div class="stat">
          <span class="stat-value">v8</span>
          <span class="stat-label">Vite Version</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="actions">
        <button class="btn btn-primary" id="btn-greet">
          👋 Say Hello
        </button>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          📖 Vite Docs
        </a>
      </div>

      <p class="footer-note">
        Built with ❤️ using
        <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a>
        &amp;
        <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener">Docker Compose</a>
      </p>
    </div>
  </main>
`

// Record page load time
const loadMs = Math.round(performance.now())
document.getElementById('counter-ms').textContent = loadMs + 'ms'

// Greet button
const greetBtn = document.getElementById('btn-greet')
const greetings = [
  '👋 Hello, World!',
  '🌍 Hola, Mundo!',
  '🇯🇵 こんにちは、世界！',
  '🇰🇷 안녕하세요, 세계!',
  '🇮🇩 Halo, Dunia!',
  '🇫🇷 Bonjour, le Monde!',
  '🇩🇪 Hallo, Welt!',
]
let greetIdx = 0

greetBtn.addEventListener('click', () => {
  greetIdx = (greetIdx + 1) % greetings.length
  greetBtn.textContent = greetings[greetIdx]
  greetBtn.style.transition = 'none'
  greetBtn.style.transform = 'scale(0.9)'
  setTimeout(() => {
    greetBtn.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
    greetBtn.style.transform = ''
  }, 50)
})
