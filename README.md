# 🧑‍🎓 Student Portal Client

[![Watch the demo](https://img.youtube.com/vi/YTzDisvYtJ0/maxresdefault.jpg)](https://www.youtube.com/watch?v=YTzDisvYtJ0)

A sleek, responsive student dashboard built with React 19.1, TypeScript 5.8, Vite 7, and MUI 7.2. Developed as a solution to the Anyware Software Full Stack Challenge, this client offers a modular, scalable architecture with internationalization, protected routing, and robust component design.

---

## 🛠️ Technology Stack

**Frontend:**

- **React 19.1** with **TypeScript 5.8**
- **Vite 7** for fast build tooling and HMR
- **React Router 7** for client-side routing
- **Redux Toolkit** for state management
- **React Query 5.83** (`@tanstack/react-query`) for data fetching and caching
- **Axios 1.10** for HTTP requests
- **i18next** for internationalization
- **Socket.IO** for real-time features
- **MUI 7.2** for UI components

**Styling:**

- **@emotion/react** and **@emotion/styled** (used by MUI for dynamic styling)
- **SASS 1.89** for modular, maintainable styling

**Build & Tooling:**

- **Babel** for modern JavaScript/JSX transpilation
- **dotenv** for environment variable management

**Code Quality:**

- **ESLint 9.30.1** (with TypeScript, React Hooks, and Vite plugins)
- **Jest 30** and **React Testing Library** for testing
- **TypeScript 5.8** in strict mode

---

## 📦 Local Development Setup

### Prerequisites

- **Node.js** v18 LTS or newer
- **npm** v9 or newer

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Mohamed-Abdellatif/client.git
   cd client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Development

To start the development server:

```sh
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Build

To create a production build:

```sh
npm run build
```

---

## 📁 Project Structure

```
client/
├── public/
│   └── locales/           # i18n translation files
├── src/
│   ├── assets/            # Static assets (images, SVGs)
│   ├── components/        # Reusable React components
│   ├── config/            # API base URLs and config
│   ├── features/          # Feature modules (announcements, auth, etc.)
│   ├── hoc/               # Higher-order components
│   ├── i18n.ts            # i18next setup
│   ├── layout/            # Layout components
│   ├── locales/           # Local translation files
│   ├── Pages/             # Page components (Dashboard, Home, etc.)
│   ├── queries/           # React Query hooks
│   ├── routes/            # App route definitions
│   ├── services/          # API and Axios instances
│   ├── socket/            # Socket.IO provider
│   ├── store/             # Redux store
│   ├── tests/             # Integration tests
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions/constants
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type declarations
├── .mocks/                # Jest/Testing mocks
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ... (other config files)
```

---

## 📝 Code Style & Formatting

**ESLint** and **TypeScript** are used for code quality.  
**Prettier** is recommended for formatting (add `.prettierrc` if not present).

### ESLint

- TypeScript, React, React Hooks, and Vite plugin rules
- See `eslint.config.js` for details

### TypeScript

- Strict mode enabled
- See `tsconfig.json` for options

### Prettier

- (Add a `.prettierrc` file for custom rules if needed)
- Common settings:
  - `semi: false`
  - `singleQuote: true`
  - `tabWidth: 2`
  - `printWidth: 100`
  - `trailingComma: es5`
  - `arrowParens: avoid`

### VS Code Setup

- Install the **Prettier** extension
- Set format on save and Prettier as default formatter
- Enable ESLint auto-fix on save

---

## 🔧 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run test`    | Run tests (Jest)         |

---

## 🌐 Internationalization (i18n)

- Uses **i18next** with HTTP backend and language detector
- Translation files in `public/locales/{lang}/translation.json`
- See `src/i18n.ts` for setup

---

## 🧪 Testing

- **Jest** for unit/integration tests
- **React Testing Library** for component tests
- Test setup in `src/setupTests.ts`

---

## 🔄 Git Workflow

Before committing:

1. **Format code** (if Prettier is set up)
2. **Check linting:** `npm run lint`
3. **Verify build:** `npm run build`
4. **Run tests:** `npm run test`
