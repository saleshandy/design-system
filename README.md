# Saleshandy Design System

<br />

A Design System is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.

<br />

## 🚀 Setting up the project

<br />

1️⃣ &nbsp; Install required dependencies →

```
npm install
```

2️⃣ &nbsp; Run the compiler in watch mode, it watches for changes and auto compiles the code →

```
npm start
```

3️⃣ &nbsp; Run the Storybook preview, it opens up the preview in browser at http://localhost:6006 →

```
npm run storybook
```

4️⃣ &nbsp; Create project build, it compiles and generates static code in `dist` folder with minified js and css for production →

```
npm run build
```

5️⃣ &nbsp; Create storybook build, it compiles and generates static storybook preview for deployment in `storybook-static` folder →

```
npm run build-storybook
```

<br />

## ⭐ Steps to add component in design system

<br />

1️⃣ &nbsp; Create folder with component name <span style="color:grey;font-size:12px;"><i>(sample folder structure shown below)</i></span>

2️⃣ &nbsp; Define the component `jsx`, filename will be `component-name.tsx`

3️⃣ &nbsp; Add styling to the component by creating a file with name, `_component-name.scss` in the `assets/scss` directory and import it in `design-system.scss` file with a help comment <span style="color:grey;font-size:12px;"><i>(as shown below)</i></span>

```scss
// Component-Name Styles
@import './scss/component-name';
```

4️⃣ &nbsp; Create an `index.tsx` entry file for component export

5️⃣ &nbsp; Write the documentaion by creating a story file in the `stories` folder, filename will be `component-name.stories.tsx`

<br />

#### 📁 Sample Component Folder Structure →

```

├── src
│   ├── button                  → folder with component name
|   │   ├── button.spec.tsx     → component unit test file
|   │   ├── button.tsx          → component jsx file
|   |   └── index.ts            → component export index
|   │
|   ├── assets
|   |   ├── scss
|   |   |   └── components
|   |   |       └── _button.scss    → component styling file (optional)
|   |   └── design.system.scss  → import component scss in this file
|   |
│   └── index.ts                → import component jsx in this file
│
└── stories
    └── button.stories.tsx      → component documentation in storybook

```

<br />

## 🔗 Conventional Commits Referrence Docs

<br />

[Read more about conventional commit here](https://karma-runner.github.io/6.3/dev/git-commit-msg.html)

<br />

---

<p style="color:grey;font-size:12px;text-align:right">📄 End Of README.md</p>
