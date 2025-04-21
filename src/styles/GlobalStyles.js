import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

  :root {
    --primary-dark: #0a0a0a;
    --secondary-dark: #111111;
    --gold-accent: #ffd700;
    --neon-blue: #00f3ff;
    --glass-bg: rgba(255, 255, 255, 0.05);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Orbitron', sans-serif;
    background: var(--primary-dark);
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  .glass-effect {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
  }

  .neon-text {
    text-shadow: 0 0 10px var(--neon-blue),
                 0 0 20px var(--neon-blue),
                 0 0 30px var(--neon-blue);
  }

  .gold-accent {
    color: var(--gold-accent);
  }
`

export default GlobalStyles;
