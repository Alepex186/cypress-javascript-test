# 🌿 Automatización de Pruebas - saucedemo.com
**JavaScript + Cypress**

---

## 📋 Descripción del Proyecto
Este proyecto de automatización de pruebas está diseñado para validar la funcionalidad del sitio web https://www.saucedemo.com/ .
Utiliza Cypress, un framework moderno de pruebas de extremo a extremo (E2E) que permite ejecutar pruebas rápidas, confiables y fáciles de mantener directamente en el navegador.

### 🛠 Tecnologías Utilizadas
- **JavaScript (ES6+)** - Lenguaje principal
- **Cypress** - Framework de automatización E2E
- **Mochawesome Reports** - Generación de reportes HTML

---

## 🚀 ¿ Cómo ejecutar las pruebas ?


### Prerrequisitos
- Node.js
- npm o yarn instalado
- Acceso a internet para descargar dependencias y ejecutar pruebas

### ⚙️ Configuración

#### 🐧 Linux / macOS y 🖥️ Windows

#### Instalar dependencias 
```bash
# npm
npm install

# yarn
yarn install
```


### 🧪 Comandos de ejecución de Pruebas

#### Ejecución Básica con interfaz de usuario
```bash
# npm
npx cypress open --browser electron

# yarn
yarn cypress open --browser electron
```
### Ejecución basica en modo Headless
```bash
# npm
npx cypress run --browser electron

# yarn
yarn cypress run --browser electron
```

#### 📊 Ejecución con Reporte HTML
```bash
# npm
npx cypress run --reporter mochawesome --browser electron
npx mochawesome-merge cypress/reports/*.json --output cypress/reports/output.json
npx marge cypress/reports/output.json -f report -o cypress/reports/html --inline

# yarn
yarn cypress run --reporter mochawesome --browser electron
yarn mochawesome-merge cypress/reports/*.json --output cypress/reports/output.json
yarn marge cypress/reports/output.json -f report -o cypress/reports/html --inline



El reporte se guarda en la ruta "cypress\reports\html\report.html"
```

### Navegadores compatibles

Los navegadores soportados son:

- `chrome`
- `firefox`
- `electron` (por defecto)
- `edge`
- `chromium`

>Nota: Por defecto, cypress utiliza **Electron**.  
>Los demás navegadores se detectan si están instalados en el sistema, por lo que **deben instalarse previamente** para poder usarlos, o poner la ruta completa del ejecutable del navegador, ejemplo:
```bash
npx cypress run --browser /home/ubuntu/chrome/linux-130.0.6723.0/chrome-linux64/chrome
```