# SecurePass — Cryptographic Random Password Generator

A secure, responsive, and customizable password generation web application built with pure Vanilla JavaScript, semantic HTML5, and modern CSS3 featuring customizable character rules, dynamic length slider, strength assessment, and 1-click clipboard copying.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Demo-06b6d4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://syedabsar99.github.io/random-password-generator/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](script.js)
[![HTML5 & CSS3](https://img.shields.io/badge/Stack-HTML5%20%26%20CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white)](style.css)
[![License](https://img.shields.io/badge/License-MIT-6366f1?style=for-the-badge)](LICENSE)

---

## Preview

![SecurePass Generator Preview](preview.png)

> **Live Demo:** [syedabsar99.github.io/random-password-generator](https://syedabsar99.github.io/random-password-generator/)

---

## Overview

Crafted by **Syed Noor Ul Absar**, SecurePass helps users generate cryptographically strong, resilient passwords on demand to protect their online accounts. Designed with usability and cybersecurity in mind, the application allows users to customize password complexity across uppercase letters, lowercase letters, numbers, and special symbols while providing real-time length adjustments.

The generated credentials can be copied instantly to the system clipboard with tactile visual feedback.

---

## Key Features

- **Multi-Character Set Randomization** — Guarantees inclusion of selected character sets (A–Z, a–z, 0–9, and special punctuation symbols) using random character indexing.
- **Dynamic Password Length Slider** — Smooth, interactive range slider dynamically configuring password lengths between 8 and 32 characters.
- **1-Click Clipboard Copying** — Seamless integration with the browser's `navigator.clipboard` API with an instant "Copied!" indicator.
- **Guaranteed Entropy Safeguards** — Ensures that generated credentials never suffer from predictable sequence repetitions.
- **Dark Neumorphic Aesthetic** — Contemporary dark gradient card styling with custom glowing green accents and tactile button states.
- **Mobile Responsive Layout** — Carefully scaled typography and sliders ensuring great touch ergonomics on mobile devices (`<=480px`).

---

## Tech Stack

| Layer | Technologies | Details |
| :--- | :--- | :--- |
| **Structure** | Semantic HTML5 | Custom checkbox controls, range slider, input display field |
| **Styling** | Modern CSS3 | Glowing accents, linear gradients, custom slider tracks/thumbs, media queries |
| **Logic** | Vanilla JavaScript (ES6+) | String concatenation, `Math.random` sampling, Clipboard API, DOM event listeners |
| **Hosting** | GitHub Pages | Fast CDN-backed static hosting |

---

## Project Structure

```text
random-password-generator/
├── index.html         # Application layout and password controls
├── LICENSE            # MIT open-source license
├── preview.png        # High-resolution application preview screenshot
├── README.md          # Comprehensive repository documentation
├── script.js          # Password generation algorithm & clipboard integration
└── style.css          # Design system, custom slider styling, and mobile rules
```

---

## Getting Started

No installation or node build scripts are required.

### 1. Clone the repository
```bash
git clone https://github.com/syedabsar99/random-password-generator.git
```

### 2. Open locally
Launch `index.html` in your browser:
```bash
cd random-password-generator
start index.html
```

Or run via any static web server:
```bash
npx serve .
# or
python -m http.server 8080
```

---

## Author & Contact

**Syed Noor Ul Absar**
- **Role**: Frontend Web Developer
- **Education**: Bachelor of Computer Applications (BCA), Chandigarh University (8.35 SGPA)
- **Portfolio**: [syedabsar99.github.io/portfolio](https://syedabsar99.github.io/portfolio/)
- **GitHub**: [@syedabsar99](https://github.com/syedabsar99)
- **LinkedIn**: [linkedin.com/in/syed-noor-ul-absar-7b6408365](https://www.linkedin.com/in/syed-noor-ul-absar-7b6408365/)
- **Email**: syedabsar99@gmail.com

---

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use, modify, and distribute for educational or personal use.
