<a name="readme-top"></a>

# Amazing 3D Portfolio in React using Three.js

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Tech Stack](#gear-tech-stack)

</details>

## :bangbang: Folder Structure

Here is the folder structure of 3D Portfolio.

```bash
Debapriya_portfolio/
  |- public/
    |-- favicon.ico
  |- src/
    |-- assets/
        |--- onboarding/
        |--- 3d/
        |--- icons/
        |--- images/
        |--- sakura.mp3
    |-- components/
        |--- index.js
    |-- constants/
        |--- index.js
    |-- hooks/
        |--- useAlert.js
    |-- models/
        |--- index.js
    |-- pages/
        |--- index.js
    |-- App.jsx
    |-- index.css
    |-- main.jsx
  |- .env.local
  |- .env.example
  |- vite.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- .eslintrc.cjs
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root folder.
4. Contents of `.env.local`:

```bash
# .env.local file
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_TO_EMAIL=<your-email-here>
```

5. Open terminal in root directory. Run `npm install` or `yarn install`.

6. Create new account in [EmailJS](emailjs.com "EmailJS")

7. From dashboard Choose Email Services > Add New Service and connect your mail to emailjs.

**NOTE:** Make Sure you type same email in `VITE_APP_EMAILJS_TO_EMAIL` in `.env.local`

8. Once, New service is configured, copy your **service id** to `VITE_APP_EMAILJS_SERVICE_ID`

9. Now, go to Email Templates > Create New Template to create your mail template. Once it is done, you can copy **Template ID** to `VITE_APP_EMAILJS_TEMPLATE_ID`

10. To get your **Public Key**, click on your username on navbar and go to account settings > Copy Public Key to `VITE_APP_EMAILJS_PUBLIC_KEY`

11. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn run dev`. The app is created using vite.


## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![JavaScript](https://skillicons.dev/icons?i=js "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ "JavaScript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Three JS](https://skillicons.dev/icons?i=threejs "Three JS")](https://threejs.org/ "Three JS")


## 🔗 Site Link
https://debapriya-portfolio.vercel.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
