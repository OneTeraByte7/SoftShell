# 🐚 SoftShell - Frontend

SoftShell is a responsive and modern frontend application built using **React** and **Tailwind CSS**. This app is designed to provide a smooth user experience and can be easily deployed as a static site.

---

## 🚀 Live Demo

🌐 [View Deployed Site](https://softshell.onrender.com)  


---

## 🧰 Tech Stack

- ⚛️ React
- 🎨 Tailwind CSS
- 🌍 Render (for deployment)
- 📦 npm (package manager)

---

## 📦 Installation

```bash
git clone https://github.com/OneTeraByte7/SoftShell.git
cd SoftShell
npm install

npm start

npm run build

npm install && npm run build
```


## services:
  - type: static
    name: softshell-frontend
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: build
    branch: main
    autoDeploy: true


